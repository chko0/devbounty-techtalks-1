import { useRef, useLayoutEffect } from "react";
import clsx from "clsx";

export default function Tooltip({
  children,
  content,
  position = "top",
  className = "",
}) {
  const tooltipRef = useRef(null);

  useLayoutEffect(() => {
    const tooltip = tooltipRef.current;
    if (!tooltip) return;

    // Reset previous shifts so measurement is accurate
    tooltip.style.transform = "";
    tooltip.style.left = "";
    tooltip.style.top = "";

    const rect = tooltip.getBoundingClientRect();

    // How far the tooltip should stay away from the edges
    const edgeMargin = 16; // visually cleaner
    const smoothOffset = 6; // extra breathing space

    let shiftX = 0;
    let shiftY = 0;

    // ---- Horizontal Overflow ----
    if (rect.left < edgeMargin) {
      // shift right
      shiftX = edgeMargin - rect.left + smoothOffset;
    }

    if (rect.right > window.innerWidth - edgeMargin) {
      // shift left
      shiftX = -(rect.right - (window.innerWidth - edgeMargin)) - smoothOffset;
    }

    // ---- Vertical Overflow ----
    if (rect.top < edgeMargin) {
      // shift down
      shiftY = edgeMargin - rect.top + smoothOffset;
    }

    if (rect.bottom > window.innerHeight - edgeMargin) {
      // shift up
      shiftY =
        -(rect.bottom - (window.innerHeight - edgeMargin)) - smoothOffset;
    }

    if (shiftX !== 0 || shiftY !== 0) {
      tooltip.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
    }
  });

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
        ref={tooltipRef}
        className={clsx(
          "absolute z-50 max-w-xs px-3 py-2 text-sm text-white bg-gray-900 border border-gray-700 rounded-lg shadow-lg whitespace-nowrap",
          "opacity-0 translate-y-1 transition-all duration-300 ease-out pointer-events-none",
          "group-hover:opacity-100 group-focus:opacity-100 group-hover:translate-y-0 group-focus:translate-y-0",
          positionClasses[position],
          className
        )}
      >
        {content}
      </div>
    </div>
  );
}
