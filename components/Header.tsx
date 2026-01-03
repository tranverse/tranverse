"use client";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import React from "react";
import { FaGithub } from "react-icons/fa";
import NavItem from "./nav/NavItem";
import ThemeToggle from "./ThemeToggle";
const Header = () => {
  return (
    <div className="flex justify-between items-center text-primary px-10 py-2 border  ">
      <div className="text-foreground font-semibold  cursor-pointer ">
        Tran's Portfolio
      </div>

      <div className="flex gap-10 ">
        <NavItem title="Home" />
        <NavItem title="Projects" />
        <NavItem title="About" />
        <NavItem title="Contact" />
      </div>

      <div className="flex items-center gap-4 justify-center  ">
        <ThemeToggle />
        <Icon
          className="hover:scale-110 cursor-pointer"
          icon="twemoji:flag-united-states"
          color="#ffffff"
          strokeWidth={1.5}
          fontSize={24}
        />
        <FaGithub
          className="text-foreground cursor-pointer hover:scale-110"
          fontSize={24}
        />
      </div>
    </div>
  );
};

export default Header;
