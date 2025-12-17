import { FormEvent, type KeyboardEvent, type PointerEvent, useEffect, useMemo, useRef, useState } from "react";

type Step = {
  title: string;
  copy: string;
};

const email = "bary@gmx.com";

const steps: Step[] = [
  { title: "Discover", copy: "Goals, constraints, context." },
  { title: "Diagnose", copy: "Audit, gaps, priorities." },
  { title: "Design", copy: "Strategy + messaging plan." },
  { title: "Deploy", copy: "Execution sprint." },
  { title: "Optimize", copy: "Measure, iterate, scale." },
];

export default function App() {
  const [activeStep, setActiveStep] = useState(0);
  const processRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReduce.matches) return;

    const handleMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 14;
      const y = (event.clientY / window.innerHeight - 0.5) * 14;
      document.documentElement.style.setProperty("--tilt-x", `${y}`);
      document.documentElement.style.setProperty("--tilt-y", `${x}`);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  useEffect(() => {
    const node = processRef.current;
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") as string | null)?.trim() || "New inquiry";
    const userEmail = (formData.get("email") as string | null)?.trim() || "Not provided";
    const message = (formData.get("message") as string | null)?.trim() || "Message: (empty)";
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const bodyLines = [`Name: ${name}`, `Email: ${userEmail}`, "", message];
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const nextStep = () => setActiveStep((prev) => (prev + 1) % steps.length);
  const progressLabel = useMemo(() => `${activeStep + 1}/${steps.length}`, [activeStep]);

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
      setActiveStep(index);
    }
  };

  return (
    <div className="page">
      <div className="bg-glow" aria-hidden />
      <div className="bg-grid" aria-hidden />

      <header className="top-nav">
        <div className="nav-inner shell">
          <a className="brand" href="#hero">
            Bary
          </a>
          <nav>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-email" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="hero shell">
          <div className="hero-text">
            <p className="eyebrow">Based in Lithuania • Remote-friendly</p>
            <h1>Lean operator keeping your roadmap moving.</h1>
            <p className="subhead">Direct partner for clean decisions, crisp comms, and work that ships.</p>
            <div className="actions">
              <a
                className="btn primary"
                href={`mailto:${email}?subject=${encodeURIComponent("Book a 15-min call")}&body=${encodeURIComponent(
                  "Share two slots and what you need help with."
                )}`}
              >
                Book a 15-min call
              </a>
              <a className="btn ghost" href="#services">
                See services
              </a>
            </div>
            <div className="proof-strip hero-strip">
              <span>Hands-on delivery</span>
              <span>One owner, zero layers</span>
              <span>Signals, not noise</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden>
            <div className="orb core" />
            <div className="panel-stack">
              <div className="panel layer layer-1">
                <div className="panel-bar" />
                <div className="panel-bar short" />
                <div className="panel-dot" />
              </div>
              <div className="panel layer layer-2">
                <div className="panel-grid" />
              </div>
              <div className="floating-chip">Momentum</div>
            </div>
          </div>
        </section>

        <section id="services" className="section shell">
          <div className="section-head">
            <h2>Services</h2>
            <p>Sharp guidance and execution.</p>
          </div>
          <div className="cards">
            <article className="card">
              <header>
                <h3>Business Consulting</h3>
              </header>
              <ul>
                <li>Decisive roadmap and owner choices.</li>
                <li>Lean ops tuning across your stack.</li>
                <li>Weekly checkpoints with next moves.</li>
              </ul>
            </article>
            <article className="card">
              <header>
                <h3>Marketing Services</h3>
              </header>
              <ul>
                <li>Simple offers that land fast.</li>
                <li>Launch plans with tight feedback loops.</li>
                <li>Clear reporting you can skim.</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="process" className="section shell process-section" ref={processRef} aria-labelledby="process-title">
          <div className="flow-surface">
            <div className="flow-bg-mesh" aria-hidden />
            <div className="flow-bg-glow" aria-hidden />
            <header className="flow-head">
              <div>
                <p className="eyebrow">How we work</p>
                <h2 id="process-title">Simple, focused, repeatable.</h2>
              </div>
              <div className="flow-progress" aria-live="polite">
                <span className="flow-count">{progressLabel}</span>
                <div className="flow-bar" role="presentation">
                  {steps.map((_, i) => (
                    <span key={i} className={i <= activeStep ? "fill" : ""} />
                  ))}
                </div>
              </div>
            </header>

            <div className={`flow-body ${revealed ? "visible" : ""}`}>
              <div className="flow-rail" aria-hidden />
              <div className="flow-nodes" role="list">
                {steps.map((step, index) => (
                  <button
                    key={step.title}
                    className={`flow-node ${activeStep === index ? "active" : ""}`}
                    role="listitem"
                    type="button"
                    aria-pressed={activeStep === index}
                    aria-label={`${step.title}: ${step.copy}`}
                    onClick={() => setActiveStep(index)}
                    onPointerMove={handlePointerTilt}
                    onPointerLeave={resetTilt}
                    onFocus={() => setActiveStep(index)}
                    onKeyDown={handleKeyActivate(index)}
                    style={{ animationDelay: `${index * 90}ms`, transitionDelay: `${index * 90}ms` }}
                  >
                    <span className="flow-node-id">{index + 1}</span>
                    <span className="flow-node-title">{step.title}</span>
                    <span className="flow-node-copy">{step.copy}</span>
                  </button>
                ))}
              </div>

              <div className="flow-details" aria-live="polite">
                <div className="flow-details-top">
                  <div>
                    <p className="eyebrow">Step {activeStep + 1}</p>
                    <h3>{steps[activeStep].title}</h3>
                  </div>
                  <button className="next-btn" type="button" onClick={nextStep}>
                    Next step
                  </button>
                </div>
                <p className="flow-details-copy">
                  Outcome: <span className="muted-strong">{steps[activeStep].copy}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-strip shell section">
          <span>Trusted by lean teams</span>
          <span>Deliverables in days, not weeks</span>
          <span>Async-first, always documented</span>
        </section>

        <section id="contact" className="section shell contact">
          <div className="contact-card">
            <div className="contact-text">
              <h2>Contact</h2>
              <p>Quick reply from Bary.</p>
              <a className="email-link" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input name="name" type="text" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" placeholder="you@example.com" required />
              </label>
              <label>
                Message
                <textarea name="message" rows={3} placeholder="What do you need?" required />
              </label>
              <button type="submit" className="btn primary block">
                Send
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <a href={`mailto:${email}`}>{email}</a>
        <span>© {new Date().getFullYear()} Bary. Focused delivery.</span>
      </footer>
    </div>
  );
}
