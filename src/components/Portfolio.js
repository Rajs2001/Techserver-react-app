import React from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
  { id: 1, title: 'Rustic Dining Table' },
  { id: 2, title: 'Modern Bookshelf' },
  { id: 3, title: 'Elegant Bedroom Set' },
  { id: 4, title: 'Custom Kitchen Cabinets' },
  { id: 5, title: 'Outdoor Patio Furniture' },
  { id: 6, title: 'Handcrafted Wooden Toys' },
];

export default function Portfolio() {
  return (
    <section 
    id="portfolio" 
    className="py-20 bg-amber-50"
    style={{background: 'linear-gradient(30deg, aliceblue,#c0d79a)'}}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-center"
          style={{color: '#304D4D',}}
        >
          Our Masterpieces
        </motion.h2>
        <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
              style={{background: 'linear-gradient(45deg, #6c747d, #6b8079)'}}
            >
              <img
                src={`https://source.unsplash.com/random/800x600?woodworking&sig=${item.id}`}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
