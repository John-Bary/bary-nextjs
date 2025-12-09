"use client";

import { useEffect, useRef } from "react";

export function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enableDamping = true;

    const geo = new THREE.SphereGeometry(1, 64, 64);
    const sphere = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({
        color: 0x25d6c8,
        emissive: 0x0c9486,
        emissiveIntensity: 0.35,
        metalness: 0.15,
        roughness: 0.35,
        transparent: true,
        opacity: 0.95,
      })
    );

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(geo),
      new THREE.LineBasicMaterial({ color: 0x5eead4, opacity: 0.35, transparent: true })
    );

    const glow = new THREE.Mesh(
      geo.clone(),
      new THREE.MeshBasicMaterial({
        color: 0x25d6c8,
        transparent: true,
        opacity: 0.08,
        side: THREE.BackSide,
      })
    );
    glow.scale.multiplyScalar(1.08);

    const light = new THREE.DirectionalLight(0xffffff, 0.9);
    light.position.set(2, 2, 3);
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);

    scene.add(sphere, wire, glow, light, ambient);

    const resize = () => {
      const width = canvas.clientWidth || 320;
      const height = canvas.clientHeight || Math.max(260, width * 0.6);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);

    let frame: number;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      sphere.rotation.y += 0.001;
      wire.rotation.y += 0.001;
      glow.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
      controls.dispose();
      geo.dispose();
      wire.geometry.dispose();
      (wire.material as THREE.Material).dispose();
      (sphere.material as THREE.Material).dispose();
      (glow.material as THREE.Material).dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="glass-card overflow-hidden px-4 py-4 sm:px-6 sm:py-6">
      <div className="relative w-full h-[260px] sm:h-[320px]">
        <canvas ref={canvasRef} className="w-full h-full" aria-label="Interactive globe" />
        <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]" />
      </div>
    </div>
  );
}
