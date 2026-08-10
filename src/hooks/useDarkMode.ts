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
    localStorage.getItem("isDarkMode") === null ||
      localStorage.getItem("isDarkMode") === "true",
  );

  adjustRootCSS();

  const toggle = () => {
    localStorage.setItem("isDarkMode", String(!isDarkMode));
    setIsDarkMode(localStorage.getItem("isDarkMode") === "true");
    adjustRootCSS();
  };
  return [isDarkMode, toggle];
}
