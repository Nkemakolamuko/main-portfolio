import React, { useContext } from "react";
import { FaLinkedin, FaGithub, FaLink } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { ThemeContext } from "../../../App";

const ProjectsCards = ({ title, image, alt, link, githublink }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`shadow-lg ${
        theme === "light" ? "border-black" : "border-white shadow-white/20"
      } border h-fit md:h-[100%] transition-all duration-300`}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className={`container mx-auto w-[100%] h-[100%] md:h-[100%] flex flex-col justify-between divide-y ${
            theme === "light" ? "divide-black" : "divide-slate-200"
          }`}
        >
          <div className="h-[100%] transition-all duration-300">
            <img
              src={image}
              className="h-[100%] hover:scale-95 transition-all duration-300 w-[100%]"
              alt={alt}
            />
          </div>

          <div className="flex justify-between items-center w-full p-2">
            <p className="font-semibold hover:underline hover:underline-offset-1 flex items-center transition-all duration-300 w-[85%]">
              <span>
                <IoIosLink className="mr-2 opacity-100 rotate-45 w-5 h-5" />
              </span>
              <span className="truncate">{title}</span>
            </p>
            <a
              href="http://github.com/Nkemakolamuko"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition-all duration-300 w-[10%] flex justify-center"
            >
              <a href={githublink}>
                <FaGithub className="w-5 h-5" />
              </a>
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectsCards;
