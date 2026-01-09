interface ThemeIconProps {
  resolvedTheme: "light" | "dark";
  mounted?: boolean;
}

export function ThemeIcon({ resolvedTheme, mounted = true }: ThemeIconProps) {
  // During SSR or before mount, render a placeholder to avoid hydration mismatch
  if (!mounted) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <circle cx="12" cy="12" r="4" stroke="currentColor" opacity="0.3" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      {resolvedTheme === "dark" ? (
        // Sun icon for dark mode (click to switch to light)
        <g stroke="currentColor">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </g>
      ) : (
        // Moon icon for light mode (click to switch to dark)
        <path
          d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"
          fill="currentColor"
          stroke="currentColor"
        />
      )}
    </svg>
  );
}
