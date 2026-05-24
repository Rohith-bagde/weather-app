import {
  useContext,
} from "react";

import {
  ThemeContext,
} from "../context/ThemeContext";

export default function ThemeToggle() {
  const {
    darkMode,
    toggleTheme,
  } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="
      bg-blue-600
      px-4
      py-2
      rounded-lg
      "
    >
      {darkMode
        ? "☀️ Light"
        : "🌙 Dark"}
    </button>
  );
}