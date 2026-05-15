import eventLabel from "@/src/utils/eventLabel";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import timeAgo from "@/src/utils/formatTime";

export default function GithubActivity({ username }: { username: string }) {
  const [events, setEvents] = useState<GithubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/events/public?per_page=15`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setEvents(data.slice(0, 8));
        else setErr(true);
      })
      .catch(() => setErr(true))
      .finally(() => setLoading(false));
  }, [username]);

  if (loading) {
    return (
      <div className="space-y-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-10 rounded-lg bg-stone-100 dark:bg-stone-900/60 animate-pulse"
            style={{ opacity: 1 - i * 0.12 }} />
        ))}
      </div>
    );
  }

  if (err || events.length === 0) {
    return (
      <p className="text-[12px] text-stone-400 dark:text-stone-600 py-6 text-center">
        No public activity found.{" "}
        <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer"
          className="underline hover:text-stone-600 dark:hover:text-stone-400 transition-colors">
          View on GitHub →
        </a>
      </p>
    );
  }

  return (
    <div className="space-y-1">
      {events.map((e, i) => {
        const { icon, text, color, bg } = eventLabel(e);
        return (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.35, ease: "easeOut" }}
            className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-stone-100/80 dark:hover:bg-stone-900/50 transition-colors duration-150 cursor-default"
          >
            <span
              className="w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center text-[11px] leading-none"
              style={{ background: bg, color }}
            >
              {icon}
            </span>
            <span className="text-[12.5px] font-light leading-snug text-stone-600 dark:text-stone-400 flex-1 min-w-0 truncate">
              {text}
            </span>
            <span className="text-[10px] text-stone-300 dark:text-stone-700 flex-shrink-0 tabular-nums">
              {timeAgo(e.created_at)}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}