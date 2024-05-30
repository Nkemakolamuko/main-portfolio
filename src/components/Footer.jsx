import React from "react";
import { useContext } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaHashnode, FaMastodon } from "react-icons/fa6";
import { ThemeContext } from "../App";

const Footer = ({ style }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`transition-all duration-300 flex justify-between items-center bottom-0 z-50 fixed w-full ${
        theme === "light" ? "!bg-slate-200" : "!bg-slate-900"
      } font-semibold md:hover:py-4 md:px-4 md:py-2 lg:py-2 dark`}
      data-theme={theme}
      style={style}
    >
      <p className="hidden md:flex text-sm md:text-sm lg:text-sm text-gray-00">
        NVN © {new Date().getFullYear()}
      </p>
      <div className="w-full md:w-[20%]">
        <ul className="flex items-center flex-row md:justify-between md:gap-6 gap-0 w-full divide-x-2 md:divide-x-0">
          <li className="px-2 flex justify-center py-4 md:px-0 md:py-0 w-[100%] bg-blue-100">
            <a
              href="https://www.linkedin.com/in/nkem-vincent-nweke/"
              target="_blank"
              className="text-[#0A66C2] lg:hover:text-[#0A66C2]"
              title="Connect with me on LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" />
            </a>
          </li>
          <li className="px-2 flex justify-center py-4 md:px-0 md:py-0 w-[100%]">
            <a
              href="https://twitter.com/NwekeVincent14"
              target="_blank"
              title="Let's connect on X"
            >
              <FaXTwitter className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" />
            </a>
          </li>
          <li
            className={`px-2 flex justify-center py-4 md:px-0 md:py-0 w-[100%] ${
              theme === "light" ? "!bg-gray-100" : "!bg-slate-900"
            }`}
          >
            <a
              href="https://github.com/Nkemakolamuko"
              target="_blank"
              title="Check out my Github"
            >
              <FaGithub className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" />
            </a>
          </li>
          <li className="px-2 flex justify-center py-4 md:px-0 md:py-0 w-[100%] bg-purple-200">
            <a
              href="https://graphics.social/@thebigbangcoder"
              target="_blank"
              className="text-[#2F0C7A] lg:hover:text-[#2F0C7A]"
              title="Follow me on Mastodon"
            >
              <FaMastodon className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" />
            </a>
          </li>
          <li className="px-2 flex justify-center py-4 md:px-0 md:py-0 w-[100%] bg-blue-200">
            <a
              href="https://hashnode.com/@Nkemakolamuko"
              target="_blank"
              className="text-[blue] lg:hover:text-[blue]"
              title="Check out my articles on Hashnode"
            >
              <FaHashnode className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
