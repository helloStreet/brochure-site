import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ProductCard from "../Cards/ProductCard";
import { carouselCardInfo } from "../../utils/Strings";
import CoverflowCarousel from "./CoverflowCarousel";

const ProductCarousel = ({ data }) => {
  const title = "our services";
  return (
    <div className="max-w-screen-xl mx-auto">
      <CoverflowCarousel title={title} cards={carouselCardInfo} />
    </div>
  );
};

export default ProductCarousel;
