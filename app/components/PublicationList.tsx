"use client";

import { motion, type Variants } from "motion/react";
import type { Publication } from "@/lib/semantic-scholar";

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

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

interface PublicationListProps {
  publications: Publication[];
}

export function PublicationList({ publications }: PublicationListProps) {
  if (publications.length === 0) {
    return (
      <p className="text-text-secondary text-center font-mono text-sm">
        // Unable to load publications
      </p>
    );
  }

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      {publications.map((pub) => (
        <motion.article
          key={pub.paperId}
          className="group border-l-2 border-bg-tertiary hover:border-accent-rust pl-6 py-4 transition-colors duration-300"
          variants={fadeInUp}
        >
          <div className="flex flex-wrap items-start gap-2 mb-2">
            {pub.year && (
              <span className="font-mono text-xs text-accent-gold bg-accent-gold/10 px-2 py-1">
                {pub.year}
              </span>
            )}
            {pub.isOpenAccess && (
              <span className="font-mono text-xs text-accent-olive bg-accent-olive/10 px-2 py-1">
                Open Access
              </span>
            )}
            {pub.citationCount > 0 && (
              <span className="font-mono text-xs text-text-secondary">
                {pub.citationCount} citation{pub.citationCount !== 1 ? "s" : ""}
              </span>
            )}
          </div>

          <h3 className="text-text-primary font-medium mb-2 group-hover:text-accent-rust transition-colors duration-300">
            {pub.url ? (
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {pub.title}
              </a>
            ) : (
              pub.title
            )}
          </h3>

          <p className="text-text-secondary text-sm mb-2">
            {pub.authors.map((a) => a.name).join(", ")}
          </p>

          {pub.venue && (
            <p className="text-accent-blue font-mono text-xs italic">
              {pub.venue}
            </p>
          )}

          {pub.externalIds?.DOI && (
            <a
              href={`https://doi.org/${pub.externalIds.DOI}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 font-mono text-xs text-text-tertiary hover:text-accent-gold transition-colors"
            >
              DOI: {pub.externalIds.DOI}
            </a>
          )}
        </motion.article>
      ))}
    </motion.div>
  );
}
