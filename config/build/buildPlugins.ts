import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { IBuildOptions } from "./typesConfig/config";

function filterPlugins<T>(plugins: (T | false)[]): T[] {
  return plugins.filter(Boolean) as T[];
}

export const buildPlugins = ({
  paths,
  isDev,
}: IBuildOptions): webpack.WebpackPluginInstance[] => {
  return filterPlugins(
    [
      new HtmlWebpackPlugin({
        template: paths.html,
        favicon: paths.favicon,
      }),
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
      new CopyPlugin({
        patterns: [
          {
            from: paths.public,
            to: paths.output,
            globOptions: {
              ignore: [
                "**/index.html",
                "**/*.woff",
                "**/*.woff2",
                "**/*.eot",
                "**/*.ttf",
                "**/*.otf",
              ],
            },
          },
        ],
      }),
      new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev),
      }),

      isDev && new webpack.HotModuleReplacementPlugin(),
      isDev && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean)
  );
};
