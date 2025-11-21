import clsx from "clsx";

export default function IconText({
  icon: Icon,
  iconPosition = "left",
  iconColor = "text-white",
  size = "4",
  gap = "2",
  className,
  children,
  ...props
}) {
  return (
    <div
      className={clsx(
        "inline-flex items-center",
        iconPosition === "right" && "flex-row-reverse",
        `gap-${gap}`,
        className
      )}
      {...props}
    >
      {Icon && <Icon className={`w-${size} h-${size} ${iconColor}`} />}
      <span>{children}</span>
    </div>
  );
}
