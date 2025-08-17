import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Share Your Skills, Learn Together
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Connect with your community through workshops and 1:1 sessions
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <Link
          to="/get-started"
          className="px-6 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
        >
          Get Started
        </Link>

        <Link
          to="/skills"
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100"
        >
          Browse Skills
        </Link>

        <Link
          to="/workshops"
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100"
        >
          Workshops
        </Link>
      </div>
    </section>
  );
}
