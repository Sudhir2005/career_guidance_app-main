import { Link } from "react-router-dom";

export default function Counselling() {
  return (
    <div className="flex flex-col items-center p-6 bg-white min-h-screen">
      {/* Page Title */}
      <h2 className="mb-4 text-2xl font-bold text-gray-800">Counselling</h2>

      {/* Message */}
      <p className="mb-4 text-gray-600 text-center text-lg">
        Counselling is yet to start
      </p>

      {/* Expected Date */}
      <p className="mb-6 text-xl font-semibold text-red-500 bg-red-100 px-4 py-2 rounded-lg text-center">
        Expected Counselling Date: 15th October 2025
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link
          to="/previous-counselling"
          className="py-3 text-center !text-white no-underline bg-blue-500 rounded-xl hover:bg-blue-600 transition"
        >
          View Previous Year Counselling Databases
        </Link>
        <Link
          to="/mock-counselling"
          className="py-3 text-center !text-white no-underline bg-green-500 rounded-xl hover:bg-green-600 transition"
        >
          Take Our Mock Counselling
        </Link>
      </div>
    </div>
  );
}
