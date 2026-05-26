import SectionLabel from "@/src/utils/sectionLabel";

export default function SectionStory() {
  return (
    <section className="scroll-reveal mb-12">
      <SectionLabel>My Story</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-[13.5px] font-light leading-[1.9] text-stone-500 dark:text-stone-400">
            My journey into the world of programming began with a profound curiosity about technology. I see the world of technology as challenging and constantly evolving, and as someone who loves challenges, this sparked my interest in programming.
          </p>
          <p className="text-[13.5px] font-light leading-[1.9] text-stone-500 dark:text-stone-400">
            Early on, I learned a lot on my own through documentation, videos, and hands-on practice building small projects. From there, I began to understand how applications are built, how logic works, and how technology can be used to solve various problems.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-[13.5px] font-light leading-[1.9] text-stone-500 dark:text-stone-400">
            Over time, this interest developed into real-world experience through various freelance projects and team collaborations. I've been involved in developing projects for the banking sector, education, company profile logistics, and even an advertising captive portal system. From these experiences, I learned not only technical skills, but also communication, problem-solving, and how to build applications that users actually use.
          </p>
          <p className="text-[13.5px] font-light leading-[1.9] text-stone-500 dark:text-stone-400">
            I currently focus on modern web development using Next.js, React, TypeScript, and Laravel, and continue to learn to improve my skills in full-stack web development.
          </p>
        </div>
      </div>
    </section>
  );
}
