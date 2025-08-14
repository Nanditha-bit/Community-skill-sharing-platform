import { Link } from "react-router-dom";
import { FaHome, FaSignInAlt, FaTachometerAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-teal-500 to-blue-600 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-white text-2xl font-extrabold tracking-wide drop-shadow-lg">
          SkillShare
        </h1>

        <div className="flex space-x-6">
          <Link to="/" className="flex items-center space-x-1 text-white hover:text-yellow-200 transition duration-300">
            <FaHome /> <span>Home</span>
          </Link>
          <Link to="/login" className="flex items-center space-x-1 text-white hover:text-yellow-200 transition duration-300">
            <FaSignInAlt /> <span>Login</span>
          </Link>
          <Link to="/dashboard" className="flex items-center space-x-1 text-white hover:text-yellow-200 transition duration-300">
            <FaTachometerAlt /> <span>Dashboard</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
