import React, { useState, useContext } from "react";
import { ThemeContext } from "../../App";
import Header from "../Header";
import PageTitle from "../PageTitle";
import HeaderHamburger from "./components/HeaderHamburger";

const PlayGround = () => {
  const { theme } = useContext(ThemeContext);
  const [hamburger, setHamburger] = useState(false);
  const [positions, setPositions] = useState([]);
  const [rmItem, setRmItem] = useState([]);

  const handleOpenHamburger = () => {
    setHamburger(true);
  };

  const handleHideHamburger = () => {
    setHamburger(false);
  };

  const showPosition = (e) => {
    const { clientX, clientY } = e;
    setPositions([
      ...positions,
      {
        x: clientX,
        y: clientY,
      },
    ]);
  };

  const handleUndo = () => {
    const savedPosition = [...positions];
    // How I made this work ? Well I realised that the popped item is returned, and the savedPosition is updated with position being same. So I didn't have to update position with - setPosition([savedPosition]), instead I had to ...spread through it
    if (savedPosition.length === 0) {
      setButton(true);
      return;
    }
    const removedPosition = savedPosition.pop();
    setRmItem([...rmItem, removedPosition]);
    setPositions([...savedPosition]);
  };

  const handleRedo = () => {
    const savedPosition = rmItem.pop();
    if (!savedPosition) {
      setButton(true);
      return;
    }
    positions.push(savedPosition);
    setPositions([...positions]);
  };

  const handleClearAll = () => {
    const confirmation = confirm("Are you sure?");
    if (confirmation) {
      setPositions([]);
    }
    return;
  };

  return (
    <div className="dark" data-theme={theme}>
      <Header openHamburger={handleOpenHamburger} activePlay={true} />
      {hamburger && <HeaderHamburger hideHamburger={handleHideHamburger} />}
      <PageTitle title="Playground" />
      <div className="p-2 text-center">
        <p>Click or tap on any position to draw with circles</p>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <button
            className={`border p-2 shadow-lg ${
              theme === "dark" ? "shadow-white/20" : "shadow-black/10"
            } active:shadow-none`}
            onClick={handleUndo}
          >
            Undo
          </button>
          <button
            className={`border p-2 shadow-lg ${
              theme === "dark" ? "shadow-white/20" : "shadow-black/10"
            } active:shadow-none`}
            onClick={handleRedo}
          >
            Redo
          </button>
        </div>
        <div>
          <button
            className={`border p-2 shadow-lg ${
              theme === "dark" ? "shadow-white/20" : "shadow-black/10"
            } active:shadow-none text-rose-600`}
            onClick={handleClearAll}
          >
            Clear All
          </button>
        </div>
      </div>
      <div onClick={showPosition} className="h-[100vh]">
        {positions.map((position, i) => (
          <span
            key={i}
            className={`absolute bg-blue-600 rounded-full h-4 w-4 border-4 border-blue-800`}
            style={{
              left: position.x,
              top: position.y,
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PlayGround;
