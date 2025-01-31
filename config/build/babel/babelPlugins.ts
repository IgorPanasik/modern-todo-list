import { PluginItem } from "@babel/core";
import reactRefreshBabel from "react-refresh/babel";

export const getBabelPlugins = (isDev: boolean): PluginItem[] =>
  [isDev ? reactRefreshBabel : null].filter(Boolean) as PluginItem[];
