"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Palette, Code2 } from "lucide-react";

const skills = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Creating modern, responsive web applications with React, Next.js, and modern tooling.",
  },
  {
    icon: Code2,
    title: "AI & Machine Learning",
    description:
      "Currently learning data science, model training, and AI integration into apps.",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-dark">
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
            What I Do
          </span>
          <h2 className="mb-4 text-3xl font-bold text-cream md:text-4xl">
            Passionate About Technology And
            <br />
            <span className="gradient-text">
              Building Innovative Solutions
            </span>
          </h2>
        </motion.div>

        {/* Skills Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative w-full max-w-[380px] overflow-hidden rounded-3xl border border-dark-border bg-dark-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-sage/40 hover:bg-dark-card/80 hover:shadow-2xl hover:shadow-sage/10"
            >
              {/* Glow effect on hover */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-sage/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-sage/20 bg-dark text-sage shadow-inner shadow-sage/5 transition-all duration-500 group-hover:scale-110 group-hover:border-sage/40 group-hover:bg-sage/10">
                  <skill.icon size={32} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-cream transition-colors duration-300 group-hover:text-sage">
                  {skill.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/50">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
