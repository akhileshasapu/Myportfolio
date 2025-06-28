"use client"
import { Toaster, toast } from "react-hot-toast";
import { FaEnvelope } from "react-icons/fa"; // import this at top

export default function Contact() {
  const handleclick = () => {
    toast.success("Message Sent!");
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black text-white text-center">
      <Toaster position="top-center" reverseOrder={false} /> {/* Required for toast */}

      <h2 className="text-4xl font-bold mb-8 text-cyan-400">Contact Me</h2>

      <form
        action="https://formsubmit.co/satyaakhileshasapu@gmail.com"
        method="POST"
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded bg-gray-800 text-white"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="p-3 rounded bg-gray-800 text-white"
        />
        <button
          onClick={handleclick}
          type="submit"
          className="bg-cyan-400 text-black py-3 rounded hover:bg-cyan-300 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 flex flex-col items-center gap-4">
        {/* WhatsApp */}
        <a
          href="https://wa.me/916301779577"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Message Me on WhatsApp 📱
        </a>

        {/* Gmail Link */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=satyaakhileshasapu@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white text-cyan-400 text-lg flex items-center gap-2 transition"
          title="Email Me"
        >
          <FaEnvelope /> Mail Me
        </a>
      </div>
    </section>
  );
}
