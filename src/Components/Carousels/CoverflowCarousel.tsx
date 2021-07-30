import React, { useLayoutEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";

import "./carousel.css";
import { Link } from "gatsby";

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

  const handleChangeSlide = (event) => {
    //setCurrentSlide(event.activeIndex)
    const activeslide = event.realIndex;
    setCurrentSlide(activeslide);
  };
  return (
    <div className="max-w-screen-xl   overflow-visible mb-8 px-5 swiper-container">
      {/* {subtitle && <h6 className="text-forestgreen text-center">{subtitle}</h6>} */}
      {title && <h2 className="text-center">{title}</h2>}
      <Swiper
        className=" w-screen-xl flex flex-row overflow-visible items center swiper-wrapper"
        // navigation={true}
        slidesPerView={slides}
        effect={"coverflow"}
        // scrollbar={{
        //   hide: true,
        // }}
        coverflowEffect={{
          //scale: 0.8,
          //rotate: 2,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}
        centeredSlides={true}
        onSlideChange={handleChangeSlide}
        loop={true}
        // mousewheel={true}
      >
        {cards.map((item, i) => {
          return (
            <SwiperSlide
              style={{ width: "auto", maxWidth: "100%", height: "auto" }}
              key={uuidv4()}
              className="mb-12 mt-4 h-96 overflow-visible transform flex flex-col items-center ease-in duration-200 hover:scale-105"
            >
              <Link to={item.link}>
                <div className="w-80 border-t-4 mx-auto cursor-pointer  border-mypink ">
                  <div className=" flex  h-56 bg-myaubergine">
                    <img
                      src={item.image}
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                      alt="Portfolio Card Image"
                      className="relative transform hover:shadow-xl  mx-auto "
                    />
                  </div>
                </div>

                <div className="bg-white h-36 flex flex-col text-center items-center relative w-full p-4 transform ease-in duration-200">
                  <h5 className="text-aubergine "> {item.title}</h5>
                  <div className="card-text-fade-in">
                    {i == currentSlide ? (
                      <p className="px-4 ">{item.body}</p>
                    ) : null}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CoverflowCarousel;
