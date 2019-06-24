import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
`;
const NavLink = styled.li`
  color: rgb(207, 249, 248);
  font-size: 0.7em;
  font-weight: 400;
  padding: 0.5em 1em;
  transition: 0.5s ease-out color;
  text-transform: uppercase;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;
const Wrapper = styled.header`
  padding: 2rem 1rem;
  height: 75px;
  width: 100%;
  font-size: calc(0.3vw + 16px);
  @media (max-width: 450px) {
    padding: 0.5rem;
  }
`;
const Nav = styled.nav`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  justify-content: space-between;
  color: white;
  font-weight: 900;

  @media (max-width: 450px) {
    flex-direction: column; 
    align-items: center;
  }
`;
const Heading = styled.h1`
  font-size: 1.25em;
  font-weight: 700;
`;

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <Link to="/">
          <Heading>James Au</Heading>
        </Link>
        <NavList>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/project">Project</Link>
          </NavLink>
          <NavLink>
            <Link to="/blog">Blog</Link>
          </NavLink>
          <NavLink>
            <Link to="/about">About</Link>
          </NavLink>
        </NavList>
      </Nav>
    </Wrapper>
  );
};

export default Header;
