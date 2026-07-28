import { gone } from "@/lib/gone";

/** 410 Gone — see lib/gone.ts. */
export const GET = gone;

/** Bots probe with HEAD too; without this it would fall through to the 404 page. */
export const HEAD = gone;

/** WordPress endpoints are POST-probed constantly by credential-stuffing bots. */
export const POST = gone;
