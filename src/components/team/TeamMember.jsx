import { Linkedin } from "lucide-react";
import Badge from "../common/Badge";

export default function TeamMember({ teamMember }) {
  return (
    <div
      key={teamMember.name}
      className="relative overflow-hidden rounded-xl border border-gray-800 transition-transform duration-300 transform hover:scale-105 cursor-pointer group"
    >
      <a href={teamMember.link} target="_blank" rel="noopener noreferrer">
        {/* Image + overlay */}
        <div className="relative h-72 overflow-hidden">
          <img
            alt={teamMember.name}
            src={teamMember.image}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />

          {/* Purple/Cyan subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Subtle black gradient at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

          {/* Overlay with Badge */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <Badge
              icon={Linkedin}
              className="bg-blue-500 px-4 py-2 text-sm font-semibold transform scale-90 hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              View Profile
            </Badge>
          </div>
        </div>
        {/* Name & Role */}
        <div className="p-5 text-center bg-gray-900/50">
          <div className="text-xl font-bold text-white mb-2">
            {teamMember.name}
          </div>
          <p className="text-sm font-semibold text-purple-400 mb-4">
            {teamMember.role}
          </p>
        </div>
      </a>
    </div>
  );
}
