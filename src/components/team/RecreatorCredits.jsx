import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import GradientText from "../common/GradientText";
import chadi from "../../assets/profile/chadi_kouzayha.webp";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RecreatorCredit() {
  const rotatingTexts = [
    "Aspiring Front-End Developer",
    "React.js & JavaScript Enthusiast",
    "CS Student @ CNAM Tripoli",
    "Problem-Solver & Team Player",
    "Hands-On Project Experience",
    "Eager to Collaborate",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Link
        to="https://www.linkedin.com/in/chadikouzayha"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-start gap-0.5 bg-gray-900/80 hover:bg-gray-900/95 backdrop-blur-sm rounded-full pr-4 pl-2 py-1.5 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
        aria-label="Recreated by Chadi Kouzayha - LinkedIn"
      >
        <div className="flex items-center gap-2.5">
          <img
            src={chadi}
            alt="Chadi Kouzayha"
            className="w-8 h-8 rounded-full border-2 border-cyan-400 group-hover:border-purple-400 transition-colors duration-300"
            loading="lazy"
          />

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm text-gray-200 group-hover:text-white font-normal whitespace-nowrap mb-0.25">
                Recreated by{" "}
                <GradientText className="font-bold inline">
                  Chadi Kouzayha
                </GradientText>
              </span>
            </div>
            <div className="h-4 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.5 }}
                  className="text-[0.7rem] text-gray-400 absolute top-0 left-0 leading-tight whitespace-nowrap"
                >
                  {rotatingTexts[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <Linkedin className="w-4 h-4 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
        </div>
      </Link>
    </div>
  );
}
