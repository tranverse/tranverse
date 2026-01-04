"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useRef } from "react";
import { Spotlight } from "./ui/spotlight";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { DotLottie } from "@lottiefiles/dotlottie-web";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Banner = () => {
  const t = useTranslations("HomePage.banner");
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;

    const dotLottie = new DotLottie({
      autoplay: true,
      loop: true,
      canvas: containerRef.current,
      src: "developer_skills.json",
    });

    return () => dotLottie.destroy();
  }, []);

  return (
    <div className="relative ">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Spotlight
          className="h-[80vh] w-[50vw] top-50 left-full"
          fill="indigo"
        />
        <Spotlight className=" md:-left-32  h-screen" fill="white" />

        <Spotlight className="left-80 top-40 h-[65vh] " fill="blue" />

        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-primary"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 z-10 relative h-100 items-center">
        <div className="flex justify-center">
          <canvas
            id="dotlottie-canvas"
            style={{ width: "400px", height: "400px" }}
            ref={containerRef}
          ></canvas>
        </div>
        <div className="md:text-3xl text-xl font-bold text-center">
          <div className=" flex justify-center ">
            <span className="whitespace-pre">Hi! I'm </span>
            <div className="text-[#A362FF]">
              <Typewriter
                options={{
                  strings: [t("greeting1"), t("greeting2")],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <h1>{t("motto")}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
