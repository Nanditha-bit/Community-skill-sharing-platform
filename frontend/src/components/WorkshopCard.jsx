function Badge({ children }) {
  return <span className="px-2 py-1 text-sm rounded-full bg-gray-100">{children}</span>;
}
function Icon({ d }) { return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d={d} stroke="currentColor" strokeWidth="1.5"/></svg>; }

export default function WorkshopCard() {
  return (
    <div className="p-6 rounded-xl bg-white shadow-card border border-gray-100 w-full max-w-md">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold">Advanced Python Workshop</h3>
        <Badge>$75</Badge>
      </div>
      <p className="mt-2 text-gray-600">
        Deep dive into advanced Python concepts and best practices
      </p>

      <div className="mt-5 space-y-3 text-gray-700">
        <div className="flex items-center gap-3">
          <Icon d="M8 7h8M5 12h14M6 3h12a1 1 0 0 1 1 1v16l-4-3H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
          <span>22/8/2025</span>
        </div>
        <div className="flex items-center gap-3">
          <Icon d="M12 7v6l4 2" />
          <span>4 hours</span>
        </div>
        <div className="flex items-center gap-3">
          <Icon d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4 0-7 2-7 4.5V20h14v-1.5C19 16 16 14 12 14Z" />
          <span>0/10 participants</span>
        </div>
      </div>

      <button className="mt-6 w-full rounded-md bg-gray-900 text-white py-3 font-medium hover:bg-black">
        Learn More
      </button>
    </div>
  );
}
