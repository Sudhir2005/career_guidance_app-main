import { useState } from "react";
import { FaUniversity } from "react-icons/fa";

export default function ExploreColleges() {
  const [search, setSearch] = useState("");

  const primaryColleges = [
    "Gandhi Memorial Science College, Jammu",
    "Government Degree College, Kashmir",
    "Government Medical College, Kashmir",
    "Government Polytechnic College, Jammu",
  ];
  const secondaryColleges = [
    "Kashmir Law College, Kashmir",
    "Model Institute of Engineering and Tech., Jammu",
    "IUST, Awantipora",
    "Bhargava College of Engineering and Tech., Samba",
  ];

  const filterColleges = (colleges) =>
    colleges.filter((college) =>
      college.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="flex flex-col h-full p-6 bg-white">
      {/* Page Title */}
      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        Explore Colleges
      </h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search colleges..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 mb-6 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Primary Colleges */}
      <h3 className="mb-3 text-xl font-semibold text-gray-700">
        Primary Colleges
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-6 sm:grid-cols-3 md:grid-cols-4">
        {filterColleges(primaryColleges).map((college, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
          >
            <FaUniversity className="mb-2 text-3xl text-blue-600" />
            <p className="text-sm font-medium text-gray-700 text-center">
              {college}
            </p>
          </div>
        ))}
      </div>

      {/* Secondary Colleges */}
      <h3 className="mb-3 text-xl font-semibold text-gray-700">
        Secondary Colleges
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {filterColleges(secondaryColleges).map((college, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
          >
            <FaUniversity className="mb-2 text-3xl text-green-600" />
            <p className="text-sm font-medium text-gray-700 text-center">
              {college}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
