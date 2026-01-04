"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
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
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 4;
  const totalPages = Math.ceil(publications.length / pageSize);
  const visiblePublications = publications.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 0));

  const startNum = currentPage * pageSize + 1;
  const endNum = Math.min((currentPage + 1) * pageSize, publications.length);

  if (publications.length === 0) {
    return (
      <p className="text-text-secondary text-center font-mono text-sm">
        // Unable to load publications
      </p>
    );
  }

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="space-y-6"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={staggerContainer}
        >
          {visiblePublications.map((pub) => (
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
      </AnimatePresence>

      {/* Navigation */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-bg-tertiary">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="w-10 h-10 flex items-center justify-center border border-accent-rust text-accent-rust hover:bg-accent-rust hover:text-text-primary transition-colors duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-accent-rust"
            aria-label="Previous publications"
          >
            <span className="text-lg leading-none">&larr;</span>
          </button>

          <span className="font-mono text-sm text-text-secondary">
            {startNum}-{endNum} of {publications.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className="w-10 h-10 flex items-center justify-center border border-accent-rust text-accent-rust hover:bg-accent-rust hover:text-text-primary transition-colors duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-accent-rust"
            aria-label="Next publications"
          >
            <span className="text-lg leading-none">&rarr;</span>
          </button>
        </div>
      )}
    </div>
  );
}
