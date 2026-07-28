/** @type {import("lint-staged").Configuration} */
const config = {
  "*.{ts,tsx,js,jsx,mjs,cjs}": ["eslint --fix", "prettier --write"],
  "*.{json,md,mdx,css,html,yml,yaml}": ["prettier --write"],
};

export default config;
