export default function MarqueeItem({
  icon: Icon,
  text,
  bold = false,
  color = "",
  children,
  iconSize = 24,
}) {
  // If the caller passed a custom component (ex: a Button), render it directly
  if (children) {
    return <div className="flex items-center gap-2">{children}</div>;
  }

  return (
    <div className="flex items-center gap-2">
      {Icon && <Icon size={iconSize} className={color} />}
      {text && (
        <span
          className={`text-lg ${bold ? "font-semibold" : ""} ${
            color ? color : ""
          }`}
        >
          {text}
        </span>
      )}
    </div>
  );
}
