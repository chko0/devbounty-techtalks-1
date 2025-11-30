import { BookOpen, Code, Coffee, Play, Users } from "lucide-react";
import Button from "../common/Button";
import GradientText from "../common/GradientText";
import HeroStats from "./HeroStats";
import HeroCodeBlock from "./HeroCodeBlock";
import GlowLines from "../common/GlowLines";
import FadeUp from "../common/FadeUp";
import SectionSubtitle from "../common/SectionSubtitle";
import SectionTitle from "../common/SectionTitle";
import clsx from "clsx";

export function HeroCTA({ className = "" }) {
  return (
    <FadeUp delay={0.4}>
      <div className="flex gap-4 pt-5 flex-col sm:flex-row">
        <Button
          to="/courses"
          trailingIcon={true}
          icon={BookOpen}
          className={clsx(
            "px-8 py-4 rounded-lg text-lg text-white",
            "bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition-all transform hover:scale-105 duration-400",
            "hover:shadow-lg hover:shadow-cyan-500/25 ",
            className
          )}
        >
          Explore Courses
        </Button>
        <Button
          to="https://chat.whatsapp.com/Ige7sFb3m1LFqGgQwi3FV7"
          icon={Users}
          className="px-8 py-4 rounded-lg text-lg text-purple-400 border-2 bg-transparent border-purple-400 hover:bg-purple-400 hover:text-white transition-all transform hover:scale-105 duration-400"
        >
          Join Community
        </Button>
      </div>
    </FadeUp>
  );
}

export default function Hero() {
  return (
    <section className="relative z-0 overflow-hidden min-h-[calc(100vh-9rem)] lg:px-10">
      <div className="absolute inset-0 overflow-hidden z-[0]">
        <GlowLines />
      </div>

      {/* Content goes here */}
      <div className="relative z-10 grid gap-12 items-center lg:grid-cols-2 px-6 py-6 mx-auto">
        <div className="space-y-8">
          <p className="tracking-widest text-sm text-cyan-400 font-medium">
            BUILT BY DEVS, FOR DEVS
          </p>

          <SectionTitle className="text-left">
            Lebanon's <GradientText>Biggest Tech Community</GradientText>
          </SectionTitle>

          <SectionSubtitle>
            Code smarter, not harder → with the right path and the right people.
          </SectionSubtitle>

          <HeroCTA />

          <div className="pt-8">
            <p className="text-sm mb-4 text-gray-400">
              Trusted by 5,000+ developers in Lebanon
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-6">
                <HeroStats
                  text="Coffee"
                  icon={Coffee}
                  gradient="from-green-500 to-teal-500"
                />
                <HeroStats
                  text="Code"
                  icon={Code}
                  gradient="from-orange-500 to-red-500"
                />
                <HeroStats
                  text="Enjoy"
                  icon={Play}
                  gradient="from-blue-500 to-purple-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <HeroCodeBlock />
        </div>
      </div>
    </section>
  );
}
