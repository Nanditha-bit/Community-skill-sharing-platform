import { FaBook, FaChartLine } from "react-icons/fa";

export default function Dashboard() {
  // Example data (can later be fetched from backend)
  const userName = "John Doe";
  const courses = [
    { title: "Web Development Basics", progress: 70 },
    { title: "Advanced React.js", progress: 45 },
    { title: "UI/UX Design Fundamentals", progress: 90 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-teal-600">
          Welcome back, {userName}!
        </h1>
        <p className="text-gray-600">Here’s your learning progress today.</p>
      </div>

      {/* Progress Overview */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Learning Progress */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center mb-4">
            <FaChartLine className="text-2xl text-teal-500 mr-2" />
            <h2 className="text-xl font-semibold">Your Progress</h2>
          </div>
          {courses.map((course, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-800 font-medium">{course.title}</span>
                <span className="text-gray-500 text-sm">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-teal-500 h-3 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enrolled Courses */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center mb-4">
            <FaBook className="text-2xl text-yellow-500 mr-2" />
            <h2 className="text-xl font-semibold">Enrolled Courses</h2>
          </div>
          <ul className="space-y-3">
            {courses.map((course, index) => (
              <li
                key={index}
                className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow transition"
              >
                {course.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
