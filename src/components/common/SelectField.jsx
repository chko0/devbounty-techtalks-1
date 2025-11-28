import { ChevronDown } from "lucide-react";

export default function SelectField({
  label,
  value,
  onChange,
  options = [],
  className = "",
}) {
  return (
    <div className={`w-full relative ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-200 mb-2 tracking-wide">
          {label}
        </label>
      )}

      <div className="relative">
        {/* Caret Icon */}
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-1" />

        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 pr-10 rounded-lg appearance-none bg-gray-800/60 border border-gray-700/70 text-gray-100
            shadow-inner backdrop-blur-sm transition-all duration-200 hover:border-gray-600 focus:border-cyan-400
            focus:shadow-[0_0_12px_rgba(34,211,238,0.35)] focus:outline-none"
        >
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              className="bg-gray-900 text-gray-200 py-2"
            >
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
