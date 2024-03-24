import React, { useState, useRef } from "react";
import Header from "../Header";
import PageTitle from "../PageTitle";
import PFP from "./PFP.jpg";
import Footer from "../Footer";
import { BiSolidDownArrow } from "react-icons/bi";
import HeaderHamburger from "./components/HeaderHamburger";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../../App";
import { useContext } from "react";

const About = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [interest, setInterests] = useState(false);
  const interests = useRef(null);

  const [hamburger, setHamburger] = useState(false);
  // const [theme, setTheme] = useState("dark");

  const handleOpenHamburger = () => {
    setHamburger(true);
  };

  const handleHideHamburger = () => {
    setHamburger(false);
  };

  return (
    <div className="dark" data-theme={theme}>
      <Header openHamburger={handleOpenHamburger} activeAbout={true} />
      {hamburger && <HeaderHamburger hideHamburger={handleHideHamburger} />}
      <ToastContainer position="top-left" />
      <PageTitle title="About" />
      <div className="max-w-3xl mx-auto pb-28 px-4 md:px-0 lg:px-0">
        <div className="float-start md:float-left lg:float-left mb-[20px] mr-[20px] ">
          <img
            src={PFP}
            width={400}
            height={400}
            alt="My Picture"
            className="transition-all duration-300 rounded-b-md shadow-md hover:shadow-black/10   "
          />
        </div>
        <div className="font-light leading-[30px]">
          <p className="py-4">
            Hello there!!{" "}
            <span className="font-bold text-[#F66B0E]">Nkem Vincent Nweke</span>{" "}
            here. I am a Frontend Developer who loves designing and developing
            web applications and websites that not only adhere to industry
            standards but also bring a touch of user-friendly magic.
          </p>
          <p>
            I've worked as a call rep for{" "}
            <span className="font-bold text-blue-500 hover:text-blue-600 underline underline-offset-1">
              <a href="https://beta.cepay.me/" target="_blank">
                CEPAY
              </a>
            </span>
            , a fintech company. I studied and also interned for over 26 weeks
            at{" "}
            <span className="font-bold text-blue-500 hover:text-blue-600 underline underline-offset-1">
              <a href="https://tiidelab-main.vercel.app/" target="_blank">
                TIIDELab Initiative
              </a>
            </span>{" "}
            as a Frontend Developer, and gained valuable hands-on experience at
            honing my skills in software development, UI/UX using Figma, Team
            Collaboration and Soft Skills.
            <br /> <br /> Additionally, I have completed over 70% of my
            coursework with{" "}
            <span className="font-bold text-blue-500 hover:text-blue-600 underline underline-offset-1">
              <a href="https://www.theodinproject.com/" target="_blank">
                The Odin Project
              </a>
            </span>
            , an immersive online learning platform for web development.
          </p>
          <br />
          Additionally, I am on my path to becoming a Full-Stack Developer. So,
          as a result I took Net Ninja's Course on Backend Development, and
          Freecodecamp's course on CRUD, all with the MERN Stack. Added to
          articles and project's along the way to assist my learning.
          <br />
          Use any of the links on the Footer to contact me let's work together.
        </div>

        <p className="mb-8"></p>
        <hr />
        <p className="mb-8"></p>

        <div className="resume-section-content font-light leading-[30px]">
          <button
            onClick={() => {
              interests.current?.scrollIntoView({
                behavior: "smooth",
              });
              setInterests(!interest);
            }}
          >
            {/* <span ref={interests} id={interest ? "interests" : ""}></span> */}
            <p className="transition-all duration-300 flex items-center gap-2 cursor-pointer border-l border-r hover:border-t-0 hover:border-b-0 px-2 py-1 my-4 rounded-md border-gray-600 justify-between font-light">
              <h2 className="my-2 md:my-4 lg:my-5 font-bold text-xl md:text-2xl lg:text-2xl transition-all duration-300">
                Interests
              </h2>
              <p>
                {interest ? (
                  <BiSolidDownArrow className="transition-all duration-300 text-xl md:text-2xl lg:text-2xl rotate-180" />
                ) : (
                  <BiSolidDownArrow className="transition-all duration-300 text-xl md:text-2xl lg:text-2xl" />
                )}
              </p>
            </p>
          </button>
          {interest && (
            <div ref={interests} id={interest ? "interests" : ""}>
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
