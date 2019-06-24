import React from "react";
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { getSnippet } from '../../util/helper';

const TextBox = styled.div`
  width: 100%;
  max-height: 250px;
  background: transparent;
  padding: 0 1rem;
  &:hover {
    cursor: pointer;
  }
`;
const Heading = styled.h2`
  color: rgba(255, 255, 255, 0.9);
  font-size: 2.5em;
  font-weight: 600;
  padding-bottom: 1rem;
  line-height: 1;
`;
const Date = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.7em;
`;
const Preview = styled.p`
  font-size: .9em;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const Divider = styled.div`
  border-bottom: 1px solid rgb(151, 73, 229);
  width: 80%;
  margin: 2rem auto;
`;

const BlogItem = ({
  id,
  title,
  path,
  date,
  tag,
  content: { content: blogContent },
}) => {
  return (
    <React.Fragment key={id}>
      <Link to={`/blog/${path}`}>
        <TextBox>
          <Date>{date}</Date>
          <Heading>{title}</Heading>
          <Preview>{getSnippet(blogContent)}</Preview>
        </TextBox>
      </Link>
      <Divider />
    </React.Fragment>
  );
};

export default BlogItem;
