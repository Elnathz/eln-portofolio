"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-dark"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-sage/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-sage-dark/5 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(163,186,167,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(163,186,167,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 pt-24 md:flex-row md:justify-between md:pt-0">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sage/20 bg-sage/5 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
            
          </div>

          <h2 className="mb-2 text-lg font-light text-cream/60">
            Hello Earth,
          </h2>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-cream md:text-6xl">
            I am{" "}
            <span className="gradient-text">Farros</span> Rifantiarno Ramadhani
          </h1>
          <p className="mb-8 text-base leading-relaxed text-cream/50 md:text-lg">
            A Full Stack Developer specializing in creating impactful digital
            experiences, intuitive interfaces, and scalable solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-sage px-7 py-3 text-sm font-semibold text-dark transition-all duration-300 hover:bg-sage-light hover:shadow-lg hover:shadow-sage/20"
            >
              View Projects
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 rounded-full border border-sage/30 px-7 py-3 text-sm font-semibold text-sage transition-all duration-300 hover:bg-sage/10"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Section - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative h-72 w-72 md:h-96 md:w-96">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-sage/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-3 rounded-full border border-sage/10" />

            {/* Profile image placeholder */}
            <div className="absolute inset-6 overflow-hidden rounded-full border-2 border-sage/30 bg-gradient-to-br from-sage-dark/20 to-dark">
              <div className="flex h-full w-full items-center justify-center text-sage/30">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 top-12 rounded-2xl glass px-4 py-3"
            >
              <span className="text-2xl font-bold text-sage">+</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={20} className="text-sage/40" />
      </motion.div>
    </section>
  );
}
