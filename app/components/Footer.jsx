"use client"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-gray-900 text-gray-400">
      <p>&copy; {new Date().getFullYear()} Satya Akhilesh Asapu. All rights reserved.</p>

      <div className="flex justify-center mt-4 gap-6 text-xl">
      
    <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=satyaakhileshasapu@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
  title="Email Me"
>
  <FaEnvelope />
</a>


    
        <a
          href="https://github.com/akhileshasapu" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
          title="GitHub"
        >
          <FaGithub />
        </a>

    
        <a
          href="https://www.linkedin.com/in/akhilesh-asapu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
