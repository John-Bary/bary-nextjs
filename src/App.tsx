import { animate, createTimeline, random, stagger } from "animejs";
import { type CSSProperties, useEffect, useMemo, useRef } from "react";

const email = "bary@gmx.com";

export default function App() {
  const sceneRef = useRef<HTMLDivElement>(null);

  const sparkSeeds = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => {
        const angle = (index / 18) * Math.PI * 2;
        const radius = 120 + Math.random() * 110;
        const depth = -80 + Math.random() * 160;
        return {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          z: depth,
        };
      }),
    []
  );

  const pillars = useMemo(
    () => [
      {
        tag: "Decisions",
        title: "Cut through the fog",
        text: "Turn intent into a weekly plan with crisp trade-offs.",
      },
      {
        tag: "Momentum",
        title: "Ship every week",
        text: "Hands-on execution with async updates and proof over promises.",
      },
      {
        tag: "Signals",
        title: "Clarity over noise",
        text: "Surface what matters, remove layers, keep teams unblocked.",
      },
    ],
    []
  );

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

  useEffect(() => {
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReduce.matches) return;
    if (!sceneRef.current) return;

    const pillarsEl = sceneRef.current.querySelectorAll<HTMLElement>(".pillar");
    const ringsEl = sceneRef.current.querySelectorAll<HTMLElement>(".ring");
    const sparksEl = sceneRef.current.querySelectorAll<HTMLElement>(".spark");
    const cardEl = sceneRef.current.querySelector<HTMLElement>(".floating-card");

    const intro = createTimeline({ autoplay: true, easing: "easeOutQuad" });

    intro
      .add({
        targets: ringsEl,
        scale: [0.5, 1],
        opacity: [0, 0.9],
        duration: 1100,
        delay: stagger(120),
      })
      .add(
        {
          targets: pillarsEl,
          translateY: [28, 0],
          opacity: [0, 1],
          duration: 900,
          delay: stagger(160),
        },
        "-=650"
      )
      .add(
        {
          targets: cardEl,
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 750,
        },
        "-=500"
      );

    const orbit = animate({
      targets: ringsEl,
      rotateZ: "+=360",
      duration: 18000,
      easing: "linear",
      loop: true,
    });

    const float = animate({
      targets: pillarsEl,
      translateY: stagger([-12, 12], { direction: "alternate" }),
      rotateY: stagger([-8, 8], { direction: "alternate" }),
      duration: 4200,
      direction: "alternate",
      easing: "easeInOutSine",
      loop: true,
      delay: stagger(180),
    });

    const sparkle = animate({
      targets: sparksEl,
      translateX: () => random(-140, 140),
      translateY: () => random(-120, 120),
      translateZ: () => random(-120, 120),
      opacity: [{ value: 0.2, duration: 300 }, { value: 1, duration: 400 }, { value: 0, duration: 600 }],
      scale: () => 0.6 + Math.random() * 0.6,
      delay: stagger(140),
      duration: 2300,
      easing: "easeInOutSine",
      loop: true,
    });

    return () => {
      intro.pause();
      orbit.pause();
      float.pause();
      sparkle.pause();
    };
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
            <div className="scene" ref={sceneRef}>
              <div className="orb layer-a" />
              <div className="orb layer-b" />
              <div className="ring ring-a" />
              <div className="ring ring-b" />
              <div className="ring ring-c" />

              <div className="pillars">
                {pillars.map((item, index) => (
                  <div key={item.title} className="pillar" style={{ ["--i" as "--i"]: index } as CSSProperties}>
                    <p className="chip">{item.tag}</p>
                    <strong>{item.title}</strong>
                    <p className="muted tiny">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="floating-card">
                <p className="small">Direct line</p>
                <strong>One operator, zero layers.</strong>
              </div>

              <div className="particles">
                {sparkSeeds.map((spark, index) => (
                  <span
                    key={index}
                    className="spark"
                    style={
                      {
                        ["--spark-x" as "--spark-x"]: `${spark.x}px`,
                        ["--spark-y" as "--spark-y"]: `${spark.y}px`,
                        ["--spark-z" as "--spark-z"]: `${spark.z}px`,
                      } as CSSProperties
                    }
                  />
                ))}
              </div>
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
