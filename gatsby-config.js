module.exports = {
  siteMetadata: {
    title: "HelloStreet",
    siteUrl: `https://hellostreet.azurewebsites.net`,
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     url: "",
    //   },
    // },
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
