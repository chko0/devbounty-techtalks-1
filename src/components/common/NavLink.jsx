import { Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavLink({
  href,
  children,
  icon: Icon = Target,
  isActive = false,
}) {
  return (
    <Link
      to={href}
      key={href}
      className={`relative inline-flex items-center gap-1 font-semibold transition-colors text-sm ${
        isActive ? "text-cyan-300" : "text-white hover:text-cyan-300"
      }`}
    >
      {Icon && <Icon className="w-3 h-3" />}
      {children}

      {/* Active underline */}
      {isActive && (
        <div className="absolute -bottom-1 left-0 h-[2px] w-full bg-cyan-300 rounded-sm"></div>
      )}
    </Link>
  );
}
