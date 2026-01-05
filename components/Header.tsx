"use client";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import React from "react";
import { FaGithub } from "react-icons/fa";
import NavItem from "./nav/NavItem";
import ThemeToggle from "./ui/ThemeToggle";
import { useTranslations } from "next-intl";
import { Button, Dropdown, MenuProps, Space } from "antd";
import LanguageSwitcher from "./ui/LanguageSwitcher";
const Header = () => {
  const t = useTranslations("HomePage.header");

  return (
    <div className="flex justify-between items-center text-primary px-10 py-2   fixed top-0 right-0 left-0 z-[100]">
      <div className="text-foreground font-semibold  cursor-pointer ">
        Tran's Portfolio
      </div>

      <div className="flex gap-10 ">
        <NavItem title={t("nav.home")} />
        <NavItem title={t("nav.projects")} />
        <NavItem title={t("nav.about")} />
        <NavItem title={t("nav.contact")} />
      </div>

      <div className="flex items-center gap-4 justify-center  ">
        <ThemeToggle />
        <LanguageSwitcher t={t} />
        <div>
          <a href="https://github.com/tranverse" target="_blank">
            <FaGithub
              className="text-foreground cursor-pointer hover:scale-110"
              fontSize={24}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
