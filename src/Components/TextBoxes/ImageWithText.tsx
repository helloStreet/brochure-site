import { Link } from "gatsby";
import React from "react";
import helloblue from "../../images/hellowhite.jpg";
import CTAButton from "../Contact/CTAButton";
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
  const { isCTA } = data.attrs;

  return (
    <section>
      <div className="container-wrapper">
        <div
          className={`flex flex-col justify-between w-full ${
            left ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="flex-1 items-center  flex md:pr-2 fade-in">
            {image && (
              <img
                src={image}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  margin: " 0 auto",
                }}
                className="rounded-3xl"
                alt="Hello Street"
              />
            )}
          </div>
          <div className="flex-1 items-left p-10">
            {title && (
              <p className="text-forestgreen font-magnole pt-5 md:pt-0">
                {title}
              </p>
            )}
            {heading && <h4 className=" pt-3 text-forestgreen">{heading}</h4>}
            {body && <p className=" pt-3">{body}</p>}
            {body2 && <p className=" pt-3">{body2}</p>}

            <CTAButton isCTA={isCTA} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ImageWithText;
