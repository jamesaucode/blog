import React, { useState } from "react";
import Global from "../components/Global";
import styled from "@emotion/styled";
import getContentfulBlog from "../hooks/get-contentfulBlog";
import BlogItem from '../components/BlogItem';
import { countTags } from '../../util/helper';

const Wrapper = styled.div`
  display: grid;
  max-width: 1200px;
  grid-template-areas: "sidebar post";
  grid-template-columns: 200px auto;
  grid-gap: 4rem;
  margin: 0 auto;
  font-size: calc(0.35vw + 15px);
  @media (max-width: 600px) {
    grid-template-areas: 
    "post" 
    "sidebar";
    grid-template-columns: auto;
    grid-gap: 0;
  }
`;
const BlogItemsWrapper = styled.div`
grid-area: post;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const SideBar = styled.div`
grid-area: sidebar;
  height: 100%;
`;
const SideBarList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
  padding: 1rem;
  margin: 0 auto;
  @media (max-width: 600px) {
  }
`;
const Tag = styled.li`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  padding: 0.25rem 0;
  margin: 0.75rem 0;
  &:hover {
    cursor: pointer;
  }
  transition: 0.5s ease-out border-bottom;
  border-bottom: 3px solid ${props => props.active ? "#b0ff92" : "transparent"};
`;
// const DEFAULT_TAG = "100daysofcode";

const Blog = () => {
  const blogEntries = getContentfulBlog();
  const [currentTag, setCurrentTag] = useState("");
  const tags = countTags(blogEntries);
  const handleClickTag = tag => { setCurrentTag(tag); };
  return (
    <Global>
      <Wrapper>
        <SideBar>
          <SideBarList>
            {Object.entries(tags).map(entry => {
              const tagName = entry[0];
              const tagOccurences = entry[1];
              return (
                <Tag
                  title={`#${tagName}`}
                  onClick={() => handleClickTag(tagName)}
                  active={currentTag === tagName}
                >
                  {`#${tagName} (${tagOccurences})`}
                </Tag>
              );
            })}
          </SideBarList>
        </SideBar>
        <BlogItemsWrapper>
          {blogEntries.map(
            ({ node }) => {
              if (!currentTag) {
                return (
                  <BlogItem {...node} />
                )
              } else if (node.tag === currentTag) {
                return (
                <BlogItem {...node} />
                );
              }
              return null;
            }
          )}
        </BlogItemsWrapper>
      </Wrapper>
    </Global>
  );
};

export default Blog;
