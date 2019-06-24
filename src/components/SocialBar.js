import React from "react";
import styled from "@emotion/styled";
import Github from "../../static/assets/github.svg";
import Linkedin from "../../static/assets/linkedin.svg";
import Twitter from "../../static/assets/twitter.svg";

const Wrapper = styled.ul`
  display: flex;
  max-width: 1200px;
  margin: 2rem auto;
`;
// const githubColor = "#181717";
// const linkedinColor = "#0077B5";
// const twitterColor = "#1DA1F2";

const ListItem = styled.li`
  padding: 0.5rem;
  height: 48px;
  width: 48px;
  margin: 0 1rem;
  transition: 0.5s ease-out transform;
  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }
`;

const SocialBar = () => (
  <Wrapper>
    <ListItem>
      <a
        href="https://github.com/jamesaucode"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my Github, I upload almost all of my code there!"
      >
        <Github alt="Github Icon" fill={"rgba(247,255,255,0.9)"} />
      </a>
    </ListItem>
    <ListItem>
      <a
        href="https://www.linkedin.com/in/jamesaucb/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn for my previous work experience and education!"
      >
        <Linkedin alt="Linkedin Icon" fill={"rgba(247,255,255,0.9)"} />
      </a>
    </ListItem>
    <ListItem>
      <a
        href="https://twitter.com/JamesAuCode"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my Twitter!"
      >
        <Twitter alt="Twitter Icon" fill={"rgba(247,255,255,0.9)"} />
      </a>
    </ListItem>
  </Wrapper>
);

export default SocialBar;
