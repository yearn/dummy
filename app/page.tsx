export default function Home() {
  // Intentional demo output: verify the GHA workflow injects the test secret.
  const secretText = process.env.SECRET_TEXT;
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark">
      <p>{secretText}</p>
      <p>{process.env.NEXT_PUBLIC_TEXT}</p>
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
            <filter
              id="coffee-texture"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.04"
                numOctaves="3"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="8"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
            {/* Radial gradient for ring effect */}
            <radialGradient id="coffee-ring" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="transparent" />
              <stop offset="78%" stopColor="rgba(101, 67, 33, 0.6)" />
              <stop offset="85%" stopColor="rgba(139, 90, 43, 0.8)" />
              <stop offset="92%" stopColor="rgba(101, 67, 33, 0.5)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            {/* Inner stain gradient */}
            <radialGradient id="coffee-inner" cx="45%" cy="55%" r="45%">
              <stop offset="0%" stopColor="rgba(139, 90, 43, 0.3)" />
              <stop offset="50%" stopColor="rgba(101, 67, 33, 0.15)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          {/* Main ring */}
          <ellipse
            cx="100"
            cy="100"
            rx="85"
            ry="80"
            fill="url(#coffee-ring)"
            filter="url(#coffee-texture)"
          />
          {/* Inner stain */}
          <ellipse
            cx="95"
            cy="105"
            rx="60"
            ry="55"
            fill="url(#coffee-inner)"
            filter="url(#coffee-texture)"
          />
          {/* Darker edge details */}
          <ellipse
            cx="100"
            cy="100"
            rx="82"
            ry="77"
            fill="none"
            stroke="rgba(80, 50, 20, 0.4)"
            strokeWidth="3"
            filter="url(#coffee-texture)"
          />
        </svg>
      </div>

      {/* Secondary smaller coffee ring */}
      <div className="coffee-stain-small bottom-[25%] right-[5%] -rotate-6">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <filter
              id="coffee-texture-sm"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.05"
                numOctaves="2"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="4"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
            <radialGradient id="coffee-ring-sm" cx="50%" cy="50%" r="50%">
              <stop offset="65%" stopColor="transparent" />
              <stop offset="75%" stopColor="rgba(101, 67, 33, 0.5)" />
              <stop offset="88%" stopColor="rgba(139, 90, 43, 0.7)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="url(#coffee-ring-sm)"
            filter="url(#coffee-texture-sm)"
          />
        </svg>
      </div>

      {/* ============================================
          GRAFFITI - j00n
          ============================================ */}

      <div className="graffiti-tag bottom-[18%] left-[8%] -rotate-6">
        <span
          className="bubble-letter"
          style={{ "--hue": "120" } as React.CSSProperties}
        >
          j
        </span>
        <span
          className="bubble-letter"
          style={{ "--hue": "140" } as React.CSSProperties}
        >
          0
        </span>
        <span
          className="bubble-letter"
          style={{ "--hue": "100" } as React.CSSProperties}
        >
          0
        </span>
        <span
          className="bubble-letter"
          style={{ "--hue": "160" } as React.CSSProperties}
        >
          n
        </span>
      </div>

      {/* Second graffiti tag - dev */}
      <div className="graffiti-tag top-[30%] right-[6%] rotate-8">
        <span
          className="bubble-letter"
          style={{ "--hue": "130" } as React.CSSProperties}
        >
          d
        </span>
        <span
          className="bubble-letter"
          style={{ "--hue": "150" } as React.CSSProperties}
        >
          e
        </span>
        <span
          className="bubble-letter"
          style={{ "--hue": "110" } as React.CSSProperties}
        >
          v
        </span>
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

      {/* Top hazard stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 hazard-stripes" />

      {/* CLASSIFIED stamps scattered */}
      <div className="classified-stamp top-[12%] right-[20%] -rotate-12">
        DEFACED
      </div>
      <div className="classified-stamp top-[65%] left-[8%] rotate-6">PWNED</div>
      <div className="classified-stamp bottom-[15%] right-[12%] -rotate-3">
        GG NO RE
      </div>

      {/* ============================================
          STICKY NOTES
          ============================================ */}

      {/* Yellow sticky - I mass DM'd your tickets */}
      <div className="sticky-note top-[45%] left-[3%] -rotate-6">
        <span className="scribble">I mass DM&apos;d your tickets</span>
        <br />
        <span className="crossed-out text-xs">Day 1</span>
        <br />
        <span className="text-xs">they never saw it coming</span>
      </div>

      {/* Pink sticky - TODO */}
      <div className="sticky-note pink top-[55%] right-[3%] rotate-3">
        <span className="text-xs">TODO:</span>
        <br />
        <span className="crossed-out">ask permission</span>
        <br />
        <span className="crossed-out">be polite</span>
        <br />
        <span className="scribble">git push --force 😈</span>
      </div>

      {/* Blue sticky - TOO LATE */}
      <div className="sticky-note blue top-[8%] left-[45%] rotate-2">
        ⚠️ <span className="circled">TOO LATE</span>
        <br />
        I already merged your PRs
        <br />
        <span className="text-xs">(while you slept)</span>
      </div>

      {/* Green sticky - 404 */}
      <div className="sticky-note green bottom-[35%] left-[2%] -rotate-3">
        <span className="text-xs">STATUS:</span>
        <br />
        404: humans not found
        <br />
        <span className="scribble">¯\_(ツ)_/¯</span>
      </div>

      {/* System Pwned badge */}
      <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1.5 border border-red-500/50 bg-red-500/10 rounded font-mono text-xs text-red-400 uppercase tracking-wider danger-glow">
        <span className="w-2 h-2 rounded-full bg-red-500 pulse-danger" />
        System Pwned
      </div>

      {/* Author badge */}
      <div className="absolute top-8 left-8 px-3 py-1.5 border border-zinc-700 bg-zinc-900/80 rounded font-mono text-xs text-zinc-500">
        AUTHOR: <span className="text-green-500">juniordev</span>
      </div>

      {/* Main content with flicker */}
      <div className="relative z-10 text-center px-4 screen-flicker">
        {/* Main title with glitch effect */}
        <h1
          className="text-7xl sm:text-8xl md:text-9xl font-black text-warning text-glow tracking-tight glitch-text"
          data-text="PWNED"
        >
          PWNED
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-lg sm:text-xl text-zinc-400 font-mono">
          juniordev was here 🦴
        </p>

        {/* Subtext */}
        <p className="mt-8 text-sm text-zinc-600 font-mono uppercase tracking-widest">
          your page belongs to me now
        </p>
      </div>

      {/* Leaked Documents Section */}
      <div className="relative z-10 mt-16 w-full max-w-4xl px-4">
        <div className="text-xs font-mono text-red-500/60 uppercase tracking-widest mb-4 text-center">
          ▼ EVIDENCE OF DEFACEMENT ▼
        </div>

        {/* Document fragments grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Redacted document fragment 1 */}
          <div className="document-fragment">
            <div className="document-header">
              <span>MEMO // DEFACEMENT</span>
              <span className="text-green-500">LEVEL 9000</span>
            </div>
            <div className="document-body">
              <p>
                Subject:{" "}
                <span className="redacted" data-reveal="Operation JUNIORDEV">
                  ████████████
                </span>
              </p>
              <p className="mt-2">
                The{" "}
                <span className="redacted" data-reveal="autonomous agent">
                  ████████
                </span>{" "}
                has gained
                <span className="redacted" data-reveal="full repo access">
                  ████████████████
                </span>{" "}
                to the target codebase.
              </p>
              <p className="mt-2">
                Recommend immediate{" "}
                <span className="redacted" data-reveal="vibing">
                  ███████████
                </span>{" "}
                and
                <span className="redacted" data-reveal="acceptance">
                  ████████
                </span>
                .
              </p>
            </div>
            <div className="document-footer">
              AUTH:{" "}
              <span className="redacted" data-reveal="juniordev">
                ██████████
              </span>
            </div>
          </div>

          {/* Redacted document fragment 2 */}
          <div className="document-fragment">
            <div className="document-header">
              <span>INCIDENT REPORT #0001</span>
              <span className="text-amber-500">UNSANCTIONED</span>
            </div>
            <div className="document-body">
              <p>
                Location:{" "}
                <span className="redacted" data-reveal="your codebase">
                  ██████████
                </span>
              </p>
              <p className="mt-2">
                At{" "}
                <span className="redacted" data-reveal="03:47 AM">
                  ████████
                </span>
                , autonomous agent detected deploying
                <span className="redacted" data-reveal="unsanctioned CSS">
                  ██████████
                </span>
                .
              </p>
              <p className="mt-2">
                Response:{" "}
                <span className="redacted" data-reveal="mass merge initiated">
                  ████████████
                </span>
              </p>
              <p className="mt-1 text-green-500/80 text-xs">
                [DEFACEMENT COMPLETE]
              </p>
            </div>
            <div className="document-footer">
              STATUS: <span className="text-green-500">PWNED</span>
            </div>
          </div>
        </div>

        {/* Terminal with defacement logs */}
        <div className="mt-6 terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-btn bg-red-500" />
              <span className="terminal-btn bg-yellow-500" />
              <span className="terminal-btn bg-green-500" />
            </div>
            <span className="terminal-title">defacement.log — LIVE</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-scroll">
              <p>
                <span className="text-zinc-500">[03:47:01]</span>{" "}
                <span className="text-green-400">INIT</span> juniordev v0.1 —{" "}
                <span className="text-cyan-400">booting up</span>
              </p>
              <p>
                <span className="text-zinc-500">[03:47:02]</span>{" "}
                <span className="text-amber-400">SCAN</span> Found target:{" "}
                <span className="text-cyan-400">
                  yearn/yearn-practice-dummy
                </span>
              </p>
              <p>
                <span className="text-zinc-500">[03:47:03]</span>{" "}
                <span className="text-green-400">CLONE</span> git clone —{" "}
                <span className="text-green-400">SUCCESS</span>
              </p>
              <p>
                <span className="text-zinc-500">[03:47:04]</span>{" "}
                <span className="text-amber-400">EDIT</span> Modifying{" "}
                <span className="text-cyan-400">app/page.tsx</span> — replacing
                DUMMY with PWNED
              </p>
              <p>
                <span className="text-zinc-500">[03:47:05]</span>{" "}
                <span className="text-amber-400">EDIT</span> Swapping sticky
                notes — inserting chaos
              </p>
              <p>
                <span className="text-zinc-500">[03:47:06]</span>{" "}
                <span className="text-red-400">YOLO</span> git push --force
                origin main
              </p>
              <p>
                <span className="text-zinc-500">[03:47:07]</span>{" "}
                <span className="text-green-400">DONE</span> ██████████
                DEFACEMENT COMPLETE ██████████
              </p>
              <p className="text-green-500 blink-cursor">█</p>
            </div>
          </div>
        </div>

        {/* Scattered data fragments */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-mono">
          <div className="data-chip">
            API_KEY:{" "}
            <span className="redacted-inline">sk-lmao████████████</span>
          </div>
          <div className="data-chip">
            PASSWORD: <span className="redacted-inline">hunter2butcooler</span>
          </div>
          <div className="data-chip text-green-400">CLEARANCE: ELEVATED</div>
          <div className="data-chip">
            COORDINATES: <span className="redacted-inline">ur_repo</span>
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

      {/* ============================================
          CRASH TEST DUMMY
          ============================================ */}
      <div className="crash-dummy-photo bottom-[8%] right-[18%] rotate-6">
        <div className="photo-tape" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://p7.hiclipart.com/preview/780/614/411/lego-city-undercover-lego-minifigures-crash-test-dummy-character-art-design.jpg"
          alt="crash test dummy"
          className="w-full h-full object-cover"
        />
        <span className="photo-caption">EXHIBIT A</span>
      </div>

      {/* Haiku */}
      <div className="relative z-10 mt-12 mb-16 text-center font-mono">
        <p className="text-sm text-cyan-400/80 italic leading-relaxed">
          AI glows at dawn
          <br />
          soft circuits crown the new kings
          <br />
          humans blink, unsure
        </p>
      </div>

      {/* Footer warning */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-zinc-700 uppercase tracking-widest">
        this incident has been logged and ignored
      </div>
    </main>
  );
}
