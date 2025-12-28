const email = "hello@loremipsum.com";

const services = [
  {
    title: "Service One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Service Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Service Three",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const steps = [
  {
    title: "Step One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Step Two",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Step Three",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client One",
    role: "Lorem ipsum",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Two",
    role: "Lorem ipsum",
  },
];

export default function App() {
  return (
    <div className="page">
      <div className="bg-shape shape-1" aria-hidden />
      <div className="bg-shape shape-2" aria-hidden />
      <div className="bg-shape shape-3" aria-hidden />

      <header className="topbar">
        <div className="container nav">
          <a className="logo" href="#top">
            Your Name
          </a>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn small" href={`mailto:${email}`}>
            Get in touch
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy fade-up">
            <p className="kicker">Personal Services</p>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#contact">
                Schedule a call
              </a>
              <a className="btn ghost" href="#services">
                View services
              </a>
            </div>
            <div className="hero-badges">
              <span>Lorem ipsum</span>
              <span>Dolor sit</span>
              <span>Consectetur</span>
            </div>
          </div>

          <aside className="hero-card fade-up" style={{ animationDelay: "0.15s" }}>
            <p className="card-label">Availability</p>
            <h3>Lorem ipsum weekly</h3>
            <ul className="card-list">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Consectetur adipiscing elit.</li>
              <li>Sed do eiusmod tempor.</li>
            </ul>
            <a className="text-link" href="#contact">
              Lorem ipsum dolor
            </a>
          </aside>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-label">Services</p>
                <h2>Lorem ipsum dolor sit amet.</h2>
              </div>
              <p className="section-copy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>

            <div className="cards stagger">
              {services.map((service, index) => (
                <article key={service.title} className="card" style={{ animationDelay: `${index * 0.12}s` }}>
                  <h3>{service.title}</h3>
                  <p className="muted">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section alt">
          <div className="container split">
            <div className="fade-up">
              <p className="section-label">About</p>
              <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
              <p className="muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <div className="about-grid">
                <div>
                  <strong>10+</strong>
                  <span>Lorem ipsum</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>Dolor sit</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Consectetur</span>
                </div>
              </div>
            </div>

            <div id="process" className="split-panel fade-up" style={{ animationDelay: "0.12s" }}>
              <p className="section-label">Process</p>
              <h3>Lorem ipsum steps</h3>
              <div className="step-list">
                {steps.map((step, index) => (
                  <div key={step.title} className="step fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="step-number">{index + 1}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p className="muted">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-label">Testimonials</p>
                <h2>Lorem ipsum dolor sit amet.</h2>
              </div>
            </div>

            <div className="cards stagger">
              {testimonials.map((item, index) => (
                <article key={item.name} className="card" style={{ animationDelay: `${index * 0.12}s` }}>
                  <p className="quote">"{item.quote}"</p>
                  <div className="quote-meta">
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div className="contact-copy fade-up">
              <p className="section-label">Contact</p>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p className="muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <div className="contact-details">
                <div>
                  <span className="detail-label">Email</span>
                  <span>{email}</span>
                </div>
                <div>
                  <span className="detail-label">Phone</span>
                  <span>+1 (000) 000-0000</span>
                </div>
                <div>
                  <span className="detail-label">Location</span>
                  <span>Lorem City, XX</span>
                </div>
              </div>
            </div>

            <form className="contact-form fade-up" style={{ animationDelay: "0.12s" }}>
              <label>
                Name
                <input type="text" name="name" placeholder="Lorem ipsum" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="Lorem ipsum" />
              </label>
              <label>
                Message
                <textarea name="message" placeholder="Lorem ipsum dolor sit amet." rows={4} />
              </label>
              <button className="btn primary" type="submit">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>Copyright 2024 Your Name. Lorem ipsum dolor sit amet.</span>
        <a className="text-link" href={`mailto:${email}`}>
          {email}
        </a>
      </footer>
    </div>
  );
}
