export default function Noise() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 opacity-[0.02]"
      style={{
        background:
          "radial-gradient(circle at top, #1a1a1a 0%, #0a0a0a 60%)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.3'/%3E%3C/svg%3E")`,
      }}
    />
  );
}