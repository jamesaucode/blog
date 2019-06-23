import React from "react"
import { graphql } from "gatsby"
import Global from "./Global"

export const query = graphql`
    query($slug : String!) {
        allContentfulBlog(filter: { fields: {slug: {eq: $slug }}}) {
            edges {
                node {
                    fields {
                        slug
                    }
                    title
                    content {
                        content
                    }
                }
            }
        }
    }
`

const Test = ({ data: { allContentfulBlog : { edges }  } }) => {
    const blogEntry = edges[0];
  return (
    <Global>
        <h1>{blogEntry.node.title}</h1>
        <p>{blogEntry.node.content.content}</p>
    </Global>
  )
}

export default Test;
