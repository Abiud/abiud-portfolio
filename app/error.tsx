"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="font-mono text-sm uppercase tracking-widest text-text-secondary mb-6">
          {"// ERROR"}
        </p>
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Something went wrong
        </h1>
        <p className="text-text-secondary mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-8 py-3 bg-accent-gold text-white font-mono uppercase tracking-wider text-sm hover:bg-accent-blue-dark transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
