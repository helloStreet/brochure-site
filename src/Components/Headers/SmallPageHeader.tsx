import React from "react";
import { roadHeader } from "../../utils/Images";
import hello from "../../images/hellotrans.webp";
import Bar from "../../images/streetbar.png";

interface headerItems {
  data: iItems;
}
interface iItems {
  title: string;
  tagLine: string;
}
const SmallPageHeader = ({ data }: headerItems) => {
  return (
    <div className="h-full flex relative items-center mb-20 bg-myaubergine">
      <img
        className=" h-96 z-0 w-full object-cover opacity-20"
        src={roadHeader}
      />
      <div className="absolute items-center w-full flex flex-col">
        <div className="flex flex-col md:flex-row ">
          <img src={hello} alt="hello" className="h-36 py-3 -mr-3" />

          <h1 className="text-mylightblue mx-auto mb-0 mt-auto font-bold relative bottom-0 ">
            {data.title}
          </h1>
        </div>
        <img src={Bar} alt="line image" className="w-1/4" />
        <h5 className=" text-mylightblue text-center w-full md:w-1/2 mx-auto">
          {data.tagLine}
        </h5>
      </div>
    </div>
  );
};

export default SmallPageHeader;
