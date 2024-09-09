// import React, { useState, useEffect } from "react";
// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.jpg";
// import img3 from "../assets/img3.jpg";
// import img4 from "../assets/img4.jpg";
// import AboutUs from "../components/AboutUs";

// const images = [img1, img2, img3, img4];

// const Home = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       <div
//         style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
//         className="absolute inset-0 bg-center bg-cover transition-opacity duration-1000"
//       ></div>
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>
//       {/* Content */}

//       <div className="relative z-10 h-full w-full flex items-center pl-8 space-y-8 md:-[50%]">
//         <div className="text-left">
//           <h1 className="text-white text-3xl md:text-4xl lg:text-[60px] font-bold mb-4 pb-5 font-poppins">
//             ENFEDAM ACADEMY
//           </h1>
//           <p className="text-white text-lg font-medium ml-2">
//             Elevating Your Child's Well-Being Is Our Top Priority
//           </p>
//           <div className="flex items-end justify-start  space-x-4 pt-6">
//         <button className="bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold py-2 px-4 rounded">
//           Apply Now
//         </button>
//         </div>
//         </div>

//       </div>
//       <div>
//           <AboutUs/>
//         </div>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import AboutUs from "../components/AboutUs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import image from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import MissionStatement from "../components/MissionStatement";
import Counter from "../components/Counter";
import Sections from "../components/Sections";
import LearnMore from "../components/LearnMore";
import NewsAndEvents from "../components/NewsAndEvents";
// import Footer from "../components/footer/Footer";

const images = [img1, img2, img3, img4];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <section
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        className="relative bg-center bg-cover h-screen w-full"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="h-full p-4 flex justify-center relative">
          <div className="flex flex-col justify-center items-center w-fit">
            <h1 className="text-white text-3xl md:text-4xl lg:text-[60px] font-bold mb-4 pb-5 font-poppins">
              ENFEDAM ACADEMY
            </h1>
            <p className="text-white text-lg font-medium ml-2">
              Elevating Your Child's Well-Being Is Our Top Priority
            </p>
            <div className="flex items-end justify-center space-x-4 pt-6">
              <button className="bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold py-2 px-4 rounded">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <section>
        {/* about us components */}
        <AboutUs />
      </section>
      {/* services  */}
      <section className="w-full">
        <div className="flex">
          <div className="relative w-1/3 h-[360px] p-4 flex flex-col justify-center items-center overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img4})` }}
            ></div>
            <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
            <div className="relative z-10 flex flex-col justify-center items-center space-y-4">
              <FaChalkboardTeacher size={60} color="#fff" />
              <h1 className="mt-2 text-white">Conducive Classrooms</h1>
            </div>
          </div>

          <div className="relative w-1/3 h-[360px] p-4 flex flex-col justify-center items-center overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="relative z-10 flex flex-col justify-center items-center space-y-4">
              <FaFlask size={60} color="#fff" />
              <h1 className="mt-2 text-white">Equipped Laboratories</h1>
            </div>
          </div>

          <div className="relative w-1/3 h-[360px] p-4 flex flex-col justify-center items-center overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img2})` }}
            ></div>
            <div className="absolute inset-0 bg-green-800 opacity-80"></div>
            <div className="relative z-10 flex flex-col justify-center items-center space-y-4">
              <FaSchool size={60} color="#fff" />
              <h1 className="mt-2 text-white">
                Conducive Learning Environment
              </h1>
            </div>
          </div>

          <div className="relative w-1/3 h-[360px] p-4 flex flex-col justify-center items-center overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img3})` }}
            ></div>
            <div className="absolute inset-0 bg-pink-900 opacity-80"></div>
            <div className="relative z-10 flex flex-col justify-center items-center space-y-4">
              <FaGraduationCap size={60} color="#fff" />
              <h1 className="mt-2 text-white">Experienced Teachers</h1>
            </div>
          </div>
        </div>
      </section>
      {/* mission statemet and vision statement */}
      <section>
        <div className="flex justify-center items-center space-y-4 p-8">
          <div className="w-1/2 h-full bg-cream p-4 flex justify-center items-center">
            <div className="flex flex-col md:flex-row items-center h-screen p-6">
              {/* Image Section */}

              {/* Text Section */}
              <div className="flex-1 md:w-1/2 md:pl-6">
                <MissionStatement />
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full  p-4 flex justify-center items-center">
            <div className="flex-1 md:w-1/2">
              <img
                src={image}
                alt="mission"
                className="object-cover rounded-3xl h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* counter */}
      <section>
        <div>
          <Counter />
        </div>
      </section>
      {/*  */}
      <section>
        <div>
          <div className="flex justify-center items-center space-y-4 p-8">
            <div className="w-1/2 h-full bg-cream p-4 flex justify-center items-center">
              <div className="flex flex-col md:flex-row items-center h-screen p-6">
                {/* Image Section */}

                {/* Text Section */}
                <div className="flex-1 md:w-1/2 md:pl-6">
                  <img
                    src={image2}
                    alt="mission"
                    className="object-cover rounded-3xl h-full w-full"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full  p-4 flex justify-center items-center">
              <div className="flex-1 md:w-1/2">
                <h1 className="text-center justify-center items-center text-blue-800 text-4xl font-bold mb-4">
                  Our Sections
                </h1>

                <Sections />
              </div>
            </div>
          </div>

          <div className="w-full h-full  p-4 flex justify-center items-center">
            <div className="flex-1 md:w-1/2">
              <h1 className="text-center justify-center items-center text-blue-800 text-4xl font-bold mb-4">
                Learn More About Enfedam Academy
              </h1>

              <LearnMore />
            </div>
          </div>

          <div className="w-full h-full  p-8 flex justify-center items-center">
            <div className="flex-1 md:w-1/2">
              <h1 className="text-center justify-center items-center text-blue-800 text-4xl font-bold mb-4">
                News & Events
              </h1>

              <NewsAndEvents />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
