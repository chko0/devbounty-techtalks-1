import GradientText from "../components/common/GradientText";
import SectionSubtitle from "../components/common/SectionSubtitle";
import SectionTitle from "../components/common/SectionTitle";
import SEO from "../components/common/SEO";

export default function DevBountyPage() {
  return (
    <>
      <SEO
        title="DevBounty | TechTalks - Weekly Coding Challenges"
        description="Complete weekly coding challenges and earn bounties. Submit your solutions and compete with developers across Lebanon."
        keywords="devbounty, coding challenges, web development, bounties, techtalks, lebanon developers"
        category="education"
        classification="Education, Technology, Programming"
      />

      <div className="text-center max-w-4xl mx-auto mb-20">
        <SectionTitle className="mb-4 lg:text-6xl">
          <GradientText>DEV</GradientText>BOUNTY
        </SectionTitle>
        <SectionSubtitle className="mb-6">
          Complete weekly coding challenges. Submit your solution. Claim your
          bounty.
        </SectionSubtitle>
      </div>
    </>
  );
}
