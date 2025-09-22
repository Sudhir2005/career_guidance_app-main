import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaClipboardList,
  FaFileAlt,
  FaBriefcase,
  FaUserCircle,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { to: "/tests", label: "Tests", icon: <FaClipboardList /> },
    { to: "/extracurriculars", label: "Extracurriculars", icon: <FaUserGraduate /> },
    { to: "/resume", label: "Resume", icon: <FaFileAlt /> },
    { to: "/opportunities", label: "Jobs", icon: <FaBriefcase /> },
    { to: "/profile-setup", label: "Profile", icon: <FaUserCircle /> },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  return (
    <>
      {/* Top Navbar */}
      <div className="relative sticky top-0 z-40 flex items-center justify-center px-6 py-4 mb-4 shadow-md bg-white/40 backdrop-blur-md rounded-b-2xl">
        {/* Sidebar button (left) */}
        <button
          className="absolute p-2 text-gray-800 transition-transform duration-300 rounded-full shadow-lg left-6 bg-white/70 hover:text-teal-600 hover:scale-110 md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaBars size={20} />
        </button>

        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src="career-guidance-app\frontend\src\assets\logo.svg" // <-- Replace with your logo path
            alt="Logo"
            className="object-contain w-auto h-12"
          />
          <h1 className="text-4xl font-extrabold tracking-wide text-teal-600 drop-shadow-lg">
            CareerGuide
          </h1>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/30 md:hidden"></div>
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-2xl transform transition-transform duration-300 z-50 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center py-8 bg-teal-600 border-b border-gray-600 shadow-md rounded-br-3xl">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
            alt="Profile"
            className="w-24 h-24 border-4 border-white rounded-full shadow-lg"
          />
          <h2 className="mt-3 text-lg font-bold tracking-wide">John Doe</h2>
          <p className="text-sm italic text-gray-200">Software Engineer</p>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col px-5 mt-6 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                location.pathname === item.to
                  ? "bg-teal-600 text-white font-semibold shadow-md"
                  : "hover:bg-gray-700 hover:shadow-lg"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Logout */}
        <div className="absolute w-full px-5 bottom-6">
          <button
            onClick={handleLogout}
            className="flex items-center w-full gap-3 px-4 py-3 text-left transition rounded-lg hover:bg-gray-700"
          >
            <FaSignOutAlt /> <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-10 flex items-center justify-around py-3 text-white bg-gray-800 shadow-lg backdrop-blur-md rounded-t-2xl md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={() => setSidebarOpen(false)}
            className={`flex flex-col items-center text-xs px-3 py-2 rounded-lg transition-all duration-300 ${
              location.pathname === item.to
                ? "bg-teal-600 text-white font-semibold scale-110 shadow-md"
                : "text-white hover:text-gray-300"
            }`}
          >
            <span className="text-base">{item.icon}</span>
            <span className="mt-1">{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
