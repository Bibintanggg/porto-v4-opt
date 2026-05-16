import Image from "next/image";

export default function SectionIntro() {
    return (
        <section className="mt-12 mb-14 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-4">
            {/* Avatar */}
            <div className="intro-avatar relative flex-shrink-0 opacity-0">
              <div
                className="absolute inset-[-6px] rounded-full border border-stone-300/40 dark:border-stone-700/40"
                style={{ animation: "ring-pulse 4s ease-in-out infinite" }}
              />
              <div className="w-[110px] h-[110px] rounded-full overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900">
                <Image
                  src="/assets/image/profile.jpg"
                  alt="Profile photo"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full scale-200 origin-center"
                />
              </div>
            </div>
      
            {/* Name + status */}
            <div className="intro-name opacity-0 flex flex-col items-center gap-1.5">
              <h1 className="text-[26px] font-normal tracking-[-0.01em] text-stone-900 dark:text-stone-50 leading-tight text-center">
                {/* Ganti nama kamu */}
                Your Full Name
              </h1>
              <p className="text-[12px] text-stone-400 dark:text-stone-600 tracking-wide text-center">
                {/* Ganti role & lokasi */}
                Fullstack Developer · East Jakarta, Indonesia
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="relative flex h-[6px] w-[6px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-emerald-500" />
                </span>
                <span className="text-[10.5px] tracking-[0.28em] uppercase text-stone-400 dark:text-stone-600">
                  Available for work
                </span>
              </div>
            </div>
          </div>
      
          <p className="intro-bio text-center mx-auto text-[13.5px] font-light leading-[1.9] text-stone-500 dark:text-stone-400 max-w-2xl opacity-0">
            Halo! Saya [Nama Kamu], Fullstack Developer 18 tahun asal East Jakarta.
            Saya kuliah Matematika sambil mendalami pengembangan web — percaya bahwa
            logika matematika dan intuisi desain bisa berjalan berdampingan dalam
            membangun produk digital yang baik. Saya senang mengerjakan hal-hal dari
            nol: mulai dari arsitektur backend, hingga pixel-perfect frontend.
          </p>
      
          <div className="flex flex-wrap gap-2.5 mx-auto justify-center">
            {[
              { n: "1+", l: "Year exp." },
              { n: "15+", l: "Projects" },
              { n: "Next.js", l: "Primary stack" },
              { n: "Mathematics", l: "Major" },
              { n: "East Jakarta", l: "Based in" },
            ].map((b) => (
              <div
                key={b.l}
                className="intro-badge opacity-0 px-4 py-2 rounded-lg border border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-900/50"
              >
                <p className="text-[14px] font-normal text-stone-800 dark:text-stone-200 leading-none mb-[3px]">
                  {b.n}
                </p>
                <p className="text-[9px] tracking-[0.32em] uppercase text-stone-400 dark:text-stone-600">
                  {b.l}
                </p>
              </div>
            ))}
          </div>
        </section>
    )
}
