export default function GradientWash({ className }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none min-h-screen ${className}`}
      style={{ zIndex: 0 }}
    >
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/20 via-transparent to-purple-600/20 blur-xl" />
    </div>
  );
}
