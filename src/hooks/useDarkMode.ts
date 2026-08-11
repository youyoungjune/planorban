import { useState } from "react";

export default function useDarkMode(): [boolean, () => void] {
  const adjustRootCSS = () => {
    const root: HTMLElement | null = document.getElementById("root");
    if (isDarkMode) {
      root!.className = "flex flex-col bg-black text-white";
    } else {
      root!.className = "flex flex-col bg-white text-black";
    }
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem("PLANORBAN_DARK_MODE") === null ||
      localStorage.getItem("PLANORBAN_DARK_MODE") === "true",
  );

  adjustRootCSS();

  const toggle = () => {
    localStorage.setItem("PLANORBAN_DARK_MODE", String(!isDarkMode));
    setIsDarkMode(localStorage.getItem("PLANORBAN_DARK_MODE") === "true");
    adjustRootCSS();
  };
  return [isDarkMode, toggle];
}
