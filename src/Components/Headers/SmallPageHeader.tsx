import React from "react";
import { roadHeader } from "../../utils/Images";
import hello from "../../images/hellotrans.webp";

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
      <img className=" h-96 w-full object-cover opacity-50" src={roadHeader} />
      <div className="absolute items-center w-full flex flex-col">
        <div className="flex flex-col md:flex-row ">
          <img src={hello} alt="hello" className="h-36 py-2" />

          <h1 className="text-mylightblue mx-auto mb-0 mt-auto font-bold relative bottom-0 ">
            {data.title}
          </h1>
        </div>
        <h3 className=" text-mylightblue mx-auto">{data.tagLine}</h3>
      </div>
    </div>
  );
};

export default SmallPageHeader;
