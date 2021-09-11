import React from "react";

import HomeBannerImage from "../../images/hellostreet/hellostreetwhite.jpg";
import HomeBannerImage2 from "../../images/hellostreet/hellostreetwhitesmall.webp";

import { homeData } from "../../utils/Strings";
const HomeHeader = () => {
  return (
    <div className="max-w-full h-700  mb-0 pt-32">
      <div className="home-header-animation">
        <img
          src={HomeBannerImage2}
          alt="Header image"
          style={{ height: "auto", width: "60%" }}
          className="homelogo mx-auto "
        />
      </div>

      <div className="mx-auto text-myaubergine text-center">
        <h1 className="text-myaubergine text-5xl static z-50">
          {homeData.header.title}
        </h1>
        <h3 className="-mt-6">{homeData.header.tagLine}</h3>
      </div>
    </div>
  );
};

export default HomeHeader;
