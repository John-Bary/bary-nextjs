import { type KeyboardEvent, type PointerEvent, useEffect, useMemo, useRef, useState } from "react";

type Step = {
  title: string;
  copy: string;
};

const steps: Step[] = [
  { title: "Discover", copy: "Goals, constraints, context." },
  { title: "Diagnose", copy: "Audit, gaps, priorities." },
  { title: "Design", copy: "Strategy + messaging plan." },
  { title: "Deploy", copy: "Execution sprint." },
  { title: "Optimize", copy: "Measure, iterate, scale." },
];

export default function App() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const nextStep = () => setActive((prev) => (prev + 1) % steps.length);

  const progressLabel = useMemo(() => `${active + 1}/${steps.length}`, [active]);

  const handlePointerTilt = (event: PointerEvent<HTMLButtonElement>) => {
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduce) return;
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    target.style.setProperty("--rx", `${-y * 8}deg`);
    target.style.setProperty("--ry", `${x * 10}deg`);
  };

  const resetTilt = (event: PointerEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    target.style.setProperty("--rx", "0deg");
    target.style.setProperty("--ry", "0deg");
  };

  const handleKeyActivate = (index: number) => (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActive(index);
    }
  };

  return (
    <div className="process-page">
      <div className="bg-mesh" aria-hidden />
      <div className="bg-glow" aria-hidden />
      <section className="process-shell" ref={sectionRef} aria-labelledby="process-title">
        <header className="process-head">
          <div>
            <p className="eyebrow">How we work</p>
            <h2 id="process-title">Simple, focused, repeatable.</h2>
          </div>
          <div className="progress-meta" aria-live="polite">
            <span className="progress-count">{progressLabel}</span>
            <div className="progress-bar" role="presentation">
              {steps.map((_, i) => (
                <span key={i} className={i <= active ? "fill" : ""} />
              ))}
            </div>
          </div>
        </header>

        <div className={`process-wrap ${revealed ? "visible" : ""}`}>
          <div className="rail" aria-hidden />
          <div className="nodes" role="list">
            {steps.map((step, index) => (
              <button
                key={step.title}
                className={`node ${active === index ? "active" : ""}`}
                role="listitem"
                type="button"
                aria-pressed={active === index}
                aria-label={`${step.title}: ${step.copy}`}
                data-index={index}
                onClick={() => setActive(index)}
                onPointerMove={handlePointerTilt}
                onPointerLeave={resetTilt}
                onFocus={() => setActive(index)}
                onKeyDown={handleKeyActivate(index)}
                style={{ animationDelay: `${index * 90}ms`, transitionDelay: `${index * 90}ms` }}
              >
                <span className="node-id">{index + 1}</span>
                <span className="node-title">{step.title}</span>
                <span className="node-copy">{step.copy}</span>
              </button>
            ))}
          </div>

          <div className="details" aria-live="polite">
            <div className="details-top">
              <div>
                <p className="eyebrow">Step {active + 1}</p>
                <h3>{steps[active].title}</h3>
              </div>
              <button className="next-btn" type="button" onClick={nextStep}>
                Next step
              </button>
            </div>
            <p className="details-copy">{steps[active].copy}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
