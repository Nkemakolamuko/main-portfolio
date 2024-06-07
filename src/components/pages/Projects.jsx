import React, { useState } from "react";
import Header from "../Header";
import PageTitle from "../PageTitle";
import Footer from "../Footer";
import ProjectsCards from "./components/ProjectsCards";
import MEDEASE from "./Med-Ease.png";
import SportsNews from "./Sports-News.png";
import VideoDownloader from "./Video-Downloader.png";
import JamalFX from "./JamalFX.png";
import todo from "../../assets/todo.png";
import port from "../../assets/port.png";
import HeaderHamburger from "./components/HeaderHamburger";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const [hamburger, setHamburger] = useState(false);
  const [project, setProject] = useState(false);

  const links = [
    { to: "/projects/all-projects", text: "All Projects" },
    { to: "/projects/react-projects", text: "ReactJS Projects" },
    { to: "/projects/javascript-projects", text: "Vanilla JS Projects" },
    { to: "/projects/python-projects", text: "Python Projects" },
  ];

  const handleOpenHamburger = () => {
    setHamburger(true);
  };

  const handleHideHamburger = () => {
    setHamburger(false);
  };

  const handleShowProjects = () => {
    setProject(!project);
  };
  return (
    <div className="dark" data-theme={theme}>
      <Header openHamburger={handleOpenHamburger} activePro={true} />
      {hamburger && <HeaderHamburger hideHamburger={handleHideHamburger} />}
      <ToastContainer position="top-left" />

      <PageTitle title="Projects" />
      <div
        className={`w-[200px] h-[40px] flex flex-col bg-white p-2 text-black items-center mx-auto ${
          theme === "dark" ? "border" : "shadow-lg border"
        }`}
      >
        <p
          className="flex justify-between items-center w-full h-full mb-2 transition-all duration-300 cursor-pointer"
          onClick={handleShowProjects}
        >
          <span>Choose Category</span>
          <span>
            {project ? (
              <MdArrowDropUp className="w-6 h-6" />
            ) : (
              <MdArrowDropDown className="w-6 h-6" />
            )}
          </span>
        </p>

        {project && (
          <div className="flex flex-col bg-white text-black p-2 w-[200px] border z-10 shadow-xl gap-1 transition-all duration-300 rounded-b-[4px]">
            {links.map((value) => (
              <Link to={value.to} key={value.text}>
                <p className="bg-slate-100 py-2 px-1 rounded-[4px] hover:bg-slate-200">
                  {value.text}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="px-2 text-center md:w-[600px] container mx-auto h-[70vh] md:h-[60vh] flex items-center justify-center">
        <p>
          Select from different project category above for easy browse through.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
