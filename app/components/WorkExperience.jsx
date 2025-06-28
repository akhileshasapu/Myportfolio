"use client";

import { motion } from "framer-motion";

export default function WorkExperience() {
  const experiences = [
    {
      role: "System Admin Intern",
      company: "Cisco",
      duration: "Dec 2022 – Jun 2022",
     description:
    "Completed hands-on training using Cisco Packet Tracer. Designed and simulated networks, configured routers and switches, and gained practical knowledge in network troubleshooting.",
      logo: "https://www.sketchappsources.com/resources/source-image/cisco-logo.png",
    },
    {
      role: "Web Master",
      company: "ACM-GVPCDPGC Student Chapter",
      duration: "Aug 2023 – Aug 2024",
      description:
        "Designed, developed, and maintained the chapter’s official website. Collaborated with the team to organize tech events and handled digital presence.",
      logo: "https://india.acm.org/images/acm_rgb_grad_pos_diamond.png",
    },
    {
      role: "Full Stack Developer Intern",
      company: "Infinity Connects Media Pvt Ltd",
      duration: "may 2024 – july 2024",
      description:
        "As part of developing team developed responsive web apps using Full stack. Created REST APIs, managed MySql, and implemented secure user authentication.",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQH9m_0xyjVqyw/company-logo_200_200/company-logo_200_200/0/1631201133566?e=2147483647&v=beta&t=434RYhz6DOsNAolmPa6N82A2rS-Zbys9KUGeouhXuak", // Replace with actual logo
    },
  ];

  return (
    <section id="experience" className="py-20 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Work Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-700 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-16 h-16 object-contain rounded-full bg-white p-2"
              />
              <div className="text-left">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-sm text-gray-300">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
                <p className="text-sm text-gray-200">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
