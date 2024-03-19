import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("");

export const ThemeProvider = ({ children }) => {
  const [theme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
