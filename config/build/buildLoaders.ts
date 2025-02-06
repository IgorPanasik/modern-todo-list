import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { IBuildOptions } from "./typesConfig/config";

export function buildLoaders(options: IBuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const scssLoader = {
    test: /\.((c|sa|sc)ss)$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,

      {
        loader: "css-loader",
        options: {
          importLoaders: 2,
          modules: {
            auto: (resourcePath: string) =>
              resourcePath.endsWith(".module.scss"),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      "postcss-loader",
      "sass-loader",
    ],
  };

  const swcLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /(node_modules)/,
    use: {
      loader: "swc-loader",
      options: {
        jsc: {
          transform: {
            react: {
              development: isDev,
              refresh: isDev,
            },
          },
        },
      },
    },
  };

  const assetLoader = {
    test: /\.(png|jpe?g|gif|svg)$/i,
    type: "asset/resource",
    generator: {
      filename: "images/[name].[hash:8][ext]",
    },
  };

  const fontLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
    generator: {
      filename: "fonts/[name].[hash:8][ext]",
    },
  };

  return [scssLoader, swcLoader, assetLoader, fontLoader];
}
