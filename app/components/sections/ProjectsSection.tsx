"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
} from "@/lib/constants/animations";
import { projects } from "@/lib/constants/data";

interface ProjectsSectionProps {
  onImageClick: (image: { src: string; alt: string }) => void;
}

export function ProjectsSection({ onImageClick }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-24 px-6 bg-bg-secondary relative">
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1 bg-accent-gold"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ transformOrigin: "right" }}
      />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-accent-rust">{"//"}</span> Projects
          </h2>
          <div className="w-16 h-1 bg-accent-gold mb-12" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group bg-bg-primary p-6 border-t-4 border-accent-rust hover:border-accent-gold transition-all duration-300"
              variants={scaleIn}
              whileHover={{ y: -5 }}
            >
              <p className="text-accent-blue-dark font-mono text-xs tracking-wider mb-2">
                {project.subtitle}
              </p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent-blue-dark transition-colors">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              {project.image && (
                <motion.button
                  onClick={() =>
                    onImageClick({
                      src: project.image!,
                      alt: project.title,
                    })
                  }
                  className="mb-4 w-full cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={`View enlarged image: ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-auto rounded border border-bg-tertiary hover:border-accent-gold transition-colors"
                  />
                </motion.button>
              )}
              {project.video && (
                <div className="mb-4 aspect-video">
                  <iframe
                    src={project.video}
                    title={`${project.title} video`}
                    className="w-full h-full rounded border border-bg-tertiary"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-bg-secondary text-text-secondary text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-rust hover:text-accent-blue-dark font-mono text-sm transition-colors"
                >
                  VIEW PROJECT
                  <span>&#8599;</span>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
