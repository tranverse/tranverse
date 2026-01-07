"use client";
import React from "react";
import { skills } from "@/data/skills";
import SkillCard from "./ui/SkillCard";
import useInView from "@/hooks/useInView";
import HighlightHeader from "./ui/HighlightHeader";
import { useTranslations } from "next-intl";

const Skills = () => {
  const { ref, isInView } = useInView();
  const t = useTranslations("HomePage.skills");

  return (
    <div
      className={`my-30  transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } `}
      ref={ref}
    >
      <HighlightHeader
        text={t("header")}
        highlightText={t("highlightHeader")}
      />
      <div
        className={`grid grid-cols-4 md:grid-cols-8 justify-center items-center p-10  my-20 `}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ease-out transform ${
              isInView ? "opacity-100 rotate-0" : "opacity-0 rotate-12"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
