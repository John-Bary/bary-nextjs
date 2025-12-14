import { useLayoutEffect, useRef } from "react";

export default function App() {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const velocity = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);
  const lastTime = useRef<number | null>(null);
  const pad = 120; // keep the button within view

  useLayoutEffect(() => {
    const node = buttonRef.current;
    if (!node) return;

    const randomizeVelocity = () => {
      const speed = () => 60 + Math.random() * 80;
      const dir = () => (Math.random() > 0.5 ? 1 : -1);
      velocity.current = { x: speed() * dir(), y: speed() * dir() };
    };

    const setPosition = (x: number, y: number) => {
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    randomizeVelocity();

    const step = (time: number) => {
      if (lastTime.current === null) lastTime.current = time;
      const delta = Math.min((time - lastTime.current) / 1000, 0.02);
      lastTime.current = time;

      x += velocity.current.x * delta;
      y += velocity.current.y * delta;

      const maxX = window.innerWidth - pad;
      const minX = pad;
      const maxY = window.innerHeight - pad;
      const minY = pad;

      if (x > maxX) {
        x = maxX;
        velocity.current.x *= -1;
      } else if (x < minX) {
        x = minX;
        velocity.current.x *= -1;
      }

      if (y > maxY) {
        y = maxY;
        velocity.current.y *= -1;
      } else if (y < minY) {
        y = minY;
        velocity.current.y *= -1;
      }

      setPosition(x, y);
      frameRef.current = requestAnimationFrame(step);
    };

    setPosition(x, y);
    frameRef.current = requestAnimationFrame(step);

    const handleResize = () => {
      x = Math.min(Math.max(x, pad), window.innerWidth - pad);
      y = Math.min(Math.max(y, pad), window.innerHeight - pad);
      setPosition(x, y);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <main className="screen">
      <div className="orb" aria-hidden />
      <div className="bg-grid" aria-hidden />
      <div className="rings" aria-hidden />
      <div className="sparks" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <a className="floating-button" ref={buttonRef} href="mailto:bary@gmx.lt" aria-label="Email bary@gmx.lt">
        <span className="label">Email</span>
        <span className="address">bary@gmx.lt</span>
      </a>
    </main>
  );
}
