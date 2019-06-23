import React from "react"
import styled from "@emotion/styled"
import { Link } from 'gatsby';

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
`
const NavLink = styled.li`
  color: rgb(207,249,248);
  font-size: .8em;
  font-weight: 400;
  padding: 0.5em 1em;
  transition: 0.5s ease-out color;
  text-transform: uppercase;
  &:hover {
      color: white;
      cursor: pointer;
  }
`
const Wrapper = styled.header`
    padding: 2rem 1rem;
    height: 100px;
`
const Nav = styled.nav`
    max-width: 1400px;
    margin: 0 auto;
`

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <NavList>
          <Link to="/">
            <NavLink>Home</NavLink>
          </Link>
          <Link to="/project">
            <NavLink>Project</NavLink>
          </Link>
          <Link to="/blog">
            <NavLink>Blog</NavLink>
          </Link>
          <Link to="/contact">
            <NavLink>Contact</NavLink>
          </Link>
        </NavList>
      </Nav>
    </Wrapper>
  )
}

export default Header
