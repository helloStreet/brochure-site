import React from "react";
import "../../styles/styles.scss";
import HomeBannerImage from "../../images/hellostreetwhite.jpg";
import HomeBannerImage2 from "../../images/hellostreetwhitesmall.webp";
import "../../styles/styles.scss";
import { homeData } from "../../utils/Strings";
const HomeHeader = () => {
  return (
    <div className="max-w-full h-700  mb-0 pt-32">
      <div className="">
        <img
          src={HomeBannerImage2}
          alt="Header image"
          style={{ height: "auto", width: "50%" }}
          className="homelogo mx-auto home-header-animation"
        />
      </div>

      <div className="mx-auto text-center">
        <h2 className="text-mypink">{homeData.header.title}</h2>
        <h3 className="text-mypink">{homeData.header.tagLine}</h3>
      </div>
    </div>
  );
};

export default HomeHeader;
