import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../App";

const HeaderHamburger = ({ hideHamburger }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="z-[99] bg-black flex items-center justify-center mx-auto h-[100vh] top-0 sticky flex-col gap-[35px] dark">
      <p
        className={`border rounded-full text-xl px-4 py-2 md:text-2xl cursor-pointer font-bold tracking-widest transition-all duration-300 ${
          theme === "dark"
            ? "text-white hover:text-white bg-rose-500 hover:bg-rose-600"
            : "text-white hover:text-white bg-rose-500 hover:bg-rose-600"
        } active:scale-90`}
        onClick={hideHamburger}
      >
        X
      </p>
      <ul className="flex gap-2 flex-col text-center transition-all duration-300 w-full md:w-1/2 px-6">
        <Link to="/" className="">
          <li
            className={`${
              theme === "dark"
                ? "bg-white text-black font-semibold"
                : "bg-[#1e293b] text-white"
            } active:bg-blue-500 border py-3 px-3 rounded-md active:scale-90`}
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
            } active:bg-blue-500 border py-3 px-3 rounded-md active:scale-90`}
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
            } active:bg-blue-500 border py-3 px-3 rounded-md active:scale-90`}
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
            } active:bg-blue-500 border py-3 px-3 rounded-md active:scale-90`}
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
            } active:bg-blue-500 border py-3 px-3 rounded-md active:scale-90 uppercase`}
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
            } active:bg-blue-500 border py-3 px-3 rounded-md active:scale-90`}
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
            } active:bg-blue-500 border py-3 px-3 rounded-md active:scale-90`}
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
            } active:bg-blue-500 border py-3 px-3 rounded-md active:scale-90`}
          >
            PLAYGROUND
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default HeaderHamburger;
