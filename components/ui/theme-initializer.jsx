"use client";

import { useEffect } from "react";

export function ThemeInitializer() {
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("theme");
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const isDark = storedTheme ? storedTheme === "dark" : systemDark;

      document.documentElement.classList.toggle("dark", isDark);
    } catch (error) {}
  }, []);

  return null;
}
