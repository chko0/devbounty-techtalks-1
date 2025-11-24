export default function GradientWash({ className }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }} // make sure it's behind content
    >
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/20 via-transparent to-purple-600/20" />
    </div>
  );
}
