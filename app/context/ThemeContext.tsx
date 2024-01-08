"use client";

import { ReactNode, createContext, useState } from "react";

export type contextTypeTheme =
  | {
      mode: string;
      toggleMode: () => void;
    }
  | string;

export const ThemeContext = createContext<any>("dark");

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<string>("dark");

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
