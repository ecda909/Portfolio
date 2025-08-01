module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "www.edermazariegos.com",
        acl: null,
        protocol: "https",
        hostname: "www.edermazariegos.com",
    },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/assets/`,
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eders Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#4c44cb`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
