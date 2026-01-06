import React from "react";
import HighlightHeader from "./ui/HighlightHeader";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import { Button } from "./ui/moving-border";
import TimeLineItem from "./ui/TimeLineItem";
const Experience = () => {
  const t = useTranslations("HomePage.experience");
  return (
    <div className="my-30">
      <div className="font-bold text-center text-4xl  ">
        {t("header1")}{" "}
        <span className="text-highlight uppercase">
          {t("highlightHeader1")}{" "}
        </span>
        <span>{t("header2")} </span>
        <span className="text-highlight uppercase">
          {t("highlightHeader2")}
        </span>
      </div>

      <div className=" relative my-20 py-10    ">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-neutral-300 dark:bg-neutral-700 -translate-x-1/2" />

        <TimeLineItem
          description={
            <>
              <p>{t("details.university.major")}</p>
              <p>{t("details.university.gpa")}</p>
            </>
          }
          icon="hugeicons:mortarboard-02"
          side="left"
          subtitle={t("details.university.time")}
          title={t("details.university.name")}
        />

        <TimeLineItem
          icon="hugeicons:work"
          side="right"
          title={t("details.company.name")}
          subtitle={t("details.company.position")}
          description={
            <>
              <p>{t("details.company.time")}</p>
              <p>{t("details.company.description")}</p>
            </>
          }
        />
      </div>
    </div>
  );
};

export default Experience;
