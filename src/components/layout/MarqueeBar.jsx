import React from "react";
import { marqueeItems } from "../../data/marqueeItems";

export default function MarqueeBar() {
  // duplicating items for the looping effect
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="sticky top-0 z-60 w-full overflow-hidden bg-black">
      {/* Background */}
      <div className="fixed inset-x-0 top-0 h-12 bg-gradient-to-r from-purple-700/20 via-cyan-500/20 to-blue-600/20 z-40 pointer-events-none" />

      {/* Marquee content */}
      <div className="relative z-50 flex items-center whitespace-nowrap overflow-hidden py-1.5 text-white border-b border-gray-800">
        <div className="marquee-track flex items-center gap-8">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              {item}
              <div className="inline w-px h-4 bg-gray-600 mx-4"></div>
            </React.Fragment>
          ))}
        </div>

        <div
          className="marquee-track flex items-center gap-8 ml-8"
          aria-hidden="true"
        >
          {items.map((item, i) => (
            <React.Fragment key={`dup-${i}`}>
              {item}
              <div className="inline w-px h-4 bg-gray-600 mx-4"></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
