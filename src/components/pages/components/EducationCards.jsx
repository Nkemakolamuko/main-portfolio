import React from "react";
import img from "../../../assets/articles.jpg";
import { HiAcademicCap } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";

const EducationCards = ({ startYear, endYear, type, school, cert }) => {
  return (
    <>
      <div className="grid grid-cols-3 justify-between md:gap-4 mb-4 mt-4 border border-dashed divide-x divide-dashed hover:shadow-md cursor-default transition-all duration-300">
        <div className="col-span-1 py-4 md:p-4 px-1">
          <div className="flex items-center gap-0">
            <div className="w-[100%] md:w-[100%] lg:w-[100%] text-xs md:text-sm flex items-center">
              <span className="px-1">{startYear}</span>{" "}
              {endYear && <FaArrowRight />}{" "}
              <span className="px-1">{endYear}</span>
            </div>
          </div>
        </div>
        <div className="col-span-2 p-4 flex flex-col md:gap-1 font-bold">
          <div className="flex items-center gap-1 opacity-85">
            <HiAcademicCap className="w-6 h-6" />
            <h1 className="text-[14px]">{type}</h1>
          </div>

          <h1 className="text-[#F66B0E] uppercase font-semibold">{school}</h1>
          <p className="text-sm font-normal leading-[22px]">{cert}</p>
        </div>
      </div>
    </>
  );
};

export default EducationCards;
