import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirect to dashboard regardless of input
    navigate("/dashboard");
    setLoading(false);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-tr from-teal-600 via-gray-700 to-teal-800">
      {loading && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/60">
          <img
            src="/magic-loader.gif"
            alt="Loading..."
            className="w-32 h-32 animate-bounce"
          />
          <p className="mt-6 text-lg font-bold tracking-wider text-white animate-pulse">
            Loading...
          </p>
        </div>
      )}

      <div className="relative z-10 w-full max-w-md p-10 mx-4 border shadow-2xl bg-white/20 backdrop-blur-md border-white/30 rounded-3xl">
        <h2 className="mb-4 text-3xl font-extrabold text-center text-white drop-shadow-lg">
          Welcome Back
        </h2>
        <p className="mb-8 text-center text-white/80">
          Enter your credentials to access your portal
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium text-white/90">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 text-white transition border rounded-xl border-white/30 bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-white/90">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-5 py-3 text-white transition border rounded-xl border-white/30 bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 font-bold text-white transition-transform duration-300 shadow-lg bg-gradient-to-r from-teal-500 via-teal-600 to-gray-700 rounded-xl hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-white/80">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-white underline transition hover:text-teal-300"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
