"use client";

import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
      stiffness: 120,
    },
  }),
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.a
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="mailto:mesutbarut843@gmail.com"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
            >
              <MdEmail className="text-xl" /> mesutbarut843@gmail.com
            </motion.a>
            <div className="flex gap-6">
              {[
                {
                  platform: "GitHub",
                  link: "https://github.com/mesutbarut12",
                  icon: <FaGithub className="text-xl" />,
                },
                {
                  platform: "LinkedIn",
                  link: "https://www.linkedin.com/in/mesut-barut-00814230b",
                  icon: <FaLinkedin className="text-xl" />,
                },
              ].map(({ link, platform, icon }, index) => (
                <motion.a
                  key={platform}
                  custom={index}
                  variants={socialVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ y: -5 }}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                >
                  {icon} {platform}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
