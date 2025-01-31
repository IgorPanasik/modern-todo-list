export const getBabelPresets = (isDev: boolean) => [
  ["@babel/preset-env", { targets: { node: "current" } }],
  ["@babel/preset-react", { runtime: "automatic", development: isDev }],
  ["@babel/preset-typescript", { isTSX: true, allExtensions: true }],
];
