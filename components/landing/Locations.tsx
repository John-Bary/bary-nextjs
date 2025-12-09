"use client";

import Image from "next/image";
<<<<<<< HEAD
import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";

type LocationSpot = {
  id: string;
  city: string;
  country: string;
  note: string;
  position: { x: number; y: number };
};

export function Locations() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const locations = useMemo<LocationSpot[]>(
    () => [
      {
        id: "adeje",
        city: "Costa Adeje",
        country: "Tenerife, Spain",
        note: t.locations.spots[0].note,
        position: { x: 43, y: 37 },
      },
      {
        id: "london",
        city: "London",
        country: "United Kingdom",
        note: t.locations.spots[1].note,
        position: { x: 50, y: 30 },
      },
      {
        id: "vilnius",
        city: "Vilnius",
        country: "Lithuania",
        note: t.locations.spots[2].note,
        position: { x: 57, y: 28 },
      },
    ],
    [t.locations.spots],
  );

  const [activeId, setActiveId] = useState(locations[0]?.id ?? "");
  const activeLocation = locations.find((location) => location.id === activeId) ?? locations[0];

  const channels = t.locations.contactCards;

  return (
    <section id="locations" className="py-24 md:py-32 relative overflow-hidden">
      <div className="floating-orb hidden sm:block w-[600px] h-[600px] bg-primary/10 top-16 -left-40 animate-pulse-glow" />
      <div className="floating-orb hidden sm:block w-[500px] h-[500px] bg-secondary/40 -bottom-16 -right-20" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t.locations.badge}
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
=======
import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";

export function Locations() {
  const { t } = useI18n();
  const [activeId, setActiveId] = useState(t.locations.locations[0].id);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const activeLocation = t.locations.locations.find((loc) => loc.id === activeId) ?? t.locations.locations[0];

  useEffect(() => {
    if (typeof window === "undefined") return;
    const THREE = (window as any).THREE;
    const OrbitControls = (window as any).THREE?.OrbitControls;
    if (!THREE || !OrbitControls || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 3);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;
    controls.enableDamping = true;

    const baseGeometry = new THREE.SphereGeometry(1, 64, 64);
    const sphere = new THREE.Mesh(
      baseGeometry,
      new THREE.MeshStandardMaterial({
        color: 0x25d6c8,
        emissive: 0x0c9486,
        emissiveIntensity: 0.4,
        metalness: 0.1,
        roughness: 0.3,
        transparent: true,
        opacity: 0.9,
      })
    );
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(baseGeometry),
      new THREE.LineBasicMaterial({ color: 0x5eead4, linewidth: 1, opacity: 0.4, transparent: true })
    );
    const glow = new THREE.Mesh(
      baseGeometry.clone(),
      new THREE.MeshBasicMaterial({
        color: 0x25d6c8,
        transparent: true,
        opacity: 0.08,
        side: THREE.BackSide,
      })
    );
    glow.scale.multiplyScalar(1.06);

    const light = new THREE.DirectionalLight(0xffffff, 0.9);
    light.position.set(2, 2, 3);
    const ambient = new THREE.AmbientLight(0xffffff, 0.35);

    scene.add(sphere, wire, glow, light, ambient);

    const resize = () => {
      const { clientWidth } = canvas;
      const height = Math.max(canvas.clientHeight || clientWidth * 0.6, 260);
      renderer.setSize(clientWidth, height, false);
      camera.aspect = clientWidth / height;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);

    let animationFrame: number;
    const animate = () => {
      animationFrame = requestAnimationFrame(animate);
      sphere.rotation.y += 0.0008;
      wire.rotation.y += 0.0008;
      glow.rotation.y += 0.0008;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
      controls.dispose();
      baseGeometry.dispose();
      wire.geometry.dispose();
      (glow.geometry as THREE.BufferGeometry).dispose();
      (wire.material as THREE.Material).dispose();
      (sphere.material as THREE.Material).dispose();
      (glow.material as THREE.Material).dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section id="locations" className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t.locations.badge}
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
>>>>>>> a94b011 (some changes)
            {t.locations.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.locations.description}
          </p>
<<<<<<< HEAD
        </motion.div>

        <div className="glass-card overflow-hidden p-6 sm:p-10">
          <div className="relative rounded-3xl border border-border/60 bg-secondary/40 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#94a3b830_1px,transparent_1px)] bg-[length:28px_28px] opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <Image
                src="/world-map.svg"
                alt="World map"
                width={1600}
                height={900}
                className="w-full h-[360px] sm:h-[420px] object-cover"
                priority
              />

              {locations.map((location, index) => (
                <motion.button
                  key={location.id}
                  type="button"
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${location.position.x}%`, top: `${location.position.y}%` }}
                  onMouseEnter={() => setActiveId(location.id)}
                  onFocus={() => setActiveId(location.id)}
                  aria-label={`${location.city}, ${location.country}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <span className="absolute inset-0 w-16 h-16 -left-6 -top-6 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute inset-0 w-10 h-10 -left-4 -top-4 rounded-full bg-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute inset-0 w-6 h-6 -left-2 -top-2 rounded-full bg-primary/40 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center justify-center w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30 ring-4 ring-primary/30" />
                </motion.button>
              ))}

              <AnimatePresence>
                {activeLocation && (
                  <motion.div
                    key={activeLocation.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.35 }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[min(520px,90%)]"
                  >
                    <div className="glass-card bg-background/90 border border-border/60 rounded-2xl px-5 py-4 shadow-xl shadow-black/10 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-primary font-medium tracking-wide uppercase mb-1">
                          {activeLocation.country}
                        </div>
                        <div className="text-2xl font-heading font-semibold">{activeLocation.city}</div>
                        <p className="text-muted-foreground mt-2 leading-relaxed">{activeLocation.note}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="glass-card h-full p-6 flex flex-col gap-2"
            >
              <div className="text-sm text-muted-foreground">{channel.label}</div>
              <a
                href={channel.href}
                className="font-heading text-xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                {channel.value}
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2">{channel.description}</p>
            </motion.div>
          ))}
=======
        </div>

        <div className="relative bg-secondary/40 border border-border rounded-3xl overflow-hidden">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <Image
              src="/worldwide-connection-gray-background-illustration-vector.png"
              alt="Map of our locations"
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />

            {t.locations.locations.map((location) => (
              <button
                key={location.id}
                type="button"
                onClick={() => setActiveId(location.id)}
                aria-label={`${location.city}, ${location.country}`}
                className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/60 shadow-lg transition-transform ${
                  activeId === location.id ? "scale-110" : "hover:scale-105"
                }`}
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
              >
                <span className="w-full h-full rounded-full bg-primary/90 shadow-[0_0_0_6px_rgba(0,255,255,0.15)]" />
              </button>
            ))}
          </div>

          <div className="pointer-events-none">
            <div className="absolute left-0 right-0 bottom-0 px-4 sm:px-8 pb-4 sm:pb-8 flex justify-center">
              <div className="pointer-events-auto glass-card flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 max-w-xl w-full sm:w-auto shadow-xl">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{activeLocation.country}</p>
                  <p className="text-xl sm:text-2xl font-heading font-semibold">{activeLocation.city}</p>
                  <p className="text-sm text-muted-foreground">{activeLocation.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="glass-card p-4 sm:p-6">
            <canvas
              id="globe"
              ref={canvasRef}
              className="w-full h-64 sm:h-80 rounded-2xl bg-secondary/60"
            />
          </div>
>>>>>>> a94b011 (some changes)
        </div>
      </div>
    </section>
  );
}
