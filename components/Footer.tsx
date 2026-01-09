import React from "react";
import { Icon } from "@iconify/react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-28  " id="footer">
      <div>
        <svg
          viewBox="0 280 900 120"
          preserveAspectRatio="none"
          className="w-full h-8"
        >
          <path
            d="M0 319L21.5 325C43 331 86 343 128.8 338.5C171.7 334 214.3 313 257.2 313.8C300 314.7 343 337.3 385.8 346.7C428.7 356 471.3 352 514.2 338.8C557 325.7 600 303.3 642.8 295.2C685.7 287 728.3 293 771.2 300C814 307 857 315 878.5 319L900 323"
            fill="none"
            stroke="#a362ff"
            strokeWidth={6}
            strokeLinecap="round"
            strokeLinejoin="miter"
          />
        </svg>
      </div>

      <div
        className="
          max-w-6xl mx-auto px-6 py-6
          flex flex-col md:flex-row
          items-center justify-between
          gap-4 
          text-xs md:text-sm
        "
      >
        <p className=" tracking-wide">© 2026 Trân Hồ</p>

        <p className=" tracking-wide">
          Made with{" "}
          <span className="text-highlight font-medium hover:text-white transition">
            Next.js
          </span>{" "}
          &{" "}
          <span className="text-highlight font-medium hover:text-white transition">
            Tailwind CSS
          </span>
        </p>

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
