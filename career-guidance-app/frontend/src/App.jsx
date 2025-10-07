import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CareerExplorer from "./pages/CareerExplorer";
import Opportunities from "./pages/Opportunities";
import ProfileSetup from "./pages/ProfileSetup";
import PsychometricTest from "./pages/PsychometricTest";
import ResumeBuilder from "./pages/ResumeBuilder";
import NotFound from "./pages/NotFound";
import ExtraCurriculars from "./pages/ExtraCurriculars";
import Aichat from "./pages/Aichat";
import EducationLevelSelector from "./pages/EducationLevelSelector";
import ExploreColleges from "./pages/ExploreColleges";
import ExploreCourses from "./pages/ExploreCourses";
import Counselling from "./pages/Counselling";
import GovExams from "./pages/GovExams";
import ExtraEx from "./pages/ExtraEx";
import LandingPage from "./pages/LandingPage";

function App() {
  const location = useLocation();

  // Routes where Navbar should NOT appear
  const authRoutes = ["/", "/login", "/register"];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Conditionally render Navbar */}
      {!authRoutes.includes(location.pathname) && <Navbar />}

      {/* Main content area */}
      <main className="flex-grow p-0">
        <Routes>
          {/* Landing Page (Static Logo + Buttons) */}
          <Route path="/" element={<LandingPage />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Core Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/careers" element={<CareerExplorer />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/tests" element={<PsychometricTest />} />
          <Route path="/resume" element={<ResumeBuilder />} />
          <Route path="/extracurriculars" element={<ExtraCurriculars />} />
          <Route path="/aichat" element={<Aichat />} />
          <Route path="/education" element={<EducationLevelSelector />} />
          <Route path="/explore-colleges" element={<ExploreColleges />} />
          <Route path="/explore-courses" element={<ExploreCourses />} />
          <Route path="/counselling" element={<Counselling />} />
          <Route path="/government-exams" element={<GovExams />} />
          <Route path="/extra-ex" element={<ExtraEx />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
