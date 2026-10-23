export type SkillType = {
  id: string;
  name: string;
  icon: string;
};

export const skills: SkillType[] = [
  // Frontend
  { id: "java", name: "Java", icon: "logos:java" },
  { id: "springboot", name: "Spring Boot", icon: "logos:spring-icon" },
  { id: "javascript", name: "JavaScript", icon: "logos:javascript" },
  { id: "react", name: "ReactJS", icon: "logos:react" },
  { id: "javascript", name: "JavaScript", icon: "logos:javascript" },
  { id: "typescript", name: "TypeScript", icon: "logos:typescript-icon" },

  { id: "html", name: "HTML5", icon: "logos:html-5" },
  { id: "css", name: "CSS3", icon: "logos:css-3" },
  { id: "tailwind", name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },

  // Backend
  // Database
  { id: "mysql", name: "MySQL", icon: "logos:mysql" },
  { id: "postgresql", name: "PostgreSQL", icon: "logos:postgresql" },
  { id: "docker", name: "Docker", icon: "logos:docker-icon" },
  { id: "redis", name: "Redis", icon: "logos:redis" },
  // Tools
  { id: "git", name: "Git", icon: "logos:git-icon" },

  // State Management / Others
  { id: "redux", name: "Redux", icon: "logos:redux" },
];
