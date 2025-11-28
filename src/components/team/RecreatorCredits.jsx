import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import GradientText from "../common/GradientText";

export default function RecreatorCredit() {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Link
        to="https://www.linkedin.com/in/chadikouzayha"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-gray-900/80 hover:bg-gray-900/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
        aria-label="Recreated by Chadi Kouzayha"
      >
        <img
          src="/src/assets/profile/chadi_kouzayha.webp"
          alt="Your Name"
          className="w-6 h-6 rounded-full border-2 border-cyan-400 group-hover:border-purple-400 transition-colors duration-300"
        />
        <span className="text-sm text-gray-200 group-hover:text-white font-normal">
          Recreated by{" "}
          <GradientText className="font-bold ml-0.5">
            Chadi Kouzayha
          </GradientText>
        </span>
        <Linkedin className="w-4 h-4 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300 ml-1" />
      </Link>
    </div>
  );
}
