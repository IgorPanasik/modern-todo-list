import path from "path";
import "ts-node/register";
import webpack from "webpack";

import { buildDevServer } from "./config/build/buildDevServer";
import { buildLoaders } from "./config/build/buildLoaders";
import { buildPlugins } from "./config/build/buildPlugins";
import { buildResolvers } from "./config/build/buildResolvers";
import {
  IBuildEnv,
  IBuildOptions,
  IBuildPaths,
} from "./config/build/typesConfig/config";

export default (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    public: path.resolve(__dirname, "public"),
    favicon: path.resolve(__dirname, "public", "favicon.ico"),
  };

  const mode = env.mode || "development";
  const PORT = env.port || 3000;

  const isDev = mode === "development";

  const options: IBuildOptions = {
    mode,
    paths,
    isDev,
    port: PORT,
  };

  const config: webpack.Configuration = {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: buildLoaders(options),
    resolve: buildResolvers(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };

  return config;
};
