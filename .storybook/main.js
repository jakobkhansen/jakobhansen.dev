module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.svg?$/,
      oneOf: [
        {
          issuer: /\.[jt]sx?$/,
          resourceQuery: /react/, // *.svg?react
          use: ["@svgr/webpack"],
        },
        {
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: 200,
            },
          },
        },
      ],
    });

    return config;
  },
};
