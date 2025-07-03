"use client"
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-[80] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-white"
      >
        Hi, I'm <span className="text-cyan-400 drop-shadow-glow">SATYA AKHILESH ASAPU</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mb-6"
      >
   
 
Passionate <span className="text-cyan-400 font-medium">Full Stack Developer</span> blending <span className="text-cyan-400 font-medium">Java</span>, <span className="text-cyan-400 font-medium">MERN</span>, and <span className="text-cyan-400 font-medium">clean UI/UX</span> to craft <span className="text-cyan-400 font-medium">intelligent</span>, <span className="text-cyan-400 font-medium">fast</span>, and <span className="text-cyan-400 font-medium">scalable</span> web experiences.

      </motion.p>

      <motion.a
        href="#contact"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-4 inline-block bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-semibold px-8 py-3 rounded-xl hover:scale-105 hover:from-cyan-300 hover:to-blue-300 transition duration-300 shadow-md"
      >
        🚀 Let's Connect
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-10 animate-bounce"
      >
        <a href="#projects" className="text-cyan-400 text-3xl hover:text-cyan-300">
          ↓
        </a>
      </motion.div>
    </section>
  );
}
