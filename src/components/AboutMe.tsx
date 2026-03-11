"use client";

import { motion } from "framer-motion";
import { Lightbulb, MessageCircle, Users, Award } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Creativity",
    description:
      "Bringing innovative ideas and creative solutions to every project, ensuring unique results.",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description:
      "Clear and consistent communication throughout the project lifecycle.",
  },
  {
    icon: Users,
    title: "Cooperative",
    description:
      "Team-oriented approach with collaborative mindset to achieve shared goals.",
  },
  {
    icon: Award,
    title: "Professional",
    description:
      "Delivering high-quality work with attention to detail and deadlines.",
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="bg-dark">
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
            Get To Know Me
          </span>
          <h2 className="text-3xl font-bold text-cream md:text-4xl">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Circular Icon Cards - same layout as before */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group flex flex-col items-center text-center"
            >
              {/* Circular icon container */}
              <div className="relative mb-6">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-sage/20 transition-all duration-500 group-hover:border-sage/50 group-hover:scale-110" />
                {/* Pulsing ring */}
                <div className="absolute inset-0 rounded-full border border-sage/10 animate-pulse-ring" />
                {/* Icon circle */}
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-sage/30 bg-dark-card transition-all duration-500 group-hover:border-sage group-hover:shadow-lg group-hover:shadow-sage/20 md:h-28 md:w-28">
                  <reason.icon
                    size={36}
                    className="text-sage transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              <h3 className="mb-2 text-base font-semibold text-cream">
                {reason.title}
              </h3>
              <p className="text-xs leading-relaxed text-cream/40 md:text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
