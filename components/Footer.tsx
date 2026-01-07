import React from "react";
import { Icon } from "@iconify/react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-28 border-t border-white/10">
      <div
        className="
          max-w-6xl mx-auto px-6 py-6
          flex flex-col md:flex-row
          items-center justify-between
          gap-4
          text-xs md:text-sm
        "
      >
        {/* Left */}
        <p className="text-white/50 tracking-wide">© 2026 Trân Hồ</p>

        {/* Center */}
        <p className="text-white/40 tracking-wide">
          Made with{" "}
          <span className="text-highlight font-medium hover:text-white transition">
            Next.js
          </span>{" "}
          &{" "}
          <span className="text-highlight font-medium hover:text-white transition">
            Tailwind CSS
          </span>
        </p>

        {/* Right */}
        <div className="flex items-center gap-5">
          {[
            {
              icon: "hugeicons:github",
              link: "https://github.com/tranverse",
            },
            {
              icon: "hugeicons:mail-02",
              link: "mailto:tranhonguyen.work@gmail.com",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white/40
                hover:text-highlight
                transition-all duration-300
                hover:scale-110
                hover:drop-shadow-[0_0_14px_rgba(168,85,247,0.6)]
              "
            >
              <Icon icon={item.icon} width={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
