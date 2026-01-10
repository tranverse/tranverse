"use client";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import NavItem from "./nav/NavItem";
import ThemeToggle from "./ui/ThemeToggle";
import { useTranslations } from "next-intl";
import { Button, Dropdown, MenuProps, Space } from "antd";
import LanguageSwitcher from "./ui/LanguageSwitcher";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { FaArrowLeft } from "react-icons/fa";
const Header = () => {
  const t = useTranslations("HomePage.header");
  const pathName = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems: MenuProps["items"] = [
    {
      key: "home",
      label: (
        <NavItem
          title={t("nav.home")}
          href="#home"
          onClick={() => setMenuOpen(false)}
        />
      ),
    },
    {
      key: "projects",
      label: (
        <NavItem
          title={t("nav.projects")}
          href="#projects"
          onClick={() => setMenuOpen(false)}
        />
      ),
    },
    {
      key: "about",
      label: (
        <NavItem
          title={t("nav.about")}
          href="#about"
          onClick={() => setMenuOpen(false)}
        />
      ),
    },
    {
      key: "contact",
      label: (
        <NavItem
          title={t("nav.contact")}
          href="#contact"
          onClick={() => setMenuOpen(false)}
        />
      ),
    },
  ];
  return (
    <div
      className="flex  justify-between   items-center text-primary lg:px-10 px-5  
     fixed top-0 right-0 left-0 z-100 h-16 "
    >
      {pathName === "/" && (
        <div className="lg:hidden">
          <Dropdown
            menu={{ items: menuItems }}
            trigger={["click"]}
            open={menuOpen}
            onOpenChange={(flag) => setMenuOpen(flag)}
          >
            <Icon
              icon="hugeicons:menu-01"
              className="text-foreground cursor-pointer"
              fontSize={28}
              strokeWidth={1.5}
            />
          </Dropdown>
        </div>
      )}

      <div className="text-foreground font-semibold cursor-pointer lg:block">
        {pathName === "/" ? (
          <span className="lg:block hidden ">Tran's Portfolio</span>
        ) : (
          <FaArrowLeft fontSize={24} onClick={() => router.push("/")} />
        )}
      </div>

      <div className="lg:flex hidden gap-10   ">
        {pathName === "/" ? (
          <>
            <NavItem title={t("nav.home")} href="#" />
            <NavItem title={t("nav.projects")} href="#projects" />
            <NavItem title={t("nav.about")} href="#about" />
            <NavItem title={t("nav.contact")} href="#contact" />
          </>
        ) : (
          ""
        )}
      </div>

      <div className="flex items-center gap-4 justify-center  ">
        <ThemeToggle />
        <LanguageSwitcher t={t} />
        <a href="https://github.com/tranverse" target="_blank">
          <FaGithub
            className="text-foreground cursor-pointer hover:scale-110"
            fontSize={24}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
