export default function Loading() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-accent-rust animate-pulse" />
          <div
            className="w-3 h-3 bg-accent-gold animate-pulse"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-3 h-3 bg-accent-gold animate-pulse"
            style={{ animationDelay: "300ms" }}
          />
        </div>
        <p className="font-mono text-sm text-text-secondary">Loading...</p>
      </div>
    </div>
  );
}
