/* eslint-disable no-undef */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
    ],
    overrides: [
      {
        test: (fileName) => !fileName.includes('node_modules'),
        plugins: [
          ['@babel/plugin-transform-flow-strip-types'],
          ['@babel/plugin-proposal-decorators', {legacy: true}],
          ['@babel/plugin-proposal-class-properties', {loose: false}],
        ],
      },
    ],
    assumptions: {
      setPublicClassFields: false,
    },
  };
};
