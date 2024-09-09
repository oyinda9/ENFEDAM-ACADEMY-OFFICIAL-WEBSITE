import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#002D62] relative text-white py-8">
      <div className="container px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold ">About Us</h3>
            <p className="text-sm p-4 leading-8">
              Enfedam Academy is committed to providing high-quality education
              and fostering a supportive learning environment. Our programs are
              designed to nurture academic excellence and personal growth.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm leading-8">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Admission
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  News & Events
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Sections
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm leading-8">
              <span className="block">No 6 Saabhi Hotel Street,</span>
              <span className="block">Mararaba ,Nasarawa State ,</span>
              <span className="block">Email: info@enfedamacademy.com</span>
              <span className="block">Phone: (+234) 703-0065-113</span>
            </p>
          </div>

          {/* Follow Us Section */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Enfedam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-600"
              >
                <FaFacebookF />
              </a>
              
              <a
                href="https://www.instagram.com/enfedam_academy?igsh=MWhzMWMwcXQwMnl1OQ== "
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-pink-500"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/+2347030065113"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with us on WhatsApp"
                className=" hover:text-green-700 underline text-xl"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Enfedam Academy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

// export default Footer;
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-4 text-center">
//       <p>© {new Date().getFullYear()} Enfedam Academy. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;
