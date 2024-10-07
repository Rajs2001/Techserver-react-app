import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Custom Furniture',
    description: 'Bespoke pieces tailored to your unique style and space.',
    icon: '🪑',
  },
  {
    title: 'Home Renovation',
    description: 'Transform your living spaces with our expert craftsmanship.',
    icon: '🏠',
  },
  {
    title: 'Woodworking Classes',
    description: 'Learn the art of woodworking from our master craftsmen.',
    icon: '🔨',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-amber-100">
      <a name={'services'}></a>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-center"
          style={{color: 'cadetblue'}}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-amber-800">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
