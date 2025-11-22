import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import IconText from "./IconText"; // import your reusable component

export default function Button({
  children,
  className,
  to,
  icon: Icon,
  iconColor,
  trailingIcon = false,
  ...props
}) {
  const baseClasses =
    "group inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors " +
    "text-white bg-blue-600 hover:bg-blue-700";

  const finalClasses = twMerge(clsx(baseClasses, className));

  const content = (
    <IconText
      icon={Icon}
      iconPosition="left"
      iconClassName={iconColor ? `text-${iconColor}` : ""}
      className="gap-2"
    >
      <span className="flex items-center gap-1">
        {children}
        {trailingIcon && (
          <ChevronRight className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
        )}
      </span>
    </IconText>
  );

  if (to) {
    return (
      <Link to={to} className={finalClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={finalClasses} {...props}>
      {content}
    </button>
  );
}
