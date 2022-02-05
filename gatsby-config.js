module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "portfolio",
  },
  plugins: [
        "gatsby-plugin-postcss",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-transformer-json",
        {
            resolve: "gatsby-plugin-typescript",
            options: {
                isTSX: true,
                jsxPragma: "jsx",
                allExtensions: true
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: `${__dirname}/src/data`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "icons",
                path: `${__dirname}/src/icons`,
            },
        },
  ],
};
