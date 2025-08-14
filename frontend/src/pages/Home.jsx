import { Link } from "react-router-dom";
import { FaBookOpen, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Welcome to Community SkillShare
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Learn, teach, and grow with a vibrant community of skill-sharers from around the world.
          </p>
          <Link
            to="/login"
            className="mt-8 inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-teal-600 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 mb-12">
            Community SkillShare helps you learn, teach, and connect with like-minded people.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Learn Card */}
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <FaBookOpen className="text-5xl text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Learn</h3>
              <p className="text-gray-600">
                Access a variety of courses and tutorials from experts in different fields.
              </p>
            </div>

            {/* Teach Card */}
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <FaChalkboardTeacher className="text-5xl text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Teach</h3>
              <p className="text-gray-600">
                Share your expertise and help others grow while building your profile.
              </p>
            </div>

            {/* Connect Card */}
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <FaUsers className="text-5xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-600">
                Join a network of learners and educators to collaborate and exchange ideas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
