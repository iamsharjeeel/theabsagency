export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Flat vector illustration of a modern Phoenix desert building at sunset"
    >
      <defs>
        <linearGradient id="hero-sky" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#241812" />
          <stop offset="28%" stopColor="#d97a35" />
          <stop offset="58%" stopColor="#EF4136" />
          <stop offset="82%" stopColor="#FBB040" />
          <stop offset="100%" stopColor="#FBB040" />
        </linearGradient>
        <radialGradient
          id="hero-sun"
          cx="78%"
          cy="68%"
          r="38%"
          fx="80%"
          fy="70%"
        >
          <stop offset="0%" stopColor="#f7f3ec" stopOpacity="0.95" />
          <stop offset="18%" stopColor="#FBB040" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#EF4136" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#241812" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-glass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4136" stopOpacity="0.55" />
          <stop offset="40%" stopColor="#FBB040" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#d97a35" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="hero-mass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#241812" />
          <stop offset="100%" stopColor="#0d0906" />
        </linearGradient>
        <linearGradient id="hero-scrim" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0d0906" stopOpacity="0.9" />
          <stop offset="38%" stopColor="#0d0906" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#0d0906" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero-floor" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0d0906" stopOpacity="0" />
          <stop offset="45%" stopColor="#0d0906" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0d0906" stopOpacity="0.88" />
        </linearGradient>
        <pattern
          id="hero-stone-tex"
          width="14"
          height="18"
          patternUnits="userSpaceOnUse"
        >
          <rect width="14" height="18" fill="#241812" />
          <rect x="0" y="0" width="14" height="1" fill="#0d0906" opacity="0.35" />
          <rect x="0" y="9" width="14" height="1" fill="#0d0906" opacity="0.25" />
          <rect x="7" y="0" width="1" height="9" fill="#0d0906" opacity="0.2" />
          <rect x="0" y="9" width="1" height="9" fill="#0d0906" opacity="0.2" />
        </pattern>
      </defs>

      <rect width="1600" height="900" fill="url(#hero-sky)" />
      <rect width="1600" height="900" fill="url(#hero-sun)" />

      <g opacity="0.22" fill="#f7f3ec">
        <ellipse cx="420" cy="168" rx="220" ry="18" />
        <ellipse cx="980" cy="120" rx="280" ry="14" />
        <ellipse cx="1280" cy="210" rx="160" ry="12" />
        <ellipse cx="620" cy="250" rx="140" ry="10" />
      </g>

      <g fill="#241812" opacity="0.55">
        <polygon points="980,520 1120,470 1260,520 1260,560 980,560" />
        <polygon points="1180,500 1320,455 1460,505 1460,545 1180,545" />
      </g>

      <g transform="translate(40,0)">
        <g fill="#0d0906">
          <rect x="720" y="430" width="780" height="28" />
          <rect x="740" y="458" width="740" height="250" fill="url(#hero-mass)" />
          <rect x="760" y="478" width="700" height="200" fill="url(#hero-glass)" />
          <g stroke="#241812" strokeWidth="3" fill="none" opacity="0.75">
            <line x1="830" y1="478" x2="830" y2="678" />
            <line x1="900" y1="478" x2="900" y2="678" />
            <line x1="970" y1="478" x2="970" y2="678" />
            <line x1="1040" y1="478" x2="1040" y2="678" />
            <line x1="1110" y1="478" x2="1110" y2="678" />
            <line x1="1180" y1="478" x2="1180" y2="678" />
            <line x1="1250" y1="478" x2="1250" y2="678" />
            <line x1="1320" y1="478" x2="1320" y2="678" />
            <line x1="1390" y1="478" x2="1390" y2="678" />
            <line x1="760" y1="528" x2="1460" y2="528" />
            <line x1="760" y1="578" x2="1460" y2="578" />
            <line x1="760" y1="628" x2="1460" y2="628" />
          </g>
          <rect
            x="740"
            y="458"
            width="36"
            height="250"
            fill="url(#hero-stone-tex)"
          />
          <rect
            x="1444"
            y="458"
            width="36"
            height="250"
            fill="url(#hero-stone-tex)"
          />
          <rect x="1085" y="560" width="70" height="118" fill="#0d0906" />
          <rect
            x="1095"
            y="570"
            width="50"
            height="98"
            fill="#FBB040"
            opacity="0.18"
          />
          <rect x="720" y="700" width="780" height="18" fill="#0d0906" />
          <rect
            x="900"
            y="390"
            width="120"
            height="40"
            fill="#241812"
            opacity="0.9"
          />
        </g>
      </g>

      <g fill="#0d0906">
        <path d="M118 520c8-70 18-150 22-210 3 55 14 130 28 210h-50z" />
        <ellipse cx="143" cy="318" rx="34" ry="10" />
        <path d="M143 318c-38-8-62-28-70-42 22 4 48 18 70 42z" />
        <path d="M143 318c38-10 64-32 74-48-24 6-50 22-74 48z" />
        <path d="M143 360c-42-6-68-24-78-38 26 2 52 16 78 38z" />
        <path d="M143 360c44-8 70-28 82-44-28 6-54 22-82 44z" />
        <path d="M143 410c-36-4-58-18-68-30 22 2 44 12 68 30z" />
        <path d="M143 410c38-6 60-20 72-34-24 4-46 14-72 34z" />
        <rect x="136" y="318" width="14" height="250" />
      </g>

      <g fill="#0d0906" opacity="0.85">
        <ellipse cx="260" cy="690" rx="28" ry="12" />
        <path d="M245 690c2-18 8-34 16-42 6 10 12 26 14 42h-30z" />
        <ellipse cx="340" cy="705" rx="22" ry="10" />
        <path d="M330 705c1-14 5-26 12-32 4 8 8 20 10 32h-22z" />
        <ellipse cx="420" cy="698" rx="18" ry="8" />
        <path d="M412 698c1-12 4-22 10-28 3 7 6 16 8 28h-18z" />
      </g>

      <path
        d="M0 640 C180 600 320 620 480 655 C700 700 860 680 1040 700 C1220 720 1400 690 1600 710 L1600 900 L0 900 Z"
        fill="#0d0906"
      />
      <path
        d="M0 700 C220 675 400 710 620 730 C860 755 1100 720 1600 760 L1600 900 L0 900 Z"
        fill="#241812"
      />

      <rect width="1600" height="900" fill="url(#hero-scrim)" />
      <rect width="1600" height="900" fill="url(#hero-floor)" />
    </svg>
  );
}
