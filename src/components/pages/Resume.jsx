import React, { useState } from "react";
import Header from "../Header";
import PageTitle from "../PageTitle";
import Footer from "../Footer";
import IMG from "./NkemVincentNwekeResume.jpg";
import { FaFileDownload } from "react-icons/fa";
import HeaderHamburger from "./components/HeaderHamburger";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Resume = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [hamburger, setHamburger] = useState(false);
  const [cvLoaded, setCVLoaded] = useState(false);
  // const [theme, setTheme] = useState("dark");

  const handleOpenHamburger = () => {
    setHamburger(true);
  };

  const handleHideHamburger = () => {
    setHamburger(false);
  };

  useEffect(() => {
    setCVLoaded(true);
    // setTimeout(() => {
    //   setCVLoaded(true);
    // }, 2000);
  }, []);

  return (
    <div className="dark" data-theme={theme}>
      <Header openHamburger={handleOpenHamburger} activeCV={true} />
      {hamburger && <HeaderHamburger hideHamburger={handleHideHamburger} />}
      <ToastContainer position="top-left" />
      <PageTitle title="Résumé" />
      {!cvLoaded ? (
        <div className="flex flex-col max-w-3xl h-full mx-auto pb-28 items-center gap-4 transition-all duration-300">
          <img src={IMG} alt="My CV" />
          <a
            href="https://drive.google.com/file/d/1OkMCuzwt3q4ANSNIVGamXBl29aLju5H1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border hover:border-black hover:text-black hover:text-[14px] hover:bg-white border-t-0 h-[40px] w-[200px] text-center justify-center flex items-center text-white bg-[#F66B0E] border-[#F66B0E] transition-all duration-500 font-semibold">
              <FaFileDownload className="mr-4 " />
              DOWNLOAD CV
            </div>
          </a>
        </div>
      ) : (
        <div className="w-[full] h-[100vh] overflow-hidden">
          <div className="flex items-center justify-center h-[65vh]">
            Currently being updated... <br />
            Available on request.
          </div>
          {/* I'd bring back loading text and uncomment the commented out code on useEffect as well to take the code back to what it was */}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Resume;
