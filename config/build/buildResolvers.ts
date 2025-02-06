import { Configuration } from "webpack";
import { IBuildOptions } from "./typesConfig/config";

export function buildResolvers(
  options: IBuildOptions
): Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {
      "@": options.paths.src,
    },
  };
}
