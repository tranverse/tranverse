import { ProjectType, TechType } from "@/data/project";
import { Icon } from "@iconify/react";
import { useLocale } from "next-intl";
import React from "react";
import { FaGithub, FaLocationArrow } from "react-icons/fa";
import { Meteors } from "./meteors";
import { Tooltip } from "antd";
type Props = {
  project: ProjectType;
};
type Locale = "vi" | "en";

const ProjectCard = ({ project }: Props) => {
  const locale = useLocale() as Locale;
  return (
    <div className="relative w-full max-w-xl">
      <div
        className="absolute inset-0 h-full w-full scale-[0.85] transform rounded-full bg-red-500 
          bg-linear-to-r from-violet-600 via-purple-600 to-fuchsia-600 blur-3xl"
      />
      <div className="relative flex h-full flex-col gap-4  items-start justify-end overflow-hidden rounded-2xl  bg-accent px-4 py-8 shadow-xl">
        <div className=" flex justify-center  ">
          <img src={project.img} alt="" className="rounded-2xl  object-cover" />
        </div>
        <div className="font-bold text-xl ">{project.name[locale]}</div>
        {/* <div>{project.description[locale]}</div> */}
        <div className=" flex justify-between gap-2 w-full">
          <div className="flex gap-2">
            {project.tech.map((tech: TechType) => (
              <Tooltip
                title={tech.name}
                mouseLeaveDelay={0}
                mouseEnterDelay={0}
              >
                <div
                  key={tech.id}
                  className="rounded-full border p-1 flex items-center justify-center w-10 h-10 cursor-pointer "
                >
                  <Icon icon={tech.icon} fontSize={20} color="" />
                </div>
              </Tooltip>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 ">
            <FaGithub className="text-foreground cursor-pointer hover:scale-110" />
            <span className="cursor-pointer text-highlight  font-semibold flex items-center justify-center gap-2  ">
              Live demo
              <FaLocationArrow className="" color="#CBACF9" />
            </span>
          </div>
        </div>
        {/* Meaty part - Meteor effect */}
        {/* <Meteors number={20} /> */}
      </div>
    </div>
  );
};

export default ProjectCard;
