import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <motion.h1 
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-blue-500">Rei-zi</span>
        </motion.h1>
        <motion.p 
          className="text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A passionate Frontend Developer
        </motion.p>
      </section>

      {/* About Section */}
      <section className="py-20 text-center">
        <motion.h2 
          className="text-4xl font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <p className="mt-4 max-w-xl mx-auto">
          I specialize in building amazing UI/UX experiences with React and Tailwind CSS.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-semibold">Projects</h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">Project 1</div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">Project 2</div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 text-center">
        <motion.h2 className="text-4xl font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>
        <p className="mt-4">Email: rei-zi@example.com</p>
      </section>
    </div>
  );
}
