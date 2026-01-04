"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const externalLinks = [
  { label: "Resume", href: "/resume.pdf" },
  {
    label: "Scholar",
    href: "https://scholar.google.com/citations?user=k9BZNocAAAAJ&hl=en",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-bg-primary/95 backdrop-blur-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Geometric accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-accent-rust"
          initial={{ width: 0 }}
          animate={{ width: scrolled ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-50 max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ x: 3 }}
          >
            {/* Geometric logo mark */}
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-accent-rust" />
              <div className="w-3 h-3 bg-accent-gold" />
              <div className="w-3 h-3 bg-accent-olive" />
            </div>
            <span className="font-mono text-lg tracking-widest text-text-primary group-hover:text-accent-gold transition-colors">
              AC
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-base tracking-wider uppercase text-text-secondary hover:text-accent-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop External Links */}
          <div className="hidden md:flex items-center gap-4">
            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="px-4 py-2 border border-text-secondary text-text-secondary font-mono text-base tracking-wider uppercase hover:border-accent-rust hover:text-accent-rust transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-0.5 bg-text-primary"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 4 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-text-primary"
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-text-primary"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -4 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-bg-primary/90 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute right-0 top-20 bottom-0 w-72 bg-bg-secondary border-l border-bg-tertiary"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-rust via-accent-gold to-accent-olive" />

              <div className="p-8 pt-12">
                {/* Nav Links */}
                <div className="space-y-6 mb-12">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="block font-mono text-sm tracking-wider uppercase text-text-secondary hover:text-accent-gold transition-colors"
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className="text-accent-rust mr-2">//</span>
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-16 h-0.5 bg-accent-rust mb-8" />

                {/* External Links */}
                <div className="space-y-4">
                  {externalLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block px-4 py-3 border border-text-secondary text-text-secondary font-mono text-xs tracking-wider uppercase hover:border-accent-gold hover:text-accent-gold transition-colors text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                      {link.href.startsWith("http") && (
                        <span className="ml-2">&#8599;</span>
                      )}
                    </a>
                  ))}
                </div>

                {/* Bottom decoration */}
                <div className="absolute bottom-8 left-8 flex gap-1">
                  <div className="w-2 h-2 bg-accent-rust" />
                  <div className="w-2 h-2 bg-accent-gold" />
                  <div className="w-2 h-2 bg-accent-olive" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
