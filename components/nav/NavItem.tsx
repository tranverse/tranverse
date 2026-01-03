import React from "react";
type Props = {
  title: string;
};
const NavItem = ({ title }: Props) => {
  return (
    <div
      className="text-primary-foreground cursor-pointer font-semibold text-lg p-2 
     rounded-xl  hover:shadow-[0_0_12px_rgba(120,80,255,0.6)] duration-300"
    >
      {title}
    </div>
  );
};

export default NavItem;
