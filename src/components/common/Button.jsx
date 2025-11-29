import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import IconText from "./IconText"; // import your reusable component

export default function Button({
  as: Component = "button",
  children,
  className,
  href,
  to,
  icon: Icon,
  iconColor,
  trailingIcon = false,
  "aria-label": ariaLabel,
  ...props
}) {
  if (to) Component = Link;

  const baseClasses =
    "group inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors " +
    "text-white bg-blue-600 hover:bg-blue-700";

  const finalClasses = twMerge(clsx(baseClasses, className));

  const accessibilityLabel = children ? undefined : ariaLabel;

  const content = (
    <IconText
      icon={Icon}
      iconPosition="left"
      iconClassName={iconColor ? `text-${iconColor}` : ""}
      className="gap-2"
    >
      {children && (
        <span className="flex items-center gap-2">
          {children}
          {trailingIcon && (
            <ChevronRight className="w-3.5 h-3.5 transform transition-transform duration-200 group-hover:translate-x-1" />
          )}
        </span>
      )}
    </IconText>
  );

  return (
    <Component
      to={to}
      href={href}
      className={finalClasses}
      aria-label={accessibilityLabel}
      {...props}
    >
      {content}
    </Component>
  );
}
