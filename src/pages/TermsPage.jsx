import GradientText from "../components/common/GradientText";
import SectionSubtitle from "../components/common/SectionSubtitle";
import SectionTitle from "../components/common/SectionTitle";
import SEO from "../components/common/SEO";

export default function TermsPage() {
  return (
    <>
      <SEO default />

      <div className="text-center max-w-4xl mx-auto mb-20">
        <SectionTitle className="mb-4 lg:text-6xl">
          Legal <GradientText>Information</GradientText>
        </SectionTitle>
        <SectionSubtitle className="mb-6">
          Our terms of service and privacy policy, designed to be clear and
          straightforward.
        </SectionSubtitle>
      </div>
    </>
  );
}
