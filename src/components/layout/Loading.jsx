import { motion } from "framer-motion";
import FadeUp from "../common/FadeUp";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#020618] flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        {/* Loading Circle with glow */}
        <div className="relative w-30 h-30 animate-pulse">
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 blur-xl" />
          {/* Outer rotating half-circle */}
          <div className="absolute inset-0">
            <motion.div
              className="w-full h-full border-t-2 border-b-2 border-blue-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
          {/* Inner rotating half-circle */}
          <div className="absolute inset-3">
            <motion.div
              className="w-full h-full border-t-2 border-b-2 border-green-400 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </div>
        </div>

        {/* Title */}
        <FadeUp>
          <h1 className="text-3xl text-white font-bold mt-8">TechTalks</h1>
        </FadeUp>

        {/* Subtitle */}
        <FadeUp delay={0.15}>
          <p className="text-gray-400 text-center text-xl">
            Loading your learning experience...
          </p>
        </FadeUp>

        {/* Loading dots */}
        <FadeUp delay={0.2}>
          <div className="flex gap-4 mt-2">
            {["#0ea5e9", "#1e3a8a", "#22c55e"].map((color, i) => (
              <motion.div
                key={i}
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color }}
                animate={{ y: ["0%", "-50%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.6,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
