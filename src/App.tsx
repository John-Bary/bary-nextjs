import { FormEvent, useEffect } from "react";

const email = "bary@gmx.com";

export default function App() {
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

        <section id="process" className="section shell process">
          <div className="section-head">
            <h2>Process</h2>
            <p>Lightweight, accountable flow.</p>
          </div>
          <div className="steps">
            <div className="step-card">Kickoff: map goals, blockers, and timelines.</div>
            <div className="step-card">Operate: ship weekly with crisp owners.</div>
            <div className="step-card">Review: adjust fast, keep proof in view.</div>
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
