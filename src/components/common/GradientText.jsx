export default function GradientText({
  children,
  className = "",
  from = "purple-400",
  to = "cyan-400",
}) {
  return (
    <span
      className={`
        bg-gradient-to-r from-${from} to-${to}
        bg-clip-text text-transparent
        ${className}
      `}
    >
      {children}
    </span>
  );
}
