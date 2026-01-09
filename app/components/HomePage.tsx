"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { Lightbox } from "@/app/components/ui/Lightbox";
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  PublicationsSection,
  SkillsSection,
  ContactSection,
  Footer,
} from "@/app/components/sections";
import type { Publication } from "@/lib/semantic-scholar";

interface HomePageProps {
  publications: Publication[];
  firstAuthorCount: number;
}

export default function HomePage({
  publications,
  firstAuthorCount,
}: HomePageProps) {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <main
      id="main-content"
      className="min-h-screen bg-bg-primary text-text-primary overflow-x-hidden"
    >
      <HeroSection />
      <AboutSection />
      <ExperienceSection onImageClick={setLightboxImage} />
      <ProjectsSection onImageClick={setLightboxImage} />
      <PublicationsSection
        publications={publications}
        firstAuthorCount={firstAuthorCount}
      />
      <SkillsSection />
      <ContactSection />
      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <Lightbox
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            onClose={() => setLightboxImage(null)}
            reducedMotion={prefersReducedMotion}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
