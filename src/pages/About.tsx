
import {
  FaSchool,
  FaUsers,
  FaLaptopCode,
  FaUtensils,
  FaTheaterMasks,
  FaChess,
} from "react-icons/fa";
import { MdEventAvailable, MdSportsSoccer } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import TestimonialsPage from "../components/Testimonials";
import { Link } from 'react-router-dom';
import img1 from "../assets/img1.jpg";
// import img3 from "../assets/img3.jpg";
// import img2 from "../assets/img4.jpg";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Header Section with Background Image and Overlay */}
      <div
        className="relative bg-center bg-cover h-[360px] w-full"
        style={{ backgroundImage: `url(${img1})` }}
      >
        {/* Dark Red Overlay */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fadeIn">
            About Enfedam Academy
          </h1>
        </div>
      </div>

      {/* Founding Story Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center my-16 px-6 lg:px-16 animate-fadeIn">
        <div className="lg:w-1/2 mb-12 lg:mb-0 p-4 m-4">
          <h2 className="text-4xl font-semibold text-[#002D62] mb-6">
            Our Story
          </h2>
          <p className="text-gray-600 text-lg text-justify">
            Enfedam Academy was established in 2014 with a mission to foster a
            love for learning in every child. We began as a small institution
            but have grown into a nurturing environment where children can
            explore, learn, and excel both academically and socially. Our unique
            curriculum balances academic rigor with engaging extracurricular
            activities, allowing students to thrive in all areas of development.
          </p>

          <br />
          <p className="text-gray-600 text-lg text-justify">
            At Enfedam Academy, we believe that education extends beyond the
            classroom. Our extracurricular activities play a pivotal role in
            shaping well-rounded individuals. By participating in various clubs,
            arts, and sports, students develop essential life skills such as
            teamwork, leadership, creativity, and time management. Whether
            through music, drama, or athletics, these activities provide an
            outlet for students to express themselves, build confidence, and
            form meaningful friendships. Sports, in particular, not only promote
            physical health but also instill values like discipline,
            perseverance, and fair play.
          </p>
          <br />

          {/* <p className="text-gray-600 text-lg text-justify">
            In the classroom, we offer a broad range of subjects designed to
            challenge and engage students. From foundational subjects like
            Mathematics, Science, and English to more creative ones like Arts,
            Music, and Computer Science, our curriculum is designed to meet the
            diverse needs of each student. Our teachers are passionate and
            highly qualified, bringing a wealth of knowledge and experience to
            the classroom. They are dedicated to fostering a love for learning
            and helping each student reach their full potential.
          </p> */}
          <br />

          <p className="text-gray-600 text-lg text-justify">
            At Enfedam Academy, we are committed to providing a holistic
            education that equips our students for both academic and personal
            success.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src={img1}
            alt="Enfedam Academy"
            className="rounded-lg shadow-lg  top-0 w-full transform transition duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Core Values Section */}
      <div className="my-16 px-6 lg:px-16 animate-fadeIn">
        <h2 className="text-3xl font-semibold text-center text-[#002D62] mb-8">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-6">
          <div className="text-center p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 bg-pink-500">
            <FaSchool className="text-5xl text-[#002D62] mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
            <p className="text-white text-justify">
              We provide a rigorous education that challenges students to
              achieve their best in academics.
            </p>
          </div>

          <div className="text-center p-8  rounded-lg shadow-md hover:shadow-xl transition duration-300  bg-green-600">
            <MdEventAvailable className="text-5xl text-[#002D62] mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Extracurricular Activities
            </h3>
            <p className="text-white">
              Our students engage in a variety of activities to develop
              well-rounded skills.
            </p>
          </div>

          <div className="text-center p-8  rounded-lg shadow-md hover:shadow-xl transition duration-300  bg-yellow-600">
            <GiTeacher className="text-5xl text-[#002D62] mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Qualified Teachers</h3>
            <p className="text-white">
              Our staff consists of experienced and passionate educators who are
              dedicated to each student's success.
            </p>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="my-16 lg:px-16 animate-fadeIn space-y-12">
        <h2 className="text-3xl font-semibold text-center text-[#002D62] mb-8 p-8">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 bg-gray-400 rounded-full shadow-md hover:shadow-xl transition duration-300">
            <img
              src={img1}
              alt="Enfedam Academy"
              className="rounded-full shadow-lg w-full transform transition duration-500 hover:scale-105"
            />
          </div>

          <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold mb-4">
              Primary & Secondary Programs
            </h3>
            <p className="text-gray-600">
              Our primary and secondary programs offer rigorous education
              balanced with extracurricular activities, preparing students for
              future success.
            </p>
          </div>
        </div>
      </div>

      {/* Extracurricular Activities Section */}
      <div className="container mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-semibold text-center text-[#002D62] mb-6 p-8">
          Extracurricular Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  px-4 py-4">
          <div className="text-center p-6 bg-gray-200 rounded-lg shadow-md hover:shadow-xl transform transition duration-500 hover:scale-105">
            <MdSportsSoccer className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Sports & Fitness</h3>
            <p className="text-black text-justify leading-8">
              Our sports programs help students develop teamwork, discipline,
              and physical health.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-200 rounded-lg shadow-md hover:shadow-xl transform transition duration-500 hover:scale-105">
            <FaLaptopCode className="text-5xl text-purple-700 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">I.C.T Clubs</h3>
            <p className="text-black text-justify leading-8">
              Our Computer Club offers students the opportunity to engage in
              coding, web development, and other technology-based activities that
              foster problem-solving skills and creativity.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-200 rounded-lg shadow-md hover:shadow-xl transform transition duration-500 hover:scale-105">
            <FaChess className="text-5xl text-red-700 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Strategic Thinking Club</h3>
            <p className="text-black text-justify leading-8">
              The Chess Club fosters strategic thinking and problem-solving
              skills through engaging chess matches and tournaments. Our members
              develop critical thinking and patience while enjoying this classic
              game of strategy.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-200 rounded-lg shadow-md hover:shadow-xl transform transition duration-500 hover:scale-105">
            <FaUsers className="text-5xl text-yellow-700 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Kung Fu</h3>
            <p className="text-black text-justify leading-8">
              The Kung Fu program focuses on discipline, physical fitness, and
              self-defense, while also teaching valuable life skills such as
              perseverance and respect.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-200 rounded-lg shadow-md hover:shadow-xl transform transition duration-500 hover:scale-105">
            <FaUtensils className="text-5xl text-pink-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Home Management Club</h3>
            <p className="text-black text-justify leading-8">
              Our Home Management provides students with the chance to explore
              the culinary arts, from baking to cooking international cuisines.
              Students learn valuable skills in meal preparation, nutrition, and
              teamwork.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-200 rounded-lg shadow-md hover:shadow-xl transform transition duration-500 hover:scale-105">
            <FaTheaterMasks className="text-5xl text-blue-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Drama and Performance Club
            </h3>
            <p className="text-black text-justify leading-8">
              Our Drama and Performance Club offers students the opportunity to
              engage in dramatic arts, from acting and directing to stage design
              and production. Students develop their creativity, public speaking
              skills, and teamwork through various theatrical performances and
              workshops.
            </p>
          </div>
        </div>
      </div>

{/* testimonials */}
      <div className="text-center mt-20 mb-16 animate-fadeIn">
      <TestimonialsPage/>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20 mb-16 animate-fadeIn">
        <h2 className="text-3xl font-bold text-[#002D62] mb-8">
          Join Us Today!
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Be a part of a school that nurtures academic excellence and holistic
          development.
        </p>
        <button className="bg-[#002D62] text-white py-4 px-12 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
        <Link to="/Contact" className="text-white no-underline">
        Contact Us
        </Link>
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
