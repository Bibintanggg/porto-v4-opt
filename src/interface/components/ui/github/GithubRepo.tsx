import { useEffect, useState } from "react";
import { GithubRepo } from "./types/github-repo";
import { motion } from "framer-motion";
import { LANG_COLOR } from "@/src/data/tech";

export default function GithubRepos({ username }: { username: string }) {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const sorted = [...data].sort(
            (a, b) => (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count)
          );
          setRepos(sorted.slice(0, 4));
        }
      })
      .catch(() => { })
      .finally(() => setLoading(false));
  }, [username]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-24 rounded-xl bg-stone-100 dark:bg-stone-900/60 animate-pulse" />
        ))}
      </div>
    );
  }

  if (repos.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-3">
      {repos.map((repo, i) => (
        <motion.a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
          className="group block rounded-xl border border-stone-200 dark:border-stone-800/80 bg-white/50 dark:bg-stone-900/40 p-4 no-underline
            hover:border-stone-300 dark:hover:border-stone-700 hover:bg-white/80 dark:hover:bg-stone-900/60
            transition-all duration-200"
        >
          <div className="flex items-start justify-between mb-2">
            <p className="text-[13px] font-medium text-stone-800 dark:text-stone-200 leading-tight truncate pr-2 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors"
                  >
              {repo.name}
            </p>
            <span className="text-[10px] text-stone-300 dark:text-stone-700 group-hover:text-stone-500 transition-colors flex-shrink-0">↗</span>
          </div>
          {repo.description && (
            <p className="text-[11.5px] font-light text-stone-400 dark:text-stone-600 leading-snug mb-3 line-clamp-2">
              {repo.description}
            </p>
          )}
          <div className="flex items-center gap-4 mt-auto">
            {repo.language && (
              <span className="flex items-center gap-1.5 text-[10px] text-stone-400 dark:text-stone-600">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: LANG_COLOR[repo.language] ?? "#888" }}
                />
                {repo.language}
              </span>
            )}
            {repo.stargazers_count > 0 && (
              <span className="flex items-center gap-1 text-[10px] text-stone-400 dark:text-stone-600">
                ★ {repo.stargazers_count}
              </span>
            )}
            {repo.forks_count > 0 && (
              <span className="flex items-center gap-1 text-[10px] text-stone-400 dark:text-stone-600">
                ⑂ {repo.forks_count}
              </span>
            )}
          </div>
        </motion.a>
      ))}
    </div>
  );
}