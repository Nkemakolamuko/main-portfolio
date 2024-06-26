import React from "react";

const ExperienceCards = ({
  startYear,
  endYear,
  role,
  company,
  description,
}) => {
  return (
    <>
      <div className="grid grid-cols-3 justify-between gap-4 mb-4 mt-4 border border-dashed divide-x divide-dashed hover:shadow-md transition-all duration-300">
        <div className="col-span-1 p-4">
          <div className="flex items-center gap-0">
            <div className="w-[100%] md:w-[100%] lg:w-[100%] text-sm">
              {startYear} {endYear && <span>-</span>} {endYear}
            </div>
          </div>
        </div>
        <div className="col-span-2 p-4">
          <h1 className="text-blue-500 uppercase font-semibold">{role}</h1>
          <div className="">
            <h1 className="text-orange-500 text-[14px]">{company}</h1>
            <p className="text-sm font-normal leading-[22px]">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCards;
