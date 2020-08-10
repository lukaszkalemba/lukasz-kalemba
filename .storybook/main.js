const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    'storybook-addon-designs',
    '@storybook/addon-viewport/register',
    '@storybook/addon-docs',
  ],

  webpackFinal: async config => {
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    config.module.rules[0].use[0].loader = require.resolve('babel-loader');

    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
    ];

    config.module.rules[0].use[0].options.plugins = [
      require.resolve('@babel/plugin-proposal-class-properties'),
      require.resolve('babel-plugin-remove-graphql-queries'),
    ];

    config.resolve.modules = [
      path.resolve(__dirname, '..', 'src'),
      'node_modules',
    ];

    config.resolve.mainFields = ['browser', 'module', 'main'];

    config.resolve.plugins = [new DirectoryNamedWebpackPlugin()];

    return config;
  },
};
