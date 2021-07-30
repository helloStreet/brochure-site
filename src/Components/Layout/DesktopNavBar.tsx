import { Link } from "gatsby";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import logo from "../../images/logotransparentsmall.png";
import { PromoBannerInfo } from "../../utils/Strings";

import MenuItem from "./MenuItem";
const desktopNavBar = ({ NavItems }) => {
  return (
    <div className="  border-mypink border-b h-20 z-50 bg-white  hidden md:flex  mx-auto ">
      <div className="mx-auto  max-w-screen-xl flex justify-between w-full align-middle px-4 items-center flex-row">
        <Link to="/">
          <img src={logo} alt="" className="h-10" />
        </Link>
        <div className="text-white flex flex-row items-center">
          {NavItems.map((item, i) => {
            return <MenuItem item={item} key={uuidv4()} />;
          })}
          <Link to={PromoBannerInfo.ctaLink} className="">
            <div className="btn-primary h-10">
              <span className="">{PromoBannerInfo.ctaLabel} </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default desktopNavBar;
