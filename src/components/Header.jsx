import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";
import { ThemeProvider } from "../contexts/ThemeContext";
import { useTheme } from "../contexts/ThemeContext";
import { ThemeContext } from "../App";
import { useContext } from "react";

const Header = ({
  handleThemeChange,
  openHamburger,
  // toggleTheme,
  activeBlogs,
  activeAbout,
  activeCV,
  activePro,
  activeX,
  activeSkills,
  activePlay,
}) => {
  const { setTheme, theme } = useContext(ThemeContext);
  const toggleThemeDark = () => {
    setTheme("dark");
  };
  const toggleThemeLight = () => {
    setTheme("light");
  };

  return (
    <nav
      className={`flex justify-between items-center ${
        theme === "light" ? "shadow-lg" : "shadow shadow-white/80"
      }  font-semibold top-0 sticky z-50 header`}
      data-theme={theme}
    >
      <div className="transition-all duration-300 hidden lg:flex">
        <ul className="flex items-center flex-row justify-between gap-4 mx-auto my-[0px] text-[13px] transition-all duration-200">
          <Link to="/" className=" transition-all duration-200">
            <li className="bg-black text-white px-4 py-[18px] shortName active:scale-90">
              NVN
            </li>
          </Link>
          <Link to="/about" className=" transition-all duration-200">
            <li
              className={`px-2 py-4 active:scale-90 ${
                activeAbout ? "border-b-4 border-b-[#F66B0E]" : ""
              }`}
            >
              ABOUT
            </li>
          </Link>
          <Link to="/projects" className=" transition-all duration-200">
            <li
              className={`px-2 py-4 active:scale-90 ${
                activePro ? "border-b-4 border-b-[#F66B0E]" : ""
              }`}
            >
              PROJECTS
            </li>
          </Link>
          <Link to="/experience" className=" transition-all duration-200">
            <li
              className={`px-2 py-4 active:scale-90 ${
                activeX ? "border-b-4 border-b-[#F66B0E]" : ""
              }`}
            >
              EXPERIENCE
            </li>
          </Link>
          <Link to="/resume" className=" transition-all duration-200">
            <li
              className={`px-2 py-4 active:scale-90 ${
                activeCV ? "border-b-4 border-b-[#F66B0E]" : ""
              } uppercase`}
            >
              Résumé/CV
            </li>
          </Link>
          <Link to="/articles" className=" transition-all duration-200">
            <li
              className={`px-2 py-4 active:scale-90 ${
                activeBlogs ? "border-b-4 border-b-[#F66B0E]" : ""
              } uppercase`}
            >
              Articles
            </li>
          </Link>
          <Link to="/skill" className=" transition-all duration-200">
            <li
              className={`px-2 py-4 active:scale-90 ${
                activeSkills ? "border-b-4 border-b-[#F66B0E]" : ""
              } uppercase`}
            >
              SKILLS
            </li>
          </Link>
          <Link to="/playground" className=" transition-all duration-200">
            <li
              className={`px-2 py-4 active:scale-90 ${
                activePlay ? "border-b-4 border-b-[#F66B0E]" : ""
              } uppercase`}
            >
              PLAYGROUND
            </li>
          </Link>
        </ul>
      </div>
      {/* Hamburger */}
      <div className="flex lg:hidden md:py-[10px] items-end relative h-full">
        <p to="/" className="pl-3 active:scale-90" onClick={openHamburger}>
          {/* <span className="bg-black text-white px-4 py-[11px] shortName"> */}
          <GiHamburgerMenu className="w-8 h-9 cursor-pointer" />
          {/* </span> */}
        </p>
        <p className="pb-1 pl-4">NVN</p>
      </div>
      <div className="px-4 py-[7px] md:px-4 md:py-2 lg:py-2 lg:px-4 flex gap-1 md:gap-2 items-center ">
        <p
          className="bg-white border text-black rounded-full p-2 md:p-2 lg:p-2 cursor-pointer"
          onClick={toggleThemeLight}
        >
          <MdOutlineLightMode />
        </p>
        <p>Theme</p>
        <p
          className="bg-black border text-white rounded-full p-2 md:p-2 lg:p-2 cursor-pointer"
          onClick={toggleThemeDark}
        >
          <CiDark />
        </p>
      </div>
    </nav>
  );
};

export default Header;
