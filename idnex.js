'use strict';

module.exports = {
  extends: 'eslint-config-egg',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    quotes: [ 'warn', 'single' ],
  },
};
