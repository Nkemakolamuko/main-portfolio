import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../App";

const HeaderHamburger = ({ hideHamburger }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="z-[99] h-[100vh] top-0 fixed bg-black/50 w-[100%]">
      <p
        className={`absolute right-2 border rounded-full top-4 text-2xl px-4 py-2 md:text-2xl cursor-pointer font-bold tracking-widestnsition-all duration-300`}
        onClick={hideHamburger}
      >
        X
      </p>
      <div
        className="z-[99] flex py-8 h-[100vh] top-0 fixed flex-col dark w-[82%] shadow-lg border-r px-4"
        data-theme={theme}
      >
        <p className="py-2 mb-2 border-b">Nkem Vincent Nweke</p>
        <ul className="flex gap-2 flex-col text-sm transition-all duration-300 w-[100%] md:w-1/2 py-4">
          <Link to="/" className="">
            <li
              className={`shadow ${
                theme === "dark"
                  ? "bg-white text-black font-semibold"
                  : "bg-[#0000f1] text-white"
              } border py-3 px-3 rounded-md`}
            >
              HOME
            </li>
          </Link>
          <Link to="/about" className="">
            <li
              className={`shadow ${
                theme === "dark"
                  ? "bg-white text-black font-semibold"
                  : "bg-[#0000f1] text-white"
              } border py-3 px-3 rounded-md`}
            >
              ABOUT
            </li>
          </Link>
          <Link to="/projects" className="">
            <li
              className={`shadow ${
                theme === "dark"
                  ? "bg-white text-black font-semibold"
                  : "bg-[#0000f1] text-white"
              } border py-3 px-3 rounded-md`}
            >
              PROJECTS
            </li>
          </Link>
          <Link to="/experience" className="">
            <li
              className={`shadow ${
                theme === "dark"
                  ? "bg-white text-black font-semibold"
                  : "bg-[#0000f1] text-white"
              } border py-3 px-3 rounded-md`}
            >
              EXPERIENCE
            </li>
          </Link>
          <Link to="/resume" className="">
            <li
              className={`shadow ${
                theme === "dark"
                  ? "bg-white text-black font-semibold"
                  : "bg-[#0000f1] text-white"
              } border py-3 px-3 rounded-md uppercase`}
            >
              Résumé/CV
            </li>
          </Link>
          <Link to="/articles" className="">
            <li
              className={`shadow ${
                theme === "dark"
                  ? "bg-white text-black font-semibold"
                  : "bg-[#0000f1] text-white"
              } border py-3 px-3 rounded-md`}
            >
              ARTICLES
            </li>
          </Link>
          <Link to="/skill" className="">
            <li
              className={`shadow ${
                theme === "dark"
                  ? "bg-white text-black font-semibold"
                  : "bg-[#0000f1] text-white"
              } border py-3 px-3 rounded-md`}
            >
              SKILLS
            </li>
          </Link>
          <Link to="/playground" className="">
            <li
              className={`shadow ${
                theme === "dark"
                  ? "bg-white text-black font-semibold"
                  : "bg-[#0000f1] text-white"
              } border py-3 px-3 rounded-md`}
            >
              PLAYGROUND
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default HeaderHamburger;
