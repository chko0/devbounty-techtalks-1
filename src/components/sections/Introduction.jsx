import FadeUp from "../common/FadeUp";
import GradientText from "../common/GradientText";
import SectionTitle from "../common/SectionTitle";

export default function Introduction() {
  return (
    <section className="bg-black px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <SectionTitle className="mb-16 mt-6 text-center">
          What is
          <div className="inline-block relative mt-2 -mx-3 lg:mt-0">
            <GradientText className="mx-9 my-3 relative z-30">
              TechTalks
            </GradientText>

            {/* Circular effect with gradient border */}
            <div className="absolute top-1/2 left-1/2 w-[88.5%] h-[115%] rounded-full pointer-events-none">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 p-1 lg:p-1.5 transform -translate-x-[50%] -translate-y-[50%]">
                <div className="w-full h-full rounded-full bg-black" />
              </div>
            </div>
          </div>
          ?
        </SectionTitle>

        <FadeUp delay={0.4} y={30}>
          <p className="text-xl lg:text-2xl px-4 text-center leading-relaxed text-gray-300 mb-16">
            TechTalks is more than just a learning platform. It's a{" "}
            <GradientText
              className="font-semibold"
              from="purple-400"
              to="purple-400"
            >
              movement designed to bridge the gap
            </GradientText>{" "}
            between traditional education and the real-world tech industry. We
            provide you with the{" "}
            <GradientText
              className="font-semibold"
              from="cyan-400"
              to="cyan-400"
            >
              connections to industry professionals
            </GradientText>
            , carefully curated courses that cut through the noise, and{" "}
            <GradientText
              className="font-semibold"
              from="blue-400"
              to="blue-400"
            >
              hands-on events and workshops
            </GradientText>{" "}
            that accelerate your growth. At TechTalks, you'll discover the clear
            path in programming that universities often fail to provide,
            empowering your tech background with{" "}
            <GradientText className="font-semibold">
              practical skills, mentorship, and a community
            </GradientText>{" "}
            that truly supports your journey from student to professional
            developer.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
