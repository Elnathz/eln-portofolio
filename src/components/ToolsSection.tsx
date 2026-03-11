"use client";

import { motion } from "framer-motion";
import {
  SiFigma,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiFlutter,
  SiPostcss,
} from "react-icons/si";

const tools = [
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { icon: SiCss, name: "CSS3", color: "#1572B6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiFlutter, name: "Flutter", color: "#02569B" },
  { icon: SiPostcss, name: "PostCSS", color: "#DD3A0A" },
];

export default function ToolsSection() {
  return (
    <section className="bg-dark">
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
            Tech Stack
          </span>
          <h2 className="text-3xl font-bold text-cream md:text-4xl">
            Tools and <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 md:gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-dark-border bg-dark-card p-6 transition-all duration-300 hover:border-sage/30 hover:shadow-lg hover:-translate-y-1"
            >
              <tool.icon
                size={40}
                className="transition-all duration-300 group-hover:scale-110"
                style={{ color: tool.color }}
              />
              <span className="text-xs font-medium text-cream/50 transition-colors group-hover:text-cream">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
