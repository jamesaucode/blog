import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import Header from "./Header"
import Helmet from "react-helmet"
import Footer from "./Footer"
import useSiteMetadata from '../hooks/use-sitemetadata';
import { graphql } from "gatsby";

const Main = styled.main`
  position: relative;
  padding-bottom: 100px;
  min-height: calc(100vh - 100px);
`
const Layout = ({ children }) => {
  const siteMetadata = useSiteMetadata();
  return (
  <React.Fragment>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
        body,
        html {
          font-family: Arial, Verdana, Helvetica, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          line-height: 1.4;
          background: #6c00d8;
        }
        a {
          text-decoration: none;
        }
      `}
    />
    <Helmet>
      <html lang="en"/>
      <title>{siteMetadata.title}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Fira+Sans:900&display=swap"
        rel="stylesheet"
      />
      <meta charSet="utf-8" />
      <meta name="author" content={siteMetadata.author} />
      <meta name="description" content={siteMetadata.description}/>
    </Helmet>
    <Header />
    <Main>
      {children}
      <Footer iconSize={"20px"} />
    </Main>
  </React.Fragment>
)
}

export default Layout;