import React from 'react'

const Nursery = () => {
  return (
    <div className="bg-blue-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-center text-[#002D62] mb-8">Welcome To Our Nursery Program</h1>
        
        {/* Section: Introduction */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src="src\assets\img1.jpg"
                alt="Nursery"
                className="rounded-lg shadow-lg w-full h-72 object-cover"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-2xl font-semibold text-[#002D62] mb-4">A Nurturing Environment for Young Learners</h2>
              <p className="text-sm leading-7 text-[#002D62] mb-4">
                Our nursery program provides a warm and inviting space for children aged 2 to 4 years to begin their
                educational journey. With a focus on play-based learning, we help children develop the essential skills 
                they need for future success while encouraging curiosity and creativity.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Key Features */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-[#002D62] mb-6 text-center">Key Features of Our Nursery Program</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold text-[#002D62] mb-4">Experienced Educators</h4>
              <p className="text-gray-700">
                Our team of experienced nursery teachers is passionate about nurturing young minds and fostering a love of learning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold text-[#002D62] mb-4">Play-Based Curriculum</h4>
              <p className="text-gray-700">
                Our curriculum combines structured learning with play to help children develop important social, emotional, and cognitive skills.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold text-[#002D62] mb-4">Safe and Secure Environment</h4>
              <p className="text-gray-700">
                We prioritize safety in our facilities, ensuring that children are in a secure and nurturing environment at all times.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Activities */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-[#002D62] mb-6 text-center">Fun and Engaging Activities</h3>
          <p className="text-lg text-[#002D62] mb-6 text-center">
            Our nursery offers a variety of activities that engage children physically, socially, and intellectually, including:
          </p>
          <ul className="list-disc list-inside text-[#002D62] space-y-3 max-w-2xl mx-auto">
            <li>Creative arts and crafts</li>
            <li>Storytelling and reading time</li>
            <li>Outdoor play and physical exercise</li>
            <li>Interactive learning games</li>
            <li>Music and movement</li>
          </ul>
        </section>

        {/* Call-to-Action */}
        <div className="text-center ">
          <a
            href="/contact"
            className="bg-[#002D62] text-white py-3 px-6 rounded hover:bg-[#466081] transition[#002D62] duration-300"
          >
            Contact Us To Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nursery

