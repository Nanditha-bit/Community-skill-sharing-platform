export default function Teach() {
  return (
    <div className="min-h-[80vh] bg-gray-50 flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        📚 Start Teaching
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl text-center">
        Share your expertise with the community by hosting interactive workshops.
        Inspire learners and grow your own network while making an impact.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
        Host a Workshop
      </button>
    </div>
  );
}
