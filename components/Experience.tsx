"use client";
import React from "react";
import HighlightHeader from "./ui/HighlightHeader";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import TimeLineItem from "./ui/TimeLineItem";
import { Button } from "antd";
import useInView from "@/hooks/useInView";
const Experience = () => {
  const t = useTranslations("HomePage.experience");
  const { ref: leftRef, isInView: leftInView } = useInView();
  const { ref: rightRef, isInView: rightInView } = useInView();

  return (
    <div className="my-30 scroll-mt-16" id="experience">
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

      <div className=" relative mt-20 py-10 mb-10    ">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-neutral-300 dark:bg-neutral-700 -translate-x-1/2" />

        <TimeLineItem
          ref={leftRef}
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
          className={`${
            leftInView
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-30"
          }`}
        />

        <TimeLineItem
          ref={rightRef}
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
          className={`${
            rightInView
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-30"
          } delay-100`}
        />
      </div>
      <div className="flex justify-center items-center   ">
        <a
          target="_blank"
          href="Frontend-Developer-Ho-Nguyen-Bao-Tran.pdf"
          className=" cursor-pointer   px-6 py-3 text-lg font-semibold rounded-full bg-highlight text-white  hover:scale-[1.03]"
        >
          {t("download")}
        </a>
      </div>
    </div>
  );
};

export default Experience;
