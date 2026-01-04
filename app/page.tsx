"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// Data
const experiences = [
  {
    title: "Research Technician",
    company: "Children's Hospital of Philadelphia",
    period: "Oct 2021 – Present",
    highlights: [
      "Multiomics data analysis (RNA-seq, single cell RNA-sequencing, spatial transcriptomics)",
      "Statistical analysis and visualization using R and Python",
      "Built reproducible pipelines with Docker and Quarto",
      "Created interactive Shiny web apps for data communication",
      "Developed FileMaker databases with custom UI/UX",
    ],
  },
  {
    title: "Volunteer Software Developer",
    company: "Plant it Forward",
    period: "Mar 2021 – Oct 2021",
    highlights: [
      "Led cross-platform app development with Flutter and Firebase",
      "Integrated authentication and role-based access",
      "Designed UI/UX for team communication platform",
    ],
  },
  {
    title: "Software Engineer/Data Analyst",
    company: "Baylor College of Medicine",
    period: "",
    highlights: [
      "Developed relational SQL model for FishNET database using FileMaker",
      "Created 100+ custom scripts and integrated Google Charts API",
      "Automated NGS analysis with Bash scripts",
      "Built shared Unix environment saving costs for BCM labs",
    ],
  },
];

const projects = [
  {
    title: "UTRGV Assistant",
    subtitle: "Senior Project",
    description: "Facebook Messenger chatbot assisting students with class and professor inquiries using Wit.ai for NLP, Express and MongoDB backend.",
    tech: ["Wit.ai", "Express", "MongoDB", "JavaScript"],
    link: null,
  },
  {
    title: "Lingappan Lab Website",
    subtitle: "Lab Website",
    description: "Redesigned laboratory online presence with Next.js, featuring team profiles, project showcases, and interactive R Shiny apps.",
    tech: ["Next.js", "React", "R Shiny"],
    link: "https://www.lingappanlab.com/",
  },
  {
    title: "TravelCost Scout",
    subtitle: "Hackathon Project",
    description: "Web app finding affordable airfare between destinations, displaying results on animated maps with multi-flight savings suggestions.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: null,
  },
];

