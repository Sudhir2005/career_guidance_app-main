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
    <div className="flex flex-col h-full bg-gray-50">
      {/* Navbar component can go here */}

      {/* Content below navbar */}
      <div className="flex flex-col items-center mt-24 px-6">
        <h1 className="text-3xl font-extrabold text-center text-blue-600 drop-shadow-md tracking-wide mb-8">
          Explore Your Other Interests!
        </h1>

        <input
          type="text"
          placeholder="Eg. Guitar class"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 bg-gray-800"
        />

        <button
          onClick={handleSearch}
          className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* Footer component here */}
    </div>
  );
}
