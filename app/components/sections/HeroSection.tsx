"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { GraphIcon, TerminalIcon, ReportIcon, DnaIcon } from "@/app/components/icons";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 pt-28">
      {/* Geometric decorations */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-1 bg-accent-rust hidden sm:block"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ transformOrigin: "left" }}
      />
      <motion.div
        className="absolute top-24 left-10 w-20 h-1 bg-accent-gold hidden sm:block"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        style={{ transformOrigin: "left" }}
      />
      <motion.div
        className="absolute bottom-32 right-10 w-40 h-1 bg-accent-gold hidden sm:block"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        style={{ transformOrigin: "right" }}
      />
      <motion.div
        className="absolute top-1/4 right-20 w-1 h-24 bg-accent-rust hidden sm:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        style={{ transformOrigin: "top" }}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Portrait */}
        <motion.div
          className="relative flex justify-center md:justify-end order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Decorative frame */}
            <motion.div
              className="absolute -inset-4 border-2 border-accent-rust"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
            <motion.div
              className="absolute -inset-8 border-2 border-accent-gold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            />

            {/* Decorative icons around the portrait */}
            <motion.div
              className="absolute -top-16 -left-24 hidden md:block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.85, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 1, delay: 0.8 },
                scale: { duration: 0.8, delay: 0.8 },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
              style={{ rotate: -15 }}
            >
              <GraphIcon className="w-28 h-28" />
            </motion.div>

            <motion.div
              className="absolute -top-8 -right-20 hidden md:block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.85, scale: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 1, delay: 1 },
                scale: { duration: 0.8, delay: 1 },
                y: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2,
                },
              }}
              style={{ rotate: 12 }}
            >
              <ReportIcon className="w-32 h-32" />
            </motion.div>

            <motion.div
              className="absolute bottom-32 -left-28 hidden md:block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.9, scale: 1, y: [0, -5, 0] }}
              transition={{
                opacity: { duration: 1, delay: 1.2 },
                scale: { duration: 0.8, delay: 1.2 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.4,
                },
              }}
              style={{ rotate: 8 }}
            >
              <TerminalIcon className="w-24 h-24" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-24 hidden md:block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.85, scale: 1, y: [0, -7, 0] }}
              transition={{
                opacity: { duration: 1, delay: 1.4 },
                scale: { duration: 0.8, delay: 1.4 },
                y: {
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.6,
                },
              }}
              style={{ rotate: -20 }}
            >
              <DnaIcon className="w-28 h-28" />
            </motion.div>

            <div className="relative w-80 h-[577px] mb-[-46px]">
              <Image
                src="/abiud.png"
                alt="Abiud Cantu"
                fill
                className="relative z-10 object-contain"
                style={{ imageRendering: "pixelated" }}
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Text content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <motion.p
            className="text-accent-rust font-mono text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Research Technician & Developer
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-text-primary">Abiud</span>
            <br />
            <span className="text-accent-gold">Cantu</span>
          </motion.h1>
          <motion.p
            className="text-text-secondary text-lg md:text-xl max-w-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Passionate about Computer Science, Data Science, and App
            Development.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-accent-gold text-white font-mono text-sm tracking-wider hover:bg-accent-blue-dark transition-colors duration-300"
            >
              CONTACT ME
            </a>
            <a
              href="https://github.com/Abiud"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-text-secondary text-text-secondary font-mono text-sm tracking-wider hover:border-accent-gold hover:text-accent-gold transition-colors duration-300"
            >
              GITHUB
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1 h-2 bg-accent-rust rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
