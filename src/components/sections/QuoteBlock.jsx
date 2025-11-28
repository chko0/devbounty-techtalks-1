import FadeUp from "../common/FadeUp";

export default function QuoteBlock() {
  return (
    <section className="bg-black px-6 py-18 mx-auto">
      <FadeUp delay={0.2}>
        <div className="relative max-w-4xl mx-auto border border-purple-500/25 rounded-xl p-12 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="relative w-full h-full">
            {/* Top-left quote */}
            <span className="absolute -top-12 -left-8 text-8xl font-serif text-white opacity-5 pointer-events-none select-none">
              &ldquo;
            </span>

            {/* Bottom-right quote */}
            <span className="absolute -bottom-12 -right-8 text-8xl font-serif text-white opacity-5 pointer-events-none select-none">
              &rdquo;
            </span>
          </div>
          <div className="text-center">
            <p className="text-2xl lg:text-3xl italic text-white font-bold leading-relaxed mb-4">
              We've been stuck before too. That's why we built this.
            </p>

            <p className="text-lg text-gray-200 leading-relaxed">
              Every challenge we faced inspired TechTalks. We're not just
              teaching code, we're building a movement.
            </p>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
