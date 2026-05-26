"use client";

import TopNav from "@/src/interface/layout/navbar/TopNav";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Noise from "@/src/interface/components/ui/Noise";
import { TECH } from "@/src/data/tech";
import SectionLabel from "@/src/utils/sectionLabel";
import CurrentlySection from "@/src/interface/components/ui/CurrentlySection";
import { experiences } from "@/src/data/experience-data";
import { education } from "@/src/data/education";
import { values } from "@/src/data/main-about";
import Divider from "@/src/interface/components/ui/Divider";
import SectionIntro from "@/src/interface/sections/about/SectionIntro";
import SectionStory from "@/src/interface/sections/about/SectionStory";
import SectionStack from "@/src/interface/sections/about/SectionStack";
import SectionExperience from "@/src/interface/sections/about/SectionExperience";

gsap.registerPlugin(ScrollTrigger);

export default function AboutContent() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // intro block
      const tl = gsap.timeline({ delay: 0.1 });
      tl.fromTo(
        ".intro-avatar",
        { opacity: 0, scale: 0.88 },
        { opacity: 1, scale: 1, duration: 0.65, ease: "power3.out" },
      );
      tl.fromTo(
        ".intro-name",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.3",
      );
      tl.fromTo(
        ".intro-bio",
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.2",
      );
      tl.fromTo(
        ".intro-badge",
        { opacity: 0, y: 6 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.055,
          ease: "power2.out",
        },
        "-=0.2",
      );

      gsap.utils.toArray<HTMLElement>(".scroll-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }

        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee 30s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }

        @keyframes blobdrift {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(18px,-10px) scale(1.03); }
          75%      { transform: translate(-8px,13px) scale(0.98); }
        }

        @keyframes ring-pulse {
          0%,100% { opacity: 0.25; transform: scale(1); }
          50%      { opacity: 0.07; transform: scale(1.07); }
        }
      `}</style>

      <Noise />

      <div
        ref={rootRef}
        className="relative flex flex-col flex-1 items-center bg-[#f7f5f1] dark:bg-[#111010] min-h-screen transition-colors duration-300"
      >
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 overflow-hidden"
        >
          <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
            <div
              className="absolute rounded-full"
              style={{
                width: 550,
                height: 550,
                top: "-10%",
                right: "-6%",
                background: "radial-gradient(circle, rgba(70,70,80,0.45) 0%, transparent 68%)",
                filter: "blur(56px)",
                opacity: 0.5,
                animation: "blobdrift 22s ease-in-out infinite",
              }}
            />

            <div
              className="absolute rounded-full"
              style={{
                width: 420,
                height: 420,
                bottom: "8%",
                left: "-5%",
                background: "radial-gradient(circle, rgba(45,55,65,0.4) 0%, transparent 70%)",
                filter: "blur(64px)",
                opacity: 0.35,
                animation: "blobdrift 30s ease-in-out infinite reverse",
              }}
            />
          </div>
        </div>

        <main className="relative z-20 flex flex-1 w-full max-w-5xl flex-col py-14 px-12 lg:px-16">
          <TopNav />

          <SectionIntro />
          <Divider />

          <SectionStory />
          <Divider />

          <SectionStack />
          <Divider />

          <SectionExperience />
          <Divider />

          <section className="scroll-reveal mb-12">
            <SectionLabel>Education</SectionLabel>
            <div className="flex flex-col gap-4">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white/30 dark:bg-stone-900/30"
                >
                  <div>
                    <p className="text-[14px] font-medium text-stone-800 dark:text-stone-200 leading-snug">
                      {edu.degree}
                    </p>
                    <p className="text-[12.5px] text-stone-500 dark:text-stone-500 mb-1.5">
                      {edu.school}
                    </p>
                    <p className="text-[12.5px] font-light leading-[1.8] text-stone-400 dark:text-stone-500">
                      {edu.desc}
                    </p>
                  </div>
                  <span className="text-[9.5px] tracking-[0.22em] uppercase text-stone-400 dark:text-stone-600 flex-shrink-0 mt-0.5">
                    {edu.period}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>

          <Divider />

          <section className="scroll-reveal mb-12">
            <SectionLabel>Currently</SectionLabel>
            <CurrentlySection />
          </section>

          <Divider />

          <section className="scroll-reveal mb-20 flex flex-col items-center text-center gap-5">
            <p className="text-[10.5px] tracking-[0.36em] uppercase text-stone-400 dark:text-stone-600">
              Let's connect
            </p>
            <h2 className="text-[22px] font-normal text-stone-800 dark:text-stone-100 leading-snug max-w-md">
              Have an interesting project or just want to chat about tech?
            </h2>
            <p className="text-[13px] font-light text-stone-400 dark:text-stone-600 max-w-sm">
              Reach me at{" "}
              <a
                href="mailto:bintangyuda08@gmail.com"
                className="text-stone-600 dark:text-stone-400 underline underline-offset-2 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
              >
                bintangyuda08@gmail.com
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-1">
              {[
                { label: "GitHub", href: "https://github.com/Bibintanggg" },
                { label: "Twitter", href: "https://x.com/Binnt8_" },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/bintang-yudha-putra-purnomo",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] tracking-[0.26em] uppercase text-stone-400 dark:text-stone-600
                    border border-stone-200 dark:border-stone-800 px-4 py-2 rounded-lg
                    hover:text-stone-700 dark:hover:text-stone-400 hover:border-stone-300 dark:hover:border-stone-700
                    transition-all duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </section>

          <footer className="mt-2 pt-6 border-t border-stone-200 dark:border-stone-800/70 flex items-center justify-between pb-32">
            <span className="text-[11px] tracking-[0.22em] uppercase text-stone-300 dark:text-stone-700">
              Bintang Yudha Putra Purnomo
            </span>
            <div className="flex items-center gap-6">
              {[
                { label: "GitHub", href: "https://github.com/Bibintanggg" },
                { label: "Twitter", href: "https://x.com/Binnt8_" },
                { label: "Email", href: "mailto:bintangyuda08@gmail.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] tracking-[0.26em] uppercase text-stone-300 dark:text-stone-700
                    hover:text-stone-600 dark:hover:text-stone-400 transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
