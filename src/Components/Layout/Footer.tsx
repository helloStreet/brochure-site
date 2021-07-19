import { Link } from "gatsby";
import React from "react";
import hello from "../../images/hellowhite.jpg";

const Footer = ({ pages, getInTouchLinks }) => {
  return (
    <div className="max-w-screen-2x  mx-auto px-5 pb-4">
      <div className="max-w-screen-xl flex flex-col mx-auto py-8 text-myaubergine">
        <p> &#169; 2021 Hello Street Ltd. All rights reserved.</p>
      </div>
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto">
        <div className=" flex flex-col  w-full md:w-1/4 text-myaubergine mb-4">
          <h6 className="text-peach mb-5">Hello Street </h6>
          {pages.map((item, i) => {
            return (
              <Link
                to={item.Url}
                className="hover:underline  text-base mb-4"
                key={`footer-link-${item.title}`}
              >
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col mx-auto text-myaubergine w-full md:w-1/4 mb-4">
          <h6 className="text-peach mb-5">Get in touch </h6>
          {getInTouchLinks.map((item, i) => {
            return (
              <Link
                to={item.Url}
                className="pb-3 hover:underline text-base"
                key={`footer-link-${item.title}`}
              >
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col mx-auto text-myaubergine w-full md:w-1/2 mb-4">
          <img src={hello} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
