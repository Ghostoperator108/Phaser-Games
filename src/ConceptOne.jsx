import React from "react";
import { Link } from "react-router-dom";



const ConceptOne = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-100 via-green-50 to-yellow-50 flex flex-col justify-center items-center px-6 py-12 font-sans text-green-900">
      <div className="max-w-xl w-full flex flex-col items-center gap-8">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center leading-tight">
          Chapter 1: Food: Where Does It Come From?
        </h1>

        {/* Content container with icon and welcome box */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 w-full">
          {/* Illustration */}
          <div className="flex-shrink-0 mb-6 sm:mb-0 sm:w-32 sm:h-32 flex justify-center items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/709/709496.png"
              alt="Magnifying glass icon"
              className="w-24 h-24 sm:w-32 sm:h-32"
              draggable={false}
              loading="lazy"
            />
          </div>

          {/* Welcome Quest Message */}
          <div className="bg-white rounded-xl shadow-md p-6 flex-1 text-center sm:text-left text-green-900 text-lg sm:text-xl font-semibold leading-relaxed">
            Welcome, Food Explorer! <span role="img" aria-label="detective emoji">🕵️</span> Your first mission is to uncover the secrets of your plate. Are you ready to discover where our food comes from and become a master of ingredients?
          </div>
        </div>

        {/* Start Button */}
        <Link to="/welcome-game"><button
          type="button"
          className="mt-8 bg-green-600 text-white font-bold py-4 px-10 rounded-xl shadow-lg transform transition-transform duration-200 hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
          
        >
          Start Quest!
        </button></Link>
      </div>
    </main>
  );
};

export default ConceptOne;