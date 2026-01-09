"use client";

import { motion } from "motion/react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/lib/constants/animations";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-accent-rust">{"//"}</span> Contact
          </h2>
          <div className="w-16 h-1 bg-accent-gold mb-12" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInLeft} className="space-y-6">
            <p className="text-text-secondary text-lg">
              Interested in collaboration or have a project in mind? Feel free
              to reach out.
            </p>

            <div className="space-y-4">
              <motion.a
                href="https://github.com/Abiud"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-bg-secondary hover:bg-bg-tertiary transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-accent-gold flex items-center justify-center text-text-primary font-mono text-sm">
                  GH
                </div>
                <div>
                  <p className="text-text-secondary text-sm font-mono">
                    GITHUB
                  </p>
                  <p className="text-text-primary group-hover:text-accent-blue-dark transition-colors">
                    github.com/Abiud
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://abiudcantu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-bg-secondary hover:bg-bg-tertiary transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-accent-gold flex items-center justify-center text-text-primary font-mono text-sm">
                  W
                </div>
                <div>
                  <p className="text-text-secondary text-sm font-mono">
                    WEBSITE
                  </p>
                  <p className="text-text-primary group-hover:text-accent-blue-dark transition-colors">
                    abiudcantu.com
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={fadeInRight}>
            <div className="bg-bg-secondary p-8 h-full flex flex-col justify-center">
              <div className="mb-6">
                <p className="text-accent-rust font-mono text-sm mb-2">
                  LOCATION
                </p>
                <p className="text-text-primary text-xl">Philadelphia, PA</p>
              </div>
              <div className="mb-6">
                <p className="text-accent-rust font-mono text-sm mb-2">
                  LANGUAGES
                </p>
                <div className="flex gap-4">
                  <span className="px-4 py-2 border border-text-secondary text-text-primary">
                    English
                  </span>
                  <span className="px-4 py-2 border border-text-secondary text-text-primary">
                    Spanish
                  </span>
                </div>
              </div>
              <div className="pt-6 border-t border-bg-tertiary">
                <p className="text-text-secondary text-sm font-mono">
                  {"// Open to opportunities"}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
