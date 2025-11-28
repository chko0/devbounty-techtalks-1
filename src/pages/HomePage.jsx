import FeatureHighlight from "../components/featureHighlight/FeatureHighlight";
import Hero from "../components/hero/Hero";
import Courses from "../components/sections/Courses";
import FreeAccessAd from "../components/sections/FreeAccessAd";
import Introduction from "../components/sections/Introduction";
import MeetTheTeam from "../components/sections/MeetTheTeam";
import QuoteBlock from "../components/sections/QuoteBlock";
import SEO from "../components/common/SEO";

export default function HomePage() {
  return (
    <>
      <SEO default />

      <Hero />
      <FeatureHighlight />
      <Introduction />
      <FreeAccessAd />
      <QuoteBlock />
      <MeetTheTeam />
      <Courses />
    </>
  );
}
