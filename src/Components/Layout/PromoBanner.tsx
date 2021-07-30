import { Link } from "gatsby";
import React from "react";
import { PromoBannerInfo } from "../../utils/Strings";
const PromoBanner = () => {
  return (
    <div className="max-w-screen-2x bg-myaubergine mx-auto px-5 pb-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row py-8">
        <div className="w-full md:w-2/3 flex flex-col items-start">
          <h4 className="text-white">{PromoBannerInfo.title}</h4>
          {PromoBannerInfo.ctaLink && (
            <Link to={PromoBannerInfo.ctaLink} className="">
              <div className="btn-secondary">
                <span>{PromoBannerInfo.ctaLabel} </span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
