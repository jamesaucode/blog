import React, { Component } from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import getImage from '../hooks/get-image';
// import me from '../../static/assets/me.jpg';
import Img from "gatsby-image";

const IntroWrapper = styled.div`
  padding: 2rem;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  font-size: calc(0.3vw + 16px);
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
`;

const Title = styled.h2`
  color: rgb(247, 255, 255);
  margin: 1rem 0;
  font-size: 1.8em;
  font-weight: 900;
  white-space: nowrap;
`;

const Paragraph = styled.p`
  font-size: 0.95em;
  line-height: 1.75;
  color: rgba(247, 255, 255, 0.8);
`;

const Important = styled.span`
  color: white;
  font-weight: 700;
  border-bottom: 3px solid #b0ff92;
`;
const Divider = styled.div`
  border-bottom: 1px solid rgb(151, 73, 229);
  max-width: 300px;
  margin: 0 auto;
`;
const Image = styled.img`
  width: 13em;
  height: 13em;
  margin: 0 auto;
  border-radius: 50%;
  transition: 0.5s ease-out all;
  &:hover {
    filter: drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.6));
  }
`;
const ImageWrapper = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    border-radius: 50%;  
  }
`

const Intro = () => {
  const image = getImage();
  return (
    <section>
      <IntroWrapper>
        <TextWrapper>
          <ImageWrapper>
            <Img fixed={image.file.childImageSharp.fixed} />
          </ImageWrapper>
          <Title>Web Developer</Title>
          <Paragraph>
            Hi, I am <Important>James Au</Important>. I am a student studying
            <Important> Computer Science</Important> and
            <Important> Psychology</Important> at
            <Important> UC Davis</Important>. I am currently working at
            <Important> Marvel Entertainment</Important> as a{" "}
            <Important> software engineering intern</Important>. I am passionate
            about <Important> web development</Important> in particular.
          </Paragraph>
        </TextWrapper>
      </IntroWrapper>
      <Divider />
    </section>
  );
};


export default Intro;
