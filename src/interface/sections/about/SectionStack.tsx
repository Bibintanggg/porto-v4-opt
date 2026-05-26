import { TECH } from "@/src/data/tech";
import SectionLabel from "@/src/utils/sectionLabel";

export default function SectionStack() {
  return (
    <section className="scroll-reveal mb-12 bg-stone-950 rounded-2xl p-8">
      <SectionLabel>Tech Stack</SectionLabel>

      <div className="overflow-hidden mb-8">
        <div className="marquee-track flex gap-6 w-max">
          {[...TECH, ...TECH].map((t, i) => (
            <span
              key={i}
              className="text-[11px] tracking-[0.24em] uppercase text-stone-300 whitespace-nowrap flex items-center gap-4"
            >
              {t}

              <span className="text-stone-700 text-[8px]">
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
            items: [
              "Git",
              "Docker",
              "Figma",
              "Vercel",
              "Kali Linux",
              "Table Plus",
              "Postman",
            ],
          },
        ].map((group) => (
          <div
            key={group.cat}
            className="p-4 rounded-xl border border-stone-800 bg-stone-900/60 backdrop-blur-sm"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-3">
              {group.cat}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-[11.5px] px-2.5 py-1 rounded-md bg-stone-800 text-stone-300 border border-stone-700"
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