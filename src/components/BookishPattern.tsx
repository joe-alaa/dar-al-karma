/**
 * Rich literary SVG patterns — open books, stacked spines, inkwells, feather quills,
 * reading glasses, bookmarks, coffee cups, and scattered letters.
 */
export function BookishPattern({ className = "", opacity = 0.07, animated = true }: { className?: string; opacity?: number; animated?: boolean }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      {animated && (
        <style>{`
          @keyframes patternDrift {
            0% { transform: translate(0, 0); }
            50% { transform: translate(-12px, -8px); }
            100% { transform: translate(0, 0); }
          }
          .bookish-drift { animation: patternDrift 25s ease-in-out infinite; }
        `}</style>
      )}
      <defs>
        <pattern id="bookish" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          {/* Open book with visible pages */}
          <path d="M30 140 L50 125 L70 140" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M50 125 L50 100" stroke="currentColor" fill="none" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M35 135 Q50 120 65 135" stroke="currentColor" fill="none" strokeWidth="0.6" />
          <path d="M38 130 Q50 118 62 130" stroke="currentColor" fill="none" strokeWidth="0.6" />
          <line x1="35" y1="110" x2="48" y2="110" stroke="currentColor" strokeWidth="0.5" />
          <line x1="37" y1="114" x2="48" y2="114" stroke="currentColor" strokeWidth="0.5" />
          <line x1="52" y1="110" x2="65" y2="110" stroke="currentColor" strokeWidth="0.5" />
          <line x1="52" y1="114" x2="63" y2="114" stroke="currentColor" strokeWidth="0.5" />

          {/* Stacked book spines */}
          <rect x="140" y="20" width="8" height="45" rx="1" stroke="currentColor" fill="none" strokeWidth="0.8" />
          <rect x="150" y="15" width="10" height="50" rx="1" stroke="currentColor" fill="none" strokeWidth="0.8" />
          <rect x="162" y="22" width="7" height="43" rx="1" stroke="currentColor" fill="none" strokeWidth="0.8" />
          <line x1="154" y1="25" x2="156" y2="25" stroke="currentColor" strokeWidth="0.5" />
          <line x1="154" y1="55" x2="156" y2="55" stroke="currentColor" strokeWidth="0.5" />

          {/* Feather quill */}
          <path d="M95 30 Q100 15 105 5" stroke="currentColor" fill="none" strokeWidth="0.9" strokeLinecap="round" />
          <path d="M105 5 Q108 12 103 18 Q98 12 105 5" stroke="currentColor" fill="none" strokeWidth="0.7" />
          <path d="M100 18 Q102 22 98 26" stroke="currentColor" fill="none" strokeWidth="0.5" />
          <circle cx="95" cy="32" r="1" fill="currentColor" />

          {/* Inkwell */}
          <ellipse cx="85" cy="50" rx="8" ry="3" stroke="currentColor" fill="none" strokeWidth="0.8" />
          <path d="M77 50 L77 58 Q77 62 85 62 Q93 62 93 58 L93 50" stroke="currentColor" fill="none" strokeWidth="0.8" />

          {/* Reading glasses */}
          <circle cx="25" cy="55" r="7" stroke="currentColor" fill="none" strokeWidth="0.7" />
          <circle cx="43" cy="55" r="7" stroke="currentColor" fill="none" strokeWidth="0.7" />
          <path d="M32 55 Q34 52 36 55" stroke="currentColor" fill="none" strokeWidth="0.6" />
          <line x1="18" y1="55" x2="12" y2="50" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
          <line x1="50" y1="55" x2="56" y2="50" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />

          {/* Bookmark ribbon */}
          <path d="M120 85 L120 115 L125 108 L130 115 L130 85" stroke="currentColor" fill="none" strokeWidth="0.8" strokeLinejoin="round" />

          {/* Coffee cup */}
          <ellipse cx="30" cy="170" rx="8" ry="3" stroke="currentColor" fill="none" strokeWidth="0.7" />
          <path d="M22 170 L24 185 Q30 189 36 185 L38 170" stroke="currentColor" fill="none" strokeWidth="0.7" />
          <path d="M38 174 Q44 174 44 178 Q44 182 38 182" stroke="currentColor" fill="none" strokeWidth="0.6" />
          <path d="M28 166 Q29 162 30 166" stroke="currentColor" fill="none" strokeWidth="0.4" />
          <path d="M32 165 Q33 160 34 165" stroke="currentColor" fill="none" strokeWidth="0.4" />

          {/* Scattered text lines */}
          <line x1="80" y1="160" x2="110" y2="160" stroke="currentColor" strokeWidth="0.5" />
          <line x1="83" y1="165" x2="107" y2="165" stroke="currentColor" strokeWidth="0.5" />
          <line x1="86" y1="170" x2="104" y2="170" stroke="currentColor" strokeWidth="0.5" />
          <line x1="89" y1="175" x2="101" y2="175" stroke="currentColor" strokeWidth="0.5" />

          {/* Scroll */}
          <path d="M150 120 Q145 120 145 125 L145 155 Q145 160 150 160 L175 160 Q180 160 180 155 L180 125 Q180 120 175 120 Z" stroke="currentColor" fill="none" strokeWidth="0.7" />
          <path d="M145 125 Q150 128 145 131" stroke="currentColor" fill="none" strokeWidth="0.5" />
          <line x1="152" y1="130" x2="173" y2="130" stroke="currentColor" strokeWidth="0.4" />
          <line x1="152" y1="135" x2="173" y2="135" stroke="currentColor" strokeWidth="0.4" />
          <line x1="152" y1="140" x2="173" y2="140" stroke="currentColor" strokeWidth="0.4" />
          <line x1="152" y1="145" x2="170" y2="145" stroke="currentColor" strokeWidth="0.4" />

          {/* Small dots */}
          <circle cx="110" cy="95" r="1.5" fill="currentColor" />
          <circle cx="70" cy="80" r="1" fill="currentColor" />
          <circle cx="180" cy="90" r="1.2" fill="currentColor" />

          {/* Tiny star accents */}
          <path d="M15 95 L16 92 L17 95 L20 96 L17 97 L16 100 L15 97 L12 96 Z" fill="currentColor" />
          <path d="M165 180 L166 178 L167 180 L169 181 L167 182 L166 184 L165 182 L163 181 Z" fill="currentColor" />
        </pattern>
      </defs>
      <g className={animated ? "bookish-drift" : ""}>
        <rect width="200%" height="200%" x="-50%" y="-50%" fill="url(#bookish)" />
      </g>
    </svg>
  );
}

