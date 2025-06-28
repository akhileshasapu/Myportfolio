"use client";
import { motion } from "framer-motion";

export default function Education() {
  const items = [
    {
      title: "B.Tech in Computer Science",
      inst: "Gayatri Vidya Parishad, Vizag",
      duration: "2022 – 2025 | GPA: 8.5",
      logo: "/logos/gvplogo.jpg"
    },
    {
      title: "Diploma in CSE",
      inst: "Andhra Polytechnic, Kakinada",
      duration: "2019 – 2022 | GPA: 8.7",
      logo: "/logos/andhra_polytechnic_college_kakinada_logo.jpeg"
    },
    {
      title: "SSC – High School",
      inst: "Aditya High School",
      duration: "2018 – 2019 | GPA: 9.5",
      logo: "/logos/education-school-logo-design-vector-44972154.jpg"
    },
  ];

  return (
    <section id="education" className="py-4 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">Education</h2>
        <div className="space-y-8">
          {items.map((ed, i) => (
            <motion.div
              key={ed.title}
              className="flex items-center bg-gray-800 rounded-lg p-6 shadow-md space-x-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={ed.logo} alt="" className="w-16 h-16 object-contain"/>
              <div className="text-left">
                <h3 className="text-2xl font-semibold">{ed.title}</h3>
                <p className="text-gray-300">{ed.inst}</p>
                <p className="text-sm text-cyan-300">{ed.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
