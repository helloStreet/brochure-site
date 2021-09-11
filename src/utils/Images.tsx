import road from "../images/road.jpg";
import helloblue from "../images/hellostreet/helloblue.jpg";

import chartcut from "../images/chartcut.webp";
import chartsvg from "../images/chartsvg.svg";
import smile from "../images/smile.png";
import heart from "../images/heart.png";

export const roadHeader = road;

export const carouselImages = [helloblue, smile, heart, chartcut];

export const chartAnimation = () => {
  return (
    <div className="w-full image-wrapper relative top-0">
      <img src={chartcut} alt="Chart image" />
      <object
        type="image/svg+xml"
        data={chartsvg}
        className="couple-animation"
      />
    </div>
  );
};

// <img
//   src= @mainImage
//   alt="Main Header"
//   class="main-1"
// />
// <object
//   type="image/svg+xml"
//   data="@animSvg"
//   class="couple-animation"
// ></object>
// <img
//   src="@splitImage"
//   alt="Main Header Split"
//   class="split-1"
// />
// </div>
