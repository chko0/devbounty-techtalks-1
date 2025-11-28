import GradientText from "../components/common/GradientText";
import SectionSubtitle from "../components/common/SectionSubtitle";
import SectionTitle from "../components/common/SectionTitle";
import SEO from "../components/common/SEO";

export default function ContactPage() {
  return (
    <>
      <SEO default />

      <div className="text-center max-w-4xl mx-auto mb-20">
        <SectionTitle className="mb-4 lg:text-6xl">
          Let's <GradientText>Talk</GradientText>
        </SectionTitle>
        <SectionSubtitle className="mb-6">
          Whether you've got a question, feedback, or partnership idea, we'd
          love to hear from you!
        </SectionSubtitle>
      </div>
    </>
  );
}
