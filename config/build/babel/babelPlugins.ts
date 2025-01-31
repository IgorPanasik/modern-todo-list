import { PluginItem } from "@babel/core";
import reactRefreshBabel from "react-refresh/babel";

export const getBabelPlugins = (isDev: boolean): PluginItem[] =>
  [
    isDev ? reactRefreshBabel : null,
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: false,
        regenerator: true,
        helpers: true,
        useESModules: true,
      },
    ],
    ...(isDev
      ? []
      : [
          "@babel/plugin-transform-react-constant-elements",
          "@babel/plugin-transform-react-inline-elements",
        ]),
  ].filter(Boolean) as PluginItem[];
