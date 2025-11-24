export default function Badge({
  children,
  className = "",
  icon: Icon,
  ...props
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full font-semibold ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </span>
  );
}
