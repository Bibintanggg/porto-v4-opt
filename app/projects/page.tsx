import { PROJECTS } from "@/src/data/project-data";
import Noise from "@/src/interface/components/ui/Noise";
import TopNav from "@/src/interface/layout/navbar/TopNav";
import { ArrowUpRight, PinIcon } from "lucide-react";

export default function Projects() {
  const pinnedProjects = PROJECTS.filter((p) => p.pinned);
  const otherProjects = PROJECTS.filter((p) => !p.pinned);
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

          * {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>

      <Noise />

      <main className="relative z-10 flex flex-1 w-full flex-col py-14 px-6 md:px-10 lg:px-14 mx-auto">
        <TopNav />

        <section className="mt-10 w-full max-w-[1260px] mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 dark:text-white">
            Projects
          </h1>

          <p className="mt-3 text-stone-500 dark:text-stone-400 max-w-2xl leading-relaxed">
            Here are some selected projects that I have worked on, focusing on
            UI/UX, frontend development, and fullstack apps.
          </p>
        </section>

        <section className="mt-8 w-full max-w-[1260px] mx-auto">
          <div className="flex items-center gap-2 mb-6">
            {/* Pin Icon */}
            <PinIcon className="w-4 h-4 text-stone-500" />

            <h2 className="text-lg font-semibold text-stone-900 dark:text-white">
              Pinned Projects
            </h2>
          </div>

          <section className="flex flex-wrap gap-6">
            {pinnedProjects.map((project, index) => (
              <div
                key={index}
                className="
          group
          w-[400px]
          overflow-hidden
          rounded-2xl
          border border-stone-200/70
          dark:border-stone-800
          bg-white/50
          dark:bg-stone-900/40
          backdrop-blur-xl
          transition-all duration-300
          hover:-translate-y-1
        "
              >
                {/* Image */}
                <div className="relative overflow-hidden m-4 rounded-xl">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="
              h-44
              w-full
              object-cover
              transition-all duration-500
              group-hover:scale-105
              group-hover:blur-sm
            "
                  />

                  {/* PIN BADGE */}
                  <div
                    className="
              absolute right-3 top-3
              flex items-center gap-1
              rounded-full
              bg-black/50
              px-3 py-1
              text-xs text-white
              backdrop-blur-md
            "
                  >
                    <PinIcon className="w-4 h-4 text-red-200" />
                    Pinned
                  </div>

                  <div
                    className="
              absolute inset-0
              flex items-center justify-center
              bg-black/40
              opacity-0
              transition-all duration-300
              group-hover:opacity-100
            "
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                flex items-center gap-2
                rounded-full
                border border-white/20
                bg-white/10
                px-4 py-2
                text-sm font-medium text-white
                backdrop-blur-md
              "
                    >
                      View Project
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 pt-1">
                  <h2 className="text-lg font-semibold text-stone-900 dark:text-white">
                    {project.name}
                  </h2>

                  <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="
        rounded-full
        border border-stone-200
        dark:border-stone-700
        px-2.5 py-1
        text-[11px]
        text-stone-600
        dark:text-stone-300
        bg-stone-100/60
        dark:bg-stone-800/50
      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>

        {/* OTHER PROJECTS */}
        <section className="mt-14 w-full max-w-[1260px] mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-lg font-semibold text-stone-900 dark:text-white">
              Other Projects
            </h2>
          </div>

          <section className="flex flex-wrap gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="
          group
          w-[400px]
          overflow-hidden
          rounded-2xl
          border border-stone-200/70
          dark:border-stone-800
          bg-white/50
          dark:bg-stone-900/40
          backdrop-blur-xl
          transition-all duration-300
          hover:-translate-y-1
        "
              >
                {/* Image */}
                <div className="relative overflow-hidden m-4 rounded-xl">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="
              h-44
              w-full
              object-cover
              transition-all duration-500
              group-hover:scale-105
              group-hover:blur-sm
            "
                  />

                  {/* Overlay */}
                  <div
                    className="
              absolute inset-0
              flex items-center justify-center
              bg-black/40
              opacity-0
              transition-all duration-300
              group-hover:opacity-100
            "
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                flex items-center gap-2
                rounded-full
                border border-white/20
                bg-white/10
                px-4 py-2
                text-sm font-medium text-white
                backdrop-blur-md
              "
                    >
                      View Project
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 pt-1">
                  <h2 className="text-lg font-semibold text-stone-900 dark:text-white">
                    {project.name}
                  </h2>

                  <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="
                  rounded-full
                  border border-stone-200
                  dark:border-stone-700
                  px-2.5 py-1
                  text-[11px]
                  text-stone-600
                  dark:text-stone-300
                  bg-stone-100/60
                  dark:bg-stone-800/50
                "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
      </main>
    </>
  );
}
