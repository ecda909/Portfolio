import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const EmblemImg = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(width: 350, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

  if (!image) return null;

  const gatsbyImageData = getImage(image.node.childImageSharp);
  return <GatsbyImage className="rounded shadow-lg" alt={alt} image={gatsbyImageData} />;
};

EmblemImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default EmblemImg;
