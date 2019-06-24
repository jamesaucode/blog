import React, { Component } from "react";
import Global from "../components/Global";
import styled from '@emotion/styled';
import Github from '../../static/assets/github.svg';
import Linkedin from '../../static/assets/linkedin.svg';

const Wrapper = styled.div`
  display: grid;
    max-width: 1100px;
    margin: 0 auto;
    font-size: calc(0.3vw + 16px);
    grid-template-areas: 
    "text social";
    grid-template-columns: auto 250px;
    @media (max-width: 600px) {
      grid-template-areas:
      "text" 
      "social";
      grid-template-columns:auto;
    }
`
const Heading = styled.h1`
  color: rgba(255, 255, 255, 0.9);
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 2rem;
`
const Paragraph = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1em;
  margin: 0.5rem 0;
  line-height: 1.6;
`;
const CTA = styled.p`
  color: white;
  font-size: 1em;
  font-weight: 700;
  margin: 1rem 0;
`;
const TextBox = styled.div`
height: 100%;
padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const SocialBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`
const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  height: 28px;
  padding: 1px 10px 1px 9px;
  border-radius: 4px;
  background: ${props => props.background};
  color: ${props => props.color};
  margin-top: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
const SocialText = styled.span`
  padding: 0 0.5rem;
`
const StyledLink = styled.a`
  font-weight: 700;
  border-bottom: 3px solid #b0ff92;
`;
export default class Contact extends Component {
  render() {
    return (
      <Global>
        <Wrapper>
          <TextBox>
            <Heading>I love web development.</Heading>
            <Paragraph>
              I started coding at April 2018 and has been coding almost everyday
              since then. I started as a Psychology major and I am now working
              towards a double major in it and Computer Science. I am
              particularly interested in web development, both frontend and
              backend.
            </Paragraph>
            <Paragraph>
              I am a supporter of
              <StyledLink
                title="Learn more about 100DaysOfCode"
                href="https://www.100daysofcode.com/"
                target="_blank"
                rel="noopener"
              >
                &nbsp;#100DaysOfCode&nbsp;
              </StyledLink>
              on Twitter. Check it out if you some extra motivation in learning
              how to code!
            </Paragraph>
            <Paragraph>You can find me on any of the social link on the side.</Paragraph>
          </TextBox>
          <SocialBox>
            <CTA>Find me here!</CTA>
            <a
              href="https://twitter.com/JamesAuCode?ref_src=twsrc%5Etfw"
              className="twitter-follow-button"
              data-size="large"
              data-lang="en"
              data-show-count="false"
            >
              Follow @JamesAuCode
            </a>
            <SocialButton
              href="https://github.com/jamesaucode"
              target="_blank"
              rel="noopener"
              color="rgb(33, 37, 41)"
              background="#f0f4f6"
            >
              <Github fill={"333333"} height={"20px"} />
              <SocialText>Visit my Github</SocialText>
            </SocialButton>
            <SocialButton
              href="https://www.linkedin.com/in/jamesaucb/"
              target="_blank"
              rel="noopener"
              color="#FFFFFF"
              background="#0077B5"
            >
              <Linkedin fill={"white"} height={"20px"} />
              <SocialText>Visit my Linkedin</SocialText>
            </SocialButton>
          </SocialBox>
        </Wrapper>
      </Global>
    );
  }
}
