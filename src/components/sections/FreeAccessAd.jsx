import Badge from "../common/Badge";
import GradientText from "../common/GradientText";
import StatItem from "../common/StatItem";
import GradientWash from "../common/GradientWash";
import FadeUp from "../common/FadeUp";

export default function FreeAccessAd() {
  return (
    <section className="group relative min-h-screen bg-black overflow-hidden">
      <FadeUp delay={0.2}>
        <GradientWash />
        <div className="px-12 py-30 mx-auto max-w-4xl text-center">
          <Badge
            className="block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 rounded-full
        text-purple-300 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm mb-6"
          >
            100% Free Access
          </Badge>
          <div className="text-6xl font-bold text-white leading-tight mb-6">
            Exclusive <GradientText>Workshops</GradientText> &{" "}
            <GradientText>Webinars</GradientText>
          </div>
          <p className="text-2xl text-gray-200 leading-relaxed mb-12">
            We provide you with{" "}
            <GradientText className="font-semibold">
              free workshops and webinars
            </GradientText>{" "}
            delivered by{" "}
            <GradientText className="font-semibold">
              industry experts
            </GradientText>{" "}
            and{" "}
            <GradientText className="font-semibold">
              field professionals
            </GradientText>
            {". "}
            These sessions are designed to empower you with real-world
            knowledge, practical skills, and insider insights that will{" "}
            <GradientText className="font-bold">
              level up your career
            </GradientText>{" "}
            and accelerate your journey to becoming a professional developer.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <StatItem
              value="50+"
              label="Expert Sessions"
              gradient="from-purple-400 to-cyan-400"
            />

            <StatItem
              value="100%"
              label="Free Access"
              gradient="from-cyan-400 to-blue-400"
            />

            <StatItem
              value="Live"
              label="Interactive Learning"
              gradient="from-blue-400 to-purple-400"
            />
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
