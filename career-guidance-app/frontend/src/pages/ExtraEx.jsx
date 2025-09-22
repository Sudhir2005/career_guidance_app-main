import { useLocation } from "react-router-dom";

const offlineClasses = [
  { name: "Guitar Class A - Jammu", location: "Jammu" },
  { name: "Guitar Class B - Srinagar", location: "Kashmir" },
  { name: "Guitar Class C - Jammu", location: "Jammu" },
];

const onlineClasses = [
  { name: "Online Guitar Class 1", platform: "Zoom" },
  { name: "Online Guitar Class 2", platform: "Google Meet" },
  { name: "Online Guitar Class 3", platform: "YouTube Live" },
];

export default function ExtraEx() {
  const location = useLocation();
  const query = location.state?.query || "Guitar Class";

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Results for "{query}"
      </h1>

      {/* Offline Classes */}
      <div className="w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Offline Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offlineClasses.map((cls, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-gray-700">{cls.name}</h3>
              <p className="text-gray-500 mt-1">{cls.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Online Classes */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Online Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {onlineClasses.map((cls, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-gray-700">{cls.name}</h3>
              <p className="text-gray-500 mt-1">{cls.platform}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
