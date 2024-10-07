import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-amber-800 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-center"
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p>📞 (123) 456-7890</p>
            <p>✉️ info@woodmaster.com</p>
            <p>🏠 123 Craftsman Lane, Woodville, WD 12345</p>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded bg-amber-700 text-white placeholder-amber-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-amber-700 text-white placeholder-amber-300"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-2 rounded bg-amber-700 text-white placeholder-amber-300"
            ></textarea>
            <button className="bg-white text-amber-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-amber-100 transition-colors">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
