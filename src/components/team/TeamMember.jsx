import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import Badge from "../common/Badge";

export default function TeamMember({ teamMember }) {
  return (
    <div
      key={teamMember.name}
      className="relative overflow-hidden rounded-xl border border-gray-800 transition-transform duration-300 transform hover:scale-105 cursor-pointer"
    >
      <Link to={teamMember.link}>
        {/* Image + overlay */}
        <div className="relative h-72 bg-gradient-to-br from-purple-400 to-cyan-400 overflow-hidden">
          <img
            alt={teamMember.name}
            src={`/src/assets/team/${teamMember.image}.webp`}
            className="w-full h-full object-cover"
          />

          {/* Overlay with Badge */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <Badge icon={Linkedin} className="bg-blue-500 px-3 py-1 text-sm">
              View Profile
            </Badge>
          </div>
        </div>

        {/* Name & Role */}
        <div className="p-5 text-center bg-gray-900/50">
          <div className="text-xl font-bold text-white mb-2">
            {teamMember.name}
          </div>
          <p className="text-sm font-semibold text-purple-400 mb-8">
            {teamMember.role}
          </p>
        </div>
      </Link>
    </div>
  );
}
