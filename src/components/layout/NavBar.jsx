import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Target, Trophy, Users, Menu, X, BookOpen } from "lucide-react";
import Logo from "../common/Logo";
import Button from "../common/Button";

function NavLink({ href, icon: Icon, children, isActive, isMobile, onClick }) {
  return (
    <Link
      to={href}
      key={href}
      onClick={onClick}
      className={`relative inline-flex items-center gap-1 font-semibold transition-colors text-sm ${
        isActive ? "text-[#00E5FF]" : "text-white hover:text-[#00E5FF]"
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

export default function NavBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Courses", path: "/courses", icon: BookOpen },
    { name: "About TechTalks", path: "/about", icon: Users },
    { name: "Champions", path: "/champions", icon: Trophy },
    { name: "DevBounty", path: "/devbounty", icon: Target },
  ];

  const currentPage = location.pathname.split("/")[1];

  return (
    <header className="fixed top-12 z-50 w-full bg-black/30 backdrop-blur-md shadow-md transition duration-300">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 pt-4 pb-2">
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
          <Button
            to="/courses"
            className="bg-blue-500 rounded-lg hover:bg-blue-700 text-md px-4 py-2 font-semibold text-sm"
          >
            Start Learning
          </Button>
        </div>

        {/* Hamburger button - mobile */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
          aria-expanded={isOpen}
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
      <div
        className={`md:hidden absolute left-0 top-full w-full bg-black/80 z-40
          backdrop-blur-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out
        ${
          isOpen
            ? "opacity-100 max-h-96 translate-y-0"
            : "opacity-0 max-h-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-4 px-8 py-4 ">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              href={link.path}
              icon={link.icon}
              isActive={currentPage === link.path.split("/")[1]}
              isMobile={true}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          <Button
            to="/courses"
            className="bg-blue-500 hover:bg-blue-700 text-md mb-1 px-4 py-2 w-full justify-center"
            onClick={() => setIsOpen(false)}
          >
            Start Learning
          </Button>
        </nav>
      </div>
    </header>
  );
}
