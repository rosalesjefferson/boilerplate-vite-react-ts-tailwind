module.exports = {
    printWidth: 80,
    tabWidth: 2,
    trailingComma: "es5",
    semi: true,
    singleQuote: true,
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrder: [
      "<THIRD_PARTY_MODULES>",
      '^lib/(.*)$',
      '^services(.*)$',
      '^types(.*)$',
      '^hooks/(.*)$',
      '^context/(.*)$',
      '^layouts/(.*)$',
      '^pages/(.*)$',
      '^features/(.*)$',
      '^sandbox(.*)$',
      '^ui/(.*)$',
      '^utils(.*)$',
      '^assets/(.*)$',
      '^[./]',
    ],
    plugins: [
      "@trivago/prettier-plugin-sort-imports",
      "prettier-plugin-tailwindcss"
    ]
  }
  