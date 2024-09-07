// import React, { useState } from 'react';

const MissionStatement = () => {
  return (
    // const [activeTab, setActiveTab] = useState('mission');
    //     const [isMissionOpen, setIsMissionOpen] = useState(true); // State to track mission section
    //     const [isVisionOpen, setIsVisionOpen] = useState(true);   // State to track vision section
    //   return (
    // <div className="w-full flex flex-col items-center">
    //   {/* Tabs */}
    //   <div className="flex mb-4">
    //     <button
    //       className={`px-6 py-6 mr-2 rounded-xl w-[300px] leading-6 ${activeTab === 'mission' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
    //       onClick={() => setActiveTab('mission')}
    //     >
    //       Mission
    //     </button>
    //     <button
    //       className={`px-4 py-2 rounded-xl  w-[300px]  ${activeTab === 'vision' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
    //       onClick={() => setActiveTab('vision')}
    //     >
    //       Vision
    //     </button>
    //   </div>

    //   {/* Content */}
    //   <div className="w-full p-4 bg-gray-100 rounded-md">
    //     {activeTab === 'mission' && (
    //       <div>
    //         <h1 className="text-center font-bold text-xl mb-4">Mission Statement</h1>
    //         <p className="text-center leading-10 text-justify">
    //           At Enfedam Academy, we are passionate about making a meaningful difference in the lives of our students.
    //           Our mission drives us every day as we work towards shaping a brighter future for the generations to come.
    //         </p>
    //       </div>
    //     )}
    //     {activeTab === 'vision' && (
    //       <div>
    //         <h1 className="text-center font-bold text-xl mb-4">Vision Statement</h1>
    //         <p className="text-center">
    //           To be a leading educational institution recognized for our commitment to excellence, innovation, and the
    //           holistic development of our students. We aim to inspire and prepare future leaders who are equipped to
    //           contribute positively to society and navigate the challenges of tomorrow.
    //         </p>
    //       </div>
    //     )}
    //   </div>
    // </div>
    //     <div className="w-full max-w-xl mx-auto">
    //     {/* Mission Accordion */}
    //     <div className="border-b">
    //       <button
    //         className="w-full text-left py-4 px-6 bg-gray-200 hover:bg-gray-300 text-black font-bold focus:outline-none"
    //         onClick={() => setIsMissionOpen(!isMissionOpen)}
    //       >
    //         Mission
    //       </button>
    //       {isMissionOpen && (
    //         <div className="p-6 bg-white">
    //           <h1 className="text-xl font-semibold mb-2">Mission Statement</h1>
    //           <p className="text-gray-700">
    //             At Enfedam Academy, we are passionate about making a meaningful difference in the lives of our students.
    //             Our mission drives us every day as we work towards shaping a brighter future for the generations to come.
    //           </p>
    //         </div>
    //       )}
    //     </div>

    //     {/* Vision Accordion */}
    //     <div className="border-b mt-2">
    //       <button
    //         className="w-full text-left py-4 px-6 bg-gray-200 hover:bg-gray-300 text-black font-bold focus:outline-none"
    //         onClick={() => setIsVisionOpen(!isVisionOpen)}
    //       >
    //         Vision
    //       </button>
    //       {isVisionOpen && (
    //         <div className="p-6 bg-white">
    //           <h1 className="text-xl font-semibold mb-2">Vision Statement</h1>
    //           <p className="text-gray-700">
    //             To be a leading educational institution recognized for our commitment to excellence, innovation, and the
    //             holistic development of our students. We aim to inspire and prepare future leaders who are equipped to
    //             contribute positively to society and navigate the challenges of tomorrow.
    //           </p>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    <div className="w-full max-w-xl mx-auto">
      {/* Mission Section */}
      <div className="border-b">
        <div className="w-full text-left py-4 px-6 bg-gray-200 text-black font-bold">
          Mission
        </div>
        <div className="p-6 bg-white">
          <h1 className="text-xl font-semibold mb-2  text-blue-600">
            Mission Statement
          </h1>
          <p className="text-gray-700 leading-6 text-justify">
            At Enfedam Academy, we are passionate about making a meaningful
            difference in the lives of our students. Our mission drives us every
            day as we work towards shaping a brighter future for the generations
            to come.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="border-b mt-2">
        <div className="w-full text-left py-4 px-6 bg-gray-200 text-black font-bold">
          Vision
        </div>
        <div className="p-6 bg-white">
          <h1 className="text-xl font-semibold mb-2  text-blue-600">
            Vision Statement
          </h1>
          <p className="text-gray-700 leading-6 text-justify">
            To be a leading educational institution recognized for our
            commitment to excellence, innovation, and the holistic development
            of our students. We aim to inspire and prepare future leaders who
            are equipped to contribute positively to society and navigate the
            challenges of tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
