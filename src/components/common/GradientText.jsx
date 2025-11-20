export default function GradientText({
  children,
  className = "",
  from = "from-purple-400",
  to = "to-cyan-400",
}) {
  return (
    <span
      className={`
        bg-gradient-to-r ${from} ${to}
        bg-clip-text text-transparent
        ${className}
      `}
    >
      {children}
    </span>
  );
}
