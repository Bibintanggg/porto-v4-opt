import { useEffect, useState } from "react";

export default function ContribGraph({ username }: { username: string }) {
  const currentYear = new Date().getFullYear();

  const [year, setYear] = useState(currentYear);
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`)
      .then((r) => r.json())
      .then((data) => {
        setTotal(data.total?.[year] ?? 0);
      })
      .catch(() => setTotal(null));
  }, [username, year]);

  return (
    <div className="rounded-2xl border-stone-800/80 bg-stone-900/30 p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-4">

        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-stone-600 mb-1">
            Contributions
          </p>

          <h3 className="text-[26px] font-semibold text-stone-100 leading-none">
            {total !== null ? total.toLocaleString() : "—"}
          </h3>

          <p className="text-[11px] text-stone-600 mt-1">
            total contributions in {year}
          </p>
        </div>

        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="
            bg-transparent
            border border-stone-800
            rounded-xl
            px-3 py-2
            text-[12px]
            text-stone-300
            outline-none
          "
        >
          {Array.from({ length: 6 }).map((_, i) => {
            const y = currentYear - i;
            return (
              <option
                key={y}
                value={y}
                className="bg-stone-900"
              >
                {y}
              </option>
            );
          })}
        </select>
      </div>

      {/* Contribution graph */}
      <img
        src={`https://ghchart.rshah.org/${username}`}
        alt={`${username} contribution graph`}
        className="w-full h-auto opacity-40 invert"
        style={{ imageRendering: "pixelated" }}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}