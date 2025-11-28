import {
  BookOpen,
  Briefcase,
  Dices,
  FileText,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Trophy,
  Users,
} from "lucide-react";
import IconText from "../common/IconText";
import Logo from "../common/Logo";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import clsx from "clsx";

function SocialButton({ href, icon: Icon, gradientClasses, label }) {
  return (
    <Button
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={clsx(
        "w-8 h-8 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:cursor-pointer text-white",
        gradientClasses
      )}
    >
      <Icon className="w-5.5 h-5.5" />
    </Button>
  );
}

function FooterOption({ to, icon: Icon, children }) {
  return (
    <Link to={to} className="flex items-center gap-2">
      <IconText
        icon={Icon}
        className="text-gray-400 hover:text-cyan-400 transition-colors"
      >
        {children}
      </IconText>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black-800 mt-auto">
      <div className="px-6 py-12 grid gap-12 grid-cols-1 md:grid-cols-4 border-t border-gray-800">
        {/* Logo */}
        <div>
          <Logo />
          <p className="text-sm text-gray-200 mt-6">
            We've been stuck too. That's why we built this.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h2 className="text-sm text-gray-100 font-semibold mb-4">Explore</h2>
          <div className="flex flex-col gap-2">
            <FooterOption icon={BookOpen} to="/courses">
              Courses
            </FooterOption>
            <FooterOption icon={Trophy} to="/champions">
              Champions
            </FooterOption>
            <FooterOption icon={Briefcase} to="/internships">
              Internships
            </FooterOption>
            <FooterOption icon={Dices} to="https://shop.techtalkslb.com">
              Card Game
            </FooterOption>
          </div>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-sm text-gray-100 font-semibold mb-4">Company</h2>
          <div className="flex flex-col gap-2">
            <FooterOption icon={Users} to="/about">
              About Techtalks
            </FooterOption>
            <FooterOption icon={Phone} to="/contact">
              Contact
            </FooterOption>
            <FooterOption icon={FileText} to="/terms">
              Terms & Conditions
            </FooterOption>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h2 className="text-sm text-gray-100 font-semibold mb-4">Connect</h2>
          <p className="text-sm text-gray-400 mb-4">
            Follow us and stay connected with the Techtalks community
          </p>
          <div className="flex gap-3">
            <SocialButton
              href="https://www.instagram.com/techtalks.lb/"
              icon={Instagram}
              gradientClasses="bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              label="Instagram"
            />
            <SocialButton
              href="https://www.linkedin.com/company/techtalks-lb/"
              icon={Linkedin}
              gradientClasses="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              label="LinkedIn"
            />
            <SocialButton
              href="mailto:techtalks.lb@gmail.com"
              icon={Mail}
              gradientClasses="bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
              label="Mail"
            />
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="text-xs flex flex-col md:flex-row justify-between items-center px-6 py-4 text-gray-300 border-t border-gray-800 mt-6">
        <p>© 2025 TechTalks. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="/terms" className="hover:text-cyan-400 transition-colors">
            Terms & Privacy
          </Link>
          <Link to="/contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
