import React, { useState } from "react";
import Header from "../../../Header";
import PageTitle from "../../../PageTitle";
import Footer from "../../../Footer";
import ProjectsCards from "../../components/ProjectsCards";
import MEDEASE from "../../Med-Ease.png";
import eazy from "../../../../assets/eazyNew.png";
import cleaning from "../../../../assets/Cleaning-Service.png";
import SportsNews from "../../Sports-News.png";
import VideoDownloader from "../../Video-Downloader.png";
import JamalFX from "../../JamalFX.png";
import todo from "../../../../assets/todo.png";
import port from "../../../../assets/port.png";
import HeaderHamburger from "../HeaderHamburger";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { ThemeContext } from "../../../../App";
import JFHNEW from "../../../../assets/JFHNEW.png";

const AllProjects = () => {
  const { theme } = useContext(ThemeContext);
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

      <PageTitle title="All Projects" />
      <div
        className={`w-[200px] h-[40px] flex flex-col bg-white p-2 text-black items-center mx-auto mb-2 cursor-pointer ${
          theme === "dark" ? "border" : "shadow-lg border"
        }`}
      >
        <p
          className="flex justify-between items-center w-full h-full mb-2 transition-all duration-300 cursor-pointer"
          onClick={handleShowProjects}
        >
          <span>All Projects</span>
          <span>
            {project ? (
              <MdArrowDropUp className="w-6 h-6" />
            ) : (
              <MdArrowDropDown className="w-6 h-6" />
            )}
          </span>
        </p>

        {project && (
          <div className="flex flex-col bg-white text-black p-2 w-[200px] z-10 shadow-xl gap-1 transition-all duration-300 rounded-b-[4px]">
            <Link to="/projects/react-projects">
              <p className="bg-slate-100 py-2 px-1 rounded-[4px] hover:bg-slate-200">
                ReactJS Projects
              </p>
            </Link>
            <Link to="/projects/javascript-projects">
              <p className="bg-slate-100 py-2 px-1 rounded-[4px] hover:bg-slate-200">
                Vanilla JS Projects
              </p>
            </Link>
            <Link to="/projects/python-projects">
              <p className="bg-slate-100 py-2 px-1 rounded-[4px] hover:bg-slate-200">
                Python Projects
              </p>
            </Link>
          </div>
        )}
      </div>
      <div className="mx-4 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-6 mb-2">
          {/* Turn to component */}

          <ProjectsCards
            title="Jamal Forex Hub 2.0"
            image={JFHNEW}
            alt="JFH"
            link="https://jfhub.vercel.app/"
            githublink="https://github.com/Nkemakolamuko/"
          />
          <ProjectsCards
            title="Online Cleaning Service - Full Stack App"
            image={cleaning}
            alt="Cleaning"
            link="https://247-cleaning.vercel.app/"
            githublink="https://github.com/Nkemakolamuko/e-cleaning-frontend"
          />
          <ProjectsCards
            title="Eazy Shoppa - Full Stack App"
            image={eazy}
            alt="Eazy Shoppa"
            link="https://eazy-shoppa.vercel.app/"
            githublink="https://github.com/Nkemakolamuko/eazy-shoppa"
          />

          <ProjectsCards
            title="MedEaseApp - Full Stack App"
            image={MEDEASE}
            alt="MedEaseApp"
            link="https://medeaseapp-six.vercel.app/"
            githublink="/"
          />
          <ProjectsCards
            title="Sports News"
            image={SportsNews}
            alt="Sports News"
            link="https://vins-update.vercel.app/"
            githublink="https://github.com/Nkemakolamuko/sports-news"
          />
          <ProjectsCards
            title="Jamal Forex Hub 1.0"
            image={JamalFX}
            alt="JFH"
            link="https://jamal-forex-hub.vercel.app/"
            githublink="https://github.com/Nkemakolamuko/FOREX-SITE"
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
          <ProjectsCards
            title="Video Downloader"
            image={VideoDownloader}
            alt="Video Downloader"
            link="https://video-downloader-iota.vercel.app/"
            githublink="https://github.com/Nkemakolamuko/Video-Downloader"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProjects;
