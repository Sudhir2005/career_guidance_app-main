import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import goalLogo from "../assets/goal.svg";

export default function LandingPage() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en"); // Default language

  // Save language selection to localStorage
  useEffect(() => {
    localStorage.setItem("preferredLanguage", language);
  }, [language]);

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "Hindi" },
    { code: "ur", label: "Urdu" },
    { code: "dog", label: "Dogri" },
    { code: "pu", label: "Punjabi" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden text-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">

      {/* --- Decorative Background --- */}
      <div className="absolute top-0 bg-teal-300 rounded-full left-1/4 w-72 h-72 opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 bg-teal-400 rounded-full right-1/4 w-72 h-72 opacity-20 animate-pulse delay-2000"></div>

      {/* --- Card Container --- */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md p-10 border border-gray-200 shadow-2xl bg-white/30 backdrop-blur-xl rounded-3xl">
        
        {/* --- Logo --- */}
        <div className="w-32 h-32 mb-6 md:w-40 md:h-40">
          <img
            src={goalLogo}
            alt="Career Guide Logo"
            className="object-contain w-full h-full rounded-full shadow-xl"
          />
        </div>

        {/* --- App Title --- */}
        <h1 className="mb-2 text-3xl font-extrabold text-gray-800 md:text-4xl drop-shadow-md">
          Welcome to <span className="text-teal-600">Career Guide</span>
        </h1>
        <p className="max-w-sm mb-6 text-gray-600 md:text-base">
          Explore your path, discover opportunities, and grow your career with guidance and insight.
        </p>

        {/* --- Language Dropdown --- */}
        <div className="w-full max-w-xs mb-6">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        {/* --- Buttons --- */}
        <div className="flex flex-col w-full gap-4 sm:flex-row">
          <button
            onClick={() => navigate("/login")}
            className="w-full py-3 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-teal-500 via-teal-600 to-gray-700 rounded-xl hover:scale-105 hover:brightness-110"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="w-full py-3 font-semibold text-gray-800 transition-all duration-300 bg-gray-200 shadow-lg rounded-xl hover:scale-105 hover:bg-gray-300"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* --- Footer --- */}
      <p className="absolute text-sm text-gray-500 bottom-6">
        © 2025 Career Guide. All rights reserved.
      </p>
    </div>
  );
}
