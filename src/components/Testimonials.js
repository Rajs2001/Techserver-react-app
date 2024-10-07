import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Homeowner',
    content: 'The custom dining table WoodMaster created for us is absolutely stunning. It\'s become the centerpiece of our home!',
  },
  {
    name: 'Jane Smith',
    role: 'Interior Designer',
    content: 'I\'ve worked with many woodworking companies, but WoodMaster\'s attention to detail and craftsmanship is unparalleled.',
  },
  {
    name: 'Mike Johnson',
    role: 'Restaurant Owner',
    content: 'The custom bar and tables WoodMaster made for our restaurant have received countless compliments from our patrons.',
  },
];

export default function Testimonials() {
  return (
    <section 
    id="testimonials" 
    className="py-20 bg-amber-100"
    style={{backgroundColor: 'rgb(208, 186, 98)'}}    
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-center"
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
              style={{color: '#8945db'}}
            >
              <p className="text-lg mb-4">{testimonial.content}</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-amber-600">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
