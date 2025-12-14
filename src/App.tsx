import { Mail, Globe2, ArrowUpRight } from "lucide-react";

const servicePills = ["Positioning", "Webflow builds", "Analytics", "Paid validation"];
const highlights = [
  { title: "Clarity-first pages", desc: "Message, design, and conversion wired together." },
  { title: "Trusted delivery", desc: "Founder-led team with Baltic B2B focus." },
  { title: "Fast launches", desc: "Ship in weeks with accessible, fast builds." },
];

export default function App() {
  return (
    <div className="page">
      <nav className="nav">
        <div className="brand">
          <Globe2 size={22} />
          BARY
        </div>
        <a className="btn" href="mailto:bary@gmx.lt">
          <Mail size={18} />
          bary@gmx.lt
        </a>
      </nav>

      <header className="hero">
        <div className="hero-card floating">
          <div className="halo" aria-hidden />
          <div className="badge">
            <Globe2 size={14} />
            baltic b2b partner
          </div>
          <h1 style={{ fontSize: "2.8rem", lineHeight: 1.05, margin: "1rem 0 0.6rem" }}>
            Conversion-ready sites with the analytics and nurture to back them up.
          </h1>
          <p style={{ maxWidth: "32rem", color: "#334155", fontSize: "1.05rem", lineHeight: 1.6 }}>
            We help Baltic B2B teams ship clearer messaging, faster Webflow builds, and measurement you can trust.
            If we’re not the best fit, we’ll say so and point you in the right direction.
          </p>

          <div className="pill-row" style={{ margin: "1rem 0 0.8rem" }}>
            {servicePills.map((pill) => (
              <span key={pill} className="pill">
                {pill}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginTop: "1.4rem" }}>
            <a className="btn" href="mailto:bary@gmx.lt">
              <Mail size={18} />
              Email bary@gmx.lt
            </a>
            <a
              className="btn"
              href="https://bary.lt"
              target="_blank"
              rel="noreferrer"
              style={{ background: "#0f172a", color: "#e7ecf8" }}
            >
              Visit bary.lt
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="stack">
          {highlights.map((item, idx) => (
            <div key={item.title} className="stack-card" style={{ transform: `translateY(${idx * 4}px)` }}>
              <small>{`0${idx + 1}`}</small>
              <h3 style={{ margin: "0 0 0.3rem" }}>{item.title}</h3>
              <p style={{ margin: 0, color: "#475569", lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </header>

      <section className="grid">
        <div className="card">
          <h3>Contact</h3>
          <p style={{ marginTop: 0, color: "#cbd5e1", lineHeight: 1.5 }}>
            Fastest: email <a href="mailto:bary@gmx.lt" style={{ color: "#67e8f9" }}>bary@gmx.lt</a>. We reply within one business day.
          </p>
        </div>
        <div className="card">
          <h3>Location</h3>
          <p style={{ marginTop: 0, color: "#cbd5e1" }}>Vilnius, Lithuania — working across the Baltics remotely.</p>
        </div>
        <div className="card">
          <h3>What we deliver</h3>
          <p style={{ marginTop: 0, color: "#cbd5e1" }}>
            Message-first Webflow builds, HubSpot/analytics wiring, and light paid validation to prove traction.
          </p>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} BARY — clarity, design, and delivery for Baltic B2B services.
      </footer>
    </div>
  );
}
