export default function StatItem({
  value,
  label,
  gradient = "from-purple-400 to-cyan-400",
}) {
  return (
    <div className="text-center">
      <div
        className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradient} mb-2`}
      >
        {value}
      </div>

      <div className="text-gray-300 text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
