"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO, TechStartup",
    text: "Amazing work! The attention to detail and creative design solutions exceeded our expectations. Highly recommended for any project.",
  },
  {
    name: "Sarah Williams",
    role: "Product Manager, DesignCo",
    text: "Professional, communicative, and incredibly talented. Delivered our project on time with exceptional quality.",
  },
  {
    name: "Michael Chen",
    role: "Founder, AppVenture",
    text: "One of the best developers I have worked with. Clean code, beautiful design, and great problem-solving skills.",
  },
];

export default function TestimonialsSection() {
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
            Testimonials
          </span>
          <h2 className="text-3xl font-bold text-cream md:text-4xl">
            What Do They{" "}
            <span className="gradient-text">Say About Me</span>
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-2xl border border-dark-border bg-dark-card p-8 transition-all duration-300 hover:border-sage/20"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="mb-4 text-sage/20 transition-colors group-hover:text-sage/40"
              />

              <p className="mb-6 text-sm leading-relaxed text-cream/60">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sage/30 to-sage-dark/30 text-xs font-bold text-sage">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-cream">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-cream/40">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
