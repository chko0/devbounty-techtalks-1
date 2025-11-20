import { useState } from "react";
import {
  Home,
  SquareLibrary,
  Target,
  Trophy,
  Users,
  Menu,
  X,
} from "lucide-react";
import NavLink from "../common/NavLink";
import Logo from "../common/Logo";
import { Link, useLocation } from "react-router-dom";
import Button from "../common/Button";

export default function NavBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Courses", path: "/courses", icon: SquareLibrary },
    { name: "About TechTalks", path: "/about", icon: Users },
    { name: "Champions", path: "/champions", icon: Trophy },
    { name: "DevBounty", path: "/devbounty", icon: Target },
  ];

  const currentPage = location.pathname.split("/")[1];

  return (
    <header className="sticky top-12 z-50 w-full bg-black/30 backdrop-blur-md shadow-md transition duration-300">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              href={link.path}
              icon={link.icon}
              isActive={currentPage === link.path.split("/")[1]}
              isMobile={false}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Start Learning button - desktop */}
        <div className="hidden md:block">
          <Button to="/courses" className="bg-blue-600">
            Start Learning
          </Button>
        </div>

        {/* Hamburger button - mobile */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md w-full px-4 py-4 transition-transform duration-300 ease-in-out">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                href={link.path}
                icon={link.icon}
                isActive={currentPage === link.path.split("/")[1]}
                isMobile={true}
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {link.name}
              </NavLink>
            ))}
            <Button
              to="/courses"
              className="bg-blue-600 mt-2 w-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              Start Learning
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
