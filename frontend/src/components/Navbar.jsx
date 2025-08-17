import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-brand-600">
        SkillShare
      </Link>

      {/* Nav Links */}
      <div className="flex gap-6">
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "text-brand-600 font-semibold" : "text-gray-700 hover:text-brand-600"
          }
        >
          Browse Skills
        </NavLink>

        <NavLink
          to="/workshops"
          className={({ isActive }) =>
            isActive ? "text-brand-600 font-semibold" : "text-gray-700 hover:text-brand-600"
          }
        >
          Workshops
        </NavLink>
      </div>

      {/* Get Started Button */}
      <Link
        to="/get-started"
        className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
      >
        Get Started
      </Link>
    </nav>
  );
}
