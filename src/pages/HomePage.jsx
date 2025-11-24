import FeatureHighlight from "../components/featureHighlight/FeatureHighlight";
import Hero from "../components/hero/Hero";
import FreeAccessAd from "../components/sections/FreeAccessAd";
import Introduction from "../components/sections/Introduction";
import JoinUs from "../components/sections/JoinUs";
import MeetTheTeam from "../components/sections/MeetTheTeam";
import QuoteBlock from "../components/sections/QuoteBlock";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureHighlight />
      <Introduction />
      <FreeAccessAd />
      <QuoteBlock />
      <MeetTheTeam />
      <JoinUs />
    </>
  );
}
