"use client";

import { ProjectType } from "@/data/project";
import { Icon } from "@iconify/react";
import { useLocale } from "next-intl";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "motion/react";
import HighlightHeader from "./ui/HighlightHeader";

type Props = {
  project: ProjectType;
};

type Locale = "vi" | "en";

// Convert YouTube URL to embed URL
function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    let videoId: string | null = null;

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        videoId = parsed.searchParams.get("v");
      } else {
        const parts = parsed.pathname.split("/");

        if (["shorts", "embed", "live"].includes(parts[1])) {
          videoId = parts[2];
        }
      }
    } else if (host === "youtu.be") {
      videoId = parsed.pathname.split("/")[1];
    }

    if (videoId && /^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
      return `https://www.youtube-nocookie.com/embed/${videoId}`;
    }

    return null;
  } catch {
    return null;
  }
}

export default function ProjectDetail({ project }: Props) {
  const locale = useLocale() as Locale;

  const videoEmbedUrl = project.video
    ? getYouTubeEmbedUrl(project.video)
    : null;

  const projectLink = project.link || project.github;

  return (
    <>
      <AuroraBackground className="absolute inset-0 -z-10 top-0">
        <div />
      </AuroraBackground>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-12 my-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col sm:gap-32 gap-20"
        >
          {/* PROJECT OVERVIEW */}
          <section className="relative w-full text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight capitalize">
              {project.name[locale]}
            </h1>

            <div className="flex sm:flex-col md:flex-col lg:flex-row flex-col justify-between">
              <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg text-muted-foreground leading-relaxed text-justify">
                {project.description[locale].message}
              </p>

              {projectLink && (
                <div className="mt-12 flex justify-center sm:justify-center md:justify-center lg:justify-start">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={projectLink}
                  >
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      className="flex items-center gap-3 px-8 py-4 text-lg cursor-pointer"
                    >
                      <span>
                        {project.link
                          ? locale === "en"
                            ? "Explore Website"
                            : "Khám phá dự án"
                          : locale === "vi"
                            ? "Xem source code"
                            : "View GitHub"}
                      </span>

                      <FaExternalLinkAlt className="opacity-60" />
                    </HoverBorderGradient>
                  </a>
                </div>
              )}
            </div>
          </section>

          {/* PROJECT INFORMATION */}
          <section className="flex sm:flex-col md:flex-col lg:flex-row flex-col gap-4">
            <table className="w-full text-left">
              <tbody>
                <tr className="align-top">
                  <td className="uppercase text-xs tracking-widest w-1/6 py-4 font-bold">
                    {locale === "en" ? "Role" : "Vai trò"}
                  </td>

                  <td className="lg:text-xl py-4 w-1/2 opacity-50">
                    {project.role[locale]}
                  </td>
                </tr>

                <tr className="align-top">
                  <td className="uppercase text-xs tracking-widest py-4 font-bold">
                    {locale === "en" ? "Duration" : "Thời gian"}
                  </td>

                  <td className="lg:text-xl py-2 opacity-50">
                    {project.duration}
                  </td>
                </tr>

                <tr className="align-top">
                  <td className="uppercase text-xs tracking-widest py-4 font-bold">
                    {locale === "en" ? "Main Technology" : "Công nghệ chính"}
                  </td>

                  <td className="text-xl py-2">
                    <div className="flex flex-wrap gap-12">
                      {project.tech.map((tech) => (
                        <div
                          key={tech.id}
                          className="flex items-center gap-4 sm:text-lg text-sm opacity-70 hover:opacity-100 transition"
                        >
                          <Icon
                            icon={tech.icon}
                            className="sm:text-4xl text-md"
                          />

                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div>
              {project.description[locale].bullets.map((des, index) => (
                <p className="text-justify" key={index}>
                  {des}
                </p>
              ))}
            </div>
          </section>

          {/* DEMO VIDEO */}
          {project.video && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <HighlightHeader
                text={locale === "en" ? "Demo Video" : "Video Demo"}
                highlightText=""
              />

              <div className="relative mx-auto w-full max-w-5xl">
                {/* Background glow */}
                <div
                  className="absolute inset-0 scale-[0.9] rounded-full
                             bg-linear-to-r from-violet-600 via-purple-600
                             to-fuchsia-600 blur-3xl opacity-40"
                />

                {/* Video container */}
                <div
                  className="relative overflow-hidden rounded-2xl
                             border border-white/10 bg-accent p-2
                             shadow-2xl sm:p-4"
                >
                  <div className="aspect-video w-full overflow-hidden rounded-xl">
                    {videoEmbedUrl ? (
                      <iframe
                        src={videoEmbedUrl}
                        title={`${project.name[locale]} Demo`}
                        className="h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : /\.(mp4|webm|ogg)(\?.*)?$/i.test(project.video) ? (
                      <video
                        controls
                        preload="metadata"
                        playsInline
                        className="h-full w-full"
                        src={project.video}
                      >
                        Your browser does not support HTML video.
                      </video>
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-4"
                        >
                          {locale === "en"
                            ? "Watch demo video"
                            : "Xem video demo"}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* PROJECT SCREENSHOTS */}
          {/* PROJECT SCREENSHOTS */}
          {!project.video && project.images[locale].length > 0 && (
            <section className="space-y-20">
              <HighlightHeader
                text={
                  locale === "en" ? "How It Looks" : "Tổng quan về giao diện"
                }
                highlightText=""
              />

              {project.images[locale].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-center gap-4 items-center"
                >
                  <div className="relative w-full max-w-4xl mx-auto md:mx-0">
                    <div
                      className="absolute inset-0 h-full w-full scale-[0.85] transform
                                 rounded-full bg-linear-to-r from-violet-600 via-purple-600
                                 to-fuchsia-600 blur-3xl opacity-60"
                    />

                    <div className="relative flex h-full flex-col items-center justify-center rounded-2xl bg-accent px-4 py-8 shadow-xl">
                      <img
                        src={img.url}
                        alt={img.description}
                        loading="lazy"
                        className="rounded-3xl shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]
                                   transition-all duration-700 ease-out"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-lg leading-relaxed opacity-75 text-justify">
                      {img.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </section>
          )}
        </motion.div>
      </div>
    </>
  );
}
