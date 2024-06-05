import React from "react";
import { CiClock2 } from "react-icons/ci";
import img from "../../../assets/v-v-v.webp";
import newImg from "../../../assets/articles.jpg";

const BlogsCard = ({
  toArticle,
  time,
  title,
  by,
  description,
  mainSite,
  url,
  // img,
}) => {
  return (
    <div className="md:max-w-[350px] w-full h-[100%] border flex items-center justify-center bg-slate-100 flex-col text-slate-600 shadow-md divide-y hover:shadow-black/30 transition-all duration-300 dark">
      <p className="mr-auto pl-2 my-1 flex items-center gap-1 italic text-xs">
        <span>Posted :</span>
        <span className=""> {time}</span>
      </p>
      <a
        href={url}
        title={`Click to visit ${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="md:max-w-[350px] w-[100%] h-[100%] rounded-md bg-white flex flex-col dark hover:scale-95 active:scale-95 transition-all duration-300"
      >
        <div className="w-full h-[100%]">
          <img src={newImg} alt="Blog Image" className="h-full w-full" />
        </div>
        <div className="w-full p-2 bg-slate-200 flex flex-col justify-center">
          <p className="text-sm text-black">
            {title} - {by}
          </p>
          <p className="text-slate-800 text-xs truncate">{description}</p>
          <p className="text-[10px] text-slate-500 truncate">{mainSite}</p>
        </div>
      </a>
      <div className="md:max-w-[350px] w-full px-2 py-3 flex flex-col justify-center">
        <p className="text-sm">
          {title} - {by}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 text-sm overflow-hidden"
        >
          {url}
        </a>
      </div>
    </div>
  );
};

export default BlogsCard;
