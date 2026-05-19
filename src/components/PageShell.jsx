import { motion } from "framer-motion";
import { useEffect } from "react";

export function PageShell({ children }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
      className="pt-24"
    >
      {children}
    </motion.main>
  );
}

export function SectionTitle({ eyebrow, title, sub, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl mb-12 ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
      {sub && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{sub}</p>}
    </motion.div>
  );
}
