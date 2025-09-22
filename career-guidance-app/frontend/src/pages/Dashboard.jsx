import { FaRocket, FaUserGraduate, FaFutbol, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Greeting */}
        <div className="mt-[-30px]">
          <h2 className="text-xl font-semibold text-gray-800">Hello Yadhu Krishna,</h2>
          <p className="text-sm text-gray-500">How can I assist you today?</p>
        </div>

        {/* Ask AI Section */}
        <div className="p-4 mb-6 bg-white shadow-md rounded-2xl mt-[-5px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Ask AI</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Link
              to="/gallery"
              className="py-3 text-center text-white transition bg-teal-500 rounded-xl hover:bg-teal-600"
            >
              Gallery Mode
            </Link>
            <Link
              to="/aichat"
              className="py-3 text-center text-white transition bg-teal-500 rounded-xl hover:bg-teal-600"
            >
              Ask AI
            </Link>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-[-20px] space-y-4">
          {/* Explore Colleges */}
          <Link
            to="/explore-colleges"
            className="flex items-center p-4 bg-white shadow-md rounded-2xl hover:bg-gray-50"
          >
            <div className="p-3 mr-4 bg-teal-100 rounded-full">
              <FaRocket className="text-xl text-teal-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Explore Colleges</h4>
              <p className="text-sm text-gray-500">Find your joy</p>
            </div>
          </Link>

          {/* Explore Courses */}
          <Link
            to="/explore-courses"
            className="flex items-center p-4 bg-white shadow-md rounded-2xl hover:bg-gray-50"
          >
            <div className="p-3 mr-4 bg-teal-100 rounded-full">
              <FaUserGraduate className="text-xl text-teal-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Explore Courses</h4>
              <p className="text-sm text-gray-500">Know about you</p>
            </div>
          </Link>

          {/* Government Exams */}
          <Link
            to="/government-exams"
            className="flex items-center p-4 bg-white shadow-md rounded-2xl hover:bg-gray-50"
          >
            <div className="p-3 mr-4 bg-teal-100 rounded-full">
              <FaBook className="text-xl text-teal-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Government Exams</h4>
              <p className="text-sm text-gray-500">
                Prepare and stay updated with latest exams.
              </p>
            </div>
          </Link>

          {/* Counselling Details */}
          <Link
            to="/counselling"
            className="flex items-center p-4 bg-white shadow-md rounded-2xl hover:bg-gray-50"
          >
            <div className="p-3 mr-4 bg-teal-100 rounded-full">
              <FaFutbol className="text-xl text-teal-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Counselling Details</h4>
              <p className="text-sm text-gray-500">
                Discover and explore your talents beyond academics.
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Extra space at bottom for mobile footer */}
      <div className="h-24"></div>
    </div>
  );
}
