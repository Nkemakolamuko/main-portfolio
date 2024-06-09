import React, { useContext, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { ThemeContext } from "../../App";
import PageTitle from "../PageTitle";
import HeaderHamburger from "./components/HeaderHamburger";
import EducationCards from "./components/EducationCards";

const Education = () => {
  const { theme } = useContext(ThemeContext);
  const [hamburger, setHamburger] = useState(false);

  const handleOpenHamburger = () => {
    setHamburger(true);
  };

  const handleHideHamburger = () => {
    setHamburger(false);
  };
  return (
    <div className="dark" data-theme={theme}>
      <Header activeEducation={true} openHamburger={handleOpenHamburger} />
      {hamburger && <HeaderHamburger hideHamburger={handleHideHamburger} />}
      <PageTitle title="My Education" />
      <div className="md:max-w-4xl w-full mx-auto flex flex-col items-center md:gap-10 gap-5 px-2">
        <div className="max-w-3xl px-4 md:px-0 lg:px-0 mx-auto pb-28">
          <EducationCards
            startYear={"2012"}
            endYear={"2018"}
            school={"Fountain Comprehensive College, Enugu"}
            type={"High School"}
            cert={"WASSCE Certificate"}
          />
          <EducationCards
            startYear={"2023"}
            endYear={"2024"}
            school={"The Odin Project, Online"}
            type={"Online Course"}
            cert={"Frontend Development"}
          />
          <EducationCards
            startYear={"2023"}
            endYear={""}
            school={"TIIDELAB Initiative"}
            type={"6 Months Program"}
            cert={"Frontend Development"}
          />
          <EducationCards
            startYear={"2024"}
            endYear={""}
            school={"Data Camp"}
            type={"Online Program"}
            cert={"Python Fundamentals"}
          />
          <EducationCards
            startYear={"2024"}
            endYear={"Current"}
            school={"African Leadership University (ALU), Kigali"}
            type={"College / University"}
            cert={"BSc Software Engineering"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Education;
