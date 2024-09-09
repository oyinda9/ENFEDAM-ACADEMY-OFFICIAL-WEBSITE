import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { FaFutbol } from "react-icons/fa";
import { MdHighlight } from "react-icons/md";
import { FaSmile } from "react-icons/fa";
const LearnMore = () => {
  return (
    <div>
      <div className="w-full h-full bg-blue-50 rounded-lg py-4">
        <div className="grid grid-cols-5 gap-4 p-4">
          <div className="bg-blue-400 text-white p-2 text-center h-[300px] rounded-md">
            <div className="flex flex-col items-center justify-center text-center">
              <FaFileAlt size={24} />
              <h1 className="mt-2">Admissions</h1>
            </div>

            <div>
              <hr />
              <p className="text-justify leading-6">
                For admission eligibility, the child will take an intake exam
                appropriate for their grade level. If the child passes, they
                qualify for admission into their desired class.
              </p>
            </div>
            <div className="mt-4">
              <a
                href=""
                className="text-white border rounded-lg px-4 py-2 space-y-4 bg-blue-900"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="bg-red-400 text-white p-2 text-center  h-[300px]  rounded-md">
            <div className="flex flex-col items-center justify-center text-center">
              <GiBookshelf size={24} />
              <h1 className="mt-2">School Library</h1>
            </div>
            <hr />
            <h3 className="text-justify leading-6">
              Our library provides a quiet and welcoming space for students to
              immerse themselves in learning, with knowledgeable staff on hand
              to guide and assist.
            </h3>
            <div className="mt-4">
              <a
                href=""
                className="text-white border rounded-lg px-4 py-2 space-y-4 bg-blue-900"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="bg-green-400 text-white p-4 text-center  h-[300px]  rounded-md">
            <div className="flex flex-col items-center justify-center text-center">
              <FaFutbol size={24} />
              <h1 className="mt-2">Sports</h1>
            </div>
            <hr />
            <h3 className="text-justify leading-6">
              At Enfedam Academy, sports play a vital role in promoting physical
              fitness, teamwork, and discipline developing their skills and
              encouraging active lifestyles.
            </h3>
            <div className="mt-4">
              <a
                href=""
                className="text-white border rounded-lg px-4 py-2 space-y-4 bg-blue-900"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="bg-yellow-500 text-white p-2 text-center  h-[300px]  rounded-md">
            <div className="flex flex-col items-center justify-center text-center">
              <FaSmile size={24} />
              <h1 className="mt-2">Activities</h1>
            </div>
            <hr />
            <h3 className="text-justify leading-6">
              At Enfedam Academy, our co-curricular activities enhance students'
              learning, foster creativity, and develop skills beyond academics.
            </h3>
            <div className="mt-4">
              <a
                href=""
                className="text-white border rounded-lg px-4 py-2 space-y-4 bg-blue-900"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="bg-purple-400 text-white p-4 text-center  h-[300px]  rounded-md">
            <div className="flex flex-col items-center justify-center text-center">
              <MdHighlight size={24} />
              <h1 className="mt-2">Highlights</h1>
            </div>
            <hr />
            <h3>
              In case you run into any questions, check out FAQ information.
            </h3>
            <div className="mt-4">
              <a
                href=""
                className="text-white border rounded-lg px-4 py-2 space-y-4 bg-blue-900"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LearnMore;
