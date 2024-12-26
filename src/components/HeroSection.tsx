"use client";

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20 
          }}
        >
          <Image
            src="/profile-placeholder.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-8"
            priority
          />
        </motion.div>
        <motion.h1 
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ 
            type: "spring",
            duration: 1 
          }}
          className="text-5xl font-bold mb-4"
        >
          Mesut Barut
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl text-gray-300 mb-8"
        >
          Full Stack Developer
        </motion.p>
        <div className="flex justify-center gap-4">
          <a 
            href="#contact" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors"
          >
            Contact Me
          </a>
          <a 
            href="#projects" 
            className="border border-white hover:bg-white hover:text-gray-900 text-white px-6 py-2 rounded-full transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
} 