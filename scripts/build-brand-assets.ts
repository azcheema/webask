/*
 * Brand-asset rasterizer. Reads the canonical SVG favicon at
 * `public/brand/favicon.svg` and produces:
 *
 *   app/icon.svg                  copy of the source (Next auto-emits link)
 *   app/favicon.ico               16 + 32 + 48 multi-size ICO
 *   app/apple-icon.png            180×180 PNG
 *   public/icon-192.png           PWA manifest icon
 *   public/icon-512.png           PWA manifest icon
 *   public/brand/logo-512.png     Square brand mark for Organization.logo schema
 *
 * Run via `pnpm build:brand-assets`. The generated artifacts are
 * committed to git — deployments never run sharp.
 */

import { promises as fs } from "node:fs";
import path from "node:path";

import pngToIco from "png-to-ico";
import sharp from "sharp";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "public", "brand", "favicon.svg");
const APP_DIR = path.join(ROOT, "app");
const PUBLIC = path.join(ROOT, "public");
const BRAND = path.join(PUBLIC, "brand");

// Render the SVG at high density so downscales stay crisp. The viewBox
// is 64×64; density 384 = ~96px × 5.33x oversample.
const RENDER_DENSITY = 384;

async function rasterize(svg: Buffer, size: number, outPath: string): Promise<void> {
  await sharp(svg, { density: RENDER_DENSITY })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  process.stdout.write(`  ✓ ${path.relative(ROOT, outPath)} (${size}×${size})\n`);
}

async function buildFaviconIco(svg: Buffer, outPath: string): Promise<void> {
  const sizes = [16, 32, 48];
  const tmpFiles: string[] = [];
  for (const size of sizes) {
    const tmp = path.join(ROOT, ".next-build-tmp", `favicon-${size}.png`);
    await fs.mkdir(path.dirname(tmp), { recursive: true });
    await sharp(svg, { density: RENDER_DENSITY })
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toFile(tmp);
    tmpFiles.push(tmp);
  }
  const ico = await pngToIco(tmpFiles);
  await fs.writeFile(outPath, ico);
  process.stdout.write(`  ✓ ${path.relative(ROOT, outPath)} (16/32/48 multi)\n`);
  await Promise.all(tmpFiles.map((f) => fs.unlink(f).catch(() => {})));
  await fs.rmdir(path.dirname(tmpFiles[0]!)).catch(() => {});
}

async function main(): Promise<void> {
  process.stdout.write(`Reading ${path.relative(ROOT, SRC)}\n`);
  const svg = await fs.readFile(SRC);

  // 1. Copy the SVG to app/icon.svg so Next auto-emits the SVG icon link.
  await fs.copyFile(SRC, path.join(APP_DIR, "icon.svg"));
  process.stdout.write(`  ✓ app/icon.svg (copy of source)\n`);

  // 2. PNG raster targets.
  await rasterize(svg, 180, path.join(APP_DIR, "apple-icon.png"));
  await rasterize(svg, 192, path.join(PUBLIC, "icon-192.png"));
  await rasterize(svg, 512, path.join(PUBLIC, "icon-512.png"));
  await rasterize(svg, 512, path.join(BRAND, "logo-512.png"));

  // 3. favicon.ico (multi-size).
  await buildFaviconIco(svg, path.join(APP_DIR, "favicon.ico"));

  process.stdout.write(`\nDone.\n`);
}

main().catch((err) => {
  process.stderr.write(
    `build-brand-assets failed: ${err instanceof Error ? (err.stack ?? err.message) : String(err)}\n`,
  );
  process.exit(1);
});
