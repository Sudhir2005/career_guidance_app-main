import { Briefcase, FlaskConical, GraduationCap, Rocket } from "lucide-react";
import { useState } from "react";

export default function Opportunities() {
  const [loadingId, setLoadingId] = useState(null); // track which opportunity is loading

  const opportunities = [
    {
      id: 1,
      title: "Internship - Web Development",
      description:
        "Work on real-world projects and enhance your coding skills with mentorship from professionals.",
      type: "Internship",
      icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 2,
      title: "Research Program - AI & ML",
      description:
        "Collaborate with experts in AI/ML and contribute to groundbreaking research innovations.",
      type: "Research",
      icon: <FlaskConical className="w-6 h-6 text-purple-600" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Scholarship - STEM Education",
      description:
        "Financial aid for students pursuing careers in Science, Technology, Engineering, and Math.",
      type: "Scholarship",
      icon: <GraduationCap className="w-6 h-6 text-green-600" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "Startup Accelerator - Innovation Hub",
      description:
        "Turn your ideas into reality with funding, mentorship, and resources for early-stage startups.",
      type: "Startup",
      icon: <Rocket className="w-6 h-6 text-red-600" />,
      color: "from-red-500 to-orange-500",
    },
  ];

  // Simulate apply function without API call
  const handleApply = (opportunity) => {
    setLoadingId(opportunity.id);
    setTimeout(() => {
      alert(`✅ Applied for ${opportunity.title} (simulated)`);
      setLoadingId(null);
    }, 1500); // simulate loading delay
  };

  return (
    <div className="p-6 pb-24 mx-auto max-w-7xl">
      {/* Added pb-24 for spacing from mobile navbar */}

      <h2 className="mb-8 text-3xl font-bold text-gray-800">✨ Opportunities</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className="p-6 transition duration-300 bg-white border border-gray-100 shadow rounded-2xl hover:shadow-xl hover:-translate-y-1"
          >
            {/* Header with Icon + Tag */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gray-100 to-gray-200">
                  {opportunity.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {opportunity.title}
                </h3>
              </div>
              <span
                className={`px-3 py-1 text-xs font-medium text-white rounded-full shadow bg-gradient-to-r ${opportunity.color}`}
              >
                {opportunity.type}
              </span>
            </div>

            {/* Description */}
            <p className="mb-6 text-sm text-gray-600">
              {opportunity.description}
            </p>

            {/* CTA */}
            <button
              onClick={() => handleApply(opportunity)}
              disabled={loadingId === opportunity.id}
              className="px-5 py-2 text-sm font-medium text-white transition rounded-lg shadow bg-gradient-to-r from-teal-500 to-gray-400 hover:opacity-90 disabled:opacity-50"
            >
              {loadingId === opportunity.id ? "Applying..." : "Apply Now →"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
