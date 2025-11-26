export default function SelectField({
  label,
  value,
  onChange,
  options = [],
  className = "",
}) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-200 mb-2 tracking-wide">
          {label}
        </label>
      )}

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 shadow-inner backdrop-blur-sm transition-all duration-200
          focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.4)]"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="text-gray-900">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
