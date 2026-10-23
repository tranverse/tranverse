"use client";

import React from "react";
import { useTranslations } from "next-intl";
import TimeLineItem from "./ui/TimeLineItem";
import useInView from "@/hooks/useInView";

type ExperienceKey = "teknix" | "wecamp" | "starcamp";

type ExperienceEntryProps = {
  itemKey: ExperienceKey;
  side: "left" | "right";
};

function ExperienceEntry({ itemKey, side }: ExperienceEntryProps) {
  const t = useTranslations("HomePage.experience");
  const { ref, isInView } = useInView();

  return (
    <TimeLineItem
      ref={ref}
      icon={itemKey === "wecamp" ? "hugeicons:book-open-01" : "hugeicons:work"}
      side={side}
      title={t(`details.${itemKey}.name`)}
      subtitle={t(`details.${itemKey}.position`)}
      description={
        <>
          <p className="font-medium">{t(`details.${itemKey}.time`)}</p>
          <p className="mt-2">{t(`details.${itemKey}.description`)}</p>
        </>
      }
      className={`transition-all duration-700 ease-out ${
        isInView
          ? "opacity-100 translate-x-0"
          : side === "left"
            ? "opacity-0 -translate-x-30"
            : "opacity-0 translate-x-30"
      }`}
    />
  );
}

const Experience = () => {
  const t = useTranslations("HomePage.experience");

  const { ref: universityRef, isInView: universityInView } = useInView();

  return (
    <div
      className="lg:my-30 my-20 px-4 scroll-mt-16 overflow-x-hidden"
      id="experience"
    >
      {/* HEADER */}
      <div className="font-bold text-center sm:text-4xl text-xl">
        {t("header1")}{" "}
        <span className="text-highlight uppercase">
          {t("highlightHeader1")}{" "}
        </span>
        <span>{t("header2")} </span>
        <span className="text-highlight uppercase">
          {t("highlightHeader2")}
        </span>
      </div>

      {/* TIMELINE */}
      <div className="relative mt-10 py-10 mb-10 overflow-visible">
        {/* Center timeline line */}
        <div className="block absolute left-1/2 top-0 h-full w-0.5 bg-neutral-300 dark:bg-neutral-700 -translate-x-1/2" />

        {/* UNIVERSITY */}
        <TimeLineItem
          ref={universityRef}
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
          className={`transition-all duration-700 ease-out ${
            universityInView
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-30"
          }`}
        />

        {/* TEKNIX */}
        <ExperienceEntry itemKey="teknix" side="right" />

        {/* NAB WECAMP */}
        <ExperienceEntry itemKey="wecamp" side="left" />

        {/* NAB STARCAMP */}
        <ExperienceEntry itemKey="starcamp" side="right" />
      </div>

      {/* DOWNLOAD CV */}
      {/* <div className="flex justify-center items-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/Fontend-Devloper-Ho-Nguyen-Bao-Tran-CV.pdf"
          className="cursor-pointer px-6 py-3 text-lg font-semibold rounded-full bg-highlight text-white hover:scale-[1.03] transition-transform"
        >
          {t("download")}
        </a>
      </div> */}
    </div>
  );
};

export default Experience;
