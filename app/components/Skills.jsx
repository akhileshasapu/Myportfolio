"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },

  
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", logo: "https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png" },
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", logo: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },

   
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

    
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },

    
    { name: "Crypto Module", logo: "https://icmconference.org/wp-content/uploads/Icons-04-Post-Quantum-Crypto.png" },
    { name: "Data Structures & Algorithms", logo: "https://cdn.hackr.io/uploads/topics/1527244435zqmNp2BGzh.png" },
    { name: "OOPs", logo: "https://content-media-cdn.codefinity.com/articles/17c18c54-6ea9-443f-8255-a7f230a415ab/computer.png" },
    { name: "SDLC", logo: "https://uniquesoftwaredev.com/wp-content/uploads/2023/08/Aug-B2-1.png" },
    { name: "DevOps (Learning Stage)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ];

  return (
    <section
      id="skills"
      className="py-20  from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-teal-400">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ring-1 ring-gray-700 hover:ring-teal-400"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                width={64}
                height={64}
                className="mb-3 object-contain"
              />
              <span className="text-sm font-semibold text-white">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
