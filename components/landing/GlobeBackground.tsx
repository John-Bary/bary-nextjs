"use client";

export function GlobeBackground() {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
      role="presentation"
    >
      <iframe
        src="/hero-globe.html"
        title="Animated globe"
        className="h-full w-full scale-[1.15] transform-gpu opacity-90 blur-[0.25px] pointer-events-none"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/50" />
    </div>
  );
}
