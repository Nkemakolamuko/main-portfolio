import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../../App";
import { FaTimes } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";

const HeaderHamburger = ({ hideHamburger }) => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  const links = [
    { to: "/", text: "HOME" },
    { to: "/about", text: "ABOUT" },
    { to: "/projects", text: "PROJECTS" },
    { to: "/experience", text: "EXPERIENCE" },
    { to: "/resume", text: "RÉSUMÉ/CV" },
    { to: "/articles", text: "ARTICLES" },
    { to: "/skill", text: "SKILLS" },
    { to: "/playground", text: "PLAYGROUND" },
  ];

  return (
    <div className="z-[99] h-[100vh] top-0 fixed bg-black/50 w-[100%]">
      <p
        className={`absolute right-4 rounded-full top-4 text-3xl cursor-pointer font-bold tracking-widest text-white transition-all duration-300`}
        onClick={hideHamburger}
      >
        <FaTimes />
      </p>
      <div
        className="z-[99] flex py-2 h-[100vh] top-0 fixed flex-col dark w-[80%] shadow-lg border-r px-4 divide-y overflow-auto"
        data-theme={theme}
      >
        <p className="py-2">Nkem Vincent Nweke</p>
        <ul className="flex gap-2 flex-col text-sm transition-all duration-300 w-[100%] md:w-1/2 py-2">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="">
              <li
                className={`shadow ${
                  location.pathname === link.to
                    ? theme === "dark"
                      ? "bg-[#020933] text-white"
                      : "bg-[#020933] text-white"
                    : theme === "dark"
                    ? "bg-[#0000f0] text-white"
                    : "bg-[#0000f1] text-white"
                } border py-3 px-3 rounded-md`}
              >
                {link.text}
              </li>
            </Link>
          ))}
        </ul>
        <p className="w-[100%]">
          <FaLaptopCode
            className={`w-60 h-60 opacity-30 ${
              theme === "dark" ? "text-slate-300" : "text-blue-300"
            }`}
          />
        </p>
      </div>
    </div>
  );
};

export default HeaderHamburger;
