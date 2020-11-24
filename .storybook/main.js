const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  webpackFinal: async config => {
    config.module.rules[0].use[0].options.plugins = [
      require.resolve('babel-plugin-remove-graphql-queries'),
    ];

    config.resolve.modules.push(
      path.resolve(__dirname, '..', 'src'),
      'node_modules'
    );

    config.resolve.plugins.push(new DirectoryNamedWebpackPlugin(true));

    return config;
  },
};
