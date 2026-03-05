import { useState } from "react";
import { login, register } from "../api/api";

function Auth({ setToken }) {
  const [showLogin, setShowLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await login({ email, password });
    setToken(res.data.access_token);
  };

  const handleSignup = async () => {
    await register({ email, password });
    alert("User created successfully");
    setShowLogin(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md transform transition duration-500 hover:scale-[1.02]">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {showLogin ? "Welcome Back 👋" : "Create Account 🚀"}
        </h2>

        {/* Inputs */}
        <div className="space-y-4">
          <input
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            onChange={(e) => setPassword(e.target.value)}
          />

          {showLogin ? (
            <button
              onClick={handleLogin}
              className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 active:scale-95 transition"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleSignup}
              className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 active:scale-95 transition"
            >
              Create Account
            </button>
          )}
        </div>

        {/* Toggle */}
        <p className="text-center text-sm text-gray-500 mt-6">
          {showLogin ? (
            <>
              Don't have an account?{" "}
              <span
                className="text-indigo-600 cursor-pointer font-semibold hover:underline"
                onClick={() => setShowLogin(false)}
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-indigo-600 cursor-pointer font-semibold hover:underline"
                onClick={() => setShowLogin(true)}
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default Auth;
