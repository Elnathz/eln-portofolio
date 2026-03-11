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
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Exploring mobile app development to bring ideas into the hands of users.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting beautiful and intuitive user interfaces with a focus on experience.",
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-dark-border bg-dark-card p-8 transition-all duration-500 hover:border-sage/30 hover:shadow-xl hover:shadow-sage/5"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-sage/20 bg-sage/10 text-sage transition-all duration-300 group-hover:bg-sage group-hover:text-dark">
                  <skill.icon size={28} />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-cream">
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
