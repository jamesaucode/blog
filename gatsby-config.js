/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: "James Au | Web Developer",
    description:
      "Portfolio for web developer James Au, who studies Psychology and Computer Science. Passionate about coding.",
    author: "James Au",
  },
  plugins: [
    "gatsby-plugin-twitter",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `uupo32e1prlh`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.API_KEY,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
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
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#6c00d8`,
        theme_color: `#6c00d8`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        // icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
  ],
};
