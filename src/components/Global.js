import React from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import Header from "./Header";
import Helmet from "react-helmet";
import Footer from "./Footer";
import useSiteMetadata from "../hooks/use-sitemetadata";

const Main = styled.main`
  position: relative;
  padding-bottom: 120px;
  min-height: calc(100vh - 100px);
`;
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
            font-family: "Source Sans Pro", Arial, Verdana, Helvetica,
              "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
              "Helvetica Neue", sans-serif;
            line-height: 1.4;
            background: rgb(108, 0, 216);
            background: linear-gradient(
              180deg,
              rgba(108, 0, 216, 1) 0%,
              rgba(111, 1, 221, 1) 100%
            );
          }
          a {
            text-decoration: none;
            color: inherit;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{siteMetadata.title}</title>
        <link
          rel="stylesheet"
          // rel="preload"
          // as="style"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,900&display=swap"
          // onLoad="this.rel='stylesheet'"
        />
        <meta charSet="utf-8" />
        <meta name="author" content={siteMetadata.author} />
        <meta name="description" content={siteMetadata.description} />
      </Helmet>
      <Header />
      <Main>
        {children}
        <Footer iconSize={"16px"} />
      </Main>
      <script
        async
        defer
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </React.Fragment>
  );
};

export default Layout;
