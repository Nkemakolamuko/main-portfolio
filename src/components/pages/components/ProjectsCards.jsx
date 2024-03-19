import React, { useContext } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { ThemeContext } from "../../../App";

const ProjectsCards = ({ title, image, alt, link, githublink }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`border-t ${
        theme === "light" ? "border-black" : "border-white"
      } border-b border-r border-l h-[40vh] md:h-[100%] sm:pb-4 hover:border transition-all duration-300`}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="container mx-auto w-[100%] h-[100%] md:h-[100%] px-4 flex flex-col justify-between ">
          <div className="hover:border hover:border-t-0 h-[80%] hover:border-black/30 transition-all duration-300">
            <img
              src={image}
              className="h-[100%] hover:p-2 transition-all duration-300 w-[100%]"
              alt={alt}
            />
          </div>
          <div
            className={`h-[2px] ${
              theme === "light" ? "bg-black/30" : "bg-white"
            } mt-4 mb-1`}
          ></div>
          <div className="flex justify-between items-center">
            <p className="font-semibold hover:underline hover:underline-offset-1 flex items-center transition-all duration-300 truncate">
              <span>
                <IoIosLink className="mr-2 opacity-100 " />
              </span>
              {title}
            </p>
            <a
              href="http://github.com/Nkemakolamuko"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition-all duration-300"
            >
              <a href={githublink}>
                <FaGithub className="w-6 h-6" />
              </a>
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectsCards;
