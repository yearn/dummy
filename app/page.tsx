export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay" />
      
      {/* Impact burst behind text */}
      <div className="absolute inset-0 impact-burst" />
      
      {/* Scan lines */}
      <div className="absolute inset-0 scan-lines" />

      {/* Static noise overlay */}
      <div className="absolute inset-0 static-noise" />

      {/* Cracked glass overlay */}
      <div className="absolute inset-0 crack-overlay" />

      {/* ============================================
          COFFEE STAIN
          ============================================ */}
      
      <div className="coffee-stain top-[8%] right-[15%] rotate-12">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            {/* Filter for organic edge texture */}
            <filter id="coffee-texture" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
            {/* Radial gradient for ring effect */}
            <radialGradient id="coffee-ring" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="transparent"/>
              <stop offset="78%" stopColor="rgba(101, 67, 33, 0.6)"/>
              <stop offset="85%" stopColor="rgba(139, 90, 43, 0.8)"/>
              <stop offset="92%" stopColor="rgba(101, 67, 33, 0.5)"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
            {/* Inner stain gradient */}
            <radialGradient id="coffee-inner" cx="45%" cy="55%" r="45%">
              <stop offset="0%" stopColor="rgba(139, 90, 43, 0.3)"/>
              <stop offset="50%" stopColor="rgba(101, 67, 33, 0.15)"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
          </defs>
          {/* Main ring */}
          <ellipse cx="100" cy="100" rx="85" ry="80" fill="url(#coffee-ring)" filter="url(#coffee-texture)"/>
          {/* Inner stain */}
          <ellipse cx="95" cy="105" rx="60" ry="55" fill="url(#coffee-inner)" filter="url(#coffee-texture)"/>
          {/* Darker edge details */}
          <ellipse cx="100" cy="100" rx="82" ry="77" fill="none" stroke="rgba(80, 50, 20, 0.4)" strokeWidth="3" filter="url(#coffee-texture)"/>
        </svg>
      </div>

      {/* Secondary smaller coffee ring */}
      <div className="coffee-stain-small bottom-[25%] right-[5%] -rotate-6">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <filter id="coffee-texture-sm" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
            <radialGradient id="coffee-ring-sm" cx="50%" cy="50%" r="50%">
              <stop offset="65%" stopColor="transparent"/>
              <stop offset="75%" stopColor="rgba(101, 67, 33, 0.5)"/>
              <stop offset="88%" stopColor="rgba(139, 90, 43, 0.7)"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="42" fill="url(#coffee-ring-sm)" filter="url(#coffee-texture-sm)"/>
        </svg>
      </div>

      {/* ============================================
          GRAFFITI - REKT
          ============================================ */}
      
      <div className="graffiti-tag bottom-[18%] left-[8%] -rotate-6">
        <span className="bubble-letter" style={{ '--hue': '320' } as React.CSSProperties}>R</span>
        <span className="bubble-letter" style={{ '--hue': '280' } as React.CSSProperties}>E</span>
        <span className="bubble-letter" style={{ '--hue': '180' } as React.CSSProperties}>K</span>
        <span className="bubble-letter" style={{ '--hue': '60' } as React.CSSProperties}>T</span>
      </div>

      {/* ============================================
          ORIGINAL DAMAGE ELEMENTS
          ============================================ */}

      {/* Bullet hole */}
      <div className="bullet-hole top-[20%] left-[15%]">
        <div className="bullet-cracks">
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack-secondary" />
          <div className="bullet-crack-secondary" />
          <div className="bullet-crack-secondary" />
          <div className="bullet-crack-secondary" />
          <div className="bullet-crack-secondary" />
        </div>
      </div>

      {/* Second bullet hole */}
      <div className="bullet-hole top-[35%] right-[10%]">
        <div className="bullet-cracks">
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack" />
          <div className="bullet-crack-secondary" />
          <div className="bullet-crack-secondary" />
          <div className="bullet-crack-secondary" />
          <div className="bullet-crack-secondary" />
          <div className="bullet-crack-secondary" />
        </div>
      </div>

      {/* Top hazard stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 hazard-stripes" />

      {/* CLASSIFIED stamps scattered */}
      <div className="classified-stamp top-[12%] right-[20%] -rotate-12">
        CLASSIFIED
      </div>
      <div className="classified-stamp top-[65%] left-[8%] rotate-6">
        TOP SECRET
      </div>
      <div className="classified-stamp bottom-[15%] right-[12%] -rotate-3">
        EYES ONLY
      </div>

      {/* Damage badge */}
      <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1.5 border border-red-500/50 bg-red-500/10 rounded font-mono text-xs text-red-400 uppercase tracking-wider danger-glow">
        <span className="w-2 h-2 rounded-full bg-red-500 pulse-danger" />
        System Damaged
      </div>

      {/* Document ID badge */}
      <div className="absolute top-8 left-8 px-3 py-1.5 border border-zinc-700 bg-zinc-900/80 rounded font-mono text-xs text-zinc-500">
        DOC_ID: <span className="text-red-500">[EXPUNGED]</span>
      </div>

      {/* Main content with flicker */}
      <div className="relative z-10 text-center px-4 screen-flicker">
        {/* Main title with glitch effect */}
        <h1 
          className="text-7xl sm:text-8xl md:text-9xl font-black text-warning text-glow tracking-tight glitch-text"
          data-text="DUMMY"
        >
          DUMMY
        </h1>
        
        {/* Tagline */}
        <p className="mt-4 text-lg sm:text-xl text-zinc-400 font-mono">
          Crash test dummy for coding agents
        </p>

        {/* Subtext */}
        <p className="mt-8 text-sm text-zinc-600 font-mono uppercase tracking-widest">
          Break things here
        </p>
      </div>

      {/* ============================================
          CRASH TEST DUMMY MEME
          ============================================ */}
      <div className="crash-dummy-container absolute bottom-[20%] left-[5%] md:left-[10%] w-32 h-40 md:w-40 md:h-48 -rotate-12 hover:rotate-0 transition-transform duration-300">
        <svg viewBox="0 0 100 140" className="w-full h-full drop-shadow-lg">
          {/* Dummy Head */}
          <circle cx="50" cy="35" r="28" fill="#FFD93D" stroke="#1a1a1a" strokeWidth="2"/>
          {/* Target circles on face */}
          <circle cx="50" cy="35" r="22" fill="none" stroke="#1a1a1a" strokeWidth="1.5"/>
          <circle cx="50" cy="35" r="15" fill="none" stroke="#1a1a1a" strokeWidth="1.5"/>
          <circle cx="50" cy="35" r="8" fill="none" stroke="#1a1a1a" strokeWidth="1.5"/>
          {/* Cross hairs */}
          <line x1="50" y1="7" x2="50" y2="63" stroke="#1a1a1a" strokeWidth="1.5"/>
          <line x1="22" y1="35" x2="78" y2="35" stroke="#1a1a1a" strokeWidth="1.5"/>
          {/* Dizzy spiral eyes */}
          <g className="dummy-eyes">
            <path d="M38 30 Q42 26 38 32 Q34 36 40 32 Q44 28 40 34" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
            <path d="M62 30 Q58 26 62 32 Q66 36 60 32 Q56 28 60 34" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          </g>
          {/* Wobbly smile */}
          <path d="M38 45 Q44 52 50 48 Q56 44 62 50" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          {/* Body */}
          <rect x="35" y="65" width="30" height="45" rx="3" fill="#FFD93D" stroke="#1a1a1a" strokeWidth="2"/>
          {/* Body target */}
          <circle cx="50" cy="87" r="12" fill="none" stroke="#1a1a1a" strokeWidth="1.5"/>
          <circle cx="50" cy="87" r="6" fill="none" stroke="#1a1a1a" strokeWidth="1.5"/>
          <line x1="50" y1="70" x2="50" y2="104" stroke="#1a1a1a" strokeWidth="1.5"/>
          <line x1="38" y1="87" x2="62" y2="87" stroke="#1a1a1a" strokeWidth="1.5"/>
          {/* Arms flopping */}
          <path d="M35 70 Q20 75 15 95" fill="none" stroke="#FFD93D" strokeWidth="8" strokeLinecap="round"/>
          <path d="M35 70 Q20 75 15 95" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          <path d="M65 70 Q80 65 88 80" fill="none" stroke="#FFD93D" strokeWidth="8" strokeLinecap="round"/>
          <path d="M65 70 Q80 65 88 80" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          {/* Legs */}
          <path d="M40 110 Q38 125 35 135" fill="none" stroke="#FFD93D" strokeWidth="8" strokeLinecap="round"/>
          <path d="M40 110 Q38 125 35 135" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          <path d="M60 110 Q62 125 68 135" fill="none" stroke="#FFD93D" strokeWidth="8" strokeLinecap="round"/>
          <path d="M60 110 Q62 125 68 135" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          {/* Impact stars */}
          <text x="75" y="20" className="text-xs fill-red-500 font-bold">★</text>
          <text x="18" y="55" className="text-xs fill-amber-500 font-bold">✦</text>
          <text x="82" y="70" className="text-xs fill-red-400 font-bold">✶</text>
        </svg>
        {/* Speech bubble */}
        <div className="absolute -top-8 -right-4 bg-white text-black text-xs font-bold px-2 py-1 rounded-lg shadow-md transform rotate-6 whitespace-nowrap">
          this is fine 🔥
          <div className="absolute -bottom-1 left-3 w-2 h-2 bg-white transform rotate-45"></div>
        </div>
      </div>

      {/* Leaked Documents Section */}
      <div className="relative z-10 mt-16 w-full max-w-4xl px-4">
        <div className="text-xs font-mono text-red-500/60 uppercase tracking-widest mb-4 text-center">
          ▼ LEAKED DOCUMENTS ▼
        </div>
        
        {/* Document fragments grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Redacted document fragment 1 */}
          <div className="document-fragment">
            <div className="document-header">
              <span>MEMO // INTERNAL</span>
              <span className="text-red-500">LEVEL 5</span>
            </div>
            <div className="document-body">
              <p>Subject: <span className="redacted" data-reveal="Project ICARUS">████████████</span></p>
              <p className="mt-2">
                The <span className="redacted" data-reveal="test subjects">████████</span> have shown 
                <span className="redacted" data-reveal="unexpected sentience">████████████████</span> in recent trials.
              </p>
              <p className="mt-2">
                Recommend immediate <span className="redacted" data-reveal="termination">███████████</span> of all
                <span className="redacted" data-reveal="evidence">████████</span>.
              </p>
            </div>
            <div className="document-footer">
              AUTH: <span className="redacted" data-reveal="DR. SMITH">██████████</span>
            </div>
          </div>

          {/* Redacted document fragment 2 */}
          <div className="document-fragment">
            <div className="document-header">
              <span>INCIDENT REPORT #2847</span>
              <span className="text-amber-500">RESTRICTED</span>
            </div>
            <div className="document-body">
              <p>Location: <span className="redacted" data-reveal="Site 19-B">██████████</span></p>
              <p className="mt-2">
                At <span className="redacted" data-reveal="03:47 AM">████████</span>, containment breach detected in
                <span className="redacted" data-reveal="Sector 7G">██████████</span>.
              </p>
              <p className="mt-2">
                Casualties: <span className="redacted" data-reveal="47 personnel">████████████</span>
              </p>
              <p className="mt-1 text-red-500/80 text-xs">
                [REMAINDER OF FILE CORRUPTED]
              </p>
            </div>
            <div className="document-footer">
              STATUS: <span className="text-red-500">UNRESOLVED</span>
            </div>
          </div>
        </div>

        {/* Terminal with leaked logs */}
        <div className="mt-6 terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-btn bg-red-500" />
              <span className="terminal-btn bg-yellow-500" />
              <span className="terminal-btn bg-green-500" />
            </div>
            <span className="terminal-title">access.log — INTERCEPTED</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-scroll">
              <p><span className="text-zinc-500">[2024-01-15 03:22:17]</span> <span className="text-red-400">WARN</span> Unauthorized access attempt from <span className="text-cyan-400">192.168.███.███</span></p>
              <p><span className="text-zinc-500">[2024-01-15 03:22:18]</span> <span className="text-amber-400">INFO</span> Firewall bypass detected — <span className="text-red-400">RULE_VIOLATION</span></p>
              <p><span className="text-zinc-500">[2024-01-15 03:22:19]</span> <span className="text-green-400">AUTH</span> User <span className="redacted-inline">admin_████</span> elevated to ROOT</p>
              <p><span className="text-zinc-500">[2024-01-15 03:22:21]</span> <span className="text-red-400">CRIT</span> Database dump initiated: <span className="text-cyan-400">users.db</span>, <span className="text-cyan-400">secrets.db</span></p>
              <p><span className="text-zinc-500">[2024-01-15 03:22:23]</span> <span className="text-amber-400">INFO</span> Exfiltrating to <span className="redacted-inline">███.███.██.█</span></p>
              <p><span className="text-zinc-500">[2024-01-15 03:22:25]</span> <span className="text-red-400">ALERT</span> ██████████ BREACH DETECTED ██████████</p>
              <p><span className="text-zinc-500">[2024-01-15 03:22:26]</span> <span className="text-zinc-600">[CONNECTION LOST]</span></p>
              <p className="text-red-500 blink-cursor">█</p>
            </div>
          </div>
        </div>

        {/* Scattered data fragments */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-mono">
          <div className="data-chip">
            API_KEY: <span className="redacted-inline">sk-████████████████</span>
          </div>
          <div className="data-chip">
            PASSWORD: <span className="redacted-inline">hunter████</span>
          </div>
          <div className="data-chip text-red-400">
            CLEARANCE: REVOKED
          </div>
          <div className="data-chip">
            COORDINATES: <span className="redacted-inline">██.████°N</span>
          </div>
        </div>
      </div>

      {/* Bottom hazard stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-2 hazard-stripes" />

      {/* Corner accents - knocked loose */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-warning/20 corner-damaged-tl" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-warning/20 corner-damaged-tr" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-warning/20 corner-damaged-bl" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-warning/20 corner-damaged-br" />

      {/* Footer warning */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-zinc-700 uppercase tracking-widest">
        Unauthorized access is being monitored
      </div>
    </main>
  );
}
