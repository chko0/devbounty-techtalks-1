import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Button({ children, className, to, ...props }) {
  const baseClasses =
    "px-4 py-2 rounded-md font-semibold transition-colors text-white bg-blue-600 hover:bg-blue-700";

  if (to) {
    return (
      <Link to={to} className={clsx(baseClasses, className)} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={clsx(baseClasses, className)} {...props}>
      {children}
    </button>
  );
}
