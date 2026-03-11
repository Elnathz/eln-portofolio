"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="bg-dark relative">
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
              onClick={() => setSelectedProject(project)}
              key={project.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer group flex flex-col items-start justify-between gap-4 rounded-2xl border border-dark-border bg-dark-card p-6 transition-all duration-300 hover:border-sage/20 sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-4 flex-1">
                {/* Project Image or Fallback icon */}
                {project.image_url ? (
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-dark-border bg-dark">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ) : (
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[index % gradients.length]}`}
                  >
                    <div className="h-6 w-6 rounded-lg border border-sage/30 bg-sage/20 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-cream transition-colors group-hover:text-sage">
                    {project.title}
                  </h3>
                  <div className="mt-1 mb-2 flex flex-wrap gap-2">
                    {project.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-sage/10 px-2.5 py-0.5 text-xs text-sage/70"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags && project.tags.length > 3 && (
                      <span className="rounded-full bg-dark-border px-2.5 py-0.5 text-xs text-cream/50">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  {project.description && (
                    <p className="max-w-xl text-sm leading-relaxed text-cream/50 line-clamp-1">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-2 shrink-0">
                <span className="flex items-center gap-1.5 rounded-full border border-dark-border px-4 py-2 text-xs font-medium text-cream/50 transition-all group-hover:border-sage/20 group-hover:text-sage">
                  View Details
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 p-4 outline-none"
            >
              <div className="relative flex max-h-[90vh] flex-col overflow-hidden rounded-3xl border border-sage/20 bg-dark-card shadow-2xl shadow-sage/5">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-dark/60 text-cream/70 backdrop-blur-md transition-all hover:bg-sage/20 hover:text-sage"
                >
                  <X size={20} />
                </button>

                {/* Modal Scrollable Content */}
                <div className="overflow-y-auto">
                  {/* Image Cover */}
                  {selectedProject.image_url ? (
                    <div className="relative aspect-[21/9] w-full bg-dark">
                      <img
                        src={selectedProject.image_url}
                        alt={selectedProject.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
                    </div>
                  ) : (
                    <div className="relative aspect-[21/9] w-full bg-gradient-to-br from-sage/10 to-sage-dark/10">
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
                    </div>
                  )}

                  <div className="p-8 pt-0">
                    <h2 className="mb-4 text-2xl font-bold text-cream md:text-3xl">
                      {selectedProject.title}
                    </h2>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {selectedProject.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-sage/20 bg-sage/5 px-3 py-1 text-xs font-medium text-sage/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mb-8 space-y-4">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-cream/40">
                        About The Project
                      </h3>
                      <p className="text-sm leading-relaxed text-cream/70 md:text-base">
                        {selectedProject.description || "No description provided."}
                      </p>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-dark-border">
                      {selectedProject.live_url && (
                        <a
                          href={selectedProject.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-dark transition-all hover:bg-sage-light hover:shadow-lg hover:shadow-sage/20"
                        >
                          <ExternalLink size={16} />
                          Live Preview
                        </a>
                      )}
                      {selectedProject.github_url && (
                        <a
                          href={selectedProject.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-xl border border-dark-border bg-dark px-6 py-3 text-sm font-medium text-cream transition-all hover:border-sage/30 hover:text-sage"
                        >
                          <Github size={16} />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
