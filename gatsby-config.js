module.exports = {
  siteMetadata: {
    title: `Hammered Fig Designs`,
    description: `A traditional carpentry shop creating hand-crafted and custom pieces.`,
    author: `@akattow`,
    siteUrl: `https://www.hammeredfig.com`,
    instagram: `hammeredfig`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 100,
      },
    },
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
        icon: `src/images/hammered-fig-icon-square.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
