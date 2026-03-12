"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, Gamepad2, Rocket, Music, Dumbbell } from "lucide-react";

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

const interests = [
  { icon: Music, label: "LANY Enthusiast" },
  { icon: Dumbbell, label: "Boxing & Gym" },
  { icon: Gamepad2, label: "Gaming" },
];

export default function EducationSection() {
  return (
    <section id="education" className="bg-dark">
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

          {/* Right - About Me Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="overflow-hidden rounded-3xl border border-dark-border bg-dark-card p-8 md:p-10">
              {/* Decorative glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sage/10 blur-3xl" />

              {/* Section label */}
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage/10 text-sage">
                    <Rocket size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-cream">About Me</h3>
                </div>

                {/* Paragraphs */}
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-cream/60 text-justify">
                    Ketertarikan saya dengan dunia teknologi sudah dimulai sejak kecil — dari asyiknya bermain laptop sejak TK dan SD, hingga menyelami dunia gaming yang membuat saya penasaran: <span className="text-cream/80 font-medium">&ldquo;Bagaimana semua ini bisa dibuat?&rdquo;</span> Rasa penasaran itulah yang akhirnya membawa saya mendalami dunia IT secara serius.
                  </p>
                  <p className="text-sm leading-relaxed text-cream/60 text-justify">
                    Saat ini, saya merupakan mahasiswa <span className="text-sage font-medium">Teknik Informatika kelas unggulan</span> di Universitas Dian Nuswantoro, dengan fokus pada pengembangan web dan ketertarikan kuat di bidang <span className="text-sage font-medium">Data Science</span>. Mimpi besar saya adalah membangun startup sendiri yang memiliki visi revolusioner di dunia AI — menciptakan teknologi yang benar-benar berdampak bagi banyak orang.
                  </p>
                  <p className="text-sm leading-relaxed text-cream/60 text-justify">
                    Di luar dunia coding, saya menikmati waktu dengan mendengarkan musik — terutama <span className="text-cream/80 font-medium">LANY</span> yang selalu menemani hari-hari saya. Saya juga aktif berolahraga: dari boxing, gym, hingga badminton, semua menjadi cara saya menjaga keseimbangan antara pikiran dan tubuh.
                  </p>
                </div>

                {/* Interest tags */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {interests.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 rounded-full border border-sage/20 bg-sage/5 px-4 py-2 transition-all duration-300 hover:border-sage/40 hover:bg-sage/10"
                    >
                      <item.icon size={14} className="text-sage" />
                      <span className="text-xs font-medium text-cream/70">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
