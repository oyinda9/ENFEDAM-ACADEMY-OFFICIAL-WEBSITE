import React, { useState } from "react";
const Sections = () => {
  const [activeTab, setActiveTab] = useState("creche");

  return (
    <div className="w-full h-full mx-auto py-10 px-4">
      {/* Tabs Navigation */}
      <div></div>
      <div className="flex border-b border-gray-300">
        <button
          className={`py-2 px-4 text-lg font-semibold ${
            activeTab === "creche"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("creche")}
        >
          Creche
        </button>
        <button
          className={`py-2 px-4 text-lg font-semibold ${
            activeTab === "nursery"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("nursery")}
        >
          Nursery
        </button>
        <button
          className={`py-2 px-4 text-lg font-semibold ${
            activeTab === "primary"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("primary")}
        >
          Primary
        </button>
        <button
          className={`py-2 px-4 text-lg font-semibold ${
            activeTab === "secondary"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("secondary")}
        >
          Secondary
        </button>
      </div>

      {/* Tabs Content */}
      <div className="mt-2">
        {activeTab === "creche" && (
          <div className="p-4 bg-blue-100 rounded-md h-[300px]">
            <h2 className="text-2xl font-bold">Creche Section</h2>
            <p className="mt-2 text-justify leading-10">
              Our creche offers a warm, safe, and stimulating environment. Our
              experienced staff provides personalized care and fosters both
              creative and emotional development. We prioritize health and
              safety, maintaining rigorous protocols and nutritious meals.
              Families receive regular updates and support to enhance their
              parenting experience. Our focus is on building a strong foundation
              for each child's growth and confidence.
            </p>
          </div>
        )}
        {activeTab === "nursery" && (
          <div className="p-4 bg-blue-100 rounded-md h-[300px]">
            <h2 className="text-2xl font-bold">Nursery Section</h2>
            <p className="mt-2 text-justify leading-10">
              At Enfedam Academy, our Nursery section provides a nurturing and
              secure environment where young children explore and learn through
              play. Our experienced staff ensures personalized care and
              development, focusing on early social and motor skills.
            </p>
          </div>
        )}
        {activeTab === "primary" && (
          <div className="p-4 bg-blue-100 rounded-md h-[300px]">
            <h2 className="text-2xl font-bold">Primary Section</h2>
            <p className="mt-2  text-justify leading-10">
              Our Primary Section at Enfedam Academy offers a balanced education
              with a rigorous curriculum complemented by diverse extracurricular
              activities. Experienced teachers tailor learning to each child's
              needs, combining academic challenges with enriching activities to
              foster holistic development. We prioritize health and safety and
              maintain strong family engagement to support each child's growth.
            </p>
          </div>
        )}
        {activeTab === "secondary" && (
          <div className="p-4 bg-blue-100 rounded-md h-[300px]">
            <h2 className="text-2xl font-bold">Secondary Section</h2>
            <p className="mt-2  text-justify leading-10">
              The Secondary Section at Enfedam Academy delivers a rigorous
              education designed to prepare students for future success,
              integrating challenging academics with a wide range of
              extracurricular activities. Our skilled educators focus on
              critical thinking and leadership, while maintaining high health
              and safety standards. We collaborate with families to support
              students' development and readiness for their next academic and
              personal steps.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sections;
