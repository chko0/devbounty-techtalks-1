import { Search, X } from "lucide-react";

export default function SearchInput({
  icon: Icon = Search,
  placeholder = "Search...",
  value,
  onChange,
  className = "",
}) {
  const handleClear = () => {
    onChange("");
  };

  return (
    <div className={`relative ${className}`}>
      {/* Left icon */}
      {Icon && (
        <Icon
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full py-4 
          bg-gray-900/50 
          border border-gray-700 
          rounded-xl
          text-white 
          placeholder-gray-400
          pr-12
          pl-12
          focus:outline-none 
          focus:border-cyan-500 
          focus:ring-2 
          focus:ring-cyan-500/20
          transition-all duration-200
        "
      />

      {/* Clear button */}
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          aria-label="Clear input"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
