"use client";

import { useTheme } from "next-themes";

const Navigation = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="bg-light dark:bg-black">
      Navigation
      <div>
        {currentTheme === "dark" ? (
          <button onClick={() => setTheme("light")}>light</button>
        ) : (
          <button onClick={() => setTheme("dark")}>dark</button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
