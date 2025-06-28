"use client";

import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const certifications = [
  {
    title: "Full Stack Internship",
    org: "Infinity Connects Media",
    date: "July 2024",
    file: "Internship certificate.pdf",
  },
  {
    title: "Web Development Virtual Internship",
    org: "Corizo",
    date: "April 2024",
    file: "Corizo_1715869654235.pdf",
  },
  {
    title: "Foundation of Cloud IoT Edge ML",
    org: "IIT Kanpur (NPTEL)",
    date: "Nov 2023",
    file: "IMG-20240428-WA0004.jpg",
  },
  {
    title: "Microsoft Certified Full Stack Developer",
    org: "Microsoft",
    date: "Currently",

  },
  {
    title: "DevOps Course",
    org: "Udemy",
    date: "Currently",
  
  },
];

export default function Certifications() {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">
        Certifications
      </h2>
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center bg-white/5 p-5 rounded-lg border border-indigo-200 shadow-md hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="text-indigo-500 mt-1">
                <FaCertificate size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <p className="text-sm text-gray-300">{cert.org}</p>
              </div>
            </div>
            <div className="flex flex-col sm:items-end gap-2 mt-3 sm:mt-0">
              <span
                className={`text-sm font-medium ${
                  cert.date === "Currently"
                    ? "bg-green-600 text-white px-3 py-1 rounded-full"
                    : "text-gray-400"
                }`}
              >
                {cert.date}
              </span>
              {cert.file &&   <a
                href={`/certificates/${cert.file}`}
                download
                className="inline-flex items-center text-indigo-400 hover:text-indigo-200 transition text-sm mt-1"
              >
                <FiDownload className="mr-1" />
                
                Download
              </a>}
         
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
