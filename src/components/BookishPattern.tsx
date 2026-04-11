/**
 * Subtle SVG sketch patterns for decorative backgrounds.
 * Use inside hero/footer sections with absolute positioning.
 */
export function BookishPattern({ className = "", opacity = 0.06 }: { className?: string; opacity?: number }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <defs>
        <pattern id="bookish" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          {/* Open book sketch */}
          <path d="M20 80 L35 70 L50 80 M35 70 L35 50" stroke="currentColor" fill="none" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M25 75 Q35 65 45 75" stroke="currentColor" fill="none" strokeWidth="0.8" />
          {/* Pen/quill */}
          <line x1="85" y1="25" x2="100" y2="50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M100 50 L103 52 L97 52 Z" fill="currentColor" />
          {/* Star */}
          <circle cx="70" cy="90" r="2" fill="currentColor" />
          <circle cx="15" cy="30" r="1.5" fill="currentColor" />
          {/* Pages/lines */}
          <line x1="60" y1="15" x2="80" y2="15" stroke="currentColor" strokeWidth="0.7" />
          <line x1="63" y1="20" x2="77" y2="20" stroke="currentColor" strokeWidth="0.7" />
          <line x1="65" y1="25" x2="75" y2="25" stroke="currentColor" strokeWidth="0.7" />
          {/* Scroll curl */}
          <path d="M95 85 Q105 80 105 90 Q105 100 95 95" stroke="currentColor" fill="none" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bookish)" />
    </svg>
  );
}
