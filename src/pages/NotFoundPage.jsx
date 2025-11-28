import { TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import SEO from "../components/common/SEO";

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Techtalks"
        description="Oops! The page you're trying to access doesn't exist. Return home or contact our team for help navigating Techtalks."
      />

      <div className="relative flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        {/* Background glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-red-500/20 blur-[160px] rounded-full" />
        </div>

        {/* Icon */}
        <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl animate-pulse shadow-xl shadow-red-700/40">
          <TriangleAlert className="w-10 h-10 text-white" />
        </div>

        {/* Code */}
        <h1 className="relative z-10 text-8xl sm:text-9xl font-extrabold text-red-400 tracking-tight mt-6 drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="relative z-10 text-3xl sm:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="relative z-10 text-lg max-w-xl leading-relaxed text-gray-300 mb-8">
          Uh-oh! Looks like this page wandered off into the void. Don't worry -
          these things happen even to the best devs!
        </p>

        {/* Buttons */}
        <div className="relative z-10 flex items-center gap-4">
          <Button
            as={Link}
            to="/"
            className="px-6 py-3 rounded-xl text-lg font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400
                transition-all duration-300 hover:scale-[1.03] shadow-lg"
          >
            Go Home
          </Button>

          <Button
            as="a"
            href="https://api.whatsapp.com/send/?phone=96179051760"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-lg font-medium bg-gray-800/60 border border-gray-700
                hover:bg-gray-700/60 hover:border-gray-600 transition-all duration-300 hover:scale-[1.03]"
          >
            Contact Support
          </Button>
        </div>

        {/* Friendly footer message */}
        <p className="relative z-10 text-gray-500 text-sm mt-6">
          Error code:
          <span className="text-gray-400"> HTTP 404 - Lost in Cyberspace</span>
        </p>
      </div>
    </>
  );
}
