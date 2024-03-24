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
    <div className="max-w-[350px] w-full h-[100%] border flex items-center justify-center rounded-b-[4px] rounded-t-[15px] bg-slate-100 flex-col text-slate-600 shadow-lg hover:shadow-black/50 transition-all duration-300">
      <p className="mr-auto pl-2 my-1 flex items-center gap-1 italic text-xs">
        <span>Posted :</span>
        <span className=""> {time}</span>
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title="Click to visit"
        className="max-w-[350px] w-[95%] h-[60%] border rounded-md bg-white flex flex-col hover:scale-95 active:scale-95 transition-all duration-300"
      >
        <div className="w-full h-[70%] rounded-t-md">
          <img
            src={newImg}
            alt="Blog Image"
            className="rounded-t-md h-full w-full"
          />
        </div>
        <div className="w-full h-[40%] px-2 bg-slate-200 rounded-b-md flex flex-col justify-center">
          <p className="text-sm text-black">
            {title} - {by}
          </p>
          <p className="text-slate-800 text-xs truncate">{description}</p>
          <p className="text-[10px] text-slate-500 truncate">{mainSite}</p>
        </div>
      </a>
      <div className="max-w-[350px] w-full px-3 h-[40%] flex flex-col justify-center mr-auto">
        <p className="text-slate-900 text-sm">
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
