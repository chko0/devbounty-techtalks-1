import { Home, SquareLibrary, Target, Trophy, Users } from "lucide-react";
import NavLink from "../common/NavLink";
import Logo from "../common/Logo";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Courses", path: "/courses", icon: SquareLibrary },
    { name: "About TechTalks", path: "/about", icon: Users },
    { name: "Champions", path: "/champions", icon: Trophy },
    { name: "DevBounty", path: "/devbounty", icon: Target },
  ];

  const currentPage = location.pathname.split("/")[1];

  return (
    <div className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md px-4 py-3 flex items-center justify-between">
      <Link to="/">
        <Logo />
      </Link>
      <nav className="flex items-center gap-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            href={link.path}
            icon={link.icon}
            isActive={currentPage === link.path.split("/")[1]}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
