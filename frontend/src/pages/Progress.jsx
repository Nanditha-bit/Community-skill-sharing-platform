export default function Progress() {
  return (
    <div className="min-h-[80vh] bg-gray-50 flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        📈 Your Progress
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl text-center">
        Track your learning journey and see how far you’ve come. Your skills
        and completed workshops will appear here.
      </p>
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
        <p className="text-gray-500">No progress yet. Start by joining a workshop!</p>
      </div>
    </div>
  );
}
