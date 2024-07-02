import React from "react";
import { FaTimes } from "react-icons/fa";

const AchievementDetails = ({ achievement, onClose }) => {
  if (!achievement) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[9999] p-2">
      <div className="bg-white text-black rounded shadow-lg relative w-full md:w-[70%] overflow-auto divide-y">
        <button
          className="absolute top-2 right-2 text-rose-500"
          onClick={onClose}
        >
          <FaTimes size={24} />
        </button>
        <div className="flex md:gap-4 items-center md:justify-center flex-col-reverse md:flex-row w-full">
          <p className="md:w-[50%] w-[100%] h-auto border rounded md:border-none p-1">
            <img src={achievement.img} alt={achievement.title} />
          </p>

          <div className="flex flex-col md:w-[50%] w-[100%] p-2">
            <h2 className="font-semibold mb-1">{achievement.title}</h2>
            <p className="text-sm">{achievement.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementDetails;
