import clsx from "clsx";

export default function Tooltip({
  children, // Trigger element
  content, // Tooltip content
  position = "top", // top, bottom, left, right
  className = "",
}) {
  // Position classes
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div className="relative group inline-block">
      {children}

      <div
        className={clsx(
          "absolute z-50 max-w-xs px-3 py-2 text-sm text-white bg-gray-900 border border-gray-700 rounded-lg shadow-lg whitespace-nowrap",
          "opacity-0 translate-y-1 transition-all duration-300 ease-out pointer-events-none",
          "group-hover:opacity-100 group-focus:opacity-100 group-hover:translate-y-0 group-focus:translate-y-0",
          positionClasses[position],
          className
        )}
        role="tooltip"
      >
        {content}
      </div>
    </div>
  );
}
