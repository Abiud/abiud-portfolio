"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/constants/animations";
import { experiences } from "@/lib/constants/data";

interface ExperienceSectionProps {
  onImageClick: (image: { src: string; alt: string }) => void;
}

export function ExperienceSection({ onImageClick }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-accent-rust">{"//"}</span> Experience
          </h2>
          <div className="w-16 h-1 bg-accent-gold mb-12" />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              className="relative pl-8 border-l-2 border-bg-tertiary hover:border-accent-rust transition-colors duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              custom={index}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent-rust" />

              <div className="mb-2">
                <span className="text-accent-blue-dark font-mono text-sm">
                  {exp.period}
                </span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-1">
                {exp.title}
              </h3>
              <p className="text-accent-rust mb-4">{exp.company}</p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-text-secondary flex items-start gap-2"
                  >
                    <span className="text-accent-gold">&#9656;</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              {exp.images && (
                <div className="mt-4 flex flex-wrap gap-4">
                  {exp.images.map((img, i) =>
                    img.clickable === false ? (
                      <Image
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        width={200}
                        height={150}
                        className="rounded border border-bg-tertiary object-contain"
                      />
                    ) : (
                      <motion.button
                        key={i}
                        onClick={() =>
                          onImageClick({ src: img.src, alt: img.alt })
                        }
                        className="cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={`View enlarged image: ${img.alt}`}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={200}
                          height={150}
                          className="rounded border border-bg-tertiary object-contain hover:border-accent-gold transition-colors"
                        />
                      </motion.button>
                    ),
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
