import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import React from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className="flex cursor-pointer text-foreground transition-colors hover:scale-110"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icon
        icon={theme === "dark" ? "hugeicons:moon-02" : "hugeicons:sun-01"}
        fontSize={24}
        strokeWidth={1.5}
      />
    </div>
  );
};

export default ThemeToggle;
