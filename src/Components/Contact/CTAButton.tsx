import { Link } from "@reach/router";
import React from "react";
import { ctaData } from "../../utils/Links";

const CTAButton = ({ isCTA }) => {
  return isCTA ? (
    <div className="w-full flex justify-start  ">
      <Link to={ctaData.link} className="">
        <div className="btn-primary  flex justify-start my-4 md:max-w-xs">
          <span>{ctaData.label}</span>
        </div>
      </Link>
    </div>
  ) : null;
};

export default CTAButton;
