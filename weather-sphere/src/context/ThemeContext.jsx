import {
  createContext,
  useState,
  useEffect,
} from "react";

export const ThemeContext =
  createContext();

export const ThemeProvider = ({
  children,
}) => {
  const [darkMode, setDarkMode] =
    useState(true);

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "theme"
      );

    if (saved) {
      setDarkMode(
        saved === "dark"
      );
    }
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;

    setDarkMode(next);

    localStorage.setItem(
      "theme",
      next ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};