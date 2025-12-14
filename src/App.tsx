import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

export default function App() {
  const [pos, setPos] = useState<Point>({ x: 0, y: 0 });
  const velocity = useRef<Point>({ x: 120, y: 90 }); // px per second
  const frameRef = useRef<number | null>(null);
  const lastTime = useRef<number | null>(null);

  useEffect(() => {
    const pad = 120; // keep the button within view
    const randomizeVelocity = () => {
      const speed = () => 80 + Math.random() * 120;
      const direction = Math.random() > 0.5 ? 1 : -1;
      velocity.current = { x: speed() * direction, y: speed() * -direction };
    };

    randomizeVelocity();

    const step = (time: number) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      if (lastTime.current === null) lastTime.current = time;
      const deltaSec = Math.min((time - lastTime.current) / 1000, 0.05);
      lastTime.current = time;

      setPos((prev) => {
        let { x, y } = prev;
        x += velocity.current.x * deltaSec;
        y += velocity.current.y * deltaSec;

        // bounce on edges with padding
        if (x > vw - pad) {
          x = vw - pad;
          velocity.current.x *= -1;
        } else if (x < pad) {
          x = pad;
          velocity.current.x *= -1;
        }

        if (y > vh - pad) {
          y = vh - pad;
          velocity.current.y *= -1;
        } else if (y < pad) {
          y = pad;
          velocity.current.y *= -1;
        }

        return { x, y };
      });

      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <main className="screen">
      <div className="orb" aria-hidden />
      <a
        className="floating-button"
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
        href="mailto:bary@gmx.lt"
        aria-label="Email bary@gmx.lt"
      >
        <span className="label">Email</span>
        <span className="address">bary@gmx.lt</span>
      </a>
    </main>
  );
}
