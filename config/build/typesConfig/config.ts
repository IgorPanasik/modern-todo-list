export type BuildMode = "production" | "development";

export interface IBuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
  public: string;
  favicon: string;
}

export interface IBuildOptions {
  mode: BuildMode;
  paths: IBuildPaths;
  isDev: boolean;
  port: number;
}

export interface IBuildEnv {
  mode: BuildMode;
  port: number;
}
