"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/gallery", label: "Gallery" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .logo-shimmer {
          background: linear-gradient(90deg, #c9963a 0%, #c9963a 35%, #fff8e7 50%, #c9963a 65%, #c9963a 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .logo-sub {
          background: linear-gradient(90deg, #e8b85a 0%, #e8b85a 35%, #fffde7 50%, #e8b85a 65%, #e8b85a 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        * { cursor: none !important; }
        .custom-cursor {
          width: 10px; height: 10px;
          background: #c9963a;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease, width 0.2s ease, height 0.2s ease, background 0.2s ease;
        }
        .custom-cursor-ring {
          width: 32px; height: 32px;
          border: 1px solid rgba(201,150,58,0.6);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          transition: left 0.12s ease, top 0.12s ease, width 0.2s ease, height 0.2s ease;
        }
        .hidden-mobile { display: flex !important; }
        .show-mobile { display: none !important; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>

      {/* Custom cursor */}
      <CustomCursor />

      <nav style={{
        position: "fixed", top: 0, left: 0, width: "100%", zIndex: 200,
        transition: "background 0.4s, padding 0.4s",
        background: scrolled ? "rgba(26,10,10,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        padding: scrolled ? "0.8rem 5%" : "1.4rem 5%",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        borderBottom: scrolled ? "1px solid rgba(201,150,58,0.15)" : "none",
      }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Circle logo */}
          <div style={{
            width: 42, height: 42, borderRadius: "50%",
            overflow: "hidden", border: "1.5px solid rgba(201,150,58,0.6)",
            flexShrink: 0, position: "relative"
          }}>
            <Image src="/images/pooja-candlelit-clean.jpg" alt="Nrityapooja's" fill
              style={{ objectFit: "cover", objectPosition: "center 20%" }} />
          </div>
          {/* Shimmer text */}
          <span style={{ lineHeight: 1.2, display: "block" }}>
            <span className="logo-shimmer" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.15rem", letterSpacing: "0.05em", display: "block"
            }}>
              Nrityapooja's
            </span>
            <span className="logo-sub" style={{
              fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase",
              fontFamily: "'Lato', sans-serif", fontWeight: 300, display: "block"
            }}>
              Kathak Studio
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: "2.2rem", listStyle: "none", alignItems: "center" }}
            className="hidden-mobile">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} style={{
                textDecoration: "none",
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase",
                color: pathname === l.href ? "#c9963a" : "#fdf6ee",
                opacity: pathname === l.href ? 1 : 0.75,
                borderBottom: pathname === l.href ? "1px solid #c9963a" : "none",
                paddingBottom: "2px",
                transition: "color 0.2s, opacity 0.2s",
              }}>{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)}
          className="show-mobile"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
          <div style={{ width: 24, height: 2, background: "#c9963a", marginBottom: 5, transition: "transform 0.3s", transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <div style={{ width: 24, height: 2, background: "#c9963a", marginBottom: 5, opacity: open ? 0 : 1, transition: "opacity 0.3s" }} />
          <div style={{ width: 24, height: 2, background: "#c9963a", transition: "transform 0.3s", transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>

        {/* Mobile menu */}
        {open && (
          <div style={{
            position: "fixed", top: 0, left: 0, width: "100%", height: "100vh",
            background: "rgba(26,10,10,0.98)", display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "2.5rem", zIndex: 199,
          }}>
            <button onClick={() => setOpen(false)} style={{ position: "absolute", top: "1.5rem", right: "5%", background: "none", border: "none", cursor: "pointer", color: "#c9963a", fontSize: "1.5rem" }}>✕</button>
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#fdf6ee",
                textDecoration: "none", letterSpacing: "0.05em",
              }}>{l.label}</Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveDot = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const moveRing = (e: MouseEvent) => setRing({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveDot);
    window.addEventListener("mousemove", moveRing);
    return () => {
      window.removeEventListener("mousemove", moveDot);
      window.removeEventListener("mousemove", moveRing);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" style={{ left: pos.x, top: pos.y }} />
      <div className="custom-cursor-ring" style={{ left: ring.x, top: ring.y }} />
    </>
  );
}