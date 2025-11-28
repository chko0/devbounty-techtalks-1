import clsx from "clsx";
import FadeUp from "./FadeUp";

export default function SectionTitle({ children, className = "" }) {
  return (
    <FadeUp delay={0.0}>
      <h1
        className={clsx(
          "text-5xl lg:text-7xl text-white font-bold leading-tight transition-all duration-300",
          className
        )}
      >
        {children}
      </h1>
    </FadeUp>
  );
}
