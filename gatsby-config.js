/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Blog Home",
    author: "Dhaval Kaneriya",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "4s3eah8h8l2h",
        accessToken: "z_E4HckTE6Ss09UD5zAUHn1xBzNfVmTdjQCGxIpMsjw",
      },
    },
  ],
}
