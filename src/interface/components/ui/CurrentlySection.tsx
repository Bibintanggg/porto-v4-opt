"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GITHUB_USER = "Bibintanggg";

// ─── Types ────────────────────────────────────────────────────────────
interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  topics: string[];
}

interface CurrentlyItem {
  color: string;
  dotClass: string;
  pulse: boolean;
  label: string;
  value: string;
  href?: string;
  meta?: string;
}

// ─── Helper: relative time ────────────────────────────────────────────
function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "updated today";
  if (days === 1) return "updated yesterday";
  if (days < 7) return `updated ${days}d ago`;
  if (days < 30) return `updated ${Math.floor(days / 7)}w ago`;
  return `updated ${Math.floor(days / 30)}mo ago`;
}

// ─── Dot component ────────────────────────────────────────────────────
function Dot({ color, pulse }: { color: string; pulse: boolean }) {
  return (
    <span className="relative flex-shrink-0 flex mt-[5px]">
      {pulse && (
        <span className={`animate-ping absolute inline-flex h-[6px] w-[6px] rounded-full opacity-50 ${color}`} />
      )}
      <span className={`relative inline-flex rounded-full h-[6px] w-[6px] ${color}`} />
    </span>
  );
}

// ─── Skeleton loader ──────────────────────────────────────────────────
function SkeletonRow() {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white/30 dark:bg-stone-900/30 animate-pulse">
      <span className="relative flex-shrink-0 mt-[5px] w-[6px] h-[6px] rounded-full bg-stone-200 dark:bg-stone-800" />
      <div className="flex-1 space-y-2">
        <div className="h-2.5 w-24 rounded bg-stone-200 dark:bg-stone-800" />
        <div className="h-2 w-48 rounded bg-stone-100 dark:bg-stone-800/60" />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────
export default function CurrentlySection() {
  const [repo, setRepo] = useState<GithubRepo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchLatestRepo() {
      try {
        // fetch repos sorted by recently pushed
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&direction=desc&per_page=5`,
          { next: { revalidate: 3600 } } // Next.js cache 1 jam
        );
        if (!res.ok) throw new Error("GitHub API error");
        const data: GithubRepo[] = await res.json();

        // ambil repo pertama yang bukan fork
        const latest = data.find((r) => !(r as any).fork) ?? data[0];
        setRepo(latest ?? null);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestRepo();
  }, []);

  // Build items list
  const staticItems: CurrentlyItem[] = [
    {
      color: "bg-blue-400",
      dotClass: "bg-blue-400",
      pulse: false,
      label: "Learning",
      // Ganti dengan hal yang lagi kamu pelajari
      value: "[Teknologi atau skill yang sedang kamu pelajari]",
    },
    {
      color: "bg-amber-400",
      dotClass: "bg-amber-400",
      pulse: false,
      label: "Reading",
      // Ganti dengan buku/artikel yang lagi kamu baca
      value: "[Buku atau artikel yang lagi kamu baca]",
    },
    {
      color: "bg-purple-400",
      dotClass: "bg-purple-400",
      pulse: false,
      label: "Open to",
      value: "Freelance projects, collaborations, dan full-time opportunities",
    },
  ];

  return (
    <div className="flex flex-col gap-3">

      {/* ── Working on — dari GitHub ── */}
      {loading ? (
        <SkeletonRow />
      ) : error || !repo ? (
        // fallback kalau API gagal
        <div className="flex items-start gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white/30 dark:bg-stone-900/30">
          <Dot color="bg-emerald-500" pulse />
          <div>
            <p className="text-[12px] font-medium text-stone-600 dark:text-stone-400 mb-0.5">
              Working on
            </p>
            <p className="text-[12.5px] font-light text-stone-500 dark:text-stone-500">
              Something exciting — check back soon
            </p>
          </div>
        </div>
      ) : (
        <motion.a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="group flex items-start gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white/30 dark:bg-stone-900/30 hover:bg-white/60 dark:hover:bg-stone-900/50 hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-300 cursor-pointer"
        >
          <Dot color="bg-emerald-500" pulse />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
              <p className="text-[12px] font-medium text-stone-600 dark:text-stone-400">
                Working on
              </p>
              {/* badge "latest push" */}
              <span className="text-[9px] tracking-[0.2em] uppercase px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800/80 text-stone-400 dark:text-stone-600">
                {timeAgo(repo.updated_at)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-[13px] font-medium text-stone-700 dark:text-stone-300 truncate group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors">
                {repo.name}
              </p>
              <span className="text-stone-300 dark:text-stone-700 text-[10px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200">
                ↗
              </span>
            </div>

            {repo.description && (
              <p className="text-[12px] font-light text-stone-400 dark:text-stone-600 mt-0.5 truncate">
                {repo.description}
              </p>
            )}

            {/* language + stars */}
            <div className="flex items-center gap-3 mt-2">
              {repo.language && (
                <span className="text-[10.5px] text-stone-400 dark:text-stone-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-stone-300 dark:bg-stone-700 inline-block" />
                  {repo.language}
                </span>
              )}
              {repo.stargazers_count > 0 && (
                <span className="text-[10.5px] text-stone-400 dark:text-stone-600 flex items-center gap-1">
                  ✦ {repo.stargazers_count}
                </span>
              )}
              {repo.topics.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-[9.5px] px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800/60 text-stone-400 dark:text-stone-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.a>
      )}

      {/* ── Static items ── */}
      {staticItems.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 * (i + 1), ease: [0.22, 1, 0.36, 1] }}
          className="flex items-start gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white/30 dark:bg-stone-900/30"
        >
          <Dot color={item.dotClass} pulse={item.pulse} />
          <div>
            <p className="text-[12px] font-medium text-stone-600 dark:text-stone-400 mb-0.5">
              {item.label}
            </p>
            <p className="text-[12.5px] font-light text-stone-500 dark:text-stone-500">
              {item.value}
            </p>
          </div>
        </motion.div>
      ))}

    </div>
  );
}