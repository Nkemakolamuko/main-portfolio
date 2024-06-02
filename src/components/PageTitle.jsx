import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const PageTitle = ({ title, style }) => {
  return (
    <div className="text-center relative">
      <h1
        className="text-[50px] md:text-[100px] border-b border-gray-300 py-2 tracking-tighter page-title uppercase"
        style={style}
      >
        {title}
      </h1>
      <FaInfoCircle className="w-60 h-60 opacity-30 text-black/30 absolute bottom-0 right-[55%] -rotate-12" />
    </div>
  );
};

export default PageTitle;
