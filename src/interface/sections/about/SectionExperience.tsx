"use client";

import { experiences } from "@/src/data/experience-data";
import SectionLabel from "@/src/utils/sectionLabel";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";


interface LightboxProps {
  images: string[];
  startIndex: number;
  onClose: () => void;
}

function Lightbox({ images, startIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrent((c) => (c - 1 + images.length) % images.length);
    },
    [images.length]
  );

  const next = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrent((c) => (c + 1) % images.length);
    },
    [images.length]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        setCurrent((c) => (c - 1 + images.length) % images.length);
      if (e.key === "ArrowRight")
        setCurrent((c) => (c + 1) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 backdrop-blur-sm"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 2l12 12M14 2L2 14"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full px-14 sm:px-16 max-w-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full aspect-video rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <Image
              src={images[current]}
              alt={`preview-${current}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
          </div>

          <p className="text-center mt-3 text-[11px] tracking-widest text-white/40 uppercase">
            {current + 1} / {images.length}
          </p>
        </motion.div>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white transition-colors"
              aria-label="Previous image"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 3L5 8l5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white transition-colors"
              aria-label="Next image"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}

        {images.length > 1 && (
          <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 px-3 py-2 rounded-full bg-black/40 backdrop-blur-md max-w-[calc(100vw-2rem)] overflow-x-auto scrollbar-none"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative flex-shrink-0 w-8 h-8 rounded-md overflow-hidden ring-2 transition-all duration-200 ${
                  i === current
                    ? "ring-white scale-110"
                    : "ring-transparent opacity-60 hover:opacity-90"
                }`}
                aria-label={`Go to image ${i + 1}`}
              >
                <Image
                  src={img}
                  alt={`thumb-${i}`}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}


const VISIBLE_COUNT = 2;

interface ImageGalleryProps {
  images: string[];
}

function ImageGallery({ images }: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const visible = images.slice(0, VISIBLE_COUNT);
  const overflow = images.length - VISIBLE_COUNT;

  return (
    <>
      <div className="mt-4 flex flex-wrap gap-2">
        {visible.map((img, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setLightboxIndex(idx)}
            className="relative w-[72px] h-[52px] sm:w-[88px] sm:h-[60px] rounded-lg overflow-hidden ring-1 ring-stone-200 dark:ring-stone-700 shadow-sm hover:shadow-md hover:ring-stone-400 dark:hover:ring-stone-500 transition-shadow duration-200 flex-shrink-0"
            aria-label={`Open image ${idx + 1}`}
          >
            <Image
              src={img}
              alt={`gallery-${idx}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 72px, 88px"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200" />
          </motion.button>
        ))}

        {overflow > 0 && (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setLightboxIndex(VISIBLE_COUNT)}
            className="relative w-[72px] h-[52px] sm:w-[88px] sm:h-[60px] rounded-lg overflow-hidden ring-1 ring-stone-200 dark:ring-stone-700 flex-shrink-0 flex items-center justify-center bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors duration-200 group"
            aria-label={`Show ${overflow} more images`}
          >
            <Image
              src={images[VISIBLE_COUNT]}
              alt="overflow-bg"
              fill
              className="object-cover opacity-30 blur-[2px] scale-110"
              sizes="(max-width: 640px) 72px, 88px"
            />
            <span className="relative z-10 text-[13px] font-semibold text-stone-600 dark:text-stone-300 group-hover:text-stone-800 dark:group-hover:text-white transition-colors">
              +{overflow}
            </span>
          </motion.button>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

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

            {exp.image && exp.image.length > 0 && (
              <ImageGallery images={exp.image} />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}