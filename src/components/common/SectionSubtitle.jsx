import clsx from "clsx";
import FadeUp from "./FadeUp";

export default function SectionSubtitle({ children, className = "" }) {
  return (
    <FadeUp delay={0.2}>
      <p className={clsx("text-xl text-gray-300 leading-relaxed", className)}>
        {children}
      </p>
    </FadeUp>
  );
}
