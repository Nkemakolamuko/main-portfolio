import React from "react";
import { CiClock2 } from "react-icons/ci";
import img from "../../../assets/v-v-v.webp";

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
    <div className="w-full h-[100%] border flex items-center justify-center rounded-b-[4px] rounded-t-[15px] bg-slate-100 flex-col text-slate-600 shadow-lg hover:shadow-black/50 transition-all duration-300">
      <p className="mr-auto pl-2 my-1 flex items-center gap-1 italic text-xs">
        <span>Posted :</span>
        <span className=""> {time}</span>
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title="Click to visit"
        className="w-[95%] h-[60%] border rounded-md bg-white flex flex-col hover:scale-95 active:scale-95 transition-all duration-300"
      >
        <div className="w-[full] h-[70%] rounded-t-md">
          <img
            src={img}
            alt="Blog Image"
            className="rounded-t-md h-full w-full"
          />
        </div>
        <div className="w-[full] h-[40%] px-2 bg-slate-200 rounded-b-md flex flex-col justify-center">
          <p className="text-sm text-black">
            {title} - {by}
          </p>
          <p className="text-slate-800 text-xs truncate">{description}</p>
          <p className="text-[10px] text-slate-500 truncate">{mainSite}</p>
        </div>
      </a>
      <div className="w-[full] px-3 h-[40%] flex flex-col justify-center mr-auto">
        <p className="text-slate-900 text-sm">
          {title} - {by}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 text-sm"
        >
          {url}
        </a>
      </div>
    </div>
    // <div className="w-full h-[100%] border flex items-center justify-center rounded-b-[4px] rounded-t-[15px] bg-slate-100 flex-col text-slate-600 shadow-lg hover:shadow-black/50 transition-all duration-300">
    //   <p className="mr-auto pl-2 my-1 flex items-center gap-1 italic text-xs">
    //     <span>Posted :</span>
    //     <span className=""> 14 - 02 - 2024</span>
    //   </p>
    //   <a
    //     href={toArticle}
    //     target="_blank"
    //     rel="noopener noreferrer"
    //     title="Click to visit"
    //     className="w-[95%] h-[60%] border rounded-md bg-white flex flex-col hover:scale-95 active:scale-95 transition-all duration-300"
    //   >
    //     <div className="w-[full] h-[60%] mb-2 rounded-t-md">
    //       <img
    //         src={img}
    //         alt="Blog Image"
    //         className="rounded-t-md h-full w-full"
    //       />
    //     </div>
    //     <div className="w-[full] h-[40%] px-2 bg-slate-200 rounded-b-md flex flex-col justify-center">
    //       <p className="text-sm text-black">
    //         How To Create A Login System Using Firebase And ReactJS - Traversy
    //         Media
    //       </p>
    //       <p className="text-slate-800 text-xs truncate">
    //         Apparently what I will be displaying here will be a little
    //         description of what was posted, yunno - for curiosity.
    //       </p>
    //       <p className="text-[10px] text-slate-500 truncate">
    //         https://thewebsite.com/
    //       </p>
    //     </div>
    //   </a>
    //   <div className="w-[full] px-3 h-[40%] flex flex-col justify-center">
    //     <p className="text-slate-900 text-sm">
    //       How To Create A Login System Using Firebase And ReactJS - Traversy
    //       Media
    //     </p>
    //     <a
    //       href="https://thewebsite.com/the-article-itself/what-i-want-to-show/"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="text-blue-500 hover:text-blue-700 text-sm"
    //     >
    //       https://thewebsite.com/the-article-itself/what-i-want-to-show/
    //     </a>
    //   </div>
    // </div>
  );
};

export default BlogsCard;
