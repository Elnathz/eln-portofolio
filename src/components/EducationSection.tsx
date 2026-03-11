"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Education {
  id: number;
  period: string;
  institution: string;
  degree: string;
  description: string;
  icon: React.ReactNode;
  status: "completed" | "current";
}

const educationData: Education[] = [
  {
    id: 1,
    period: "2021 - 2024",
    institution: "SMA Negeri 1 Purwodadi",
    degree: "IPA / Sains",
    description:
      "Menyelesaikan pendidikan menengah atas dengan fokus pada jurusan IPA. Aktif dalam kegiatan ekstrakulikuler dan organisasi sekolah.",
    icon: <School size={24} />,
    status: "completed",
  },
  {
    id: 2,
    period: "2024 - Sekarang",
    institution: "Universitas Dian Nuswantoro",
    degree: "S1 Teknik Informatika",
    description:
      "Menempuh pendidikan sarjana di bidang Teknik Informatika. Mempelajari pengembangan web, machine learning, dan data science.",
    icon: <GraduationCap size={24} />,
    status: "current",
  },
];

// Placeholder images for the auto-slide gallery
// Replace these paths with your actual photos in /public/education/
const galleryImages = [
  { src: "/education/edu-1.jpg", alt: "Pengurus OSIS SMA Negeri 1 Purwodadi Masa Bakti 2022/2023" },
  { src: "/education/edu-2.jpg", alt: "Pengurus Forum Osis Grobogan Masa Bakti 2023/2024" },
  { src: "/education/edu-3.jpg", alt: "Kegiatan Pendidikan 3" },
  { src: "/education/edu-4.jpg", alt: "Kegiatan Pendidikan 4" },
];

export default function EducationSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="education" className="bg-dark-card">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-sage">
            My Journey
          </span>
          <h2 className="text-3xl font-bold text-cream md:text-4xl">
            Education <span className="gradient-text">Path</span>
          </h2>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Timeline tracker (vertical) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-sage/50 via-sage/20 to-transparent" />

            <div className="space-y-0">
              {educationData.map((edu, index) => (
                <div key={edu.id} className="relative pl-16">
                  {/* Timeline node */}
                  <div
                    className={`absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                      edu.status === "current"
                        ? "border-sage bg-sage/20 text-sage shadow-lg shadow-sage/20"
                        : "border-sage/40 bg-dark text-sage/60"
                    }`}
                  >
                    {edu.icon}
                    {/* Pulse for current */}
                    {edu.status === "current" && (
                      <span className="absolute inset-0 animate-ping rounded-full border border-sage/30" />
                    )}
                  </div>

                  {/* Card Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`group relative mb-10 rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg ${
                      edu.status === "current"
                        ? "border-sage/30 bg-sage/5 hover:border-sage/50 hover:shadow-sage/10"
                        : "border-dark-border bg-dark hover:border-sage/20 hover:shadow-sage/5"
                    }`}
                  >
                    {/* Period badge */}
                    <span
                      className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        edu.status === "current"
                          ? "bg-sage/20 text-sage"
                          : "bg-dark-card text-cream/50"
                      }`}
                    >
                      {edu.period}
                    </span>

                    <h3 className="mb-1 text-lg font-bold text-cream group-hover:text-sage transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="mb-3 text-sm font-medium text-sage/80">
                      {edu.degree}
                    </p>
                    <p className="text-sm leading-relaxed text-cream/50">
                      {edu.description}
                    </p>

                    {/* Status indicator */}
                    {edu.status === "current" && (
                      <div className="mt-4 flex items-center gap-2">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-sage" />
                        <span className="text-xs font-medium text-sage">
                          Sedang ditempuh
                        </span>
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Auto-slide Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:sticky lg:top-24"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="overflow-hidden rounded-3xl border border-dark-border bg-dark">
              {/* Image container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                {galleryImages.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide
                        ? "translate-x-0 opacity-100"
                        : index < currentSlide
                        ? "-translate-x-full opacity-0"
                        : "translate-x-full opacity-0"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ))}

                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-dark/80 to-transparent" />

                {/* Navigation arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-dark/60 text-cream/80 backdrop-blur-sm transition-all hover:bg-dark/80 hover:text-sage"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-dark/60 text-cream/80 backdrop-blur-sm transition-all hover:bg-dark/80 hover:text-sage"
                  aria-label="Next photo"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Bottom bar with dots + caption */}
              <div className="flex items-center justify-between px-6 py-4">
                <p className="text-sm text-cream/50">
                  {galleryImages[currentSlide].alt}
                </p>
                <div className="flex gap-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "w-6 bg-sage"
                          : "w-2 bg-cream/20 hover:bg-cream/40"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative label */}
            <div className="mt-4 text-center">
              <p className="text-xs text-cream/30">
                Hover untuk pause &bull; Klik panah untuk navigasi
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
