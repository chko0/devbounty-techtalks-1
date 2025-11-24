import { Users } from "lucide-react";
import GradientText from "../common/GradientText";
import IconText from "../common/IconText";
import TeamMember from "../team/TeamMember";
import { team } from "../../data/team";

export default function MeetTheTeam() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl text-center mb-20">
        <IconText icon={Users} iconClassName="text-cyan-400 w-8 h-8 mr-3">
          <h1 className="text-6xl text-white font-bold">
            Meet Our <GradientText>Team</GradientText>
          </h1>
        </IconText>
        <p className="text-2xl text-gray-300 mt-6 leading-relaxed">
          The passionate individuals behind TechTalks, dedicated to transforming
          tech education in Lebanon.
        </p>
      </div>

      <div className="max-w-7xl mx-auto gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {team.map((teamMember) => (
          <TeamMember key={teamMember.name} teamMember={teamMember} />
        ))}
      </div>
    </section>
  );
}
