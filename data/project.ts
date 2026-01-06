export type LocalizedText = {
  vi: string;
  en: string;
};

export type ProjectType = {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  tech: TechType[];
  img: string;
  video?: string;
  link?: string;
  github?: string;
  role?: LocalizedText;
  duration?: string;
};

export type TechType = {
  id: string;
  name: string;
  icon: string;
};
export const techs: TechType[] = [
  { id: "react", name: "ReactJS", icon: "logos:react" },
  { id: "spring", name: "Spring Boot", icon: "logos:spring-icon" },
  { id: "mysql", name: "MySQL", icon: "logos:mysql" },
  { id: "postgres", name: "PostgreSQL", icon: "logos:postgresql" },
  { id: "docker", name: "Docker", icon: "logos:docker-icon" },
  { id: "git", name: "Git", icon: "logos:git-icon" },
  { id: "fastify", name: "Fastify", icon: "logos:fastify-icon" },
  { id: "mapbox", name: "Mapbox", icon: "logos:mapbox-icon" },
];

export const projects: ProjectType[] = [
  {
    id: "tekvault",
    name: {
      en: "Internal Secret Management Platform (Fork of Infisical OSS)",
      vi: "Nền tảng quản lý secret nội bộ (Fork từ Infisical OSS)",
    },
    duration: "2024",
    link: "https://tekvault.teknix.services",
    role: {
      vi: "Backend / Fullstack Developer",
      en: "Backend / Fullstack Developer",
    },
    img: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767587831/Screenshot_2026-01-05_113639_emwqzt.png",
    description: {
      vi: `
    Nền tảng quản lý secret nội bộ, fork từ Infisical OSS.
    - Tự động tạo referenced secret key khi giá trị trùng với secret ở service khác.
    - Hỗ trợ chỉnh sửa, xóa và đồng bộ giá trị giữa các secret liên kết.
    - Xây dựng RBAC để kiểm soát quyền truy cập và thao tác trên secret.
      `,
      en: `
    Internal secret management platform forked from Infisical OSS.
    - Implemented referenced secret key creation with auto-sync across services.
    - Supported edit, delete, and update propagation for linked secrets.
    - Added RBAC-based permission control for secure secret access.
      `,
    },
    tech: [
      techs.find((t) => t.id === "fastify")!,
      techs.find((t) => t.id === "react")!,
      techs.find((t) => t.id === "postgres")!,
      techs.find((t) => t.id === "docker")!,
      techs.find((t) => t.id === "git")!,
    ],
  },

  {
    id: "taxi-management",
    name: {
      en: "Taxi Booking Management System",
      vi: "Hệ thống quản lý đặt xe taxi",
    },
    duration: "10/2024 – 12/2024",
    github: "https://github.com/tranverse/taxi-managementsystem.git",
    role: {
      vi: "Frontend Developer | Nhóm 4 người",
      en: "Frontend Developer | Team size: 4",
    },
    img: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767587831/Screenshot_2026-01-05_113639_emwqzt.png",

    description: {
      vi: `
    Hệ thống quản lý đặt xe trực tuyến.
    - Quản lý tài xế, phương tiện, khách hàng và chuyến đi.
    - Theo dõi chuyến đi realtime và mô phỏng chuyển động xe trên Mapbox.
    - Giao diện phân quyền cho Admin, Driver và Customer.
    - Tích hợp tính cước và điểm thưởng khách hàng.
      `,
      en: `
    Web-based taxi booking and management system.
    - Managed drivers, vehicles, customers, and trips.
    - Implemented real-time ride tracking with WebSocket and Mapbox.
    - Built role-based UI for Admin, Driver, and Customer.
    - Integrated fare calculation and loyalty points.
      `,
    },
    tech: [
      techs.find((t) => t.id === "spring")!,
      techs.find((t) => t.id === "react")!,
      techs.find((t) => t.id === "mysql")!,
      techs.find((t) => t.id === "mapbox")!,
    ],
  },

  {
    id: "ecommerce",
    name: {
      en: "E-commerce Website",
      vi: "Website thương mại điện tử",
    },
    duration: "06/2025 – 08/2025",
    github: "https://github.com/tranverse/ecommerce-website.git",
    role: {
      vi: "Fullstack Developer | Cá nhân",
      en: "Fullstack Developer | Solo",
    },
    img: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767587831/Screenshot_2026-01-05_113639_emwqzt.png",
    description: {
      vi: `
    Website thương mại điện tử.
    - Xây dựng catalog sản phẩm, giỏ hàng và đặt hàng.
    - Phát triển dashboard admin quản lý sản phẩm, đơn hàng và người dùng.
    - Xây dựng API backend với Spring Boot.
    - Phân quyền Admin và Customer.
      `,
      en: `
    E-commerce platform with product catalog and order management.
    - Built shopping cart and checkout features.
    - Developed admin dashboard for system management.
    - Implemented backend APIs with Spring Boot.
    - Role-based access for Admin and Customer.
      `,
    },
    tech: [
      techs.find((t) => t.id === "spring")!,
      techs.find((t) => t.id === "react")!,
      techs.find((t) => t.id === "mysql")!,
    ],
  },
];
