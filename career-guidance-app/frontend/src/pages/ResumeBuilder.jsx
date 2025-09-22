import React, { useState } from "react";
import {
  Loader2,
  FileDown,
  GraduationCap,
  Briefcase,
  Star,
  Rocket,
} from "lucide-react";

export default function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
    projects: "",
  });

  const [resumeType, setResumeType] = useState("normal");
  const [loading, setLoading] = useState(false);

  const maxChars = {
    education: 500,
    experience: 600,
    skills: 200,
    projects: 400,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        skills: formData.skills
          ? formData.skills.split(",").map((s) => s.trim())
          : [],
        education: formData.education
          ? [{ degree: formData.education, institution: "", year: "" }]
          : [],
        experience: formData.experience
          ? [
              {
                role: formData.experience,
                company: "",
                duration: "",
                details: "",
              },
            ]
          : [],
        projects: formData.projects
          ? formData.projects
              .split(";")
              .map((p) => ({ title: p.trim(), description: "" }))
          : [],
        resumeType,
      };

      const response = await fetch(
        "http://localhost:5000/api/resume/generate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Resume API Error:", response.status, errorText);
        throw new Error("Failed to generate resume");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${formData.name.replace(/\s+/g, "_")}_Resume.pdf`;
      link.click();
    } catch (err) {
      console.error("Resume generation failed:", err);
      alert("Error generating resume. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-10 bg-white border border-gray-300 shadow-2xl rounded-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-teal-600">
            ✨ Build Your Resume
          </h1>
          <p className="mt-3 text-gray-600">
            A modern tool to create a professional resume in minutes.
          </p>
        </div>

        {/* Added pb-24 so the button stays above navbar */}
        <form onSubmit={handleSubmit} className="pb-24 space-y-7">
          {/* Basic Info */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                className="w-full p-4 border peer rounded-xl bg-gray-50 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                required
              />
              <label className="absolute left-3 top-1.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
                Full Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className="w-full p-4 border peer rounded-xl bg-gray-50 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                required
              />
              <label className="absolute left-3 top-1.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
                Email Address
              </label>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder=" "
              className="w-full p-4 border peer rounded-xl bg-gray-50 focus:ring-2 focus:ring-teal-400 focus:outline-none"
            />
            <label className="absolute left-3 top-1.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
              Phone Number
            </label>
          </div>

          {/* Education */}
          <div className="p-5 border-l-4 border-teal-500 rounded-lg bg-gray-50">
            <div className="flex items-center gap-2 mb-2 font-semibold text-teal-600">
              <GraduationCap className="w-5 h-5" /> Education
            </div>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
              maxLength={maxChars.education}
              placeholder="E.g., B.Tech in Computer Science, XYZ University, 2020"
              className="w-full p-4 bg-white border rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              rows="3"
            />
            <p className="mt-1 text-xs text-right text-gray-500">
              {formData.education.length}/{maxChars.education} characters
            </p>
          </div>

          {/* Experience */}
          <div className="p-5 border-l-4 border-teal-400 rounded-lg bg-gray-50">
            <div className="flex items-center gap-2 mb-2 font-semibold text-teal-600">
              <Briefcase className="w-5 h-5" /> Work Experience
            </div>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              maxLength={maxChars.experience}
              placeholder="E.g., Frontend Developer at ABC Corp (2021–2023)"
              className="w-full p-4 bg-white border rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              rows="3"
            />
            <p className="mt-1 text-xs text-right text-gray-500">
              {formData.experience.length}/{maxChars.experience} characters
            </p>
          </div>

          {/* Skills */}
          <div className="p-5 border-l-4 border-teal-300 rounded-lg bg-gray-50">
            <div className="flex items-center gap-2 mb-2 font-semibold text-teal-600">
              <Star className="w-5 h-5" /> Skills
            </div>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              maxLength={maxChars.skills}
              placeholder="E.g., JavaScript, React, Node.js, MongoDB"
              className="w-full p-4 bg-white border rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              rows="2"
            />
            <p className="mt-1 text-xs text-right text-gray-500">
              {formData.skills.length}/{maxChars.skills} characters
            </p>
          </div>

          {/* Projects */}
          <div className="p-5 border-l-4 border-teal-200 rounded-lg bg-gray-50">
            <div className="flex items-center gap-2 mb-2 font-semibold text-teal-600">
              <Rocket className="w-5 h-5" /> Projects
            </div>
            <textarea
              name="projects"
              value={formData.projects}
              onChange={handleChange}
              maxLength={maxChars.projects}
              placeholder="Separate multiple projects with semicolon ';' e.g., Project A; Project B"
              className="w-full p-4 bg-white border rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              rows="3"
            />
            <p className="mt-1 text-xs text-right text-gray-500">
              {formData.projects.length}/{maxChars.projects} characters
            </p>
          </div>

          {/* Resume Style */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Resume Style
            </label>
            <select
              value={resumeType}
              onChange={(e) => setResumeType(e.target.value)}
              className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-teal-400 focus:outline-none"
            >
              <option value="normal">✨ Normal</option>
              <option value="moderate">🌟 Moderate</option>
              <option value="professional">💼 Professional</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center w-full gap-2 px-6 py-4 text-lg font-semibold text-white transition-all shadow-lg bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl hover:scale-105 hover:from-teal-600 hover:to-teal-700 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Generating...
              </>
            ) : (
              <>
                <FileDown className="z-10 w-5" /> Download Resume
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
