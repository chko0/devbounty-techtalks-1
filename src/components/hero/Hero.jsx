import { BookOpen, Code, Coffee, Play, Users } from "lucide-react";
import Button from "../common/Button";
import GradientText from "../common/GradientText";
import HeroStats from "./HeroStats";
import HeroCodeBlock from "./HeroCodeBlock";

export default function Hero() {
  return (
    <section className="relative z-0 min-h-screen bg-black overflow-hidden pt-18">
      <div className="absolute inset-0 overflow-hidden z-[0]">
        {/* Background gradient wash */}
        <div className="pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/20 via-transparent to-purple-600/20" />
        </div>

        {/* Decorative horizontal glow lines */}
        <div className="pointer-events-none opacity-10">
          <span className="absolute inset-x-0 top-[28%] h-[1px] bg-gradient-to-l from-transparent via-cyan-300 to-transparent" />
          <span className="absolute inset-x-0 bottom-[28%] h-[1px] bg-gradient-to-l from-transparent via-purple-300 to-transparent" />
        </div>
      </div>
      {/* Content goes here */}
      <div className="relative z-10 grid gap-12 items-center lg:grid-cols-2 px-6 py-12">
        <div className="space-y-8">
          <p className="tracking-widest text-sm text-cyan-400 font-medium">
            BUILT BY DEVS, FOR DEVS
          </p>
          <h1 className="text-5xl lg:text-7xl text-white font-bold leading-tight">
            Lebanon's <GradientText>Biggest Tech Community</GradientText>
          </h1>
          <p className="text-xl text-gray-300">
            Code smarter, not harder → with the right path and the right people.
          </p>
          <div className="flex gap-4 pt-5 flex-col sm:flex-row">
            <Button
              to="/courses"
              trailingIcon={true}
              icon={BookOpen}
              className="px-8 py-4 rounded-lg text-lg text-white
                bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition-all transform hover:scale-105 duration-400
                hover:shadow-lg hover:shadow-cyan-500/25"
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
