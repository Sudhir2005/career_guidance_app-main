import { useState } from "react";
import { 
  FaBookOpen, 
  FaBriefcase, 
  FaUniversity, 
  FaBuilding, 
  FaBalanceScale, 
  FaLaptopCode, 
  FaStethoscope 
} from "react-icons/fa";

const examsList = [
  { name: "SSC (10th Level)", icon: <FaBookOpen className="text-3xl text-blue-500" />, level: "10th" },
  { name: "Railway Group D", icon: <FaBriefcase className="text-3xl text-green-500" />, level: "10th" },
  { name: "NDA", icon: <FaUniversity className="text-3xl text-purple-500" />, level: "12th" },
  { name: "Clerk Exams", icon: <FaBuilding className="text-3xl text-yellow-500" />, level: "10th/12th" },
  { name: "Bank PO", icon: <FaBalanceScale className="text-3xl text-pink-500" />, level: "12th+" },
  { name: "JEE", icon: <FaLaptopCode className="text-3xl text-cyan-500" />, level: "12th" },
  { name: "NEET", icon: <FaStethoscope className="text-3xl text-emerald-500" />, level: "12th" },
  { name: "IT & Technical", icon: <FaLaptopCode className="text-3xl text-orange-500" />, level: "10th/12th" },
];

export default function GovExams() {
  const [search, setSearch] = useState("");

  const filteredExams = examsList.filter((exam) =>
    exam.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Government Exams</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search exams..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md p-3 mb-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white bg-gray-700"
      />

      {/* Exams Grid (2x4) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {filteredExams.map((exam, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            {exam.icon}
            <p className="mt-3 text-gray-700 font-semibold text-center">{exam.name}</p>
            <p className="text-sm text-gray-400 mt-1">{exam.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
