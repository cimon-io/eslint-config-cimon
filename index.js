const path = require('path');

module.exports = {
  "extends": ["airbnb"],
  "plugins": [],
  "env": {
    "jest": true,
  },
  "globals": {
  },
  "rules": {
    "strict": 0,
    "max-len": [1, { 'code': 120 }],
    "newline-per-chained-call": [0],
    "no-nested-ternary": [0],
    "import/no-extraneous-dependencies": [2, { "devDependencies": true, "optionalDependencies": true, "peerDependencies": true }],
    "no-confusing-arrow": [0],
    "arrow-parens": [1, 'as-needed', { "requireForBlockBody": true }],
    "no-mixed-operators": [0],
    "comma-dangle": [0],
    "no-underscore-dangle": [0],
    "no-return-assign": [0],
    "function-paren-newline": [0],
    "object-curly-newline": [0],
    "import/extensions": [0],
  },
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    },
  },
};
