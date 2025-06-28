import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WorkExperience from "./components/WorkExperience";

<WorkExperience />

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      
      <section id="hero" className="min-h-[80vh] pt-64 mt-3">
        <Hero />
      </section>

      <section id="about" className="min-h-[50vh] py-16">
        <About />
      </section>

      <section id="skills" className="min-h-[70vh] py-16">
        <Skills />
      </section>

        <section id="WorkExperience" className="min-h-[70vh] py-16">
        <WorkExperience />
      </section>
    


      <section id="education" className="min-h-[50vh] ">
        <Education />
      </section>

      <section id="certifications" className="min-h-[60vh] py-16">
        <Certifications />
      </section>

      <section id="projects" className="min-h-[80vh] py-16">
        <Projects />
      </section>

      <section id="contact" className="min-h-[60vh] py-16">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}

