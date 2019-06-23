import React, { useState } from "react";
import Global from "../components/Global";
import styled from "@emotion/styled";
import getContentfulBlog from "../hooks/get-contentfulBlog";
import { Link } from "gatsby";
import { countTags } from '../../util/helper';

const Wrapper = styled.div`
  display: grid;
  max-width: 700px;
  grid-template-areas: "sidebar post";
  grid-template-columns: 150px auto;
  grid-gap: 4rem;
  margin: 0 auto;
`;
const BlogItemsWrapper = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const TextBox = styled.div`
  grid-area: post;
  width: 100%;
  max-height: 250px;
  background: transparent;
  padding: 0 1rem;
  &:hover {
    cursor: pointer;
  }
`;
const Heading = styled.h2`
  font-size: 1.75em;
  font-weight: 600;
  padding-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
`;
const Preview = styled.p`
  font-size: 1em;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  max-height: 75px;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const Divider = styled.div`
  border-bottom: 1px solid rgb(151, 73, 229);
  width: 80%;
  margin: 2rem auto;
`;
const SideBar = styled.div`
  height: 100%;
`;
const Date = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.8em;
`;
const SideBarList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Tag = styled.li`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  margin: 1rem 0;
  &:hover {
    cursor: pointer;
  }
`;
const DEFAULT_TAG = "100daysofcode";
const Blog = () => {
  const blogEntries = getContentfulBlog();
  const [currentTag, setCurrentTag] = useState(DEFAULT_TAG);
  const tags = countTags(blogEntries);
  const handleClickTag = tag => {
    setCurrentTag(tag);
  };
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
                >
                  {`#${tagName} (${tagOccurences})`}
                </Tag>
              );
            })}
          </SideBarList>
        </SideBar>
        <BlogItemsWrapper>
          {blogEntries.map(
            ({
              node: {
                id,
                title,
                path,
                date,
                tag,
                content: { content: blogContent },
              },
            }) => {
              if (tag === currentTag) {
                return (
                  <React.Fragment key={id}>
                    <Link to={`/blog/${path}`}>
                      <TextBox>
                        <Date>{date}</Date>
                        <Heading>{title}</Heading>
                        <Preview>{blogContent}</Preview>
                      </TextBox>
                    </Link>
                    <Divider />
                  </React.Fragment>
                );
              }
            }
          )}
        </BlogItemsWrapper>
      </Wrapper>
    </Global>
  );
};

export default Blog;