const skills = {
  advanced: ["R", "C++", "JavaScript", "Python"],
  intermediate: ["Bash", "PHP", "C#", "SQL"],
  beginner: ["Perl", "Dart"],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Geometric decorations */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-1 bg-accent-rust"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ transformOrigin: "left" }}
        />
        <motion.div
          className="absolute top-24 left-10 w-20 h-1 bg-accent-gold"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ transformOrigin: "left" }}
        />
        <motion.div
          className="absolute bottom-32 right-10 w-40 h-1 bg-accent-olive"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ transformOrigin: "right" }}
        />
        <motion.div
          className="absolute top-1/4 right-20 w-1 h-24 bg-accent-rust"
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
                className="absolute -inset-8 border border-accent-gold opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.7 }}
              />
              <div className="relative w-80 h-[414px]">
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
              Passionate about Computer Science, Data Science, and App Development.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a
                href="mailto:abiudcantu@gmail.com"
                className="px-6 py-3 bg-accent-rust text-text-primary font-mono text-sm tracking-wider hover:bg-accent-gold transition-colors duration-300"
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

      {/* About Section */}
      <section className="py-24 px-6 bg-bg-secondary relative">
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
              <span className="text-accent-rust">//</span> About
            </h2>
            <div className="w-16 h-1 bg-accent-gold mb-8" />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInLeft}>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Currently working as a Research Technician at the Children&apos;s Hospital of Philadelphia,
                where I bridge the gap between computational analysis and biological discovery.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                I specialize in multiomics data analysis, building reproducible pipelines, and
                creating interactive applications that make complex data accessible.
              </p>
            </motion.div>
            <motion.div variants={fadeInRight} className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-bg-tertiary border-l-4 border-accent-rust">
                <span className="text-accent-gold font-mono text-sm">EDUCATION</span>
                <span className="text-text-primary">M.S. Computer Science, UTRGV</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-bg-tertiary border-l-4 border-accent-olive">
                <span className="text-accent-gold font-mono text-sm">GPA</span>
                <span className="text-text-primary">3.83</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-bg-tertiary border-l-4 border-accent-gold">
                <span className="text-accent-gold font-mono text-sm">LOCATION</span>
                <span className="text-text-primary">Philadelphia, PA</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-accent-rust">//</span> Experience
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
                  <span className="text-accent-gold font-mono text-sm">{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-1">{exp.title}</h3>
                <p className="text-accent-rust mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-text-secondary flex items-start gap-2">
                      <span className="text-accent-olive mt-1.5">&#9656;</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 bg-bg-secondary relative">
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-1 bg-accent-olive"
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
              <span className="text-accent-rust">//</span> Projects
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
                <p className="text-accent-gold font-mono text-xs tracking-wider mb-2">
                  {project.subtitle}
                </p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
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
                    className="inline-flex items-center gap-2 text-accent-rust hover:text-accent-gold font-mono text-sm transition-colors"
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

      {/* Publications Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/2 -left-20 w-40 h-40 border-2 border-accent-rust opacity-20"
          style={{ rotate: 45 }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.2, x: 0 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute bottom-20 -right-10 w-24 h-24 border-2 border-accent-gold opacity-20"
          style={{ rotate: 45 }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.2, x: 0 }}
          viewport={{ once: true }}
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-accent-rust">//</span> Publications
            </h2>
            <div className="w-16 h-1 bg-accent-gold mb-12" />
          </motion.div>

          <motion.div
            className="bg-bg-secondary p-8 md:p-12 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-rust via-accent-gold to-accent-olive" />

            <div className="text-center">
              <motion.div
                className="text-6xl md:text-8xl font-bold text-accent-rust mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                7
              </motion.div>
              <p className="text-text-secondary text-lg mb-2">Peer-Reviewed Research Papers</p>
              <p className="text-accent-gold font-mono text-sm mb-8">
                4 as First Author • 3 as Co-Author
              </p>

              <a
                href="https://scholar.google.com/citations?user=k9BZNocAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent-rust text-text-primary font-mono tracking-wider hover:bg-accent-gold transition-colors duration-300"
              >
                VIEW ON GOOGLE SCHOLAR
                <span>&#8599;</span>
              </a>
            </div>

            {/* Placeholder for future publication list */}
            <div className="mt-12 pt-8 border-t border-bg-tertiary">
              <p className="text-text-secondary text-center font-mono text-sm">
                // Publication details coming soon
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-bg-secondary relative">
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
              <span className="text-accent-rust">//</span> Skills
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
                <h3 className="font-mono text-accent-rust tracking-wider">ADVANCED</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.advanced.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-bg-primary border border-accent-rust text-text-primary font-mono text-sm"
                    whileHover={{ scale: 1.05, backgroundColor: "#b54a32" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-gold" />
                <h3 className="font-mono text-accent-gold tracking-wider">INTERMEDIATE</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.intermediate.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-bg-primary border border-accent-gold text-text-primary font-mono text-sm"
                    whileHover={{ scale: 1.05, backgroundColor: "#c9a959" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-olive" />
                <h3 className="font-mono text-accent-olive tracking-wider">BEGINNER</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.beginner.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-bg-primary border border-accent-olive text-text-primary font-mono text-sm"
                    whileHover={{ scale: 1.05, backgroundColor: "#6b7c5c" }}
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
              <span className="text-accent-gold font-mono">CURRENTLY LEARNING:</span>{" "}
              Game development using Godot
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-accent-rust">//</span> Contact
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
                Interested in collaboration or have a project in mind?
                Feel free to reach out.
              </p>

              <div className="space-y-4">
                <motion.a
                  href="mailto:abiudcantu@gmail.com"
                  className="flex items-center gap-4 p-4 bg-bg-secondary hover:bg-bg-tertiary transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-accent-rust flex items-center justify-center text-text-primary font-mono text-sm">
                    @
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm font-mono">EMAIL</p>
                    <p className="text-text-primary group-hover:text-accent-gold transition-colors">
                      abiudcantu@gmail.com
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/Abiud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-bg-secondary hover:bg-bg-tertiary transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-accent-olive flex items-center justify-center text-text-primary font-mono text-sm">
                    GH
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm font-mono">GITHUB</p>
                    <p className="text-text-primary group-hover:text-accent-gold transition-colors">
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
                    <p className="text-text-secondary text-sm font-mono">WEBSITE</p>
                    <p className="text-text-primary group-hover:text-accent-gold transition-colors">
                      abiudcantu.com
                    </p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="bg-bg-secondary p-8 h-full flex flex-col justify-center">
                <div className="mb-6">
                  <p className="text-accent-rust font-mono text-sm mb-2">LOCATION</p>
                  <p className="text-text-primary text-xl">Philadelphia, PA</p>
                </div>
                <div className="mb-6">
                  <p className="text-accent-rust font-mono text-sm mb-2">LANGUAGES</p>
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
                    // Open to opportunities
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-bg-secondary">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary font-mono text-sm">
            &copy; {new Date().getFullYear()} Abiud Cantu
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent-rust" />
            <div className="w-2 h-2 bg-accent-gold" />
            <div className="w-2 h-2 bg-accent-olive" />
          </div>
        </div>
      </footer>
    </main>
  );
}
