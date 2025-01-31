import { TransformOptions } from "@babel/core";
import { getBabelPlugins } from "./config/build/babel/babelPlugins";
import { getBabelPresets } from "./config/build/babel/babelPresets";

export const createBabelConfig = (isDev: boolean): TransformOptions => ({
  presets: getBabelPresets(isDev),
  plugins: getBabelPlugins(isDev),
});
