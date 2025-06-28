import { FiDownload } from "react-icons/fi";
export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-6">About Me</h2>
 <p className="text-lg text-gray-300 leading-relaxed mb-8">
  I'm a passionate and dedicated <span className="text-cyan-400 font-medium">Full Stack Web Developer</span> skilled in building fast, responsive, and user-friendly web applications using the <span className="text-cyan-400 font-medium">MERN stack</span>. As a fresher, I'm exploring the world of <span className="text-cyan-400 font-medium">DevOps</span>, integrating <span className="text-cyan-400 font-medium">AI/ML models</span> into real-world projects, and currently diving into the <span className="text-cyan-400 font-medium">.NET Full Stack</span> ecosystem. With hands-on experience in technologies like <span className="text-cyan-400 font-medium">React</span>, <span className="text-cyan-400 font-medium">Next.js</span>, <span className="text-cyan-400 font-medium">Tailwind CSS</span>, and <span className="text-cyan-400 font-medium">RESTful APIs</span>, I enjoy blending backend logic with elegant frontend designs. I’m deeply passionate about building scalable, intelligent, and modern web solutions, and I’m continuously learning to stay ahead in the ever-evolving tech landscape.
</p>


        <a
          href="/Resume/Akhileshresume.pdf"
          download
          className="inline-flex items-center mt-4   bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-8 rounded-lg shadow-md transition duration-300"
        >
           <FiDownload className="mr-1" /> Download Resume
        
        </a>
      </div>
    </section>
  );
}
