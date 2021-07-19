import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const ProductCard = ({ data, image }) => {
  const cardImage = useStaticQuery(graphql`
    {
      placeholderImage: file(name: { eq: "helloblue" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <Link to={data.link}>
      <div className="w-80 border-t-4 cursor-pointer border-mypink ">
        <img
          // todo change the image over
          src={image}
          // image={data.img}
          style={{ objectFit: "fill" }}
          loading="lazy"
          alt="Portfolio Card Image"
          className="relative transform hover:shadow-xl"
        />

        {/* <div className="bg-white flex flex-col relative  h-44 p-4 shadow-md  ">
          <div className="flex flex-row">
            <p className="bg-black w-max text-center uppercase  rounded-full text-white m-2 p-0 px-2 text-xs  ">
              {data.title}
            </p>
          </div>
          <h6 className="text-mypurple text-left"> {data.title}</h6>
          <p className="text-black text-left">{data.desc}</p>
        </div> */}
      </div>
    </Link>
  );
};
export default ProductCard;
