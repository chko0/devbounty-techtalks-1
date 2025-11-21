export default function HeroStats({ icon, text, gradient }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r ${gradient}`}
      >
        {icon}
      </div>
      <div className="text-sm text-gray-300">{text}</div>
    </div>
  );
}
