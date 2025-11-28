import { Rocket } from "lucide-react";
import Badge from "../components/common/Badge";
import GradientText from "../components/common/GradientText";
import IconText from "../components/common/IconText";
import SectionSubtitle from "../components/common/SectionSubtitle";
import SectionTitle from "../components/common/SectionTitle";
import SEO from "../components/common/SEO";

export default function InternshipsPage() {
  return (
    <>
      <SEO default />

      <div className="text-center max-w-4xl mx-auto mb-20">
        <Badge
          className="block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 rounded-full
        text-purple-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm mb-4"
        >
          <IconText icon={Rocket}>Launch Your Tech Career</IconText>
        </Badge>
        <SectionTitle className="mb-4 lg:text-6xl">
          TechTalks <GradientText>Internship Program</GradientText>
        </SectionTitle>
        <SectionSubtitle className="mb-6">
          Transform from beginner to professional developer through hands-on
          experience, mentorship, and real-world projects that matter.
        </SectionSubtitle>
      </div>
    </>
  );
}
