import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import "../../styles/styles.scss";
import HomeBannerImage from "../../images/hellostreetwhite.jpg";
import "../../styles/styles.scss";
import { HeaderText } from "../../utils/Strings";
const HomeHeader = () => {
  //temp image as import not working
  const headerimage = useStaticQuery(graphql`
    {
      placeholderImage: file(name: { eq: "logowhite" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <div className="max-w-full  h-96 mb-0 pt-32">
      <img
        src={HomeBannerImage}
        alt="Header image"
        style={{ height: "auto", width: "50%" }}
        className="homelogo mx-auto"
      />

      <div>
        <p className="text-mypink">{HeaderText}</p>
      </div>
    </div>
  );
};

export default HomeHeader;
