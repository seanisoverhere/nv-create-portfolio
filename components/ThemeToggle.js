import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Toggle
        icons={{
          checked: <MdLightMode className="text-white -mt-0.5" size={14} />,
          unchecked: <MdDarkMode className="text-white -mt-0.5" size={14} />,
        }}
        name="themeToggler"
        className="light-toggle"
        defaultChecked={theme === "light"}
        onChange={toggleTheme}
      />
    </>
  );
};

export default ThemeToggle;
