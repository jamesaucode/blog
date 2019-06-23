import React, { Component } from "react"
import Global from "../components/Global"
import styled from "@emotion/styled"
import Livesite from "../../static/assets/livesite.svg"
import Github from "../../static/assets/github.svg"

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: 2rem;
`

const Title = styled.h2`
  color: rgb(247, 255, 255);
  font-family: "Fira Sans";
  letter-spacing: 1.2px;
  font-size: 2em;
  font-weight: 900;
  margin-bottom: 1rem;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Image = styled.img`
  height: 300px;
  width: 300px;
`
const ItemBox = styled.div`
  display: flex;
  max-width: 700px;
  margin-bottom: 2rem;
`
const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.75;
  color: rgba(247, 255, 255, 0.8);
`
const IconBox = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`

export default class Project extends Component {
  render() {
    return (
      <Global>
        <Wrapper>
          <ItemBox>
            <Image
              src="https://via.placeholder.com/300/FFFFFF/000000/?text=Project%20goes%20here"
              alt="Placeholder"
            />
            <TextBox>
              <Title>Project 1</Title>
              <Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                excepturi molestias ex eligendi repellat expedita cum laborum
                dolorum? Soluta illum illo impedit laudantium facere est
                mollitia magni sint nostrum sapiente!
              </Paragraph>
              <IconBox style={{ "marginTop": "auto" }}>
                <Livesite
                  height={"24px"}
                  width={"24px"}
                  fill={"rgba(247,255,255,0.9)"}
                />
                <Github
                  height={"24px"}
                  width={"24px"}
                  fill={"rgba(247,255,255,0.9)"}
                ></Github>
              </IconBox>
            </TextBox>
          </ItemBox>
          <ItemBox>
            <Image
              src="https://via.placeholder.com/300/FFFFFF/000000/?text=Project%20goes%20here"
              alt="Placeholder"
            />
            <TextBox>
              <Title>Project 2</Title>
              <Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                excepturi molestias ex eligendi repellat expedita cum laborum
                dolorum? Soluta illum illo impedit laudantium facere est
                mollitia magni sint nostrum sapiente!
              </Paragraph>
              <IconBox style={{ "marginTop": "auto" }}>
                <Livesite
                  height={"24px"}
                  width={"24px"}
                  fill={"rgba(247,255,255,0.9)"}
                />
                <Github
                  height={"24px"}
                  width={"24px"}
                  fill={"rgba(247,255,255,0.9)"}
                ></Github>
              </IconBox>
            </TextBox>
          </ItemBox>
        </Wrapper>
      </Global>
    )
  }
}
