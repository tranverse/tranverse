import React, { forwardRef } from "react";
import { Button } from "./moving-border";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";

type TimeLineItemProps = {
  icon: string;
  side: "left" | "right";
  title: string;
  subtitle: string;
  description: React.ReactNode;
  className?: string;
};

const TimeLineItem = forwardRef<HTMLDivElement, TimeLineItemProps>(
  ({ icon, side, title, subtitle, description, className }, ref) => {
    const t = useTranslations("HomePage.experience");
    const isLeft = side === "left";

    return (
      <div
        className={`relative xl:flex xl:flex-row flex flex-col w-full max-w-full box-border 
           items-center xl:mb-20 mb-24  mt-10   font-semibold transition-all ease-in-out duration-1000 ${className}`}
        ref={ref}
      >
        <div
          className={`xl:w-1/2  xl:px-6     ${
            isLeft ? "text-right xl:pr-12" : "text-left xl:pl-12 sm:ml-auto"
          }`}
        >
          <Button
            duration={Math.floor(Math.random() * 9900) + 9900}
            borderRadius="1.75rem"
            className="border flex-col p-6 hover:scale-[1.02] transition w-full xl:w-150 flex-1 border-neutral-200 dark:border-slate-800"
            style={{
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
          >
            <h3 className="text-highlight font-bold xl:text-xl text-sm  uppercase">
              {title}
            </h3>
            <p className="xl:text-sm text-neutral-500 mb-2 text-[13px] ">
              {subtitle}
            </p>
            <div className="xl:text-sm leading-relaxed  text-[13px]">
              {description}
            </div>
          </Button>
        </div>

        <div className="absolute xl:left-1/2 xl:-translate-x-1/2 z-10 translate-x-0  xl:top-auto  -top-14     ">
          <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center shadow-lg">
            <Icon icon={icon} fontSize={22} />
          </div>
        </div>
      </div>
    );
  }
);

TimeLineItem.displayName = "TimeLineItem";

export default TimeLineItem;
