export default function Logo() {
  const logoPath = "/logo.png";

  return (
    <div className="flex items-center space-x-1 select-none w-max">
      <img
        src={logoPath}
        alt="TechTalks Logo"
        width={50}
        height={50}
        className="block"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/40x40/553c9a/ffffff?text=Icon";
        }}
      />
      <h1 className="text-xl font-bold text-white italic whitespace-nowrap">
        TechTalks
      </h1>
    </div>
  );
}
