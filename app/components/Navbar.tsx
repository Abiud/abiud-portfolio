"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeProvider";
import { ThemeIcon } from "@/app/components/icons";
import { useScrolled, useBodyScrollLock } from "@/lib/hooks";
import { navLinks, externalLinks } from "@/lib/constants/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled(50);
  const { theme, resolvedTheme, setTheme, mounted } = useTheme();

  useBodyScrollLock(isOpen);

  const toggleTheme = () => {
    if (theme === "system") {
      // If on system, switch to opposite of current resolved
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else {
      // Toggle between light and dark
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-accent-gold focus:text-white focus:font-mono focus:text-sm focus:tracking-wider"
      >
        Skip to main content
      </a>

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-bg-primary/95 backdrop-blur-sm" : "bg-transparent"
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
              <div className="w-3 h-3 bg-accent-gold" />
            </div>
            <span className="font-mono text-lg tracking-widest text-text-primary group-hover:text-accent-blue-dark transition-colors">
              AC
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-base tracking-wider uppercase text-text-secondary hover:text-accent-blue-dark transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop External Links + Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.newTab ? "_blank" : undefined}
                rel={link.newTab ? "noopener noreferrer" : undefined}
                className="px-4 py-2 border border-text-secondary text-text-secondary font-mono text-base tracking-wider uppercase hover:border-accent-gold hover:text-accent-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 text-text-secondary hover:text-accent-blue-dark transition-colors duration-200"
              aria-label={
                mounted
                  ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`
                  : "Toggle theme"
              }
            >
              <ThemeIcon resolvedTheme={resolvedTheme} mounted={mounted} />
            </button>
          </div>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 text-text-secondary hover:text-accent-blue-dark transition-colors duration-200"
              aria-label={
                mounted
                  ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`
                  : "Toggle theme"
              }
            >
              <ThemeIcon resolvedTheme={resolvedTheme} mounted={mounted} />
            </button>

            {/* Mobile Hamburger */}
            <button
              className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
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
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-rust via-accent-gold to-accent-gold" />

              <div className="p-8 pt-12">
                {/* Nav Links */}
                <div className="space-y-6 mb-12">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="block font-mono text-sm tracking-wider uppercase text-text-secondary hover:text-accent-blue-dark transition-colors"
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className="text-accent-rust mr-2">{"//"}</span>
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
                      target={link.newTab ? "_blank" : undefined}
                      rel={link.newTab ? "noopener noreferrer" : undefined}
                      className="block px-4 py-3 border border-text-secondary text-text-secondary font-mono text-xs tracking-wider uppercase hover:border-accent-blue-dark hover:text-accent-blue-dark transition-colors text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* Bottom decoration */}
                <div className="absolute bottom-8 left-8 flex gap-1">
                  <div className="w-2 h-2 bg-accent-rust" />
                  <div className="w-2 h-2 bg-accent-gold" />
                  <div className="w-2 h-2 bg-accent-gold" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
