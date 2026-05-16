import SectionLabel from "@/src/utils/sectionLabel";

export default function SectionStory() {
  return (
    <section className="scroll-reveal mb-12">
      <SectionLabel>My Story</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-[13.5px] font-light leading-[1.9] text-stone-500 dark:text-stone-400">
            My journey in programming started from curiosity about how websites
            and applications actually work behind the scenes. What began as
            small experiments quickly turned into something I genuinely enjoyed,
            and since then, I’ve been continuously learning and building.
          </p>
          <p className="text-[13.5px] font-light leading-[1.9] text-stone-500 dark:text-stone-400">
            I’m especially interested in full stack development because I like
            having full control over the products I create from designing
            database structures to crafting smooth frontend interactions. Every
            layer brings different challenges that keep me excited to learn
            more.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-[13.5px] font-light leading-[1.9] text-stone-500 dark:text-stone-400">
            Currently, I’m studying Software Engineering while actively working
            on personal projects and freelance work. I believe combining
            analytical thinking with creativity helps build better and more
            meaningful digital experiences.
          </p>
          <p className="text-[13.5px] font-light leading-[1.9] text-stone-500 dark:text-stone-400">
            Outside of coding, I enjoy exploring tech trends, listening to
            music, and spending time refining ideas and interfaces. Sometimes,
            the best solutions come when stepping away from the screen for a
            moment.
          </p>
        </div>
      </div>
    </section>
  );
}
