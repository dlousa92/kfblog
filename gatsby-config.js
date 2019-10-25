module.exports = {
  siteMetadata: {
    title: 'Three Keys',
    description: 'A Keyforge Blog'
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
}
