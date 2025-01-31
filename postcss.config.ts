import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import type { AcceptedPlugin } from "postcss";
import postcss from "postcss";
import postcssMergeRules from "postcss-merge-rules";
import postcssPresetEnv from "postcss-preset-env";

const config = postcss([
  autoprefixer() as AcceptedPlugin,
  cssnano() as AcceptedPlugin,
  postcssMergeRules() as AcceptedPlugin,
  postcssPresetEnv({
    stage: 3,
    features: {
      "nesting-rules": true,
    },
    browsers: "last 2 versions",
  }) as AcceptedPlugin,
]);

export default config;
