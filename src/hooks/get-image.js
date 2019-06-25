import { graphql, useStaticQuery } from "gatsby";

const getImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.jpg" }) {
        id
        childImageSharp {
          fixed(width: 300, height: 300) {
            base64
            tracedSVG
            aspectRatio
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
            originalName
          }
        }
      }
    }
  `);
  return data;
};

export default getImage;
