"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "SymptomEase – Hospital Management System",
    description: "Created a hospital portal for patient record handling, registration, and medical access.",
    techStack: ["HTML", "CSS", "Bootstrap", "Node.js", "MongoDB"],
    liveLink: "",
    github: "https://github.com/akhileshasapu/SymptomEase",
  },
  {
    title: "<PassOP/> – Secure Password Manager",
    description: "Built a secure password manager with credential encryption and user-friendly UI.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Crypto module"],
    liveLink: "https://pass-o-ppasswordmanager.vercel.app",
    github: "https://github.com/akhileshasapu/PassOPpasswordmanager",
  },
  {
    title: "Movie BuZZ – Movie Review Platform",
    description: "Developed a review platform with search, JWT auth, and rating functionality.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    liveLink: "https://moviebuzzreviewwebsite.vercel.app/",
    github: "https://github.com/akhileshasapu/moviebuzz-frontend",
  },
  {
    title: "Facial Mood-Based Recommendation System",
    description: "Real-time mood detection via webcam using CNN + Flask with personalized recommendations.",
    techStack: ["Flask", "Python", "TensorFlow", "OpenCV", "HTML", "CSS", "MongoDB"],
    liveLink: "",
    github: "https://github.com/akhileshasapu/Facial-mood-based-recommendation-system",
  },
  {
    title: "Library Management System",
    description: "Engineered a full-stack system to manage books, student activity, and overdue tracking.",
    techStack: ["HTML", "CSS", "Node.js", "MongoDB"],
    liveLink: "",
    github: "https://github.com/akhileshasapu/library-management-system",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-950 text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-cyan-400 relative inline-block after:block after:w-1/2 after:h-1 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-500 after:mx-auto after:mt-2"
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-2xl ring-1 ring-cyan-800 shadow-xl hover:shadow-cyan-500/30 hover:ring-2 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]"
          >
            <h3 className="text-2xl font-semibold mb-2 text-cyan-300">{project.title}</h3>
            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-xs px-2 py-1 rounded-full text-yellow-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-full text-white text-sm font-semibold shadow-md transition duration-300"
                >
                  Live Demo ↗
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white text-sm font-semibold transition duration-300"
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
