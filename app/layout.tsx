import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import { experiences, skillsFlat } from "@/lib/constants/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://abiudcantu.com";
const description =
  "Research Technician & Software Developer passionate about Computer Science, Data Science, and App Development. M.S. in Computer Science from UTRGV.";

export const metadata: Metadata = {
  title: "Abiud Cantu | Portfolio",
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Abiud Cantu | Portfolio",
    description,
    url: "/",
    siteName: "Abiud Cantu Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/abiud.png",
        width: 400,
        height: 400,
        alt: "Abiud Cantu",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Abiud Cantu | Portfolio",
    description,
    images: ["/abiud.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Abiud Cantu" }],
  keywords: [
    "Software Developer",
    "Research Technician",
    "Data Science",
    "Computer Science",
    "UTRGV",
    "Portfolio",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abiud Cantu",
  jobTitle: "Research Technician & Software Developer",
  description,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Texas Rio Grande Valley",
    degree: "Master of Science in Computer Science",
  },
  url: siteUrl,
  image: `${siteUrl}/abiud.png`,
  sameAs: ["https://github.com/Abiud"],
  knowsAbout: skillsFlat,
  worksFor: {
    "@type": "Organization",
    name: "Children's Hospital of Philadelphia",
  },
  hasOccupation: experiences.map((exp) => ({
    "@type": "Occupation",
    name: exp.title,
    occupationLocation: {
      "@type": "Organization",
      name: exp.company,
    },
  })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    addressCountry: "US",
  },
  knowsLanguage: ["English", "Spanish"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
