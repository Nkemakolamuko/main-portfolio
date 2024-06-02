import React from "react";

const SkillsCard = ({ SkillName, endYear, role, skills, description }) => {
  return (
    <>
      <div className="w-full items-center grid grid-cols-2 justify-between gap-4 border divide-x-2">
        <div className="col-span-1 p-4">
          <div className="flex items-center gap-0">
            <div className="w-[90%] md:w-[50%] lg:w-[50%] uppercase">
              {SkillName}
            </div>
            {/* <div className="h-[2px] bg-gray-700 w-[10%] md:w-[50%] lg:w-[50%]"></div> */}
          </div>
        </div>
        <div className="col-span-1 p-4">
          <h1 className="text-blue-500 ">{skills}</h1>
          <div className="">
            <h1 className="text-orange-500 text-[14px]">{role}</h1>
            <p className="text-sm font-normal leading-[22px]">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsCard;
