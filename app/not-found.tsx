"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg-primary flex items-center justify-center px-6 relative overflow-hidden">
      {/* Geometric accent lines */}
      <div className="absolute top-20 left-10 w-32 h-0.5 bg-accent-gold transform -rotate-45 opacity-40" />
      <div className="absolute top-32 left-20 w-20 h-0.5 bg-accent-rust transform -rotate-45 opacity-60" />
      <div className="absolute bottom-32 right-10 w-40 h-0.5 bg-accent-gold transform rotate-45 opacity-40" />
      <div className="absolute bottom-20 right-24 w-24 h-0.5 bg-accent-olive transform rotate-45 opacity-50" />

      {/* Small geometric blocks */}
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent-rust opacity-30" />
      <div className="absolute bottom-40 left-16 w-4 h-4 bg-accent-gold opacity-25" />

      <motion.div
        className="text-center max-w-lg"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Error label */}
        <motion.p
          className="font-mono text-sm uppercase tracking-widest text-text-secondary mb-6"
          variants={fadeInUp}
        >
          // ERROR_404
        </motion.p>

        {/* Large 404 */}
        <motion.div className="relative mb-8" variants={fadeInUp}>
          <h1 className="text-8xl md:text-9xl font-bold text-text-primary tracking-tight">
            404
          </h1>
          {/* Accent line under 404 */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent-rust" />
        </motion.div>

        {/* Terminal-style message */}
        <motion.div className="mb-8 text-left" variants={fadeInUp}>
          <p className="font-mono text-lg md:text-xl text-text-primary mb-4">
            <span className="text-accent-gold">&gt;</span> Page not found
          </p>
          <p className="text-text-secondary leading-relaxed">
            The requested path does not exist in this directory.
          </p>
          <p className="text-text-secondary mt-2">
            Run{" "}
            <code className="bg-bg-secondary px-2 py-1 rounded font-mono text-sm text-text-primary">
              cd /
            </code>{" "}
            to return home.
          </p>
        </motion.div>

        {/* Return home button */}
        <motion.div variants={fadeInUp}>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-accent-gold text-white font-mono uppercase tracking-wider text-sm hover:bg-accent-gold-dark transition-colors duration-300"
          >
            Return Home
          </Link>
        </motion.div>

        {/* Additional terminal hint */}
        <motion.p
          className="font-mono text-xs text-text-secondary mt-8 opacity-60"
          variants={fadeInUp}
        >
          // Process exited with code 404
        </motion.p>
      </motion.div>
    </main>
  );
}
