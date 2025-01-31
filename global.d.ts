// Module scss
declare module "*.module.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

// Module svg
declare module "*.svg" {
  const content: string;
  export default content;
}

// PPE
declare module "postcss-preset-env" {
  import type { PluginCreator } from "postcss";

  interface PluginOptions {
    stage?: number;
    features?: any;
    browsers?: string;
    insertBefore?: any;
    insertAfter?: any;
    autoprefixer?: any;
    preserve?: boolean;
    importFrom?: string;
    exportTo?: string;
  }

  const PostcssPresetEnv: PluginCreator<PluginOptions>;
  export default PostcssPresetEnv;
}
