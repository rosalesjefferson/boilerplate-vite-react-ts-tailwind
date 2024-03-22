module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        // "standard-with-typescript",
        'plugin:react-hooks/recommended',
        "plugin:react/recommended",
        'plugin:prettier/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['dist', '.eslintrc.cjs'], // ignore own file: .esliintrc.cjs
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "@typescript-eslint",
        "react-refresh",
        "react-hooks",
    ],
    "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/react-in-jsx-scope": "off",
    }
}
