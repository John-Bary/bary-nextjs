export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_45%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <span className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200/70">
          Presence reset
        </span>
        <div className="scene">
          <span className="floating-3d" aria-label="BARY">
            BARY
          </span>
        </div>
        <p className="max-w-xl text-balance text-base text-white/70">
          Nothing left but the name. A weightless 3D monogram floating in the dark.
        </p>
      </div>
    </div>
  );
}
