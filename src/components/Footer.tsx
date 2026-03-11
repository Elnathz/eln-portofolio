"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const { error } = await supabase.from("messages").insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <footer id="contact" className="border-t border-dark-border bg-dark-card">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-sage">
            Get In Touch
          </span>
          <h2 className="text-3xl font-bold text-cream md:text-4xl">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-xl font-semibold text-cream">
              Contact Information
            </h3>
            <div className="space-y-5">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-4 text-cream/60 transition-colors hover:text-sage"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sage/20 bg-sage/10">
                  <Mail size={18} className="text-sage" />
                </div>
                <span className="text-sm">hello@example.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 text-cream/60 transition-colors hover:text-sage"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sage/20 bg-sage/10">
                  <Phone size={18} className="text-sage" />
                </div>
                <span className="text-sm">+62 123 456 7890</span>
              </a>
              <div className="flex items-center gap-4 text-cream/60">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sage/20 bg-sage/10">
                  <MapPin size={18} className="text-sage" />
                </div>
                <span className="text-sm">Indonesia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-dark-border bg-dark transition-all duration-300 hover:border-sage/30 hover:text-sage"
                >
                  <social.icon size={18} className="text-cream/50" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full rounded-xl border border-dark-border bg-dark px-5 py-3.5 text-sm text-cream placeholder-cream/30 outline-none transition-all focus:border-sage/50 focus:ring-1 focus:ring-sage/20"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full rounded-xl border border-dark-border bg-dark px-5 py-3.5 text-sm text-cream placeholder-cream/30 outline-none transition-all focus:border-sage/50 focus:ring-1 focus:ring-sage/20"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="w-full resize-none rounded-xl border border-dark-border bg-dark px-5 py-3.5 text-sm text-cream placeholder-cream/30 outline-none transition-all focus:border-sage/50 focus:ring-1 focus:ring-sage/20"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-sage px-8 py-3.5 text-sm font-semibold text-dark transition-all duration-300 hover:bg-sage-light hover:shadow-lg hover:shadow-sage/20 disabled:opacity-60"
            >
              {status === "sending" ? (
                "Sending..."
              ) : status === "sent" ? (
                "Message Sent! ✓"
              ) : status === "error" ? (
                "Failed to send. Try again."
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-dark-border pt-8 text-center">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} Portfolio. All rights reserved. Built
            with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
