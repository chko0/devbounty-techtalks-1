import { Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavLink({
  href,
  icon: Icon,
  children,
  isActive,
  isMobile,
  onClick,
}) {
  return (
    <Link
      to={href}
      key={href}
      onClick={onClick}
      className={`relative inline-flex items-center gap-1 font-semibold transition-colors text-sm ${
        isActive ? "text-cyan-300" : "text-white hover:text-cyan-300"
      }`}
    >
      {Icon && <Icon className="w-3 h-3" />}
      {children}

      {/* Active underline */}
      {isActive && !isMobile && (
        <span
          className={`absolute bottom-[-4px] left-0 h-[2px] w-full bg-cyan-400`}
        ></span>
      )}
    </Link>
  );
}
