import React from "react";

const SkillsCard = ({ SkillName, endYear, role, skills, description }) => {
  return (
    <>
      <div className="w-full items-center grid grid-cols-2 justify-between gap-4 mb-8 mt-4 ">
        <div className="col-span-1">
          <div className="flex items-center gap-0">
            <div className="w-[90%] md:w-[50%] lg:w-[50%] uppercase">
              {SkillName}
            </div>
            <div className="h-[2px] bg-gray-700 w-[10%] md:w-[50%] lg:w-[50%]"></div>
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="text-blue-500 ">{skills}</h1>
          <div className="">
            <h1 className="text-orange-500 text-[14px]">{role}</h1>
            <p className="text-sm font-normal leading-[22px]">{description}</p>
          </div>
        </div>
      </div>
      <div className="h-[2px] bg-gray-300 w-[100%]"></div>
    </>
  );
};

export default SkillsCard;
