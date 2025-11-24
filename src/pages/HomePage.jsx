import FeatureHighlight from "../components/featureHighlight/FeatureHighlight";
import Hero from "../components/hero/Hero";
import FreeAccessAd from "../components/sections/FreeAccessAd";
import Introduction from "../components/sections/Introduction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureHighlight />
      <Introduction />
      <FreeAccessAd />
    </>
  );
}
