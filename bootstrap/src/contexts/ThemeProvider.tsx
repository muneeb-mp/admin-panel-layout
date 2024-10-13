import React, { createContext, useState, useEffect } from "react";

/**
 * NOTE: Next.js project will require "use client"
 * 1. Define the available themes
 * 2. Create the ThemeContext
 * 3. Set attribute data-my-theme to html tag
 * 4. Create a hook to access the ThemeContext
 * 5. Provide the ThemeProvider with the children and values
 */

const themes = {
  light: "light",
  dark: "dark",
  amoled: "amoled",
};

const ThemeContext = createContext<
  | {
      theme: string;
      setTheme: (theme: string) => void;
    }
  | undefined
>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(themes.light); // Default to light theme

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-my-theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
