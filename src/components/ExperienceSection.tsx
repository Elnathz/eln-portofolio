"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ExternalLink} from "lucide-react";
import Image from "next/image";

interface ImageLink {
  label: string;
  url: string;
  icon?: "external";
}

interface ExperienceImage {
  src: string;
  caption: string;
  links?: ImageLink[];
}

interface Experience {
  id: number;
  title: string;
  role: string;
  period: string;
  credentialId?: string;
  credentialUrl?: string;
  images: ExperienceImage[];
}

const experienceData: Experience[] = [
  {
    id: 1,
    title: "Organisasi Siswa Intra Sekolah",
    role: "Ketua 1 OSIS",
    period: "2022 - 2023",
    images: [
      { src: "/experience/osis/1.webp", caption: "Pengurus Osis Masa Bakti 2022/2023" },
      { src: "/experience/osis/2.webp", caption: "XTROFEST 62" },
      { src: "/experience/osis/3.webp", caption: "Panitia Event 17 Agustus OSIS dan MPK " },
      { src: "/experience/osis/4.webp", caption: "Event Latihan Dasar Kepemimpinan OSIS 2023" },
    ],
  },
  {
    id: 2,
    title: "English Student Organization",
    role: "Kepala Divisi Speech",
    period: "2023 - 2024",
    images: [
      { src: "/experience/eso/1.jpeg", caption: "Panitia ESO CAMP 2023", links: [{ label: "Feeds ESO CAMP", url: "https://www.instagram.com/p/Cp9D0CCSzWf/", icon: "external" }] },
    ],
  },
  {
    id: 3,
    title: "Forum Osis Grobogan",
    role: "Anggota Desain dan Media",
    period: "2023 - 2024",
    images: [
      { src: "/experience/fog/0.jpg", caption: "Feeds/Photo Pengurus FOG 2023/2024", links: [{ label: "Instagram FOG", url: "https://www.instagram.com/p/C52HrQKyHFr/?img_index=2", icon: "external" }] },
      { src: "/experience/fog/1.jpg", caption: "Pengurus FOG 2023/2024" },
      { src: "/experience/fog/2.jpg", caption: "Open Recruitment GLP 2024" },
      { src: "/experience/fog/3.jpg", caption: "Open Recruitment GLP 2024" },
      { src: "/experience/fog/4.jpg", caption: "Pendamping Kojago 2024" },
    ],
  },
  {
    id: 4,
    title: "Himpunan Mahasiswa Teknik Informatika",
    role: "Anggota Bidang Litbang",
    period: "2024 - Sekarang",
    images: [
      { src: "/experience/hmti/0.webp", caption: "Feeds Pengurus HMTI 2025/2026" },
      { src: "/experience/hmti/1.webp", caption: "Feeds Pengurus HMTI 2025/2026" },
      { src: "/experience/hmti/2.webp", caption: "Pembekalan Calon Pengurus FIK 2025" },
      { src: "/experience/hmti/3.webp", caption: "Pengurus HMTI day 2 Dinus Inside" },
      { src: "/experience/hmti/4.webp", caption: "Day 1 Pembekalan Anggota Aktif Sebagai Koor Acara" },
      { src: "/experience/hmti/5.webp", caption: "Day 2 Pembekalan Anggota Aktif Sebagai Koor Acara" },
      { src: "/experience/hmti/6.webp", caption: "Panitia KonekTI 2025(Makrab Prodi Teknik Informatika)" },
      { src: "/experience/hmti/7.webp", caption: "Master of Ceremony SEMNASTI(Seminar Nasional Teknik Informatika) 2025" },
      { src: "/experience/hmti/8.webp", caption: "Koor Acara ITC(IT Competition) 2026" },
      { src: "/experience/hmti/9.webp", caption: "Makrab HMTI(HMTI FAMILY) 2025" },
      { src: "/experience/hmti/10.webp", caption: "Badan Pengurus Harian (Sekretaris) HMTI SERIES 2026" },
    ],
  },
  {
    id: 5,
    title: "Volunteer PPK Ormawa HMTI",
    role: "Anggota Divisi Pemasaran",
    period: "2025",
    images: [
      { src: "/experience/ppko/1.jpg", caption: "Master of Ceremony Grand Opening Jendela Karya" },
      { src: "/experience/ppko/2.jpeg", caption: "Kunjungan Pada Pelatihan Pengolahan Produk Susu Sapi(LALA)" },
    ],
  },
  {
    id: 6,
    title: "Panitia Dinus Inside 2025",
    role: "Penanggung Jawab Pendamping dan Koorlap",
    period: "2025",
    images: [
      { src: "/experience/dinusinside/1.webp", caption: "Feeds Sie Penanggung Jawab Pendamping Dinus Inside 2026", links: [{ label: "Instagram Dinus Inside", url: "https://www.instagram.com/p/DOSspx5E4Li/", icon: "external" }] },
      { src: "/experience/dinusinside/2.webp", caption: "After Gladi Resik Dinus Inside 2026"},
      { src: "/experience/dinusinside/3.webp", caption: "Day 1 Dinus Inside 2026 Sebagai Koor Lapangan dan Penanggung Jawab Pendamping"},
      { src: "/experience/dinusinside/4.webp", caption: "Day 1 Dinus Inside 2026 Sebagai Koor Lapangan dan Penanggung Jawab Pendamping"},
      { src: "/experience/dinusinside/5.webp", caption: "Day 2 Dinus Inside 2026 Sebagai Koor Lapangan dan Penanggung Jawab Pendamping"},
      { src: "/experience/dinusinside/6.webp", caption: "Day 2 Dinus Inside 2026 Sebagai Koor Lapangan dan Penanggung Jawab Pendamping"},
      { src: "/experience/dinusinside/7.webp", caption: "Day 3 Dinus Inside 2026 Sebagai Koor Lapangan dan Penanggung Jawab Pendamping"},
    ],
  },
];

