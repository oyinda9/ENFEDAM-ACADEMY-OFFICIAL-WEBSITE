import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample testimonials data
const testimonials = [
  {
    name: 'Mr & Mrs Onyekachi',
    role: 'Parent',
    feedback: "Enfedam Academy has been a wonderful experience for my child. The balance between academics and extracurricular activities has truly fostered a love for learning.",
    // image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Mr & Mrs Madu',
    role: 'Parent',
    feedback: "The teachers at Enfedam Academy are amazing! They are passionate and supportive, and the range of extracurricular activities has helped me discover my talents.",
    // image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'Mr & Mrs Williams',
    role: 'Parent',
    feedback: "Enfedam Academy provided me with a strong academic foundation and incredible opportunities to grow as an individual. I am grateful for the experiences and skills I gained.",
    // image: 'https://randomuser.me/api/portraits/women/2.jpg'
  }
];

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { name, role, feedback, } = testimonials[currentIndex];

  return (
    <section className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#002D62] mb-12">
          What Our Parent Say
        </h2>
        <div className="relative flex justify-center items-center">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6 w-[700px]">
             
              <div className=''>
                <h3 className="text-2xl font-semibold text-[#002D62]">{name}</h3>
                <p className="text-gray-600 text-sm">{role}</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg">{feedback}</p>
          </motion.div>
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#002D62] text-white p-3 rounded-full shadow-lg hover:bg-[#001d3d] transition duration-300"
          >
            &#9664;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#002D62] text-white p-3 rounded-full shadow-lg hover:bg-[#001d3d] transition duration-300"
          >
            &#9654;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
