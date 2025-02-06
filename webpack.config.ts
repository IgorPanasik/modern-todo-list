import path from "path";
import "ts-node/register";
import webpack from "webpack";
import buildWebpack from "./config/build/buildWebpack";
import { BuildMode, IBuildPaths } from "./config/build/typesConfig/config";

interface IEnvVariables {
  mode: BuildMode;
  port: number;
  analyzer?: boolean;
}

export default (env: IEnvVariables) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    public: path.resolve(__dirname, "public"),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
    analyzer: env.analyzer,
  });

  return config;
};
