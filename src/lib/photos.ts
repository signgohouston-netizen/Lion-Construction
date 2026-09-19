import fs from "node:fs";
import path from "node:path";

/**
 * Server-only helper. Returns the public URL for a photo only if the file exists in /public,
 * so pages fall back to their gradient design until real photos are dropped in.
 */
export function photo(publicPath: string | undefined): string | undefined {
  if (!publicPath) return undefined;
  const abs = path.join(process.cwd(), "public", publicPath.replace(/^\//, ""));
  return fs.existsSync(abs) ? publicPath : undefined;
}
