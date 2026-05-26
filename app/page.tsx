"use client";

import TopNav from "@/src/interface/layout/navbar/TopNav";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { SectionHead } from "@/src/interface/sections/SectionHeader";
import { TECH } from "@/src/data/tech";
import Noise from "@/src/interface/components/ui/Noise";
import GithubStatsBar from "@/src/interface/components/ui/github/GithubStatsBar";
import GithubActivity from "@/src/interface/components/ui/github/GithubActivity";
import GithubRepos from "@/src/interface/components/ui/github/GithubRepo";
import ContribGraph from "@/src/interface/components/ui/github/ContributionGraph";

export default function HomeContent() {
  const rootRef = useRef<HTMLDivElement>(null);
  const GITHUB_USER = "Bibintanggg";
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });
      tl.fromTo(".intro-avatar",
        { opacity: 0, scale: 0.88 },
        { opacity: 1, scale: 1, duration: 0.65, ease: "power3.out" }
      );
      tl.fromTo(".intro-name",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      );
      tl.fromTo(".intro-bio",
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.2"
      );
      tl.fromTo(".intro-badge",
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.055, ease: "power2.out" },
        "-=0.2"
      );
      tl.fromTo(".section-block",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" },
        "-=0.1"
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes marquee {
          from { transform: translateX(0) }
          to   { transform: translateX(-50%) }
        }
        .marquee-track { animation: marquee 30s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }

        @keyframes blobdrift {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(18px,-10px) scale(1.03); }
          75%      { transform: translate(-8px, 13px) scale(0.98); }
        }

        @keyframes ring-pulse {
          0%,100% { opacity: 0.25; transform: scale(1); }
          50%      { opacity: 0.07; transform: scale(1.07); }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <Noise />

      <div
        ref={rootRef}
        className="relative flex flex-col flex-1 items-center justify-center bg-[#111010] min-h-screen transition-colors duration-300"
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

        <main className="relative z-20 flex flex-1 w-full max-w-5xl flex-col py-14 px-12 lg:px-16">

          <TopNav />

          <section className="mt-12 mb-14 flex flex-col gap-6">

            <div className="flex flex-col items-center gap-4">

              <div className="intro-avatar relative flex-shrink-0 opacity-0">
                <div
                  className="absolute inset-[-6px] rounded-full border border-stone-700/40"
                  style={{ animation: "ring-pulse 4s ease-in-out infinite" }}
                />
                <div className="w-[90px] h-[90px] rounded-full overflow-hidden border border-stone-800 bg-stone-900">
                  <Image
                    src="/assets/image/profile.jpg"
                    alt="Profile photo"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full scale-200 origin-center"
                  />
                </div>
              </div>
              <div className="intro-name opacity-0 flex flex-col items-center gap-1.5">
                <h1 className="text-[24px] font-normal tracking-[-0.01em] text-stone-50 leading-tight text-center">
                  Bintang Yudha Putra Purnomo
                </h1>
                <div className="flex items-center gap-2 mt-[2px]">
                  <span className="relative flex h-[6px] w-[6px]">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-emerald-500" />
                  </span>
                  <span className="text-[10.5px] tracking-[0.28em] uppercase text-stone-600">
                    Available for work
                  </span>
                </div>

                <button
                  onClick={() => setShowProfile(true)}
                  className="mt-1 text-[9px] tracking-[0.28em] uppercase text-stone-600 border border-stone-800 px-3 py-1.5 rounded-md hover:text-stone-400 hover:border-stone-700 transition-all duration-200"
                >
                  View profile
                </button>
              </div>

            </div>

            <p className="intro-bio text-center mx-auto text-[13.5px] font-light leading-[1.9] text-stone-400 max-w-2xl opacity-0">
              I'm a Fullstack Web Developer from DKI Jakarta | East Jakarta, Indonesia, 18 years old, majoring Software Engineering.
              I specialise in building modern web solutions that balance performance, functionality,
              and great user experience. Fullstack at heart, but with a love for polished frontends.
            </p>

            <div className="flex flex-wrap gap-2.5 mx-auto justify-center">
              {[
                { n: "1+", l: "Year exp." },
                { n: "15+", l: "Projects" },
                { n: "Next.js", l: "Primary stack" },
                { n: "East Jakarta", l: "Origin" },
              ].map((b) => (
                <div
                  key={b.l}
                  className="intro-badge opacity-0 px-4 py-2 rounded-lg border border-stone-800 bg-stone-900/50"
                >
                  <p className="text-[14px] font-normal text-stone-200 leading-none mb-[3px]">
                    {b.n}
                  </p>
                  <p className="text-[9px] tracking-[0.32em] uppercase text-stone-600">
                    {b.l}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="section-block mb-14 opacity-0">
            <SectionHead label="Tech Stack" />
            <div className="overflow-hidden">
              <div className="marquee-track flex gap-6 w-max">
                {[...TECH, ...TECH].map((t, i) => (
                  <span
                    key={i}
                    className="text-[11px] tracking-[0.24em] uppercase text-stone-300 whitespace-nowrap flex items-center gap-4"
                  >
                    {t}
                    <span className="text-stone-800 text-[8px]">✦</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="section-block mb-14 opacity-0">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <span className="text-[10.5px] tracking-[0.36em] uppercase text-stone-600">
                  GitHub
                </span>
                <div className="h-px w-8 bg-stone-800" />
              </div>
              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[10.5px] tracking-[0.2em] uppercase text-stone-600
                  hover:text-stone-400 transition-colors duration-200"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="opacity-70 flex-shrink-0">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                @{GITHUB_USER}
              </a>
            </div>

            <GithubStatsBar username={GITHUB_USER} />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-stone-700 mb-3">
                  Recent Activity
                </p>
                <GithubActivity username={GITHUB_USER} />
                <div className="mt-3">
                  <a
                    href={`https://github.com/${GITHUB_USER}?tab=activity`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10.5px] tracking-[0.2em] uppercase text-stone-600
                      hover:text-stone-400 transition-colors flex items-center gap-1.5"
                  >
                    See all activity <span>→</span>
                  </a>
                </div>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-stone-700 mb-3">
                  Top Repositories
                </p>
                <GithubRepos username={GITHUB_USER} />
                <div className="mt-3">
                  <a
                    href={`https://github.com/${GITHUB_USER}?tab=repositories`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10.5px] tracking-[0.2em] uppercase text-stone-600
                      hover:text-stone-400 transition-colors flex items-center gap-1.5"
                  >
                    All repositories <span>→</span>
                  </a>
                </div>
                <img
                  src={`https://streak-stats.demolab.com?user=${GITHUB_USER}&theme=transparent&hide_border=true`}
                  alt="GitHub streak"
                />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-stone-700 mb-3">
                Contribution History
              </p>
              <ContribGraph username={GITHUB_USER} />
            </div>
          </div>

          <footer className="mt-2 pt-6 border-t border-stone-800/70 flex items-center justify-between">
            <span className="text-[11px] tracking-[0.22em] uppercase text-stone-600">
              Bintang Yudha Putra Purnomo
            </span>
            <div className="flex items-center gap-6">
              {[
                { label: "GitHub", href: `https://github.com/${GITHUB_USER}` },
                { label: "Twitter", href: "https://x.com/Binnt8_" },
                { label: "Email", href: "mailto:bintangyuda08@gmail.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] tracking-[0.26em] uppercase text-stone-700
                    hover:text-stone-400 transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </footer>

        </main>
      </div>

      {showProfile && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setShowProfile(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative bg-[#161514] border border-stone-800 rounded-2xl p-8 max-w-sm w-[90%] shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setShowProfile(false)}
              className="absolute top-4 right-4 text-stone-700 hover:text-stone-400 transition-colors text-lg leading-none"
            >
              ✕
            </button>

            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden border border-stone-800">
                <Image
                  src="/assets/image/profile.jpg"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full scale-200 origin-center"
                />
              </div>
              <div className="text-center">
                <p className="text-[15px] font-medium text-stone-50 leading-tight">
                  Bintang Yudha Putra Purnomo
                </p>
                <p className="text-[11px] text-stone-600 mt-1 tracking-wide">
                  Fullstack Developer · East Jakarta
                </p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="relative flex h-[5px] w-[5px]">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex rounded-full h-[5px] w-[5px] bg-emerald-500" />
                  </span>
                  <span className="text-[9.5px] tracking-[0.26em] uppercase text-stone-600">
                    Available for work
                  </span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-[12.5px] font-light leading-[1.85] text-stone-400 mb-5 text-center">
              18 y/o fullstack developer specializing in modern web solutions — performance, functionality, and polished frontends with Next.js.
            </p>

            <div className="grid grid-cols-2 gap-2 mb-5">
              {[
                { n: "1+", l: "Year exp." },
                { n: "15+", l: "Projects" },
                { n: "Next.js", l: "Primary stack" },
                { n: "Software Engineering", l: "Major" },
              ].map((b) => (
                <div key={b.l} className="bg-stone-900/60 rounded-lg px-3 py-2.5">
                  <p className="text-[13px] font-medium text-stone-200 leading-none mb-1">{b.n}</p>
                  <p className="text-[9px] tracking-[0.28em] uppercase text-stone-600">{b.l}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-6 border-t border-stone-800/70 pt-4">
              {[
                { label: "GitHub", href: `https://github.com/${GITHUB_USER}` },
                { label: "Twitter", href: "https://x.com/Binnt8_" },
                { label: "Email", href: "mailto:bintangyuda08@gmail.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] tracking-[0.24em] uppercase text-stone-600 hover:text-stone-400 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}