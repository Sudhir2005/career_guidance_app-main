import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ExtraCurriculars() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Pass search term as state
    navigate("/extra-ex", { state: { query: search } });
  };

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Navbar component can go here */}

      {/* Content below navbar */}
      <div className="flex flex-col items-center px-6 mt-24">
        <h1 className="mb-8 text-3xl font-extrabold tracking-wide text-center text-teal-600 drop-shadow-md">
          Explore Your Other Interests!
        </h1>

        <input
          type="text"
          placeholder="Eg. Guitar class"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-3 mb-4 text-gray-900 placeholder-gray-500 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        <button
          onClick={handleSearch}
          className="px-6 py-2 text-white transition-colors duration-300 bg-teal-500 rounded-lg shadow-md hover:bg-teal-600"
        >
          Search
        </button>
      </div>

      {/* Footer component here */}
    </div>
  );
}
