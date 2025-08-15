export default function FeaturePill({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white shadow-card border border-gray-100">
      <span className="text-xl">{icon}</span>
      <span className="font-medium text-gray-700">{label}</span>
    </div>
  );
}
