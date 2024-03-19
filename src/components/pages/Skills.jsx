import React, { useState } from "react";
import Header from "../Header";
import HeaderHamburger from "./components/HeaderHamburger";
import PageTitle from "../PageTitle";
import SkillsCard from "./components/SkillsCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import Footer from "../Footer";

const Skills = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [hamburger, setHamburger] = useState(false);

  const handleOpenHamburger = () => {
    setHamburger(true);
  };

  const handleHideHamburger = () => {
    setHamburger(false);
  };

  return (
    <div className="dark" data-theme={theme}>
      <Header openHamburger={handleOpenHamburger} activeSkills={true} />
      {hamburger && <HeaderHamburger hideHamburger={handleHideHamburger} />}
      <ToastContainer position="top-left" />
      <PageTitle title="SKILLS" />
      <div className=" md:max-w-[35rem] flex items-center flex-col justify-center px-4 md:px-0 lg:px-0 mx-auto mb-28 font-semibold ">
        <SkillsCard
          skills="HTML5 - CSS3 - JavaScript - Python"
          SkillName="Technical Skills"
        />

        <SkillsCard
          skills="ReactJS - Firebase - TailwindCSS"
          SkillName="Frameworks"
        />

        <SkillsCard
          skills="Public Speaking - Good Communication - Learns Fast - Adapts Easily - Outspoken"
          SkillName="Soft Skills"
        />

        <SkillsCard
          skills="Drawing - Song Writing - Singing - Pianist - Teaching"
          SkillName="Other"
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Skills;
