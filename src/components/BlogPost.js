import React from "react";
import { graphql } from "gatsby";
import Global from "./Global";
import styled from "@emotion/styled";

export const query = graphql`
    query($slug : String!) {
        allContentfulBlog(filter: { fields: {slug: {eq: $slug }}}) {
            edges {
                node {
                    title
                    content {
                        childMarkdownRemark {
                            internal {
                                content
                            }
                        }
                    }
                }
            }
        }
    }
`;
const Wrapper = styled.div`
  font-size: calc(0.3vw + 16px);
  max-width: 700px;
  margin: 0 auto;
`;
const Heading = styled.h1`
  color: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  font-size: 1.75em;
  font-weight: 700;
  text-align: center;
`;
const Paragraph = styled.pre`
  color: rgba(255, 255, 255, 0.75);
  white-space: pre-wrap;
  font-size: 1.1em;
  line-height: 1.6;
  padding: 2rem;
`;

const BlogPost = ({
  data: {
    allContentfulBlog: { edges },
  },
}) => {
  const blogEntry = edges[0];
  console.log(blogEntry);
  return (
    <Global>
      <Wrapper>
        <Heading>{blogEntry.node.title}</Heading>
        <Paragraph>{blogEntry.node.content.childMarkdownRemark.internal.content}</Paragraph>
      </Wrapper>
    </Global>
  );
};

export default BlogPost;
