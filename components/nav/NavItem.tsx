import React from "react";
type Props = {
  title: string;
  href: string;
};
const NavItem = ({ title, href }: Props) => {
  return (
    <div
      className="text-primary-foreground cursor-pointer font-semibold text-lg p-2 
     rounded-xl  hover:shadow-[0_0_12px_rgba(120,80,255,0.6)] duration-300"
    >
      <a href={href}>{title}</a>
    </div>
  );
};

export default NavItem;
