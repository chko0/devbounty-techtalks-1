import GradientText from "../components/common/GradientText";
import SectionSubtitle from "../components/common/SectionSubtitle";
import SectionTitle from "../components/common/SectionTitle";
import SEO from "../components/common/SEO";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | Techtalks"
        description="Discover the mission behind TechTalks — a programming platform built to empower developers in the Mena region and beyond through hands-on courses, real projects, and career guidance."
        keywords="techtalks,programming in lebanon,lebanon,software engineer,programming courses,coding bootcamp,web development,software engineering,tech career,learn coding,programming skills,developer training,tech education,coding mentorship"
        category="education"
        classification="Education, Technology, Programming"
      />

      <div className="text-center max-w-4xl mx-auto mb-20">
        <SectionTitle className="mb-4 lg:text-6xl">
          From Devs to <GradientText>Devs</GradientText>
        </SectionTitle>
        <SectionSubtitle className="mb-6">
          Techtalks is here to cut through the noise and guide developers with
          clarity, not clutter.
        </SectionSubtitle>
      </div>
    </>
  );
}
