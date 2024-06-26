import React, { useContext, useState } from "react";
import Header from "../Header";
import HeaderHamburger from "./components/HeaderHamburger";
import PageTitle from "../PageTitle";
import img from "../../assets/nvn.jpg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import { ThemeContext } from "../../App";
import AchievementCard from "./components/AchievementCard";
import AchievementDetails from "./components/AchievementDetails";
import Footer from "../Footer";

const achievementsData = [
  {
    id: 1,
    title: "Certified Frontend Developer",
    details: "Certified as a Frontend Developer upon graduation from TIIDELab.",
    img: img3,
  },
  {
    id: 2,
    title: "Most Outstanding Team Member",
    details:
      "Awarded for the mot outstanding performance in my team for Frontend Development at TIIDELab.",
    img: img2,
  },
  {
    id: 3,
    title: "Art Competition",
    details: "Won the annual High School art competition.",
    img: img,
  },
];

const Achievements = () => {
  const { theme } = useContext(ThemeContext);
  const [hamburger, setHamburger] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const handleOpenHamburger = () => {
    setHamburger(true);
  };

  const handleHideHamburger = () => {
    setHamburger(false);
  };

  const handleShowDetails = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const handleCloseDetails = () => {
    setSelectedAchievement(null);
  };

  return (
    <div className="dark" data-theme={theme}>
      <Header openHamburger={handleOpenHamburger} activeAchievement={true} />
      {hamburger && <HeaderHamburger hideHamburger={handleHideHamburger} />}
      <PageTitle title="Achievement" />

      <div className="grid md:grid-cols-3 grid-cols-1 w-full md:w-[80%] mx-auto pb-24 gap-4 p-2">
        {achievementsData.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            alt={achievement.title}
            img={achievement.img}
            achievement={achievement}
            onShowDetails={handleShowDetails}
          />
        ))}
      </div>

      {selectedAchievement && (
        <AchievementDetails
          achievement={selectedAchievement}
          onClose={handleCloseDetails}
        />
      )}

      <Footer />
    </div>
  );
};

export default Achievements;
