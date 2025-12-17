import React from "react";

const contactEmail = "bary@gmx.com";

const highlights = [
  {
    title: "Integrating technology and biology",
    description:
      "Pairing computation, automation, and experimentation to accelerate discoveries that matter for human health.",
  },
  {
    title: "Interdisciplinary expertise",
    description:
      "Experience across wet lab science, data science, and venture-backed product launches informs every engagement.",
  },
  {
    title: "Full-stack consulting",
    description:
      "From strategic positioning to technical roadmaps, we help founders and teams navigate complex, regulated markets.",
  },
];

const pipeline = [
  {
    label: "Science",
    title: "Reprogramming cell fate",
    text: "Using small-molecule combinations to push cells toward regenerative, youthful states while preserving safety and control.",
  },
  {
    label: "Platform",
    title: "Computation meets discovery",
    text: "High-throughput screening, machine learning models, and automated analysis surface the most promising directions fast.",
  },
  {
    label: "Applications",
    title: "Healthspan-oriented programs",
    text: "Working on programs that target age-associated decline across tissues with translational potential in the near term.",
  },
];

const updates = [
  {
    title: "Cellular rejuvenation with small molecules",
    detail: "Recent results show transcriptional age reversal across multiple cell types with precise chemical cocktails.",
  },
  {
    title: "Data-driven screening at scale",
    detail: "Iterative wet lab cycles and ML scoring shrink timelines from months to weeks for prioritizing new interventions.",
  },
  {
    title: "Collaboration-ready",
    detail: "Partner with teams seeking strategic guidance or hands-on execution for marketing, positioning, and GTM for frontier science.",
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="top-nav" id="top">
        <div className="shell nav-inner">
          <a className="brand" href="#top">
            Bary
          </a>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#pipeline">Platform</a>
            <a href="#updates">Updates</a>
            <a className="btn ghost" href={`mailto:${contactEmail}`}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">Marketing & Technology Consulting</p>
            <h1>Integrated bioscience storytelling for ambitious teams.</h1>
            <p className="lede">
              We translate complex science into clear strategy, compelling narratives, and launch-ready plans inspired by the
              breakthrough work at Integrated Biosciences.
            </p>
            <div className="actions">
              <a className="btn primary" href={`mailto:${contactEmail}?subject=${encodeURIComponent("Project inquiry")}`}>
                Work with us
              </a>
              <a className="btn secondary" href="#updates">
                Explore our approach
              </a>
            </div>
            <div className="hero-tags">
              <span>Computational discovery</span>
              <span>Small-molecule innovation</span>
              <span>Go-to-market clarity</span>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel">Where computation meets biology to extend healthspan.</div>
            <div className="panel muted">
              We partner with founders commercializing frontier therapeutics and platforms—connecting scientific depth with
              market-ready messaging and strategy.
            </div>
          </div>
        </section>

        <section id="about" className="section shell">
          <div className="section-head">
            <p className="eyebrow">What drives us</p>
            <h2>Building momentum for science-led companies.</h2>
            <p className="muted">
              Inspired by the mission and language of Integrated Biosciences, we specialize in packaging bold technical visions
              into stories that resonate with investors, partners, and end users.
            </p>
          </div>
          <div className="grid three">
            {highlights.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p className="muted">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pipeline" className="section shell">
          <div className="section-head">
            <p className="eyebrow">Platform</p>
            <h2>Full-stack support from discovery to delivery.</h2>
            <p className="muted">A consulting practice shaped by the integrated, end-to-end mindset of modern bioscience teams.</p>
          </div>
          <div className="grid three">
            {pipeline.map((step) => (
              <article key={step.title} className="card">
                <p className="chip">{step.label}</p>
                <h3>{step.title}</h3>
                <p className="muted">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="updates" className="section shell">
          <div className="section-head">
            <p className="eyebrow">Narratives</p>
            <h2>Messaging inspired by Integrated Biosciences.</h2>
            <p className="muted">
              We keep pace with the latest results across rejuvenation, screening, and translational programs to ensure your
              marketing reflects the state of the art.
            </p>
          </div>
          <div className="grid">
            {updates.map((item) => (
              <article key={item.title} className="tile">
                <h3>{item.title}</h3>
                <p className="muted">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta shell">
          <div className="cta-inner">
            <div>
              <p className="eyebrow">Ready to collaborate</p>
              <h3>Let’s bring your science to market.</h3>
              <p className="muted">We offer tailored engagements for strategy, storytelling, and go-to-market execution.</p>
            </div>
            <a className="btn primary" href={`mailto:${contactEmail}`}>
              Contact {contactEmail}
            </a>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <p>© {new Date().getFullYear()} Bary Consulting. Inspired by Integrated Biosciences.</p>
        <a href={`mailto:${contactEmail}`} className="muted">
          {contactEmail}
        </a>
      </footer>
    </div>
  );
}
