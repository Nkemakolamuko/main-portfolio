import React, { useState } from "react";
// import img from "../../../assets/nvn.jpg";
import { FaInfoCircle } from "react-icons/fa";

const AchievementCard = ({ alt, achievement, onShowDetails, img }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full h-auto border rounded overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img} alt={alt} className="h-[400px] w-full object-cover" />
      <div
        className={`absolute top-2 right-2 m-2 shadow-lg rounded-full group-hover:block block md:hidden transition-all duration-300`}
      >
        <FaInfoCircle
          size={24}
          className="cursor-pointer text-[#F66B0E] active:scale-95"
          onClick={() => onShowDetails(achievement)}
        />
      </div>
    </div>
  );
};

export default AchievementCard;
