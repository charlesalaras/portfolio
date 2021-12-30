module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "portfolio",
  },
  plugins: ["gatsby-plugin-postcss",
        {
            resolve: "gatsby-plugin-typescript",
            options: {
                isTSX: true,
                jsxPragma: "jsx",
                allExtensions: true
            },
        },
  ],
};
