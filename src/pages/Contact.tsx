import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-400 flex flex-col justify-center items-center py-12 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl  md:w-2/3 lg:w-1/2 transform transition-all duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Contact Us
        </h1>

        {/* Three Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          {/* Address Column */}
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-red-800 text-4xl mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Address</h2>
            <p className="text-gray-600">No 6 saabhi hotel St, Mararaba, Ado, Nasarawa</p>
          </div>
          {/* Phone Column */}
          <div className="flex flex-col items-center">
            <FaPhone className="text-red-800  text-4xl mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Phone</h2>
            <p className="text-gray-600">(+234) 703 006 5113</p>
          </div>
          {/* Email Column */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-red-800 text-4xl mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Email</h2>
            <p className="text-gray-600">enfedamacademy@gmail.com</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full">
          <iframe
            title="Google Map"
            className="w-full h-64 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977.3315097383343!2d7.6058224!3d9.0145576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0f87f2357f2d%3A0xa4ce44a0bcbda509!2s27%20Chima%20St%2C%20Mararaba%2C%20Ado%20961105%2C%20Nasarawa!5e0!3m2!1sen!2sng!4v1632904123449!5m2!1sen!2sng"
            
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