/**
 * Light decorative pattern for white/light backgrounds — more visible version.
 */
export function LightBookPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.07 }}
    >
      <style>{`
        @keyframes lightDrift {
          0% { transform: translate(0, 0); }
          50% { transform: translate(8px, 6px); }
          100% { transform: translate(0, 0); }
        }
        .light-drift { animation: lightDrift 30s ease-in-out infinite; }
      `}</style>
      <defs>
        <pattern id="light-bookish" x="0" y="0" width="220" height="220" patternUnits="userSpaceOnUse">
          {/* Open book */}
          <path d="M20 100 L45 85 L70 100" stroke="currentColor" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M45 85 L45 60" stroke="currentColor" fill="none" strokeWidth="1" strokeLinecap="round" />
          <path d="M25 95 Q45 80 65 95" stroke="currentColor" fill="none" strokeWidth="0.6" />
          <path d="M28 90 Q45 77 62 90" stroke="currentColor" fill="none" strokeWidth="0.6" />
          {/* Text lines on left page */}
          <line x1="26" y1="72" x2="43" y2="72" stroke="currentColor" strokeWidth="0.5" />
          <line x1="28" y1="76" x2="43" y2="76" stroke="currentColor" strokeWidth="0.5" />
          {/* Text lines on right page */}
          <line x1="47" y1="72" x2="63" y2="72" stroke="currentColor" strokeWidth="0.5" />
          <line x1="47" y1="76" x2="61" y2="76" stroke="currentColor" strokeWidth="0.5" />

          {/* Stacked books */}
          <rect x="140" y="40" width="10" height="50" rx="1.5" stroke="currentColor" fill="none" strokeWidth="0.8" />
          <rect x="152" y="35" width="12" height="55" rx="1.5" stroke="currentColor" fill="none" strokeWidth="0.8" />
          <rect x="166" y="42" width="9" height="48" rx="1.5" stroke="currentColor" fill="none" strokeWidth="0.8" />

          {/* Feather quill with ink */}
          <path d="M100 50 Q105 30 110 15" stroke="currentColor" fill="none" strokeWidth="1" strokeLinecap="round" />
          <path d="M110 15 Q113 25 107 30 Q102 22 110 15" stroke="currentColor" fill="none" strokeWidth="0.8" />
          <circle cx="99" cy="54" r="1.5" fill="currentColor" />

          {/* Coffee cup */}
          <ellipse cx="35" cy="160" rx="10" ry="4" stroke="currentColor" fill="none" strokeWidth="0.8" />
          <path d="M25 160 L28 178 Q35 183 42 178 L45 160" stroke="currentColor" fill="none" strokeWidth="0.8" />
          <path d="M45 164 Q52 164 52 169 Q52 174 45 174" stroke="currentColor" fill="none" strokeWidth="0.7" />
          {/* Steam */}
          <path d="M32 155 Q33 150 34 155" stroke="currentColor" fill="none" strokeWidth="0.5" />
          <path d="M37 154 Q38 148 39 154" stroke="currentColor" fill="none" strokeWidth="0.5" />

          {/* Bookmark */}
          <path d="M120 130 L120 165 L126 156 L132 165 L132 130" stroke="currentColor" fill="none" strokeWidth="0.9" strokeLinejoin="round" />

          {/* Reading glasses */}
          <circle cx="85" cy="150" r="8" stroke="currentColor" fill="none" strokeWidth="0.7" />
          <circle cx="105" cy="150" r="8" stroke="currentColor" fill="none" strokeWidth="0.7" />
          <path d="M93 150 Q95 147 97 150" stroke="currentColor" fill="none" strokeWidth="0.6" />
          <line x1="77" y1="150" x2="70" y2="145" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />

          {/* Scroll */}
          <path d="M150 140 Q145 140 145 145 L145 180 Q145 185 150 185 L185 185 Q190 185 190 180 L190 145 Q190 140 185 140 Z" stroke="currentColor" fill="none" strokeWidth="0.7" />
          <line x1="153" y1="152" x2="182" y2="152" stroke="currentColor" strokeWidth="0.4" />
          <line x1="153" y1="158" x2="182" y2="158" stroke="currentColor" strokeWidth="0.4" />
          <line x1="153" y1="164" x2="180" y2="164" stroke="currentColor" strokeWidth="0.4" />
          <line x1="153" y1="170" x2="176" y2="170" stroke="currentColor" strokeWidth="0.4" />

          {/* Small stars */}
          <path d="M15 30 L16 27 L17 30 L20 31 L17 32 L16 35 L15 32 L12 31 Z" fill="currentColor" opacity="0.6" />
          <path d="M200 110 L201 108 L202 110 L204 111 L202 112 L201 114 L200 112 L198 111 Z" fill="currentColor" opacity="0.5" />

          {/* Dot clusters */}
          <circle cx="80" cy="25" r="1.5" fill="currentColor" opacity="0.5" />
          <circle cx="85" cy="28" r="1" fill="currentColor" opacity="0.4" />
          <circle cx="78" cy="30" r="1.2" fill="currentColor" opacity="0.45" />

          {/* Page corner */}
          <rect x="170" y="10" width="22" height="30" rx="1.5" stroke="currentColor" fill="none" strokeWidth="0.7" />
          <path d="M184 10 L192 10 L192 18 Z" stroke="currentColor" fill="currentColor" strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>
      <g className="light-drift">
        <rect width="200%" height="200%" x="-50%" y="-50%" fill="url(#light-bookish)" />
      </g>
    </svg>
  );
}
