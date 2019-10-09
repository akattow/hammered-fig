module.exports = {
  siteMetadata: {
    title: `Hammered Fig Designs`,
    description: `A traditional carpentry shop creating hand-crafted and custom pieces.`,
    author: `@akattow`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-instagram",
      options: {
        username: "hammeredfig",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hammered-fig`,
        short_name: `hfig`,
        start_url: `/`,
        background_color: `#222239`,
        theme_color: `#222239`,
        display: `minimal-ui`,
        icon: `src/images/hammered-fig-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
