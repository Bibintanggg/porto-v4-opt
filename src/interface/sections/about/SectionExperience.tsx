import { experiences } from "@/src/data/experience-data";
import SectionLabel from "@/src/utils/sectionLabel";
import { motion } from "framer-motion";

export default function SectionExperience() {
    return (
         <section className="scroll-reveal mb-12">
            <SectionLabel>Experience</SectionLabel>
            <div className="flex flex-col gap-5">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white/30 dark:bg-stone-900/30 hover:bg-white/60 dark:hover:bg-stone-900/50 transition-colors duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <p className="text-[14px] font-medium text-stone-800 dark:text-stone-200 leading-snug">
                        {exp.role}
                      </p>
                      <p className="text-[12.5px] text-stone-500 dark:text-stone-500">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                      <span className="text-[9.5px] tracking-[0.22em] uppercase text-stone-400 dark:text-stone-600">
                        {exp.period}
                      </span>
                      <span className="text-[9px] px-2 py-0.5 rounded-full border border-stone-200 dark:border-stone-800 text-stone-400 dark:text-stone-600 tracking-wide">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-[12.5px] font-light leading-[1.8] text-stone-500 dark:text-stone-400 mb-3">
                    {exp.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10.5px] px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800/80 text-stone-500 dark:text-stone-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
    )
}