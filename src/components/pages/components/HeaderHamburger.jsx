import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../App";

const HeaderHamburger = ({ hideHamburger }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="z-[99] bg-black  flex items-center justify-center mx-auto h-[100vh] top-0 sticky flex-col gap-[35px] dark">
      <ul className="flex gap-6 flex-col text-center transition-all duration-300">
        <Link to="/" className="">
          <li
            className={`${
              theme === "dark"
                ? "bg-white text-black font-semibold"
                : "bg-[#1e293b] text-white"
            } active:bg-blue-500 border py-1 px-3 rounded-md active:scale-90`}
          >
            HOME
          </li>
        </Link>
        <Link to="/about" className="">
          <li
            className={`${
              theme === "dark"
                ? "bg-white text-black font-semibold"
                : "bg-[#1e293b] text-white"
            } active:bg-blue-500 border py-1 px-3 rounded-md active:scale-90`}
          >
            ABOUT
          </li>
        </Link>
        <Link to="/projects" className="">
          <li
            className={`${
              theme === "dark"
                ? "bg-white text-black font-semibold"
                : "bg-[#1e293b] text-white"
            } active:bg-blue-500 border py-1 px-3 rounded-md active:scale-90`}
          >
            PROJECTS
          </li>
        </Link>
        <Link to="/experience" className="">
          <li
            className={`${
              theme === "dark"
                ? "bg-white text-black font-semibold"
                : "bg-[#1e293b] text-white"
            } active:bg-blue-500 border py-1 px-3 rounded-md active:scale-90`}
          >
            EXPERIENCE
          </li>
        </Link>
        <Link to="/resume" className="">
          <li
            className={`${
              theme === "dark"
                ? "bg-white text-black font-semibold"
                : "bg-[#1e293b] text-white"
            } active:bg-blue-500 border py-1 px-3 rounded-md active:scale-90 uppercase`}
          >
            Résumé/CV
          </li>
        </Link>
        <Link to="/articles" className="">
          <li
            className={`${
              theme === "dark"
                ? "bg-white text-black font-semibold"
                : "bg-[#1e293b] text-white"
            } active:bg-blue-500 border py-1 px-3 rounded-md active:scale-90`}
          >
            ARTICLES
          </li>
        </Link>
        <Link to="/skill" className="">
          <li
            className={`${
              theme === "dark"
                ? "bg-white text-black font-semibold"
                : "bg-[#1e293b] text-white"
            } active:bg-blue-500 border py-1 px-3 rounded-md active:scale-90`}
          >
            SKILLS
          </li>
        </Link>
        <Link to="/playground" className="">
          <li
            className={`${
              theme === "dark"
                ? "bg-white text-black font-semibold"
                : "bg-[#1e293b] text-white"
            } active:bg-blue-500 border py-1 px-3 rounded-md active:scale-90`}
          >
            PLAYGROUND
          </li>
        </Link>
      </ul>
      <p
        className={`border rounded-full px-4 py-2 cursor-pointer ${
          theme === "dark" ? "text-white" : "text-white bg-[#1e293b]/70"
        } active:scale-90`}
        onClick={hideHamburger}
      >
        X
      </p>
    </div>
  );
};

export default HeaderHamburger;
