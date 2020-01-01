import React, {createContext, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import * as themes from "../themes";

const themeNames = Object.keys(themes);
const [initialTheme] = themeNames;

const ThemeContext = createContext();

export const useThemeService = () => {
  return useContext(ThemeContext);
};

export function ThemeService({ children }) {
  const [themeName, setThemeName] = useState(initialTheme);
  const theme = themes[themeName];
  const ctx = {
    themeName,
    themeNames,
    setTheme: setThemeName,
  };

  return (
    <ThemeContext.Provider value={ctx}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}