const certificateData: Experience[] = [
  {
    id: 101,
    title: "IBM Machine Learning Professional Certificate",
    role: "Sertifikat Profesional",
    period: "2024",
    credentialId: "OCZC6P8P49CH",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/OCZC6P8P49CH",
    images: [
      { src: "/certificates/coursera.webp", caption: "Sertifikat IBM" },
    ],
  },
  {
    id: 102,
    title: "WPU Course Belajar Laravel",
    role: "Sertifikat Pelatihan",
    period: "2024",
    credentialId: "HMVL5T23",
    credentialUrl: "https://learn.wpucourse.id/certificate/HMVL5T23",
    images: [
      { src: "/certificates/wpucourse.webp", caption: "WPU Course Belajar Laravel" },
    ],
  },
  {
    id: 103,
    title: "Juara 2 Assignment BTNG DNCC 2024",
    role: "Piagam Penghargaan",
    period: "2024",
    images: [
      { src: "/certificates/btng.webp", caption: "Piagam Juara 2 Assignment BTNG DNCC 2024" },
    ],
  },
  {
    id: 104,
    title: "Sertifikat Panitia Dinus Inside 2025",
    role: "Sertifikat Kepanitiaan",
    period: "2025",
    images: [
      { src: "/certificates/dinusinside.webp", caption: "Sertifikat Panitia Dinus Inside 2025" },
    ],
  },
  {
    id: 105,
    title: "Piagam Pengurus OSIS",
    role: "Piagam Penghargaan",
    period: "2023",
    images: [
      { src: "/certificates/osis.webp", caption: "Piagam Pengurus OSIS" },
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
          {(experience.credentialId || experience.credentialUrl) && (
            <div className="mt-1 flex items-center">
              {experience.credentialUrl ? (
                <a 
                  href={experience.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => e.stopPropagation()}
                  className="relative z-10 inline-flex items-center gap-1 font-mono text-[10px] text-sage hover:text-sage-light hover:underline"
                >
                  {experience.credentialId ? `Credential ID: ${experience.credentialId}` : 'Lihat Sertifikat'}
                  <ExternalLink size={10} />
                </a>
              ) : (
                <span className="font-mono text-[10px] text-cream/40">Credential ID: {experience.credentialId}</span>
              )}
            </div>
          )}
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
            <div className="mt-1 flex flex-col gap-1 text-xs text-cream/50">
              <span>{experience.role} &middot; {experience.period}</span>
              {(experience.credentialId || experience.credentialUrl) && (
                <div className="flex items-center">
                  {experience.credentialUrl ? (
                    <a 
                      href={experience.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex w-fit items-center gap-1 rounded bg-sage/10 px-2 py-0.5 font-mono text-[10px] text-sage transition-colors hover:bg-sage/20 hover:text-sage-light"
                    >
                      {experience.credentialId ? `Credential ID: ${experience.credentialId}` : 'Lihat Sertifikat'}
                      <ExternalLink size={10} />
                    </a>
                  ) : (
                    <span className="w-fit rounded bg-dark-border/50 px-2 py-0.5 font-mono text-[10px] text-cream/70">
                      Credential ID: {experience.credentialId}
                    </span>
                  )}
                </div>
                )}
            </div>
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
        <div className="relative flex w-full items-center justify-center overflow-hidden bg-dark transition-all duration-300">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.3 }}
              className="relative flex w-full items-center justify-center"
            >
              <img
                src={images[current].src}
                alt={images[current].caption}
                className="h-auto w-full max-h-[70vh] object-contain"
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
        <div className="border-t border-dark-border px-6 py-4">
          <div className="flex items-center justify-between">
            <p className="line-clamp-2 flex-1 pr-4 text-sm leading-relaxed text-cream/60">
              {images[current].caption}
            </p>
            <div className="flex shrink-0 items-center justify-center rounded-full bg-sage/10 px-3 py-1 ring-1 ring-sage/30">
              <span className="text-xs font-semibold tracking-wider text-sage">
                {current + 1} / {images.length}
              </span>
            </div>
          </div>

          {/* Action links (per-slide) */}
          {images[current].links && images[current].links!.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-4 border-t border-dark-border pt-3">
              {images[current].links!.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all bg-sage text-dark hover:bg-sage-light hover:shadow-lg hover:shadow-sage/20"
                >
                  <ExternalLink size={15} />
                  {link.label}
                </a>
              ))}
            </div>
          )}
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

          {/* Experience Grid */}
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

          {/* Certificates Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 mt-24 text-center"
          >
            <span className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-sage">
              Licenses & Certifications
            </span>
            <h2 className="text-3xl font-bold text-cream md:text-4xl">
              My <span className="gradient-text">Certificates</span>
            </h2>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificateData.map((cert, i) => (
              <ExperienceCard
                key={cert.id}
                experience={cert}
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
