import webpack from "webpack";
import { IBuildOptions } from "./typesConfig/config";

export const buildResolvers = (
  options: IBuildOptions
): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {
      "@": options.paths.src,
    },
  };
};
