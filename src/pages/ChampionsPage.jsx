import GradientText from "../components/common/GradientText";
import SectionSubtitle from "../components/common/SectionSubtitle";
import SectionTitle from "../components/common/SectionTitle";
import SEO from "../components/common/SEO";
import { Trophy } from "lucide-react";

export default function ChampionsPage() {
  return (
    <>
      <SEO
        title="Champions | TechTalks - Successful Intern Projects & Achievements | TechTalks"
        description="Meet our TechTalks Champions - former interns who built powerful, real-world projects during their internships. Discover their innovative solutions and inspiring success stories."
        keywords="tech champions, successful interns, real projects, internship success, powerful applications, tech achievements, Lebanon developers, project showcase"
        category="education"
        classification="Education, Technology, Programming"
      />

      <div className="text-center max-w-4xl mx-auto mb-20">
        <SectionTitle
          icon={Trophy}
          className="mb-4 lg:text-6xl"
          iconClassName="text-yellow-400"
        >
          Our <GradientText>Champions</GradientText>
        </SectionTitle>
        <SectionSubtitle className="mb-6">
          Meet the exceptional interns who are building the future of technology
          with TechTalks!
        </SectionSubtitle>
      </div>
    </>
  );
}
