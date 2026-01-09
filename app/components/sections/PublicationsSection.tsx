"use client";

import { motion } from "motion/react";
import { fadeInUp, scaleIn } from "@/lib/constants/animations";
import { PublicationList } from "@/app/components/PublicationList";
import type { Publication } from "@/lib/semantic-scholar";

interface PublicationsSectionProps {
  publications: Publication[];
  firstAuthorCount: number;
}

export function PublicationsSection({
  publications,
  firstAuthorCount,
}: PublicationsSectionProps) {
  const coAuthorCount = publications.length - firstAuthorCount;

  return (
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
            <span className="text-accent-rust">{"//"}</span> Publications
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
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-rust via-accent-gold to-accent-gold" />

          <div className="text-center mb-12">
            <motion.div
              className="text-6xl md:text-8xl font-bold text-accent-rust mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              {publications.length}
            </motion.div>
            <p className="text-text-secondary text-lg mb-2">
              Peer-Reviewed Research Papers
            </p>
            <p className="text-accent-blue-dark font-mono text-sm">
              {firstAuthorCount} as First Author • {coAuthorCount} as Co-Author
            </p>
          </div>

          {/* Publication list */}
          <div className="pt-8 border-t border-bg-tertiary">
            <PublicationList publications={publications} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
