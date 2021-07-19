import React, { useLayoutEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import SwiperCore, { Scrollbar, Navigation, Mousewheel } from "swiper/core";

import "./carousel.css";
import { graphql, Link, useStaticQuery } from "gatsby";

import ProductCard from "../Cards/ProductCard";

SwiperCore.use([Scrollbar]);
SwiperCore.use([Navigation]);

const CoverflowCarousel = ({ cards, title }) => {
  // const subtitle = data.attrs.['sub-title']

  const [slides, setSlides] = useState("3");
  const [currentSlide, setCurrentSlide] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      if (typeof window !== "undefined") {
        if (window.innerWidth <= 767) {
          setSlides(1.2);
        } else {
          setSlides(3);
        }
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const handleChangeSlide = (event, value) => {
    //setCurrentSlide(event.activeIndex)
    setCurrentSlide(event.realIndex);
  };
  return (
    <div className="max-w-screen-xl relative overflow-visible mb-8 px-5 swiper-container">
      {/* {subtitle && <h6 className="text-forestgreen text-center">{subtitle}</h6>} */}
      {title && <h2 className="text-forestgreen text-center">{title}</h2>}
      <Swiper
        className=" w-screen-xl flex flex-row relative overflow-visible swiper-wrapper"
        navigation={true}
        slidesPerView={slides}
        spaceBetween={0}
        effect={"coverflow"}
        scrollbar={{
          hide: true,
        }}
        coverflowEffect={{
          scale: 0.8,
          rotate: 2,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        }}
        centeredSlides={true}
        onSlideChange={handleChangeSlide}
        loop={true}
        mousewheel={true}
      >
        {cards.map((item, i) => {
          return (
            <SwiperSlide
              style={{ width: "auto", maxWidth: "100%", height: "auto" }}
              className="mb-12 mt-4 overflow-visible transform flex flex-col items-center ease-in duration-200 hover:scale-105"
            >
              {item}
              {i == currentSlide ? (
                <div className="bg-white flex flex-col text-center items-center relative w-80 h-44 p-4 transform ease-in duration-200">
                  <h5 className="text-aubergine"> {item.props.data.title}</h5>
                  <p className=" ">{item.props.data.body}</p>
                </div>
              ) : null}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CoverflowCarousel;
