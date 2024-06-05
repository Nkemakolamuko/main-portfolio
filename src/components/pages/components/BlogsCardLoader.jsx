import React from "react";

const BlogsCardLoader = ({ newImg }) => {
  return (
    <div className="md:max-w-[350px] w-full h-[100%] border flex items-center justify-center bg-slate-100 flex-col text-slate-600 dark cursor-wait transition-all duration-300">
      <p className="mr-auto pl-2 my-1 flex items-center gap-1 italic text-xs">
        <span className="blur-md">Posted :</span>
        <span className="blur md">{new Date().toLocaleString()}</span>
      </p>
      <div className="md:max-w-[350px] w-[100%] h-[100%] bg-white flex flex-col dark p-2 gap-2 transition-all duration-300">
        <div className="w-full h-[150px] bg-slate-500 animate-pulse blur"></div>
        <div className="w-full p-2 border flex flex-col justify-center blur-sm">
          <p className="text-sm">Lorem ipsum dolor. - Lorem, dolor.</p>
          <p className="text-slate-800 text-xs truncate">description</p>
          <p className="text-[10px] text-slate-500 truncate">main site</p>
        </div>
      </div>
      <div className="md:max-w-[350px] w-full px-2 py-3 flex flex-col justify-center blur-sm border animate-pulse">
        <p className="text-sm">Lorem ipsum dolor. - Lorem, dolor.</p>
        <p className="text-blue-500 hover:text-blue-700 text-sm overflow-hidden">
          url to the site
        </p>
      </div>
    </div>
  );
};

export default BlogsCardLoader;
