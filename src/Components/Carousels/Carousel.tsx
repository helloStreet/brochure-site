import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper-bundle.css"
import "swiper/swiper.min.css"
import SwiperCore, { Scrollbar, Navigation } from "swiper/core"

import "./carousel.css"

SwiperCore.use([Scrollbar])
SwiperCore.use([Navigation])

const Carousel = ({ title, cards }) => {
  return (
    <div className="max-w-screen-xl relative overflow-visible mb-8 px-5 swiper-container">
      {title && <h3 className="text-forestgreen">{title}</h3>}
      <Swiper
        className=" w-screen-xl flex flex-row relative overflow-visible bg-blue swiper-wrapper"
        navigation={true}
        slidesPerView={"auto"}
        spaceBetween={20}
        scrollbar={{
          hide: false,
        }}
      >
        {cards.map((item, i) => {
          return (
            <SwiperSlide
              style={{ width: "auto", maxWidth: "100%", height: "auto" }}
              className="mb-12 mt-4 overflow-visible"
              key={title + " " + i}
            >
              {item}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Carousel
