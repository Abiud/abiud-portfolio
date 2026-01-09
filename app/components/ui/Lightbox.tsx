"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
  reducedMotion: boolean;
}

export function Lightbox({ src, alt, onClose, reducedMotion }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-pointer p-8"
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reducedMotion ? { opacity: 0 } : { opacity: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.3 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Enlarged image: ${alt}`}
    >
      <motion.div
        className="relative w-full h-full max-w-6xl max-h-[85vh]"
        initial={
          reducedMotion ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
        }
        animate={{ scale: 1, opacity: 1 }}
        exit={
          reducedMotion ? { scale: 1, opacity: 0 } : { scale: 0.8, opacity: 0 }
        }
        transition={{
          duration: reducedMotion ? 0 : 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain rounded"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white font-mono text-sm tracking-wider hover:text-accent-gold transition-colors flex items-center gap-2"
          aria-label="Close lightbox"
        >
          CLOSE <span className="text-xl">&times;</span>
        </button>
      </motion.div>
    </motion.div>
  );
}
