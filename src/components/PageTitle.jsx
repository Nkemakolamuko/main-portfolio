import React, { useContext } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { ThemeContext } from "../App";

const PageTitle = ({ title, style }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="text-center relative overflow-hidden">
      <h1
        className="text-[50px] md:text-[100px] border-b border-gray-300 py-2 tracking-tighter page-title uppercase"
        style={style}
      >
        {title}
      </h1>
      <FaInfoCircle
        className={`w-60 h-60 opacity-30 absolute bottom-0 right-[55%] -rotate-12 ${
          theme === "dark" ? "text-slate-300" : "text-black/30"
        }`}
      />
    </div>
  );
};

export default PageTitle;
