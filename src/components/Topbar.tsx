import { MdEmail, MdPhone } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="bg-[#002D62] text-black flex justify-between items-end px-4 py-2">
      <div className="hidden md:flex items-end space-x-8">
      <div className="flex space-x-8 overflow-hidden w-full animate-scroll-slow">
        <div className="flex items-center space-x-4 text-white">
          <MdPhone className="" />
          <span className="flex ml-2">
            <h3 className="font-medium">Contact us:</h3>
            <h3 className="text-medium">07030065113</h3>
          </span>
        </div>

        <div className="flex items-center space-x-4 text-white">
          <MdEmail className="" />
          <span className="flex ml-2">
            <h3 className="font-medium">Reach out to us:</h3>
            <h3 className="text-medium">enfedamacademy@gmail.com</h3>
          </span>
        </div>
      </div>
      </div>
      <div className="flex items-end justify-end ml-auto space-x-4">
        <button className="bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold py-2 px-4 rounded">
          Apply Now
        </button>
      </div>
    </div>
  
  );
};

export default Topbar;
