export default function WallpaperRotator() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-top bg-cover luxury-pan"
        style={{
          backgroundImage: `url('/images/Plumber-van.PNG')`,
          backgroundPosition: '46% 80px'
        }}
      />
      <style>{`
        @keyframes luxuryPan {
          0% {
            background-position: 46% 80px;
          }
          15% {
            background-position: 46% 80px;
          }
          45% {
            background-position: 90% 80px;
          }
          60% {
            background-position: 90% 80px;
          }
          90% {
            background-position: 46% 80px;
          }
          100% {
            background-position: 46% 80px;
          }
        }

        @media (max-width: 767px) {
          .luxury-pan {
            animation: luxuryPan 15s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
          }
        }

        @media (min-width: 768px) {
          .absolute.inset-0.bg-top.bg-cover {
            background-position: center 80px !important;
          }
        }
      `}</style>
    </div>
  );
}
