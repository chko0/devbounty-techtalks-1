import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  className,
  to,
  icon: Icon,
  trailingIcon = false,
  ...props
}) {
  const baseClasses =
    "group inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors " +
    "text-white bg-blue-600 hover:bg-blue-700";

  const Content = () => (
    <>
      {Icon && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {trailingIcon && (
        <ChevronRight className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  const finalClasses = twMerge(clsx(baseClasses, className));

  if (to) {
    return (
      <Link to={to} className={finalClasses} {...props}>
        <Content />
      </Link>
    );
  }

  return (
    <button className={finalClasses} {...props}>
      <Content />
    </button>
  );
}
