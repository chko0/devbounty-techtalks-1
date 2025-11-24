import { Circle } from "lucide-react";
import GradientText from "../common/GradientText";

export default function Introduction() {
  return (
    <section className="bg-black px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="font-bold mb-16 mt-6 text-5xl text-center text-white">
          What is
          <GradientText className="mx-8">TechTalks</GradientText>?
        </div>
        <p className="text-2xl px-4 text-center leading-relaxed text-gray-300 mb-16">
          TechTalks is more than just a learning platform. It's a movement
          designed to bridge the gap between traditional education and the
          real-world tech industry. We provide you with the connections to
          industry professionals, carefully curated courses that cut through the
          noise, and hands-on events and workshops that accelerate your growth.
          At TechTalks, you'll discover the clear path in programming that
          universities often fail to provide, empowering your tech background
          with practical skills, mentorship, and a community that truly supports
          your journey from student to professional developer.
        </p>
      </div>
    </section>
  );
}
