import React from "react";

const PageTitle = ({ title, style }) => {
  return (
    <div className="text-center">
      <h1
        className="text-[50px] md:text-[100px] border-b border-gray-300 py-2 tracking-tighter page-title uppercase"
        style={style}
      >
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
