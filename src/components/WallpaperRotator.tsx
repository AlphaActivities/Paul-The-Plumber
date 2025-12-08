export default function WallpaperRotator() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-top bg-cover"
        style={{
          backgroundImage: `url('/images/Plumber-van.PNG')`,
          backgroundPosition: '46% 80px'
        }}
      />
      <style>{`
        @media (min-width: 768px) {
          .absolute.inset-0.bg-top.bg-cover {
            background-position: center 80px !important;
          }
        }
      `}</style>
    </div>
  );
}
