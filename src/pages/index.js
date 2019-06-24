import React from "react"
import styled from "@emotion/styled"
import Global from "../components/Global"
import Intro from "../components/Intro"
import SocialBar from "../components/SocialBar"
import Button from "../components/Button"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Index = () => {
  return (
    <Global>
      <Wrapper>
        <Intro />
        {/* <SocialBar /> */}
        <Button />
      </Wrapper>
    </Global>
  )
}

export default Index
