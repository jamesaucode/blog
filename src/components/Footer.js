import styled from "@emotion/styled";
import Gatsby from "../../static/assets/gatsby.svg";
import ReactIcon from "../../static/assets/reactIcon.svg";
import HTML from "../../static/assets/html5.svg";
import CSS from "../../static/assets/css3.svg";
import React from "react";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 120px;
  position: absolute;
  background: rgb(111, 1, 221);
  background: linear-gradient(
    180deg,
    rgba(111, 1, 221, 1) 0%,
    rgba(114, 1, 228, 1) 100%
  );
  right: 0;
  bottom: 0;
  left: 0;
`;

const Paragraph = styled.section`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  line-height: 1.5;
  color: rgba(247, 255, 255, 0.8);
`;
const Anchor = styled.a`
  padding: 1rem;
`;

const Footer = ({ iconSize }) => (
  <Wrapper>
    <Paragraph>@2019 James Au</Paragraph>
    <Paragraph>
      Built with
      <Anchor
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener"
        aria-label="Gatsby's website, an amazing Javascript / React framework!"
      >
        <Gatsby
          alt="Gatsby Icon"
          height={iconSize}
          fill={"rgba(247, 255, 255, 0.8)"}
        />
      </Anchor>
      <Anchor
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener"
        aria-label="Official ReactJS Page"
      >
        <ReactIcon
          alt="ReactJS Icon"
          height={iconSize}
          fill={"rgba(247, 255, 255, 0.8)"}
        />
      </Anchor>
      <Anchor
        href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        target="_blank"
        rel="noopener"
        aria-label="Mozilla's Page about HTML (Cascading Style Sheet)"
      >
        <HTML
          alt="HTML Icon"
          height={iconSize}
          fill={"rgba(247, 255, 255, 0.8)"}
        />
      </Anchor>
      <Anchor
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank"
        rel="noopener"
        aria-label="Mozilla's Page about CSS (Cascading Style Sheet)"
      >
        <CSS
          alt="CSS Icon"
          height={iconSize}
          fill={"rgba(247, 255, 255, 0.8)"}
        />
      </Anchor>
    </Paragraph>
  </Wrapper>
);

export default Footer;
