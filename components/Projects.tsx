"use client";
import React from "react";
import HighlightHeader from "./ui/HighlightHeader";
import { useTranslations } from "next-intl";
import ProjectCard from "./ui/ProjectCard";
import { projects } from "@/data/project";
import useInView from "@/hooks/useInView";

const Projects = () => {
  const t = useTranslations("HomePage.projects");
  const { ref, isInView } = useInView();
  return (
    <div className="my-30 scroll-mt-16" id="projects">
      <HighlightHeader
        text={t("header")}
        highlightText={t("highlightHeader")}
      />

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-20 py-10  px-30 my-20 "
        ref={ref}
      >
        {projects.map((project, index) => {
          const envenCard = index % 2;
          return (
            <div
              className={`transition-all duration-700 ease-in-out ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : ` ${
                      envenCard ? "translate-x-20" : "-translate-x-20"
                    } opacity-0`
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              key={index}
            >
              <ProjectCard project={project} key={index} t={t} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
