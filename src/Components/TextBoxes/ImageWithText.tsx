import { Link } from "gatsby";
import React from "react";
import helloblue from "../../images/helloblue.jpg";
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
  const image = { helloblue };
  const ctaLabel = data.attrs.ctaLabel;
  const ctaLink = data.attrs.ctaLink;

  return (
    <div>
      <div className="mx-auto max-w-screen-xl mb-16 pt-1 px-4">
        <div
          className={`flex flex-col justify-between w-full ${
            left ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="flex-1 md:ml-5 md:pr-2">
            {image && (
              <img
                src={helloblue}
                style={{ objectFit: "contain", width: "100%" }}
                alt="alt"
              />
            )}
          </div>
          <div className="flex-1 md:ml-5 md:pr-2">
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
