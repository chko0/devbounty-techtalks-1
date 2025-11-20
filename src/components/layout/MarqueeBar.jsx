import MarqueeItem from "../marquee/MarqueeItem";
import { marqueeItems } from "../../data/marqueeItems";

export default function MarqueeBar() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Gradient background only inside the marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700/20 via-cyan-500/20 to-blue-600/20"></div>

        <div className="relative flex items-center gap-8 whitespace-nowrap marquee-track py-3 text-white">
          {items.map((item, i) => {
            return (
              <>
                <div className="flex items-center" key={i}>
                  <MarqueeItem {...item} />
                </div>
                <div className="flex items-center">
                  <div className="inline w-px h-4 bg-gray-600 mx-4"></div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
