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
      } font-semibold hover:py-4  px-4 py-4 md:py-2 lg:py-2 dark`}
      data-theme={theme}
      style={style}
    >
      <p className="hidden md:flex text-sm md:text-sm lg:text-sm text-gray-00">
        NVN © {new Date().getFullYear()}
      </p>
      <div className="w-full md:w-[20%]">
        <ul className="flex items-center flex-row justify-around md:justify-between md:gap-6">
          <a
            href="https://www.linkedin.com/in/nkem-vincent-nweke/"
            target="_blank"
            className="text-[#0A66C2] lg:hover:text-[#0A66C2]"
            title="Connect with me on LinkedIn"
          >
            <li>
              <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" />
            </li>
          </a>
          <a
            href="https://twitter.com/NwekeVincent14"
            target="_blank"
            title="Let's connect on X"
          >
            <li>
              <FaXTwitter className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" />
            </li>
          </a>
          <a
            href="https://github.com/Nkemakolamuko"
            target="_blank"
            title="Check out my Github"
          >
            <li>
              <FaGithub className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" />
            </li>
          </a>
          <a
            href="https://graphics.social/@thebigbangcoder"
            target="_blank"
            className="text-[#2F0C7A] lg:hover:text-[#2F0C7A]"
            title="Follow me on Mastodon"
          >
            <li>
              <FaMastodon className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" />
            </li>
          </a>
          <a
            href="https://hashnode.com/@Nkemakolamuko"
            target="_blank"
            className="text-[blue] lg:hover:text-[blue]"
            title="Check out my articles on Hashnode"
          >
            <li>
              <FaHashnode className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
