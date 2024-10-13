import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

// Custom hook to access ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
