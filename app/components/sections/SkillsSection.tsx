"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/constants/animations";
import { skills } from "@/lib/constants/data";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-bg-secondary relative">
      <motion.div
        className="absolute bottom-0 left-0 w-2/3 h-1 bg-accent-rust"
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
            <span className="text-accent-rust">{"//"}</span> Skills
          </h2>
          <div className="w-16 h-1 bg-accent-gold mb-12" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-accent-rust" />
              <h3 className="font-mono text-accent-rust tracking-wider">
                ADVANCED
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.advanced.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-bg-primary border border-accent-rust text-text-primary font-mono text-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#87a45b" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-accent-gold" />
              <h3 className="font-mono text-accent-blue-dark tracking-wider">
                INTERMEDIATE
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.intermediate.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-bg-primary border border-accent-gold text-text-primary font-mono text-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#4587ba" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-accent-gold" />
              <h3 className="font-mono text-accent-gold tracking-wider">
                BEGINNER
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.beginner.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-bg-primary border border-accent-gold text-text-primary font-mono text-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#f5a30a" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Currently learning */}
        <motion.div
          className="mt-12 p-6 bg-bg-primary border-l-4 border-accent-gold"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-text-secondary">
            <span className="text-accent-blue-dark font-mono">
              CURRENTLY LEARNING:
            </span>{" "}
            Game development using Unreal Engine
          </p>
        </motion.div>
      </div>
    </section>
  );
}
