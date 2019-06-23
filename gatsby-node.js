const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "ContentfulBlog") {
    const slug = node.path
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allContentfulBlog.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.fields.slug}`,
        component: path.resolve("./src/components/BlogPost.js"),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
