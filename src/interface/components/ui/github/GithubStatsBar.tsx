"use client"

import { useEffect, useState } from "react";
import { GithubUser } from "./types/github-user";


export default function GithubStatsBar({ username }: { username: string }) {
  const [user, setUser] = useState<GithubUser | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((r) => r.json())
      .then((d) => d.login && setUser(d))
      .catch(() => { });
  }, [username]);

  const stats = [
    { label: "Repos", value: user?.public_repos ?? "—" },
    { label: "Followers", value: user?.followers ?? "—" },
    { label: "Following", value: user?.following ?? "—" },
    { label: "Gists", value: user?.public_gists ?? "—" },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 mb-6">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-stone-200 dark:border-stone-800/80 bg-white/50 dark:bg-stone-900/40 px-4 py-3 text-center"
        >
          <p className="text-[18px] font-medium text-stone-800 dark:text-stone-200 leading-none mb-1">
            {user ? s.value : <span className="inline-block w-6 h-3 bg-stone-200 dark:bg-stone-800 rounded animate-pulse" />}
          </p>
          <p className="text-[9.5px] tracking-[0.3em] uppercase text-stone-400 dark:text-stone-600">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}