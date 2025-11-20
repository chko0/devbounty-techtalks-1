import { SquareLibrary, Users } from "lucide-react";
import Button from "../common/Button";
import GradientText from "../common/GradientText";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient wash */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/20 via-transparent to-purple-600/20" />
      </div>

      {/* Decorative horizontal glow lines */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <span className="absolute inset-x-0 top-[28%] h-[1px] bg-gradient-to-l from-transparent via-cyan-300 to-transparent" />
        <span className="absolute inset-x-0 bottom-[28%] h-[1px] bg-gradient-to-l from-transparent via-purple-300 to-transparent" />
      </div>

      {/* Content goes here */}
      <div className="z-40">
        <div className="space-y-6">
          <p className="tracking-widest text-sm text-cyan-400 font-medium">
            BUILT BY DEVS, FOR DEVS
          </p>
          <h1 className="text-7xl font-bold text-white">
            Lebanon's <GradientText>Biggest Tech Community</GradientText>
          </h1>
          <p className="text-xl">
            Code smarter, not harder → with the right path and the right people.
          </p>
          <div className="flex gap-4 pt-5">
            <Button
              to="/courses"
              trailingIcon={true}
              icon={SquareLibrary}
              className="px-8 py-4 rounded-lg text-lg text-white bg-cyan-500 hover:bg-cyan-600 transition-all transform hover:scale-105 duration-400"
            >
              Explore Courses
            </Button>
            <Button
              to="https://chat.whatsapp.com/Ige7sFb3m1LFqGgQwi3FV7"
              icon={Users}
              className="px-8 py-4 rounded-lg text-lg text-purple-400 border-3 bg-transparent border-purple-400 hover:bg-purple-400 hover:text-white transition-all transform hover:scale-105 duration-400"
            >
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
