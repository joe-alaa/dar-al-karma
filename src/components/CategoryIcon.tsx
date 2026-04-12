interface CategoryIconProps {
  slug: string;
  className?: string;
}

export function CategoryIcon({ slug, className = "h-8 w-8" }: CategoryIconProps) {
  const strokeProps = { stroke: "currentColor", fill: "none", strokeWidth: "1.5", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (slug) {
    case "crime-action":
      return (
        <svg viewBox="0 0 32 32" className={className}>
          {/* Dagger / sword */}
          <line x1="16" y1="4" x2="16" y2="22" {...strokeProps} />
          <line x1="10" y1="10" x2="22" y2="10" {...strokeProps} />
          <path d="M14 22 L16 28 L18 22" {...strokeProps} />
        </svg>
      );
    case "sci-fi-history":
      return (
        <svg viewBox="0 0 32 32" className={className}>
          {/* Planet with ring */}
          <circle cx="16" cy="16" r="7" {...strokeProps} />
          <ellipse cx="16" cy="16" rx="14" ry="4" {...strokeProps} strokeWidth="1.2" />
          <circle cx="22" cy="10" r="1" fill="currentColor" />
        </svg>
      );
    case "mystery-horror":
      return (
        <svg viewBox="0 0 32 32" className={className}>
          {/* Eye with question */}
          <ellipse cx="16" cy="16" rx="12" ry="7" {...strokeProps} />
          <circle cx="16" cy="16" r="3.5" {...strokeProps} />
          <circle cx="16" cy="16" r="1.5" fill="currentColor" />
        </svg>
      );
    case "drama-romance":
      return (
        <svg viewBox="0 0 32 32" className={className}>
          {/* Heart sketch */}
          <path d="M16 26 C10 20 4 15 4 10 C4 6 8 4 12 4 C14 4 16 6 16 8 C16 6 18 4 20 4 C24 4 28 6 28 10 C28 15 22 20 16 26Z" {...strokeProps} />
        </svg>
      );
    case "self-help-psychology":
      return (
        <svg viewBox="0 0 32 32" className={className}>
          {/* Brain / mind */}
          <path d="M16 28 L16 18" {...strokeProps} />
          <path d="M8 14 C8 8 12 4 16 4 C20 4 24 8 24 14 C24 18 20 20 16 18 C12 20 8 18 8 14Z" {...strokeProps} />
          <path d="M12 12 Q14 10 16 12 Q18 10 20 12" {...strokeProps} strokeWidth="1" />
        </svg>
      );
    case "religious":
      return (
        <svg viewBox="0 0 32 32" className={className}>
          {/* Crescent and star */}
          <path d="M18 6 C12 8 10 14 10 18 C10 24 14 28 20 28 C14 26 12 20 14 14 C15 10 18 6 18 6Z" {...strokeProps} />
          <path d="M22 10 L22.5 8 L23 10 L25 10.5 L23 11 L22.5 13 L22 11 L20 10.5Z" fill="currentColor" />
        </svg>
      );
    case "palestine":
      return (
        <svg viewBox="0 0 32 32" className={className}>
          {/* Dome of the Rock / Al-Aqsa silhouette */}
          <path d="M8 22 L8 16 L12 14 L16 8 L20 14 L24 16 L24 22" {...strokeProps} />
          <line x1="8" y1="22" x2="24" y2="22" {...strokeProps} />
          <line x1="16" y1="8" x2="16" y2="5" {...strokeProps} strokeWidth="1.2" />
          <circle cx="16" cy="4" r="1" fill="currentColor" />
          <path d="M12 22 L12 18 L14 16 L18 16 L20 18 L20 22" {...strokeProps} strokeWidth="1" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <path d="M6 24 L16 14 L26 24" {...strokeProps} />
          <path d="M16 14 L16 6" {...strokeProps} />
        </svg>
      );
  }
}
