import { useEffect } from "react";

const email = "bary@gmx.com";

export default function App() {
  useEffect(() => {
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReduce.matches) return;

    const handleMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 16;
      const y = (event.clientY / window.innerHeight - 0.5) * 16;
      document.documentElement.style.setProperty("--tilt-x", `${y}`);
      document.documentElement.style.setProperty("--tilt-y", `${x}`);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div className="page">
      <div className="bg-glow" aria-hidden />
      <div className="bg-grid" aria-hidden />
      <div className="bg-blobs" aria-hidden />

      <header className="top-nav">
        <div className="shell nav-inner">
          <a className="brand" href="#top">
            Bary
          </a>
          <div className="nav-actions">
            <a className="nav-link" href="#work">
              Workstyle
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
            <a className="btn primary" href={`mailto:${email}`}>
              Contact Bary
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">Based in Lithuania • Remote-friendly</p>
            <h1>Operator for lean teams that want momentum.</h1>
            <p className="subhead">Clear decisions, hands-on execution, and direct contact with the person doing the work.</p>
            <div className="actions">
              <a className="btn primary" href={`mailto:${email}?subject=${encodeURIComponent("Project with Bary")}`}>
                Email bary@gmx.com
              </a>
              <a className="btn ghost" href="#work">
                See how I work
              </a>
            </div>
            <div className="micro">
              <span>Strategy + Ops</span>
              <span>Marketing + Launch</span>
              <span>Weekly delivery</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden>
            <div className="orb layer-a" />
            <div className="orb layer-b" />
            <div className="prism">
              <div className="prism-face" />
              <div className="prism-face" />
              <div className="prism-face" />
            </div>
            <div className="floating-card">
              <p className="small">Direct line</p>
              <strong>One operator, zero layers.</strong>
            </div>
          </div>
        </section>

        <section id="work" className="section shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">How I help</p>
              <h2>Focused delivery, high signal.</h2>
            </div>
            <a className="btn ghost" href={`mailto:${email}?subject=${encodeURIComponent("Let’s talk scope")}`}>
              Contact now
            </a>
          </div>

          <div className="grid">
            <article className="tile">
              <p className="tag">Strategy</p>
              <h3>Align the plan</h3>
              <p className="muted">Clear goals, smart constraints, crisp next moves.</p>
            </article>
            <article className="tile">
              <p className="tag">Marketing</p>
              <h3>Launch fast</h3>
              <p className="muted">Simple offers, tight feedback loops, outcomes in view.</p>
            </article>
            <article className="tile">
              <p className="tag">Operations</p>
              <h3>Keep it moving</h3>
              <p className="muted">Weekly delivery, async comms, proof over promises.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="cta shell">
          <div className="cta-inner">
            <div>
              <p className="eyebrow">Contact</p>
              <h3>Ready when you are.</h3>
              <p className="muted">Drop a note and expect a quick reply.</p>
            </div>
            <a className="btn primary" href={`mailto:${email}`}>
              Contact bary@gmx.com
            </a>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <a href={`mailto:${email}`}>{email}</a>
        <span>© {new Date().getFullYear()} Bary</span>
      </footer>
    </div>
  );
}
