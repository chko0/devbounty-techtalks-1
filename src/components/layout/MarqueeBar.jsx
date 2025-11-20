import React from "react";
import MarqueeItem from "../marquee/MarqueeItem";
import { marqueeItems } from "../../data/marqueeItems";

export default function MarqueeBar() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="sticky top-0 z-50 w-full overflow-hidden bg-black">
      {/* Background */}
      <div className="fixed inset-x-0 top-0 h-13 bg-gradient-to-r from-purple-700/20 via-cyan-500/20 to-blue-600/20 z-40 pointer-events-none" />

      {/* Marquee content */}
      <div className="relative z-50 flex items-center gap-8 whitespace-nowrap marquee-track py-3 text-white">
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <MarqueeItem {...item} />
            <div className="inline w-px h-4 bg-gray-600 mx-4"></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
