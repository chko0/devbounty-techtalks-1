import GradientText from "../common/GradientText";

const row1 = [
  "Industry Mentorship",
  <GradientText>Real-World Projects</GradientText>,
  "Professional Certification",
  <GradientText>Career Opportunities</GradientText>,
  "Hands-On Learning",
  <GradientText>Expert Instruction</GradientText>,
];

const row2 = [
  "Community Support",
  <GradientText>Job-Ready Training</GradientText>,
  "Practical Skills",
  <GradientText>Team Collaboration</GradientText>,
  "Startup Partnerships",
  <GradientText>5,000+ Developers</GradientText>,
];

export default function FeatureHighlight() {
  return (
    <div className="relative py-12 sm:py-14 md:py-22 bg-[#0d0d0d] overflow-hidden">
      {/* Left & Right fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 sm:w-48 md:w-64 bg-gradient-to-r from-black to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-30 sm:w-48 md:w-64 bg-gradient-to-l from-black to-transparent z-20" />

      {/* Row 1 — scrolls LEFT */}
      <div className="marquee marquee-right pb-8 sm:pb-12 md:pb-16">
        <div className="marquee-track">
          <div className="marquee-content">
            {row1.map((item, i) => (
              <span
                key={i}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Duplicate for seamless loop */}
          <div className="marquee-content ml-16">
            {row1.map((item, i) => (
              <span
                key={"dup-" + i}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — scroll RIGHT */}
      <div className="marquee marquee-left pb-2">
        <div className="marquee-track">
          <div className="marquee-content">
            {row2.map((item, i) => (
              <span
                key={i}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="marquee-content ml-16">
            {row2.map((item, i) => (
              <span
                key={"dup-" + i}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
