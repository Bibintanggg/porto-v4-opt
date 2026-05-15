import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";
import { fastSpring } from "@/src/lib/animations/spring";
import { NavLinkItem } from "./types";

interface Props extends NavLinkItem {
    showLabel: boolean;
}

export default function NavItem({
  label,
  icon,
  href,
  isExternal,
  showLabel,
}: Props) {
  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex items-center rounded-full text-white/60 no-underline cursor-pointer select-none"
      style={{
        fontSize: 13.5,
        fontWeight: 450,
        letterSpacing: "-0.01em",
        whiteSpace: "nowrap",
        padding: "8px 12px",
        gap: showLabel ? 7 : 0,
      }}
      whileHover={{
        backgroundColor: "rgba(255,255,255,0.08)",
        color: "rgba(255,255,255,0.95)",
      }}
      transition={{ duration: 0.18 }}
    >
      <span className="flex items-center justify-center flex-shrink-0">
        {icon}
      </span>

      <AnimatePresence initial={false}>
        {showLabel && (
          <motion.span
            key="label"
            initial={{ opacity: 0, width: 0, marginLeft: 0 }}
            animate={{ opacity: 1, width: "auto", marginLeft: 7 }}
            exit={{ opacity: 0, width: 0, marginLeft: 0 }}
            transition={fastSpring}
            className="block overflow-hidden"
            style={{ whiteSpace: "nowrap" }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}