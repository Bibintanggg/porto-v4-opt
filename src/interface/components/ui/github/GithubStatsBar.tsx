"use client";

import { useEffect, useState } from "react";
import { GithubUser } from "./types/github-user";

export default function GithubStatsBar({
  username,
}: {
  username: string;
}) {
  const [user, setUser] = useState<GithubUser | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((r) => r.json())
      .then((d) => d.login && setUser(d))
      .catch(() => {});
  }, [username]);

  const stats = [
    { label: "Repos", value: user?.public_repos ?? "—" },
    { label: "Followers", value: user?.followers ?? "—" },
    { label: "Following", value: user?.following ?? "—" },
    { label: "Gists", value: user?.public_gists ?? "—" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      {stats.map((s) => (
        <div
          key={s.label}
          className="
            rounded-2xl
            border border-stone-800
            bg-stone-900/70
            backdrop-blur-sm
            px-4 py-4
            text-center
            transition-all duration-300
            hover:border-stone-700
            hover:bg-stone-900
          "
        >
          <p className="text-[20px] sm:text-[22px] font-semibold text-stone-100 leading-none mb-2">
            {user ? (
              s.value
            ) : (
              <span className="inline-block w-8 h-4 bg-stone-700 rounded animate-pulse" />
            )}
          </p>

          <p className="text-[10px] tracking-[0.28em] uppercase text-stone-500">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}