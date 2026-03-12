"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

interface ExperienceImage {
  src: string;
  caption: string;
}

interface Experience {
  id: number;
  title: string;
  role: string;
  period: string;
  images: ExperienceImage[];
}

const experienceData: Experience[] = [
  {
    id: 1,
    title: "Organisasi Siswa Intra Sekolah",
    role: "Ketua 1 OSIS",
    period: "2022 - 2023",
    images: [
      { src: "/experience/osis/1.jpg", caption: "Kegiatan rapat pengurus OSIS" },
      { src: "/experience/osis/2.jpg", caption: "Pelaksanaan program kerja OSIS" },
      { src: "/experience/osis/3.jpg", caption: "Kegiatan sosial bersama anggota OSIS" },
    ],
  },
  {
    id: 2,
    title: "English Student Organization",
    role: "Kepala Divisi Speech",
    period: "2023 - 2024",
    images: [
      { src: "/experience/eso/1.jpg", caption: "Kegiatan ESO bersama anggota" },
      { src: "/experience/eso/2.jpg", caption: "Seminar teknologi ESO" },
      { src: "/experience/eso/3.jpg", caption: "Event tahunan ESO" },
    ],
  },
  {
    id: 3,
    title: "Forum Osis Grobogan",
    role: "Anggota Desain dan Media",
    period: "2023 - 2024",
    images: [
      { src: "/experience/fog/1.jpg", caption: "Kegiatan FOG bersama anggota" },
      { src: "/experience/fog/2.jpg", caption: "Seminar teknologi FOGR" },
      { src: "/experience/fog/3.jpg", caption: "Event tahunan FOGR" },
    ],
  },
  {
    id: 4,
    title: "Himpunan Mahasiswa Teknik Informatika",
    role: "Anggota Bidang Litbang",
    period: "2024 - Sekarang",
    images: [
      { src: "/experience/seminar/1.jpg", caption: "Persiapan seminar nasional" },
      { src: "/experience/seminar/2.jpg", caption: "Pelaksanaan seminar" },
      { src: "/experience/seminar/3.jpg", caption: "Foto bersama narasumber" },
    ],
  },
  {
    id: 5,
    title: "Volunteer PPK Ormawa HMTI",
    role: "Anggota Divisi Pemasaran",
    period: "2025",
    images: [
      { src: "/experience/ppkormawa/1.jpg", caption: "Kegiatan bakti sosial" },
      { src: "/experience/ppkormawa/2.jpg", caption: "Mengajar anak-anak" },
      { src: "/experience/ppkormawa/3.jpg", caption: "Foto bersama tim relawan" },
    ],
  },
  {
    id: 6,
    title: "Panitia Dinus Inside 2025",
    role: "Penanggung Jawab Pendamping",
    period: "2025",
    images: [
      { src: "/experience/dinusinside/1.jpg", caption: "Persiapan lomba coding" },
      { src: "/experience/dinusinside/2.jpg", caption: "Saat kompetisi berlangsung" },
      { src: "/experience/dinusinside/3.jpg", caption: "Pengumuman hasil lomba" },
    ],
  },
];

// ─── Card with auto-sliding images ───────────────────────────────────
function ExperienceCard({
  experience,
  index,
  onOpen,
}: {
  experience: Experience;
  index: number;
  onOpen: (exp: Experience) => void;
}) {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setSlide((s) => (s + 1) % experience.images.length);
  }, [experience.images.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onClick={() => onOpen(experience)}
    >
      <div className="relative overflow-hidden rounded-2xl border border-dark-border bg-dark transition-all duration-300 hover:border-sage/40 hover:shadow-xl hover:shadow-sage/5">
        {/* Image area */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {experience.images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                i === slide
                  ? "scale-100 opacity-100"
                  : "scale-105 opacity-0"
              }`}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}

          {/* Gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-dark via-dark/60 to-transparent" />

          {/* Slide dots */}
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {experience.images.map((_, i) => (
              <span
                key={i}
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === slide
                    ? "w-5 bg-sage"
                    : "w-1.5 bg-cream/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Info overlay */}
        <div className="p-4">
          <h3 className="text-base font-bold text-cream transition-colors group-hover:text-sage">
            {experience.title}
          </h3>
          <p className="mt-0.5 text-xs text-cream/50">
            {experience.role} &middot; &middot; {experience.period}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Full-screen photo modal ─────────────────────────────────────────
function PhotoModal({
  experience,
  onClose,
}: {
  experience: Experience;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const images = experience.images;
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative mx-4 flex w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-dark-border bg-dark-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-dark-border px-6 py-4">
          <div>
            <h3 className="text-lg font-bold text-cream">{experience.title}</h3>
            <p className="text-xs text-cream/50">
              {experience.role} &middot; {experience.period}
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-dark text-cream/60 transition-colors hover:bg-sage/10 hover:text-sage"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Image viewer */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-dark">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={images[current].src}
                alt={images[current].caption}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 750px"
              />
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-dark/70 text-cream/80 backdrop-blur-sm transition-all hover:bg-dark hover:text-sage"
                aria-label="Previous photo"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-dark/70 text-cream/80 backdrop-blur-sm transition-all hover:bg-dark hover:text-sage"
                aria-label="Next photo"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Caption + pagination */}
        <div className="flex items-center justify-between border-t border-dark-border px-6 py-4">
          <p className="line-clamp-2 flex-1 pr-4 text-sm leading-relaxed text-cream/60">
            {images[current].caption}
          </p>
          <div className="flex shrink-0 items-center justify-center rounded-full bg-sage/10 px-3 py-1 ring-1 ring-sage/30">
            <span className="text-xs font-semibold tracking-wider text-sage">
              {current + 1} / {images.length}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Section ────────────────────────────────────────────────────
export default function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  return (
    <>
      <section id="experience" className="bg-dark">
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
              What I&apos;ve Done
            </span>
            <h2 className="text-3xl font-bold text-cream md:text-4xl">
              My <span className="gradient-text">Experience</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream/40">
              Berbagai pengalaman organisasi, kepanitiaan, dan kegiatan yang telah membentuk kemampuan saya.
            </p>
          </motion.div>

          {/* 6-Card Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experienceData.map((exp, i) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={i}
                onOpen={setSelectedExp}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal rendered outside section to avoid clipping */}
      <AnimatePresence>
        {selectedExp && (
          <PhotoModal
            experience={selectedExp}
            onClose={() => setSelectedExp(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
