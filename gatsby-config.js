/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/gatsby-test",
  siteMetadata: {
    title: "James Au | Web Developer",
    description:
      "Portfolio for web developer James Au, who studies Psychology and Computer Science. Passionate about coding.",
    author: "James Au",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `James Au's Portfolio`,
        short_name: `James Au's Portfolio`,
        start_url: `/`,
        background_color: `#6c00d8`,
        theme_color: `#6c00d8`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        // icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline"
  ],
}
