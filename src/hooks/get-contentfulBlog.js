import { graphql, useStaticQuery } from "gatsby"

const getContentfulBlog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { fields: createdAt, order: DESC}) {
        edges {
          node {
            id
            tag
            content {
              content
            }
            title
            path
            date
          }
        }
      }
    }
  `)
  return data.allContentfulBlog.edges;
}

export default getContentfulBlog;