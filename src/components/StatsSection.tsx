"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 3, suffix: "+", label: "Projects Done" },
  { value: 4.5, suffix: "", label: "Satisfaction Rate", isDecimal: true },
  { value: 6, suffix: "+", label: "Clients Worldwide" },
];

function AnimatedCounter({
  target,
  suffix,
  isDecimal,
}: {
  target: number;
  suffix: string;
  isDecimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-dark py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border p-6 text-center transition-all duration-300 md:p-8 ${
                index === 1
                  ? "border-sage/40 bg-sage/10 shadow-lg shadow-sage/10"
                  : "border-dark-border bg-dark-card hover:border-sage/20"
              }`}
            >
              <div
                className={`mb-2 text-3xl font-bold md:text-4xl ${
                  index === 1 ? "text-sage" : "text-cream"
                }`}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                />
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-cream/40 md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
