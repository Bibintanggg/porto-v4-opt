import { TECH } from "@/src/data/tech";
import SectionLabel from "@/src/utils/sectionLabel";

export default function SectionStack() {
  return (
    <section className="scroll-reveal mb-12">
      <SectionLabel>Tech Stack</SectionLabel>
      <div className="overflow-hidden mb-8">
        <div className="marquee-track flex gap-6 w-max">
          {[...TECH, ...TECH].map((t, i) => (
            <span
              key={i}
              className="text-[11px] tracking-[0.24em] uppercase text-stone-400 dark:text-stone-300 whitespace-nowrap flex items-center gap-4"
            >
              {t}
              <span className="text-stone-200 dark:text-stone-800 text-[8px]">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            cat: "Frontend",
            items: [
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "ShadCn UI",
            ],
          },
          {
            cat: "Backend",
            items: ["PostgreSQL", "Laravel", "Go (Beginner)", "MySQL"],
          },
          {
            cat: "Tools & Others",
            items: ["Git", "Docker", "Figma", "Vercel", "Kali Linux", "Table Plus", "Postman"],
          },
        ].map((group) => (
          <div
            key={group.cat}
            className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white/30 dark:bg-stone-900/30"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 dark:text-stone-600 mb-3">
              {group.cat}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-[11.5px] px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800/80 text-stone-600 dark:text-stone-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
