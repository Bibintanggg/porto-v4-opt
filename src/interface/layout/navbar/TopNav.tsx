"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon, FolderIcon, HomeIcon, MenuIcon, NewspaperIcon, UserIcon } from "./icons";
import { spring, fastSpring } from "@/src/lib/animations/spring";
import NavItem from "./NavItem";
import { DEFAULT_ITEMS } from "./nav-data";
import { TopNavProps } from "./types";

export default function TopNav({
  logoSrc,
  logoAlt = "Brand Logo",
  items = DEFAULT_ITEMS,
}: TopNavProps) {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [mobileOpen]);

  const showLabels = isMobile ? mobileOpen : hovered;

  return (
    <nav className="fixed bottom-10 inset-x-0 z-50 flex justify-center items-end pointer-events-none px-4 md:px-0">
      <motion.div
        ref={navRef}
        layout
        transition={spring}
        className="pointer-events-auto relative overflow-hidden"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          background: "linear-gradient(180deg, rgba(23,23,23,0.85) 0%, rgba(13,13,13,0.85) 100%)",
          border: "1px solid rgb(36,36,36)",
          width: isMobile ? "calc(100vw - 32px)" : "auto",
        }}
        animate={{
          borderRadius: isMobile ? 30 : 100,
        }}
        onMouseEnter={() => { if (!isMobile) setHovered(true); }}
        onMouseLeave={() => { if (!isMobile) setHovered(false); }}
        onClick={() => { if (isMobile) setMobileOpen(v => !v); }}
      >

        {!isMobile && (
          <motion.div
            layout
            transition={spring}
            className="flex flex-row items-center"
            animate={{
              gap: hovered ? 50 : 30,
              paddingTop: hovered ? 10 : 8,
              paddingBottom: hovered ? 10 : 8,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <motion.div
              layout
              animate={{ width: hovered ? 25 : 20, height: hovered ? 25 : 20 }}
              transition={spring}
              className="flex items-center justify-center flex-shrink-0 overflow-hidden"
            >
              {logoSrc ? (
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={25}
                  height={25}
                  className="object-contain w-full h-full"
                />
              ) : (
                <div>
                  {/* <DefaultLogo /> */}
                </div>
              )}
            </motion.div>

            <div className="flex flex-row items-center gap-[5px]">
              {items.map((item) => (
                <NavItem key={item.label} {...item} showLabel={showLabels} />
              ))}
            </div>
          </motion.div>
        )}

        {isMobile && (
          <motion.div
            layout
            transition={spring}
            className="flex flex-col w-full"
            animate={{
              paddingTop: mobileOpen ? 10 : 12,
              paddingBottom: mobileOpen ? 15 : 10,
              paddingLeft: 20,
              paddingRight: 20,
              gap: mobileOpen ? 15 : 0,
            }}
          >
            <div className="flex flex-row items-center justify-between w-full cursor-pointer">
              <motion.div
                className="flex items-center justify-center flex-shrink-0"
                animate={{ width: 23, height: 23 }}
              >
                {logoSrc ? (
                  <Image src={logoSrc} alt={logoAlt} width={23} height={23} className="object-contain w-full h-full" />
                ) : (
                  <div>
                    {/* <DefaultLogo /> */}
                  </div>
                )}
              </motion.div>

              <motion.div
                className="flex items-center justify-center text-white/70"
                whileTap={{ scale: 0.82 }}
                transition={{ duration: 0.12 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.18 }}
                      className="flex"
                    >
                      <CloseIcon />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.18 }}
                      className="flex"
                    >
                      <MenuIcon />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            <AnimatePresence initial={false}>
              {mobileOpen && (
                <motion.div
                  key="mobile-links"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={spring}
                  className="flex flex-col w-full overflow-hidden gap-[17px]"
                >
                  {items.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ ...spring, delay: i * 0.05 }}
                    >
                      <NavItem {...item} showLabel={true} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

      </motion.div>
    </nav>
  );
}