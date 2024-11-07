import React from "react";
import { FaMicrophone } from "react-icons/fa"; // Import the microphone icon from react-icons

const Landing = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-amber-50 justify-center items-center px-4 md:px-0 ">
      <div className="w-full max-w-[90%] md:max-w-[70%] lg:max-w-[60%] h-[70%] flex flex-col items-center mt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-black text-center leading-tight">
          Good morning, Hifz
        </h1>

        <div className="relative w-full max-w-md mt-6 flex items-center">
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            className="w-full rounded-3xl p-4 md:p-5 border border-black text-black resize-none pr-12"
            placeholder="How can Scode help you today?"
          ></textarea>
          <div className="absolute right-2 -translate-y-1/2 top-1/2 gap-2">
            <FaMicrophone
              className="text-black bg-white rounded-full p-2 shadow-md cursor-pointer"
              size={36}
            />
          </div>
        </div>

        <button className="mt-6 w-full max-w-[150px] h-10 p-2 bg-red-700 text-white rounded-lg flex justify-center items-center">
          Prompt
        </button>
      </div>
    </div>
  );
};

export default Landing;
