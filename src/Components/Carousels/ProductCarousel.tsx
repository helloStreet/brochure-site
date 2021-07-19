import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import ProductCard from "../Cards/ProductCard";
import { carouselImages } from "../../utils/Images";
import { carouselCardInfo } from "../../utils/Strings";
import Carousel from "./Carousel";
import CoverflowCarousel from "./CoverflowCarousel";

const ProductCarousel = ({ data }) => {
  //   const title = data.attrs.category;
  const title = "our services";

  const cards = [];
  carouselCardInfo.map((item, i) => {
    cards.push(
      <ProductCard
        key={`portfoliocarouselcard-${i}`}
        data={item}
        image={carouselImages[i]}
      />
    );
  });

  return (
    <div className="max-w-screen-xl mx-auto">
      <CoverflowCarousel title={title} cards={cards} />
    </div>
  );
};

export default ProductCarousel;
