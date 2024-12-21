import React, { useState, useRef, useContext, useEffect } from "react";
import Header from "../Header";
import PageTitle from "../PageTitle";
import PFP from "./PFP.jpg";
import Footer from "../Footer";
import { BiSolidDownArrow } from "react-icons/bi";
import HeaderHamburger from "./components/HeaderHamburger";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../../App";
import { FaAngleDown } from "react-icons/fa6";
import useContentful from "../../contexts/useContentful";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const [isInterestVisible, setIsInterestVisible] = useState(false);
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(false);
  const interestsRef = useRef(null);
  const [authors, setAuthors] = useState("");
  const { getAuthors } = useContentful();

  const toggleHamburger = () => setIsHamburgerVisible(!isHamburgerVisible);
  const toggleInterests = () => {
    setIsInterestVisible(!isInterestVisible);
    if (!isInterestVisible) {
      interestsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setLoading(true);
    // const timeoutId = setTimeout(() => {
    //   setLoading(false);
    //   clearTimeout(timeoutId);
    // }, 2000);
    getAuthors().then((response) => {
      setAuthors(response.items[0].fields.myImage[0].fields.file.url);
      setLoading(false);
    });
  }, [authors]);

  return (
    <div className="dark" data-theme={theme}>
      <Header openHamburger={toggleHamburger} activeAbout={true} />
      {isHamburgerVisible && (
        <HeaderHamburger hideHamburger={toggleHamburger} />
      )}
      <ToastContainer position="top-left" />
      <PageTitle title="About" />
      <div className="max-w-3xl mx-auto pb-28 px-4 md:px-0 lg:px-0">
        <div className="float-start md:float-left lg:float-left mr-[20px] md:w-[350px] w-full md:mb-0 mb-4">
          {loading ? (
            <p className="h-[300px] w-[100%] flex justify-center text-center items-center text-sm border-b md:border-none">
              Loading image...
            </p>
          ) : (
            <img
              src={authors}
              width={200}
              height={200}
              alt="My Picture"
              className="transition-all duration-300 md:rounded-b-r shadow-md hover:shadow-black/10 w-full h-1/2"
            />
          )}
        </div>
        <div className="font-light leading-[30px] border rounded mt-2 md:mt-0 p-2">
          <p className="py-2">
            Hello there!!{" "}
            <span className="font-bold text-[#F66B0E]">Nkem Vincent Nweke</span>{" "}
            here. I am a Frontend Developer who loves designing and developing
            web applications and websites that not only adhere to industry
            standards but also bring a touch of user-friendly magic.
          </p>
          <p>
            I've worked as a call rep for{" "}
            <span className="font-bold text-blue-500 hover:text-blue-600 underline underline-offset-1">
              <a
                href="https://beta.cepay.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CEPAY
              </a>
            </span>
            , a fintech company. I studied and also interned for over 26 weeks
            at{" "}
            <span className="font-bold text-blue-500 hover:text-blue-600 underline underline-offset-1">
              <a
                href="https://tiidelab-main.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TIIDELab Initiative
              </a>
            </span>{" "}
            as a Frontend Developer, and gained valuable hands-on experience at
            honing my skills in software development, UI/UX using Figma, Team
            Collaboration, and Soft Skills.
            <br /> <br /> Also, I have completed over 75% of my coursework with{" "}
            <span className="font-bold text-blue-500 hover:text-blue-600 underline underline-offset-1">
              <a
                href="https://www.theodinproject.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Odin Project
              </a>
            </span>
            , an immersive online learning platform for web development. I am
            also enrolled with{" "}
            <span className="font-bold text-blue-500 hover:text-blue-600 underline underline-offset-1">
              <a href="/" target="_blank" rel="noopener noreferrer">
                The Gym
              </a>
            </span>
            , an intensive Software Development Boot-camp in Rwanda.
          </p>
          <br />
          Additionally, I am on my path to becoming a Full-Stack MERN Developer.
          So, as a result, I've taken courses on Backend Development and built a
          number of projects.
          <br />
          Use any of the links on the Footer to contact me let's work together.
        </div>

        {/* Interest */}
        <div className="resume-section-content font-light leading-[30px] border rounded my-2 divide-y">
          <button onClick={toggleInterests} className="w-full">
            <div className="transition-all duration-300 flex items-center w-full gap-2 cursor-pointer px-2 py-1 justify-between outline-none font-light">
              <h2 className="my-2 md:my-2 font-medium text-base md:text-xl transition-all duration-300">
                {isInterestVisible ? "Hide Interests" : "Show Interests"}
              </h2>
              <FaAngleDown
                className={`transition-all duration-300 text-base md:text-xl ${
                  isInterestVisible ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>
          {isInterestVisible && (
            <div ref={interestsRef} id="interests" className="px-2 py-4">
              <p className="mb-4">
                As a Frontend Developer, I am passionate about honing my skills
                and staying up-to-date with the latest technologies and trends
                in the industry. In my free time, I engage in activities that
                further enhance my knowledge and creativity. Here are some of my
                interests:
              </p>
              <ol>
                <li>
                  <p className="mb-4">
                    <strong>Continuous Learning:</strong> I am an avid reader
                    and constantly seek out new materials related to web
                    development, programming languages, and design principles.
                    This helps me stay informed about emerging technologies and
                    best practices.
                  </p>
                </li>
                <li>
                  <p className="mb-4">
                    <strong>Culinary Exploration:</strong> I enjoy experimenting
                    with new recipes and exploring different flavors in the
                    kitchen. This hobby allows me to exercise creativity and
                    attention to detail, which are essential qualities in web
                    development.
                  </p>
                </li>
                <li>
                  <p className="mb-4">
                    <strong>Strategic Gaming:</strong> Playing combat games
                    serves as both a recreational activity and a way to sharpen
                    my problem-solving and strategic thinking skills. It helps
                    me approach web development challenges with a fresh
                    perspective and adapt to dynamic situations.
                  </p>
                </li>
                <li>
                  <p className="mb-4">
                    <strong>Intellectual Stimulation:</strong> I find great
                    pleasure in watching shows like The Big Bang Theory, as they
                    provide intellectual stimulation and humor. This helps me
                    relax while also keeping my mind engaged.
                  </p>
                </li>
              </ol>
              <p className="mb-4">
                When I do venture outdoors, I engage in activities that promote
                physical well-being and balance. These activities include:
              </p>
              <ol>
                <li>
                  <p className="mb-4">
                    <strong>Football:</strong> Playing football not only
                    promotes physical fitness but also fosters teamwork and
                    coordination. It allows me to unwind and recharge, ensuring
                    a healthy work-life balance.
                  </p>
                </li>
                <li>
                  <p className="mb-4">
                    <strong>Bonding with My Dog:</strong> Taking my dog for a
                    walk not only provides exercise for both of us but also
                    strengthens the bond between us. This activity helps me
                    disconnect from work and enjoy the simple pleasures of
                    nature.
                  </p>
                </li>
                <li>
                  <p className="mb-4">
                    <strong>Exploring Random Places:</strong> I have a curious
                    nature, and exploring random places allows me to discover
                    new environments and gain fresh perspectives. It fuels my
                    creativity and broadens my understanding of different
                    cultures and landscapes.
                  </p>
                </li>
              </ol>
              <p className="mb-4">
                By combining my passion for web development with diverse
                interests and outdoor activities, I strive to maintain a
                well-rounded and balanced professional life.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
