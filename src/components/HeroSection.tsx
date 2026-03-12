"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";

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
            <span className="text-xs font-medium text-sage">
            Currently learning AI & Machine Learning
            </span>
          </div>

          <h2 className="mb-2 text-lg font-light text-cream/60">
            Hello Earth,
          </h2>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-cream md:text-6xl">
            I am{" "}
            <span className="gradient-text">Farros</span> Rifantiarno Ramadhani
          </h1>
          <p className="mb-8 text-base leading-relaxed text-cream/50 md:text-lg">
            An Informatics Engineering student in the Excellent Class program, focusing on Full Stack Development with a keen interest in Data Science.
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
              href="https://drive.google.com/file/d/1MvwzCmwIoXpDuGB6tas0mz8vZoiz4mi5/view?usp=sharing" target="_blank"
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
          <div className="relative h-80 w-80 md:h-[600px] md:w-[550px] lg:h-[650px] lg:w-[600px]">
            <Image 
              src="/hero.png" 
              alt="Farros Rifantiarno Ramadhani"
              fill
              priority
              className="object-contain filter grayscale contrast-[1.10] hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 320px, (max-width: 1024px) 550px, 600px"
            />
          </div>
        </motion.div>
      </div>

      {/* Social Links on Bottom Right */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-10 right-10 z-20 hidden items-center gap-6 lg:flex"
      >
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold tracking-wider text-cream">Find Me On</span>
          <div className="h-px w-12 bg-sage/30"></div>
        </div>
        
        <div className="flex items-center gap-3">
          {[
            { icon: FaFacebookF, href: "https://web.facebook.com/farros.rifantiarno", name: "Facebook" },
            { icon: FaInstagram, href: "https://www.instagram.com/frrosrift_", name: "Instagram" },
            { icon: FaGithub, href: "https://github.com/Elnathz", name: "GitHub" },
            { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/farros-rifantiarno-ramadhani-50840a2a9/", name: "LinkedIn" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="group relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-dark-card border border-dark-border text-cream/70 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:bg-sage/10 hover:text-sage hover:shadow-[0_8px_16px_-6px_rgba(163,186,167,0.3)]"
            >
              <social.icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
