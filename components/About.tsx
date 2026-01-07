"use client";
import { useTranslations } from "next-intl";
import React from "react";
import useInView from "@/hooks/useInView";

const About = () => {
  const t = useTranslations("HomePage.about");

  const { ref: imgRef, isInView: imgInView } = useInView();
  const { ref: textRef, isInView: textInView } = useInView();

  return (
    <div className="my-30">
      <div className="font-bold text-center text-4xl tracking-wide leading-tight">
        {t("title")}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-20 p-10">
        <div
          ref={imgRef}
          className={`
            flex justify-center
            transition-all duration-1000 ease-out
            will-change-transform will-change-opacity
            ${
              imgInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-24"
            }
          `}
        >
          <img
            className="object-cover rounded-2xl"
            width={300}
            height={400}
            src="https://res.cloudinary.com/dqobwpob4/image/upload/v1767712216/IMG_20250911_095352_dxz6ct.jpg"
            alt="Tran Ho"
          />
        </div>

        <div
          ref={textRef}
          className={`
            font-semibold flex flex-col gap-2
            transition-all duration-1000 ease-out delay-150
            will-change-transform will-change-opacity
            ${
              textInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-24"
            }
          `}
          style={{ transitionDelay: "500ms" }}
        >
          <p>{t("message")}</p>

          <p>
            <span className="text-highlight font-bold">
              {t("details.name.label")}:
            </span>{" "}
            {t("details.name.value")}
          </p>

          <p>
            <span className="text-highlight font-bold">
              {t("details.date.label")}:
            </span>{" "}
            {t("details.date.value")}
          </p>

          <p>
            <span className="text-highlight font-bold">
              {t("details.address.label")}:
            </span>{" "}
            {t("details.address.value")}
          </p>

          <p>
            <span className="text-highlight font-bold">
              {t("details.phone.label")}:
            </span>{" "}
            {t("details.phone.value")}
          </p>

          <p>
            <span className="text-highlight font-bold">
              {t("details.email.label")}:
            </span>{" "}
            {t("details.email.value")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
