"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Palette, Code2 } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web App Design",
    description:
      "Creating modern, responsive web applications with stunning UI/UX that engage users.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description:
      "Designing intuitive mobile experiences for both Android and iOS platforms.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting beautiful user interfaces with focus on usability and user experience.",
  },
  {
    icon: Code2,
    title: "Full Stack Dev",
    description:
      "Building robust, scalable full-stack applications from front to back end.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-dark">
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
            Creative Professional Design That&apos;s
            <br />
            <span className="gradient-text">
              oriented towards client needs
            </span>
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                  <service.icon size={28} />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-cream">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/50">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
