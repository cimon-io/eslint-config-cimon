module.exports = {
  "extends": ["cimon", "plugin:jsx-control-statements/recommended"],
  "plugins": [
    "import",
    "react",
    "jsx-control-statements",
  ],
  "env": {
    "browser": true,
  },
  "rules": {
    "import/no-extraneous-dependencies": [2, { "devDependencies": true, "optionalDependencies": true, "peerDependencies": true }],
    "import/prefer-default-export": [0],
    "import/no-named-as-default": [0],
    "react/jsx-no-undef": [2, { "allowGlobals": true }],
    "react/jsx-props-no-spreading": [2, { "html": "enforce", "custom": "ignore", "exceptions": [] }],
    "react/prefer-stateless-function": [0],
    "react/destructuring-assignment": [0],
    "react/no-typos": [0],
    "react/jsx-curly-spacing": [2, { "when": "never", "children": true }],
    "jsx-a11y/anchor-has-content": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/mouse-events-have-key-events": [0],
    "jsx-a11y/no-noninteractive-element-interactions": [0],
    "jsx-a11y/click-events-have-key-events": [0],
    "jsx-a11y/href-no-hash": [0],
    "jsx-a11y/label-has-for": [1],
    "jsx-a11y/no-autofocus": [0],
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
  },
  "overrides": [
    {
      "files": ["*.test.js", "*.test.jsx"],
      "rules": {
        "jsx-control-statements/jsx-jcs-no-undef": [0]
      }
    },
  ]
};
