import React, { useState } from "react";
import todo from "../../../../assets/todo.png";
import port from "../../../../assets/port.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { ThemeContext } from "../../../../App";
import ProjectsCards from "../ProjectsCards";
import Header from "../../../Header";
import PageTitle from "../../../PageTitle";
import Footer from "../../../Footer";
import HeaderHamburger from "../HeaderHamburger";

const PythonProjects = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [hamburger, setHamburger] = useState(false);
  const [project, setProject] = useState(false);

  const links = [
    { to: "/projects/all-projects", text: "All Projects" },
    { to: "/projects/react-projects", text: "ReactJS Projects" },
    { to: "/projects/javascript-projects", text: "Vanilla JS Projects" },
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

      <PageTitle title="Python Projects" />
      <div
        className={`w-[200px] h-[40px] flex flex-col bg-white p-2 text-black items-center mx-auto mb-2 cursor-pointer ${
          theme === "dark" ? "border" : "shadow-lg border"
        }`}
      >
        <p
          className="flex justify-between items-center w-full h-full mb-2 transition-all duration-300"
          onClick={handleShowProjects}
        >
          <span>Python Projects</span>
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
      <div className="mx-4">
        <div className="grid place-content-center place-items-center h-[80vh]">
          {/* Turn to component */}

          <p className="animate-pulse">In Progress...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PythonProjects;
