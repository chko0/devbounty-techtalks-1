export default function GlowLines({ className }) {
  return (
    <div className={`pointer-events-none opacity-10 ${className}`}>
      {/* Horizontal line */}
      <span className="absolute inset-x-0 top-[28%] h-[1px] bg-gradient-to-l from-transparent via-cyan-300 to-transparent" />
      <span className="absolute inset-x-0 bottom-[28%] h-[1px] bg-gradient-to-l from-transparent via-purple-300 to-transparent" />

      {/* Vertical line */}
      <span className="absolute inset-y-0 left-[28%] w-[1px] bg-gradient-to-t from-transparent via-cyan-300 to-transparent" />
      <span className="absolute inset-y-0 right-[28%] w-[1px] bg-gradient-to-t from-transparent via-purple-300 to-transparent" />
    </div>
  );
}
