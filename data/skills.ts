export type SkillType = {
  id: string;
  name: string;
  icon: string;
};

export const skills: SkillType[] = [
  // Frontend
  { id: "react", name: "React", icon: "logos:react" },
  { id: "javascript", name: "JavaScript", icon: "logos:javascript" },
  { id: "html", name: "HTML5", icon: "logos:html-5" },
  { id: "css", name: "CSS3", icon: "logos:css-3" },
  { id: "tailwind", name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { id: "antd", name: "Ant Design", icon: "logos:ant-design" },

  // Backend
  { id: "java", name: "Java", icon: "logos:java" },
  { id: "springboot", name: "Spring Boot", icon: "logos:spring-icon" },

  // Database
  { id: "mysql", name: "MySQL", icon: "logos:mysql" },

  // Tools
  { id: "git", name: "Git", icon: "logos:git-icon" },
  { id: "figma", name: "Figma", icon: "logos:figma" },

  // State Management / Others
  { id: "redux", name: "Redux", icon: "logos:redux" },
];
