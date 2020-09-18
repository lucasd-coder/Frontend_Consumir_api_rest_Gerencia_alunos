module.exports = {
  "env": {
    "browser": true,
    "es2020": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "prettier/flowtype",
    "prettier/standard",
    "prettier/react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier",
    "react-hooks",


  ],
  "rules": {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": 0,
    "jsx-a11y/label-has-associated-control": 0,




  }
};
