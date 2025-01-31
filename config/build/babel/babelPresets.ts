export const getBabelPresets = (isDev: boolean) => [
  [
    "@babel/preset-env",
    {
      modules: false,
      useBuiltIns: "usage",
      corejs: {
        version: 3,
        proposals: true,
      },
      debug: isDev,
    },
  ],
  [
    "@babel/preset-react",
    {
      runtime: "automatic",
      development: isDev,
    },
  ],
  [
    "@babel/preset-typescript",
    {
      isTSX: true,
      allExtensions: true,
      optimizeConstEnums: true,
    },
  ],
];
