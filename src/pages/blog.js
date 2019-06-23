import React, { Component } from "react"
import Global from "../components/Global"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: grid;
  max-width: 600px;
  grid-template-areas:
    "post"
    "post"
    "post"
    "post"
    "post"
    "post";
  grid-gap: 2rem;
  margin: 0 auto;
`
const TextBox = styled.div`
  width: 100%;
  max-height: 250px;
  background: transparent;
  padding: 0 1rem;
  &:hover {
      cursor: pointer;
  }
`
const Heading = styled.h2`
  font-size: 1.75em;
  font-weight: 600;
  padding: 1rem 0;
  color: white;
`
const Preview = styled.p`
  font-size: 1em;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-height: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
`
const Divider = styled.div`
  border-bottom: 1px solid rgb(151, 73, 229);
  width: 300px;
  /* max-width: 300px; */
  margin: 0 auto;
`
export default class Blog extends Component {
  render() {
    return (
      <Global>
        <Wrapper>
          <TextBox>
            <Heading>This is a Blog Title</Heading>
            <Preview>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              tempora molestiae, dolor aspernatur corporis porro sunt?
              Explicabo, quo! Provident nesciunt velit hic error natus, harum
              eaque quia consequatur labore maxime. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatibus illo ullam laboriosam
              quod. Itaque accusamus cum fuga vel. Iusto accusantium enim sequi
              quia corrupti? Illo dignissimos cumque veritatis quas eligendi.
            </Preview>
          </TextBox>
          <Divider />
          <TextBox>
            <Heading>This is a Blog Title</Heading>
            <Preview>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              tempora molestiae, dolor aspernatur corporis porro sunt?
              Explicabo, quo! Provident nesciunt velit hic error natus, harum
              eaque quia consequatur labore maxime.
            </Preview>
          </TextBox>
          <Divider />
          <TextBox>
            <Heading>This is a Blog Title</Heading>
            <Preview>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              tempora molestiae, dolor aspernatur corporis porro sunt?
              Explicabo, quo! Provident nesciunt velit hic error natus, harum
              eaque quia consequatur labore maxime.
            </Preview>
          </TextBox>
          <Divider />
          <TextBox>
            <Heading>This is a Blog Title</Heading>
            <Preview>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              tempora molestiae, dolor aspernatur corporis porro sunt?
              Explicabo, quo! Provident nesciunt velit hic error natus, harum
              eaque quia consequatur labore maxime.
            </Preview>
          </TextBox>
          <Divider />
          <TextBox>
            <Heading>This is a Blog Title</Heading>
            <Preview>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              tempora molestiae, dolor aspernatur corporis porro sunt?
              Explicabo, quo! Provident nesciunt velit hic error natus, harum
              eaque quia consequatur labore maxime. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatibus illo ullam laboriosam
              quod. Itaque accusamus cum fuga vel. Iusto accusantium enim sequi
              quia corrupti? Illo dignissimos cumque veritatis quas eligendi.
            </Preview>
          </TextBox>
          <Divider />
          <TextBox>
            <Heading>This is a Blog Title</Heading>
            <Preview>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              tempora molestiae, dolor aspernatur corporis porro sunt?
              Explicabo, quo! Provident nesciunt velit hic error natus, harum
              eaque quia consequatur labore maxime. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatibus illo ullam laboriosam
              quod. Itaque accusamus cum fuga vel. Iusto accusantium enim sequi
              quia corrupti? Illo dignissimos cumque veritatis quas eligendi.
            </Preview>
          </TextBox>
          <Divider />
        </Wrapper>
      </Global>
    )
  }
}
