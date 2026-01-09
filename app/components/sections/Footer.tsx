export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-bg-secondary">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-secondary font-mono text-sm">
          &copy; {new Date().getFullYear()} Abiud Cantu
        </p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent-rust" />
          <div className="w-2 h-2 bg-accent-gold" />
          <div className="w-2 h-2 bg-accent-gold" />
        </div>
      </div>
    </footer>
  );
}
