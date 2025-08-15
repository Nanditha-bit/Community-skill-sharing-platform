function Tag({ children }) {
  return <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 text-sm">{children}</span>;
}
export default function SkillCard() {
  return (
    <div className="p-6 rounded-xl bg-white shadow-card border border-gray-100">
      <div className="flex items-start justify-between">
        <h3 className="text-2xl font-semibold">Python Programming Basics</h3>
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100">beginner</span>
      </div>

      <p className="mt-2 text-gray-600">
        Learn the fundamentals of Python programming language
      </p>

      <div className="mt-4 text-sm text-gray-700 flex items-center gap-2">
        <span>⭐ Instructor: Test User 105526</span>
        <span className="ml-auto text-green-600 font-semibold text-lg">$25/hr</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Tag>python</Tag><Tag>programming</Tag><Tag>beginner</Tag>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button className="col-span-1 sm:col-span-3 rounded-md bg-gray-900 text-white py-3 font-medium hover:bg-black">
          $  Book 1-Hour Session ($20)
        </button>
        <button className="rounded-md border border-gray-200 py-2.5 hover:bg-gray-50">2 Hours ($35)</button>
        <button className="rounded-md border border-gray-200 py-2.5 hover:bg-gray-50">Half Day ($60)</button>
      </div>
    </div>
  );
}
