import React from 'react'

export const Creche = () => {
  return (
    <section className="bg-blue-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#002D62] mb-8">Our Creche</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="src\assets\creche-image1.JPG"
              alt="Creche"
              className="rounded-lg shadow-lg w-full h-72 object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold text-[#002D62] mb-4">A Place Where Children Learn and Play</h3>
            <p className="text-lg text-gray-700 mb-4">
              At our creche, we provide a safe, nurturing, and stimulating environment for your little ones.
              Our highly trained staff is dedicated to ensuring that every child receives the best care and
              attention they deserve. Through engaging activities and a focus on early childhood education,
              we help children grow, learn, and have fun!
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Experienced and caring staff</li>
              <li>Age-appropriate activities</li>
              <li>Play-based learning approach</li>
              <li>Secure and hygienic environment</li>
            </ul>
            <div className="mt-6">
              <a
                href="/contact"
                className="bg-[#002D62] text-white py-2 px-4 rounded hover:bg-[#002D62] transition duration-300"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}