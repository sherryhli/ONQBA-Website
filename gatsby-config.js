module.exports = {
  siteMetadata: {
    title: `ONQBA`,
    description: `The Ontario Quiz Bowl Association (ONQBA) promotes and organizes high school quiz bowl tournaments in Ontario. You can find information about ONQBA events on this site.`,
    author: `@OntarioQuizbowl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#3e8dc1`,
        theme_color: `#3e8dc1`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650
            },
          },
        ],
      },
    },
  ],
}
