import { Link } from "gatsby";
import React from "react";
import helloblue from "../../images/hellowhite.jpg";
interface ITextWithImage {
  data: any;
  left?: boolean;
}

const ImageWithText: React.FC<ITextWithImage> = ({ data }) => {
  const { title } = data.attrs;
  const { heading } = data.attrs;
  const body = data.attrs.body;
  const { body2 } = data.attrs;
  const { left } = data.attrs;
  const { image } = data.attrs;
  const ctaLabel = data.attrs.ctaLabel;
  const ctaLink = data.attrs.ctaLink;

  return (
    <div>
      <div className="container-wrapper">
        <div
          className={`flex flex-col justify-between w-full ${
            left ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="flex-1 h-64 md:ml-5 items center  flex md:pr-2">
            {image && (
              <img
                src={image}
                style={{
                  objectFit: "scale-down",
                  height: "100%",
                  margin: " 0 auto",
                }}
                alt="alt"
              />
            )}
          </div>
          <div className="flex-1 md:ml-5 items-center md:pr-2">
            {title && (
              <p className="text-forestgreen font-magnole pt-5 md:pt-0">
                {title}
              </p>
            )}
            {heading && <h4 className=" pt-3 text-forestgreen">{heading}</h4>}
            {body && <p className=" pt-3">{body}</p>}
            {body2 && <p className=" pt-3">{body2}</p>}
            {ctaLink && (
              <div className="w-1/2">
                <Link to={ctaLink} className="">
                  <div className="btn-primary">
                    <span>{ctaLabel} </span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageWithText;
