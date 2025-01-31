import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getInitialTheme } from "@/utils/getInitialTheme";
import { useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">(
    "theme",
    getInitialTheme()
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, setTheme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
