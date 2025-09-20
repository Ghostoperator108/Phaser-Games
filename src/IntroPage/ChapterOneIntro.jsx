import React from "react";
import { Link } from "react-router-dom";


const ChapterOneIntro = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-50 px-6 py-12 text-gray-800">
      <div className="max-w-xl text-center">
        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold font-sans mb-6 leading-tight text-yellow-700">
          Chapter 1: Food: Where Does It Come From?
        </h1>

        {/* Introductory Text */}
        <p className="text-lg sm:text-xl text-yellow-900 mb-10 tracking-wide">
          Ever wondered what's on your plate? <span aria-label="plate emoji" role="img">🍽️</span> In this chapter, we'll go on a delicious
          adventure to discover where our food comes from. Let's explore different ingredients and their amazing journey from the farm to your fork!
        </p>

        {/* Visual Element */}
        <div className="mb-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
            alt="Plate with food illustration"
            className="mx-auto w-48 h-48 sm:w-56 sm:h-56 object-contain"
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* Call-to-Action Button */}
        <Link to="/"><button
          type="button"
          className="bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors w-full sm:w-auto"
          onClick={() => alert("Let's Begin clicked!")}
        >
          Let's Begin!
        </button></Link>
      </div>
    </div>
  );
};

export default ChapterOneIntro;