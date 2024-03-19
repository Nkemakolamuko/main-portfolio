import React, { useState } from "react";
import todo from "../../../../assets/todo.png";
import eazy from "../../../../assets/eazy-shoppa-show.png";
import port from "../../../../assets/port.png";
import MEDEASE from "../../Med-Ease.png";
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

const ReactProjects = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [hamburger, setHamburger] = useState(false);
  const [project, setProject] = useState(false);

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

      <PageTitle title="React Projects" />
      <div
        className={`w-[200px] h-[40px] flex flex-col bg-white p-2 text-black items-center cursor-pointer mx-auto mb-2 ${
          theme === "dark" ? "border" : "shadow-lg border"
        }`}
      >
        <p
          className="flex justify-between items-center w-full h-full mb-2 transition-all duration-300 rounded-b-[4px]"
          onClick={handleShowProjects}
        >
          <span>React Projects</span>
          <span>
            {project ? (
              <MdArrowDropUp className="w-6 h-6" />
            ) : (
              <MdArrowDropDown className="w-6 h-6" />
            )}
          </span>
        </p>

        {project && (
          <div className="flex flex-col bg-white text-black p-2 w-[200px] z-10 shadow-xl gap-1 transition-all duration-300">
            <Link to="/projects/all-projects">
              <p className="bg-slate-100 py-2 px-1 rounded-[4px] hover:bg-slate-200">
                All Projects
              </p>
            </Link>
            <Link to="/projects/python-projects">
              <p className="bg-slate-100 py-2 px-1 rounded-[4px] hover:bg-slate-200">
                Python Projects
              </p>
            </Link>
            <Link to="/projects/javascript-projects">
              <p className="bg-slate-100 py-2 px-1 rounded-[4px] hover:bg-slate-200">
                Vanilla JS Projects
              </p>
            </Link>
          </div>
        )}
      </div>
      <div className="mx-4 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-6">
          {/* Turn to component */}

          <ProjectsCards
            title="MedEaseApp - Full Stack App"
            image={MEDEASE}
            alt="MedEaseApp"
            link="https://medeaseapp-six.vercel.app/"
            githublink="/"
          />

          <ProjectsCards
            title="Eazy Shoppa - Full Stack App"
            image={eazy}
            alt="Eazy Shoppa"
            link="https://eazy-shoppa.vercel.app/"
            githublink="https://github.com/Nkemakolamuko/eazy-shoppa"
          />

          <ProjectsCards
            title="My Latest Portfolio Site"
            image={port}
            alt="Portfolio"
            link="https://nvincentn.vercel.app"
            githublink="https://github.com/Nkemakolamuko/main-portfolio"
          />
          <ProjectsCards
            title="React Todo - CRUD"
            image={todo}
            alt="Todo"
            link="https://tio-task.vercel.app/"
            githublink="https://github.com/Nkemakolamuko"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReactProjects;
