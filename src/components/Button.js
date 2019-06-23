import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Btn = styled.button`
  border: 0;
  padding: 0.5em 1em;
  font-size: 1em;
  background: transparent;
  color: rgba(247, 255, 255, 0.9);
  border: solid 2px rgba(247, 255, 255, 0.9);
  border-radius: 3px;
  transition: 0.5s ease-out all;
  &:hover {
    cursor: pointer;
    background: rgba(247, 255, 255, 0.8);
    border: solid 2px rgba(247, 255, 255, 0.8);
    color: #6c00d8;
  }
`
const Button = () => {
  return (
    <Link to="/project">
      <Btn title="View my work">View my work &rarr;</Btn>
    </Link>
  )
}

export default Button
