import React, { useState } from "react";
import Header from "../Header";
import PageTitle from "../PageTitle";
import Footer from "../Footer";
import IMG from "./PFP.jpg";
import ExperienceCards from "./components/ExperienceCards";
import HeaderHamburger from "./components/HeaderHamburger";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../../App";
import { useContext } from "react";

const Experience = () => {
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
      <Header openHamburger={handleOpenHamburger} activeX={true} />
      {hamburger && <HeaderHamburger hideHamburger={handleHideHamburger} />}
      <ToastContainer position="top-left" />
      <PageTitle title="Experience" />
      <div className="max-w-3xl px-4 md:px-0 lg:px-0 mx-auto pb-28 font-semibold ">
        <ExperienceCards
          startYear="2023"
          endYear=""
          role="Frontend Developer/ Intern"
          company="TIIDELab"
          description="I was able to gain valuable, marketable soft and technical skill. Starting from Professional Development, Data Structures and Algorithm (DSA), HTML, CSS3, Tailwindcss, JavaScript and React. I worked with a team of 9 to develop MedEase, a medication management web App that aims at solving the forgetfulness of people when it comes to their medication and lots more."
        />
        <ExperienceCards
          startYear="2024"
          role="Designer and Developer"
          company="Eazy Shoppa"
          description="I designed and developed Eazy Shoppa - a web app that drives at helping people run their shopping errands and also provide jobs for freelancers as well."
        />
        <ExperienceCards
          startYear="2024"
          role="Designer and Developer"
          company="E-Laundry Service"
          description="I worked on a project to assist people find nearest Dry Cleaning Service that delivers in 24 hours -."
        />
        <ExperienceCards
          startYear="2023"
          endYear="2024"
          role="Web Developer"
          company="Jamal Forex Hub"
          description="The Hub of millionaires. I designed and developed the Landing page for this amazing Forex Academy. With the aim of helping them reach more customers and grow their audience."
        />
        <ExperienceCards
          startYear="2024"
          role="Call Rep"
          company="Cepay"
          description="With a team of 4, we've been able to successfully generate traffic for the newly launched product - Cepay, that aims to simplify fintech and money conversion."
        />
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
