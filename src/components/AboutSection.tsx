"use client";

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            bounce: 0.4
          }}
          className="max-w-3xl mx-auto text-gray-600"
        >
          <p className="mb-4">
            I'm a passionate Full Stack Developer with expertise in building modern web applications.
            With 5 years of experience in software development, I specialize in creating responsive
            and user-friendly applications using cutting-edge technologies.
          </p>
          <p>
            When I'm not coding, you can find me contributing to open-source projects,
            writing technical blog posts, or exploring new technologies.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 