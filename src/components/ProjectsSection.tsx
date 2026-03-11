"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image_url: string;
  live_url: string;
  github_url: string;
}

const gradients = [
  "from-sage/20 to-sage-dark/20",
  "from-sage-dark/20 to-sage/20",
  "from-sage-light/20 to-sage/20",
  "from-sage/20 to-sage-light/20",
];

// Fallback data when Supabase has no projects yet
const fallbackProjects: Project[] = [
  {
    id: "1",
    title: "Insurance Mobile App",
    description: "",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    image_url: "",
    live_url: "#",
    github_url: "#",
  },
  {
    id: "2",
    title: "Automobile Mobile App",
    description: "",
    tags: ["Flutter", "Firebase", "Dart"],
    image_url: "",
    live_url: "#",
    github_url: "#",
  },
  {
    id: "3",
    title: "Ridemo Mobile App",
    description: "",
    tags: ["React Native", "Express", "MongoDB"],
    image_url: "",
    live_url: "#",
    github_url: "#",
  },
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        setProjects(data);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="bg-dark">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <span className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-sage">
            Portfolio
          </span>
          <h2 className="text-3xl font-bold text-cream md:text-4xl">
            Latest <span className="gradient-text">Project</span>
          </h2>
        </motion.div>

        {/* "Have any project in mind?" banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-sage/20 bg-gradient-to-r from-sage/5 to-transparent p-6 sm:flex-row"
        >
          <div>
            <h3 className="mb-1 text-lg font-semibold text-cream">
              Have any project in mind?
            </h3>
            <p className="text-sm text-cream/50">
              Let&apos;s work together and build something amazing
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap rounded-full bg-sage px-6 py-2.5 text-sm font-semibold text-dark transition-all duration-300 hover:bg-sage-light hover:shadow-lg hover:shadow-sage/20"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Project List */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-start justify-between gap-4 rounded-2xl border border-dark-border bg-dark-card p-6 transition-all duration-300 hover:border-sage/20 sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-4">
                {/* Project icon */}
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[index % gradients.length]}`}
                >
                  <div className="h-6 w-6 rounded-lg border border-sage/30 bg-sage/20" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-cream transition-colors group-hover:text-sage">
                    {project.title}
                  </h3>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-sage/10 px-2.5 py-0.5 text-xs text-sage/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                {project.live_url && (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full border border-sage/20 px-4 py-2 text-xs font-medium text-sage transition-all hover:bg-sage hover:text-dark"
                  >
                    <ExternalLink size={14} />
                    Preview
                  </a>
                )}
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full border border-dark-border px-4 py-2 text-xs font-medium text-cream/50 transition-all hover:border-sage/20 hover:text-sage"
                  >
                    <Github size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
