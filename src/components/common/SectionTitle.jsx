import clsx from "clsx";
import FadeUp from "./FadeUp";
import IconText from "./IconText";

export default function SectionTitle({
  children,
  className = "",
  iconClassName = "",
  icon: Icon = null,
}) {
  return (
    <FadeUp delay={0.0}>
      <div
        className={clsx(
          "text-5xl lg:text-7xl text-white font-bold leading-tight transition-all duration-300 text-center",
          className
        )}
      >
        <IconText
          icon={Icon}
          iconClassName={clsx("text-cyan-400 w-8 h-8 sm:mr-2", iconClassName)}
          className="flex-col sm:flex-row items-center gap-2"
        >
          <div>{children}</div>
        </IconText>
      </div>
    </FadeUp>
  );
}
