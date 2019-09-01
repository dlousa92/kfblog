
module.exports = {
  siteMetadata: {
    title: 'Keyforge Blog',
    description: 'This is a blog that talks about the Unique Card Game, Keyforge'
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `{__dirname}/src/pages`
      }
    }
  ]
}
