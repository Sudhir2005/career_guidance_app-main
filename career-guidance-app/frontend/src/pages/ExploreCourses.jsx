import { useState } from "react";
import { FaLaptopCode, FaStethoscope, FaPaintBrush } from "react-icons/fa";

export default function ExploreCourses() {
  const [searchTerm, setSearchTerm] = useState("");

  const engineeringCourses = [
    { name: "Computer Science", icon: <FaLaptopCode /> },
    { name: "Mechanical", icon: <FaLaptopCode /> },
    { name: "Civil", icon: <FaLaptopCode /> },
    { name: "Electrical", icon: <FaLaptopCode /> },
  ];

  const medicalCourses = [
    { name: "MBBS", icon: <FaStethoscope /> },
    { name: "BDS", icon: <FaStethoscope /> },
    { name: "Nursing", icon: <FaStethoscope /> },
    { name: "Pharmacy", icon: <FaStethoscope /> },
  ];

  const artsCourses = [
    { name: "Fine Arts", icon: <FaPaintBrush /> },
    { name: "Design", icon: <FaPaintBrush /> },
    { name: "Music", icon: <FaPaintBrush /> },
    { name: "Theatre", icon: <FaPaintBrush /> },
  ];

  const filterCourses = (courses) =>
    courses.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="flex flex-col h-full p-6 bg-white min-h-screen">
      {/* Page Title */}
      <h2 className="mb-4 text-2xl font-bold text-gray-800">Explore Courses</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 mb-6 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {/* Engineering Courses */}
      <h3 className="mb-3 text-xl font-semibold text-gray-700">Engineering</h3>
      <div className="grid grid-cols-2 gap-4 mb-6 sm:grid-cols-3 md:grid-cols-4">
        {filterCourses(engineeringCourses).map((course, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="mb-2 text-3xl text-red-500">{course.icon}</div>
            <p className="text-sm font-medium text-gray-700 text-center">
              {course.name}
            </p>
          </div>
        ))}
      </div>

      {/* Medical Courses */}
      <h3 className="mb-3 text-xl font-semibold text-gray-700">Medical</h3>
      <div className="grid grid-cols-2 gap-4 mb-6 sm:grid-cols-3 md:grid-cols-4">
        {filterCourses(medicalCourses).map((course, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="mb-2 text-3xl text-green-500">{course.icon}</div>
            <p className="text-sm font-medium text-gray-700 text-center">
              {course.name}
            </p>
          </div>
        ))}
      </div>

      {/* Arts Courses */}
      <h3 className="mb-3 text-xl font-semibold text-gray-700">Arts</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {filterCourses(artsCourses).map((course, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="mb-2 text-3xl text-blue-500">{course.icon}</div>
            <p className="text-sm font-medium text-gray-700 text-center">
              {course.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
