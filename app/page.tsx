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

// Themed SVG Icons
const GraphIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} xmlns="http://www.w3.org/2000/svg">
    <g>
      <rect x="32" y="7" fill="#4587ba" width="10" height="45" />
      <rect x="17" y="38" fill="#f5a30a" width="10" height="14" />
      <rect x="2" y="29" fill="#87a45b" width="10" height="23" />
      <rect x="47" y="15" fill="#f15d0e" width="10" height="37" opacity="0.6" />
      <path fill="#13170d" d="M59,53H1c-0.552,0-1-0.447-1-1s0.448-1,1-1h58c0.552,0,1,0.447,1,1S59.552,53,59,53z" />
    </g>
  </svg>
);

const TerminalIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0 -1028.4)">
      <path d="m3 1030.4c-1.1046 0-2 0.9-2 2v7 2 7c0 1.1 0.8954 2 2 2h9 9c1.105 0 2-0.9 2-2v-7-2-7c0-1.1-0.895-2-2-2h-9-9z" fill="#13170d" />
      <path d="m3 2c-1.1046 0-2 0.8954-2 2v3 3 1 1 1 3 3c0 1.105 0.8954 2 2 2h9 9c1.105 0 2-0.895 2-2v-3-4-2-3-3c0-1.1046-0.895-2-2-2h-9-9z" transform="translate(0 1028.4)" fill="#13170d" opacity="0.9" />
      <path d="m4 5.125v1.125l3 1.75-3 1.75v1.125l5-2.875-5-2.875zm5 4.875v1h5v-1h-5z" transform="translate(0 1028.4)" fill="#4587ba" />
    </g>
  </svg>
);

const ReportIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
    <g>
      <polygon fill="#f3f6ef" points="461.307,35.234 461.307,512 415.389,512 367.424,491.542 319.535,512 0,512 0,35.234" />
      <g>
        <ellipse fill="#4587ba" cx="344.707" cy="143.01" rx="13.016" ry="12.228" />
        <ellipse fill="#f5a30a" cx="344.707" cy="193.608" rx="13.016" ry="12.228" />
        <ellipse fill="#87a45b" cx="344.707" cy="244.206" rx="13.016" ry="12.228" />
        <ellipse fill="#f15d0e" cx="344.707" cy="294.803" rx="13.016" ry="12.228" />
      </g>
      <path fill="#87a45b" d="M460.928,19.702h0.379v45.919H0V19.702h0.379C0.152,18.566,0,17.352,0,16.141 C0,7.2,7.199,0,16.064,0h429.179c8.865,0,16.064,7.2,16.064,16.141c0,0.453,0,0.984-0.076,1.439 C461.155,18.337,461.08,19.019,460.928,19.702z" />
      <g>
        <path fill="#f15d0e" d="M118.646,121.378c-17.961,9.736-33.156,23.9-44.185,41.005 c-11.037,17.118-17.892,37.181-19.074,58.768c-0.122,2.227-0.195,4.468-0.195,6.725c0,19.975,4.868,38.803,13.436,55.41 c10.134,19.643,25.466,36.16,44.204,47.708l63.418-109.844V106.818C155.396,106.818,135.776,112.093,118.646,121.378z" />
        <path fill="#f5a30a" d="M176.25,106.818c-20.854,0-40.474,5.275-57.604,14.56l57.604,99.773l57.604-99.773 C216.723,112.093,197.103,106.818,176.25,106.818z" />
        <path fill="#c48208" d="M297.308,227.876c0,19.773-4.768,38.425-13.182,54.895c-0.075,0.179-0.164,0.344-0.254,0.508 c-10.133,19.653-25.467,36.168-44.209,47.721c-18.442,11.359-40.158,17.935-63.413,17.935s-44.971-6.576-63.413-17.935 l63.413-109.849h120.864C297.233,223.378,297.308,225.62,297.308,227.876z" />
        <path fill="#4587ba" d="M297.114,221.151c-1.181-21.581-8.041-41.653-19.071-58.766c-0.104-0.15-0.209-0.314-0.314-0.463 c-11-16.903-26.08-30.892-43.88-40.547l-57.301,99.253l-0.299,0.18l0.15,0.089l-0.15,0.254h0.598l107.278,61.62 c8.414-16.47,13.182-35.122,13.182-54.895C297.308,225.62,297.233,223.378,297.114,221.151z" />
      </g>
      <rect x="375.618" y="138.276" fill="#516336" opacity="0.5" width="52.187" height="9.469" />
      <rect x="377.921" y="292.381" fill="#516336" opacity="0.5" width="32.617" height="9.469" />
      <rect x="375.618" y="188.874" fill="#516336" opacity="0.5" width="37.222" height="9.469" />
      <rect x="375.618" y="240.968" fill="#516336" opacity="0.5" width="27.629" height="9.469" />
    </g>
  </svg>
);

const DnaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 36 36" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill="#4587ba" d="M3.019 26.246l3.432 3.432l-.923.922l-3.432-3.431z" />
    <path fill="#f5a30a" d="M6.362 29.587l3.431 3.432l-.923.923l-3.43-3.432z" />
    <path fill="#87a45b" d="M6.273 24.237l3.432 3.432l-.923.923L5.35 25.16z" />
    <path fill="#87a45b" d="M8.998 26.962l3.432 3.432l-.923.923l-3.431-3.432zm3.909-9.359l3.431 3.432l-.923.923l-3.431-3.432z" />
    <path fill="#87a45b" d="M15.631 20.329l3.432 3.431l-.923.923l-3.432-3.431z" />
    <path fill="#4587ba" d="M14.97 14.377l3.432 3.432l-.922.923l-3.432-3.432z" />
    <path fill="#f5a30a" d="M18.277 17.683l3.432 3.432l-.923.923l-3.432-3.432z" />
    <path fill="#87a45b" d="M17.616 11.731l3.432 3.432l-.923.922l-3.432-3.431z" />
    <path fill="#87a45b" d="M20.923 15.038l3.432 3.431l-.923.923l-3.431-3.432zM24.387 4.96l3.432 3.432l-.923.922l-3.432-3.431z" />
    <path fill="#87a45b" d="M27.694 8.267l3.432 3.431l-.923.923l-3.432-3.432z" />
    <path fill="#4587ba" d="M27.013 2.252l3.432 3.432l-.923.923l-3.432-3.432z" />
    <path fill="#f5a30a" d="M30.36 5.6l3.432 3.431l-.923.923l-3.432-3.431z" />
    <path fill="#c48208" d="M24.922.812c-2.52 2.52-2.601 6.145-2.396 9.806c.501.028 1.002.061 1.502.094c.39.026.775.051 1.159.074c-.198-3.286-.199-6.299 1.606-8.104c.727-.703.955-1.653.447-2.166c-.535-.54-1.542-.497-2.318.296z" />
    <path fill="#4587ba" d="M13.146 25.65l-.153-2.66c-.026-.445-.058-.899-.074-1.332c-.296-.296-2.466-.349-2.653-.162c.013.44.047.884.071 1.327c.028.502.126 2.275.149 2.66c.054.91.096 1.806.086 2.656c.259.259 2.371.437 2.645.162a36.931 36.931 0 0 0-.071-2.651z" />
    <path fill="#4587ba" d="M13.22 28.3l-2.649-.162c-.026 2.209-.384 4.145-1.687 5.448a1.322 1.322 0 1 0 1.87 1.871c2.423-2.422 2.467-7.174 2.466-7.157z" />
    <path fill="#c48208" d="M25.354 13.447c-.501-.028-1.003-.061-1.503-.094c-.389-.026-.775-.051-1.158-.074c.198 3.285.199 6.299-1.607 8.104c-1.804 1.804-4.813 1.805-8.094 1.607c-.386-.023-2.159-.14-2.656-.168c-3.667-.206-7.297-.126-9.82 2.397a1.322 1.322 0 0 0 1.871 1.87c1.805-1.804 4.815-1.806 8.098-1.608c.385.023 2.161.14 2.66.168c3.662.205 7.289.125 9.811-2.396c2.521-2.52 2.603-6.145 2.398-9.806z" />
    <path fill="#c48208" d="M25.354 13.447c-.028-.501-.145-2.277-.168-2.66a51.95 51.95 0 0 1-.064-1.332c-.336-.021-2.1-.133-2.653-.163c.013.44.032.883.056 1.326c.028.501.145 2.277.168 2.661c.055.914.091 1.804.081 2.656c.333.021 2.094.132 2.645.162a36.316 36.316 0 0 0-.065-2.65z" />
    <path fill="#4587ba" d="M35.581 8.827c-.42-.436-1.385-.601-2.291.353c-1.805 1.805-4.817 1.806-8.104 1.607c-.384-.023-2.16-.141-2.661-.169c-3.66-.205-7.286-.123-9.806 2.397c-2.215 2.215-2.545 5.284-2.453 8.48c.553.03 2.319.142 2.653.162c-.098-2.755.113-5.214 1.671-6.772c1.805-1.805 4.818-1.805 8.104-1.607c.383.023 2.16.14 2.661.168c3.661.205 7.286.124 9.806-2.396c.886-.869.84-1.787.42-2.223z" />
  </svg>
);

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
          className="absolute bottom-32 right-10 w-40 h-1 bg-accent-olive hidden sm:block"
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
                className="absolute -inset-8 border-2 border-accent-olive"
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
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
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
                  y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
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
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.4 }
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
                  y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }
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
                className="px-6 py-3 bg-accent-gold text-white font-mono text-sm tracking-wider hover:bg-accent-olive transition-colors duration-300"
              >
                CONTACT ME
              </a>
              <a
                href="https://github.com/Abiud"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-text-secondary text-text-secondary font-mono text-sm tracking-wider hover:border-accent-olive hover:text-accent-olive transition-colors duration-300"
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
                <span className="text-accent-gold-dark font-mono text-sm">EDUCATION</span>
                <span className="text-text-primary">M.S. Computer Science, UTRGV</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-bg-tertiary border-l-4 border-accent-olive">
                <span className="text-accent-gold-dark font-mono text-sm">GPA</span>
                <span className="text-text-primary">3.83</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-bg-tertiary border-l-4 border-accent-gold">
                <span className="text-accent-gold-dark font-mono text-sm">LOCATION</span>
                <span className="text-text-primary">Philadelphia, PA</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 relative">
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
                  <span className="text-accent-gold-dark font-mono text-sm">{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-1">{exp.title}</h3>
                <p className="text-accent-rust mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-text-secondary flex items-start gap-2">
                      <span className="text-accent-olive">&#9656;</span>
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
      <section id="projects" className="py-24 px-6 bg-bg-secondary relative">
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
                <p className="text-accent-gold-dark font-mono text-xs tracking-wider mb-2">
                  {project.subtitle}
                </p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-gold-dark transition-colors">
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
                    className="inline-flex items-center gap-2 text-accent-rust hover:text-accent-gold-dark font-mono text-sm transition-colors"
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
      <section id="publications" className="py-24 px-6 relative overflow-hidden">
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
              <p className="text-accent-gold-dark font-mono text-sm mb-8">
                4 as First Author • 3 as Co-Author
              </p>

              <a
                href="https://scholar.google.com/citations?user=k9BZNocAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent-gold text-text-primary font-mono tracking-wider hover:bg-accent-olive transition-colors duration-300"
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
                <h3 className="font-mono text-accent-gold-dark tracking-wider">INTERMEDIATE</h3>
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
                <div className="w-3 h-3 bg-accent-olive" />
                <h3 className="font-mono text-accent-olive tracking-wider">BEGINNER</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.beginner.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-bg-primary border border-accent-olive text-text-primary font-mono text-sm"
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
              <span className="text-accent-gold-dark font-mono">CURRENTLY LEARNING:</span>{" "}
              Game development using Godot
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
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
                    <p className="text-text-primary group-hover:text-accent-gold-dark transition-colors">
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
                    <p className="text-text-primary group-hover:text-accent-gold-dark transition-colors">
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
                    <p className="text-text-primary group-hover:text-accent-gold-dark transition-colors">
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
