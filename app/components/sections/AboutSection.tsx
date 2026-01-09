"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/constants/animations";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-bg-secondary relative">
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-accent-rust"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ transformOrigin: "left" }}
      />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-accent-rust">{"//"}</span> About
          </h2>
          <div className="w-16 h-1 bg-accent-gold mb-8" />
        </motion.div>

        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Top row - Text */}
          <motion.div variants={fadeInUp}>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Currently working as a Research Technician at the Children&apos;s
              Hospital of Philadelphia, where I bridge the gap between
              computational analysis and biological discovery.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              I specialize in multiomics data analysis, building reproducible
              pipelines, and creating interactive applications that make complex
              data accessible.
            </p>
          </motion.div>

          {/* Bottom row - Education and GPA */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-3 flex items-center gap-3 py-2 px-4 bg-bg-tertiary border-l-4 border-accent-rust">
              <span className="text-accent-blue-dark font-mono text-sm">
                EDUCATION
              </span>
              <span className="text-text-primary">
                M.S. Computer Science, University of Texas Rio Grande Valley
              </span>
            </div>
            <div className="md:col-span-1 flex items-center gap-3 py-2 px-4 bg-bg-tertiary border-l-4 border-accent-gold">
              <span className="text-accent-blue-dark font-mono text-sm">
                GPA
              </span>
              <span className="text-text-primary">3.83</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
