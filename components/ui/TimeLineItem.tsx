import React from "react";
import { Button } from "./moving-border";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";

type TimeLineItemProps = {
  icon: string;
  side: "left" | "right";
  title: string;
  subtitle: string;
  description: React.ReactNode;
};
const TimeLineItem = ({
  icon,
  side,
  title,
  subtitle,
  description,
}: TimeLineItemProps) => {
  const t = useTranslations("HomePage.experience");
  const isLeft = side === "left";

  return (
    <div className="relative flex items-center mb-20 font-semibold ">
      <div
        className={`w-1/2 px-6 ${
          isLeft ? "text-right pr-12" : "text-left pl-12 ml-auto"
        }`}
      >
        <Button
          duration={Math.floor(Math.random() * 9900) + 9900}
          borderRadius="1.75rem"
          className="   border  flex-col 
          p-6  hover:scale-[1.02] transition w-150 flex-1  border-neutral-200 dark:border-slate-800 "
          style={{
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
        >
          <h3 className="text-highlight font-bold text-xl uppercase">
            {title}
          </h3>
          <p className="text-sm text-neutral-500 mb-2">{subtitle}</p>
          <div className="text-sm leading-relaxed">{description}</div>
        </Button>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 z-10">
        <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center shadow-lg">
          <Icon icon={icon} fontSize={22} className="" />
        </div>
      </div>
    </div>
  );
};

export default TimeLineItem;
