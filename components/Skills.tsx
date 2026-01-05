"use client";
import React from "react";
import { skills } from "@/data/skills";
import SkillCard from "./ui/SkillCard";
import useInView from "@/hooks/useInView";

const Skills = () => {
  const { ref, isInView } = useInView();
  return (
    <div
      className={`my-30  transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } `}
      ref={ref}
    >
      <div className="font-bold text-center text-2xl">
        I constantly try to imporve{" "}
        <span className="text-highlight  uppercase">My tech stack</span>
      </div>
      <div
        className={`grid grid-cols-4 md:grid-cols-8 justify-center items-center p-10  my-20 `}
      >
        {skills.map((skill, index) => (
          <div
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
