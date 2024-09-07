import React from "react";
import image from "../assets/img1.jpg";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center h-screen p-6">
      {/* Image Section */}
      <div className="flex-1 md:w-1/2">
        <img
          src={image}
          alt="About Us"
          className="object-cover rounded-3xl h-full w-full"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 md:w-1/2 md:pl-6">
        <h2 className="text-4xl font-bold mb-4  text-blue-600">About Us</h2>
        <p className="text-lg mb-6 leading-10 text-justify">
          Founded in 2014, Enfedam Academy stands as a beacon of educational
          excellence and holistic development. Our mission is to foster a
          dynamic learning environment that empowers students to achieve their
          highest potential, both academically and personally. At Enfedam
          Academy, we believe in the power of quality education to transform
          lives. Our dedicated team of highly skilled educators is committed to
          delivering innovative teaching methods and a well-rounded curriculum
          that addresses the diverse needs of our students. We strive to create
          an atmosphere where curiosity is sparked, critical thinking is
          encouraged, and every student’s unique strengths are celebrated.
        </p>
        <div className="flex items-end  space-x-4">
          <button className="bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
