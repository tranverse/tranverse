import React from "react";
import { SkillType } from "@/data/skills";
import { Icon } from "@iconify/react";

type Props = {
  skill: SkillType;
};

const SkillCard = ({ skill }: Props) => {
  return (
    <div className="my-10 cursor-pointer ">
      <div className="text-center flex flex-col items-center font-semibold ">
        <Icon
          icon={skill.icon}
          fontSize={36}
          className="hover-spin-once transition-transform"
        />
        <span>{skill.name}</span>
      </div>
    </div>
  );
};

export default SkillCard;
