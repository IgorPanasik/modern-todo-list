export type BuildMode = "production" | "development";

export interface IBuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
  public: string;
}

export interface IBuildOptions {
  port: number;
  paths: IBuildPaths;
  mode: BuildMode;
  isDev?: boolean;
  analyzer?: boolean;
}
