// import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 relative text-white py-8">
//       <div className="container px-4">
//         <div className="flex flex-wrap justify-between">
//           {/* About Section */}
//           <div className="w-full md:w-1/4 mb-4 md:mb-0">
//             <h3 className="text-lg font-semibold mb-4">About Us</h3>
//             <p className="text-sm">
//               Enfedam Academy is committed to providing high-quality education and fostering a supportive learning environment. Our programs are designed to nurture academic excellence and personal growth.
//             </p>
//           </div>

//           {/* Quick Links Section */}
//           <div className="w-full md:w-1/4 mb-4 md:mb-0">
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="text-sm">
//               <li><a href="#home" className="hover:underline">Home</a></li>
//               <li><a href="#about" className="hover:underline">About</a></li>
//               <li><a href="#services" className="hover:underline">Services</a></li>
//               <li><a href="#contact" className="hover:underline">Contact</a></li>
//             </ul>
//           </div>

//           {/* Contact Section */}
//           <div className="w-full md:w-1/4 mb-4 md:mb-0">
//             <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//             <p className="text-sm">
//               <span className="block">1234 School St.</span>
//               <span className="block">City, State, 12345</span>
//               <span className="block">Email: info@enfedamacademy.com</span>
//               <span className="block">Phone: (123) 456-7890</span>
//             </p>
//           </div>

//           {/* Follow Us Section */}
//           <div className="w-full md:w-1/4 mb-4 md:mb-0">
//             <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600">
//                 <FaFacebookF />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
//                 <FaTwitter />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-500">
//                 <FaInstagram />
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-700">
//                 <FaLinkedinIn />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
//           <p>&copy; {new Date().getFullYear()} Enfedam Academy. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>© {new Date().getFullYear()} Enfedam Academy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
