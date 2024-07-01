import { useState, createContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Experience from "./components/pages/Experience";
import Resume from "./components/pages/Resume";
import Blog from "./components/pages/Blog";
import Skills from "./components/pages/Skills";
import PythonProjects from "./components/pages/components/projectPages/PythonProjects";
import ReactProjects from "./components/pages/components/projectPages/ReactProjects";
import JavaScriptProjects from "./components/pages/components/projectPages/JavaScriptProjects";
import AllProjects from "./components/pages/components/projectPages/AllProjects";
import PlayGround from "./components/pages/PlayGround";
import Education from "./components/pages/Education";
import Achievements from "./components/pages/Achievements";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("theme"));
    setTheme(savedTheme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/all-projects" element={<AllProjects />} />
          <Route
            path="/projects/python-projects"
            element={<PythonProjects />}
          />
          <Route path="/projects/react-projects" element={<ReactProjects />} />
          <Route
            path="/projects/javascript-projects"
            element={<JavaScriptProjects />}
          />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/articles" element={<Blog />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/achievement" element={<Achievements />} />
          <Route path="/playground" element={<PlayGround />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
