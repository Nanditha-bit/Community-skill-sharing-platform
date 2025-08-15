import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold">
          <span className="text-brand-600">Skill</span><span className="text-blue-500">Share</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className="text-gray-600 hover:text-gray-900">Browse Skills</NavLink>
          <NavLink to="/" className="text-gray-600 hover:text-gray-900">Workshops</NavLink>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-3 py-2 text-sm rounded-md border border-gray-200 hover:bg-gray-50"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 text-sm rounded-md bg-gray-900 text-white hover:bg-black"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
