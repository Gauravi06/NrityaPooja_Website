"use client";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "90vh", minHeight: 400, display: "flex", alignItems: "flex-end", padding: "0 5% 4rem" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/pooja-b&w.jpeg" alt="" fill
            style={{ objectFit: "cover", objectPosition: "center 60%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(26,10,10,0.3) 0%, rgba(26,10,10,0.95) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <p style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9963a", marginBottom: "0.6rem" }}>About</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.2rem,6vw,4rem)", color: "#fdf6ee" }}>Pooja Kukreja</h1>
        </div>
      </section>

      {/* Bio */}
      <section style={{ padding: "6rem 5%", background: "#fdf6ee" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "5rem", alignItems: "stretch" }} className="about-grid">
          <AnimateIn direction="left">
            <div style={{ position: "relative", height: "100%" }}>
              <Image
                src="/images/pooja-spin-clean.jpg"
                alt="Pooja Kukreja"
                width={700}
                height={1070}
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center center", display: "block", background: "#fdf6ee" }}
              />
              <div style={{ position: "absolute", bottom: -16, right: -16, width: "65%", height: "95%", border: "2px solid #c9963a", zIndex: -1 }} />
            </div>
          </AnimateIn>
          <AnimateIn direction="right" delay={0.15}>
            <p style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9963a", marginBottom: "0.6rem" }}>My Story</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#1a0a0a", marginBottom: "1rem", lineHeight: 1.2 }}>A lifelong devotion<br />to the art of Kathak</h2>
            <div style={{ width: 40, height: 2, background: "#c9963a", marginBottom: "2rem" }} />
            {[
              "My journey with Kathak began at a young age — not with grand ambitions, but simply as a young student looking for a small escape from the routine of school, studies, and everyday life. What started as just an evening activity slowly became the most meaningful part of my life.",
              "Over the past 13 years, I have trained under Guru Megha Chaudhary in the Lucknow Gharana of Kathak and worked towards earning my Nritya Visharad degree in Indian classical dance.",
              "After years of teaching at Anuradha Natya Kalamandir, St. Xavier's School, and through independently conducted workshops, I founded Nrityapooja's Kathak Studio — a space where students can experience not only the technique and discipline of Kathak, but also the joy, confidence, expression, and connection that dance can bring into one's life.",
              "Through my classes, I hope to help students discover the same passion and sense of belonging that Kathak gave me. Whether it's a young student trying something new or someone older looking to reconnect with themselves through art, I believe Kathak has something meaningful to offer everyone."
            ].map((p, i) => (
              <p key={i} style={{ color: "#7a5a4a", lineHeight: 1.85, fontSize: "1rem", marginBottom: "1.2rem" }}>{p}</p>
            ))}
          </AnimateIn>
        </div>
      </section>

      {/* Training & Experience */}
      <section style={{ background: "#1a0a0a", padding: "6rem 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn>
            <p style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9963a", marginBottom: "0.6rem" }}>Training & Achievements</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.6rem)", color: "#fdf6ee", marginBottom: "0.8rem" }}>Built on years of dedication</h2>
            <div style={{ width: 40, height: 2, background: "#c9963a", marginBottom: "3.5rem" }} />
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }} className="two-col">
            <AnimateIn direction="left" delay={0.1}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#e8b85a", fontSize: "1.2rem", marginBottom: "1.5rem" }}>Training</h3>
              {[
                ["Gharana", "Lucknow Gharana"],
                ["Guru", "Megha Chaudhary"],
                ["Duration", "13 years formal training"],
                ["Qualification", "Nritya Visharad Degree"],
                ["Aspiration", "M.A. in Kathak (pursuing)"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", gap: "1.5rem", marginBottom: "1.2rem", paddingBottom: "1.2rem", borderBottom: "1px solid rgba(201,150,58,0.12)" }}>
                  <span style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9963a", minWidth: 100, paddingTop: "2px" }}>{k}</span>
                  <span style={{ color: "#c8b0a0", fontSize: "0.95rem" }}>{v}</span>
                </div>
              ))}
            </AnimateIn>
            <AnimateIn direction="right" delay={0.2}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#e8b85a", fontSize: "1.2rem", marginBottom: "1.5rem" }}>Experience</h3>
              {[
                ["Nrityapooja's Kathak Studio", "Founder & Instructor · 1 Year"],
                ["Anuradha Nritya Kala Mandir", "Kathak Instructor · 5 Years"],
                ["St. Xavier's School", "Kathak Teacher · 1 Year"],
                ["Workshops", "3 Kathak workshops conducted"],
                ["Private Coaching", "Students of all age groups"],
              ].map(([role, detail]) => (
                <div key={role} style={{ marginBottom: "1.2rem", paddingBottom: "1.2rem", borderBottom: "1px solid rgba(201,150,58,0.12)" }}>
                  <p style={{ color: "#fdf6ee", fontSize: "0.95rem", marginBottom: "0.2rem" }}>{role}</p>
                  <p style={{ color: "#9a7a6a", fontSize: "0.82rem" }}>{detail}</p>
                </div>
              ))}
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        minHeight: "500px",
        padding: "5rem 5%",
      }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/tabla.jpeg" alt="" fill
            style={{ objectFit: "cover", objectPosition: "center 40%" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(26,10,10,0.55)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 20, width: "38%", marginLeft: "auto" }}>
          <AnimateIn>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", color: "#e8b85a", fontSize: "1.6rem", marginBottom: "1.2rem" }}>Follow the journey</p>
              <div style={{ width: 40, height: 2, background: "#c9963a", margin: "0 auto 1.8rem" }} />
              <p style={{ color: "#fdf6ee", fontSize: "1.05rem", lineHeight: 1.8, margin: "0 auto 2.2rem", maxWidth: 320 }}>
                Behind the scenes, student moments, and performances — all on Instagram.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a href="https://www.instagram.com/nrityapoojaskathakstudio_" target="_blank" rel="noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.7rem", padding: "0.9rem 2.2rem", border: "1px solid #c9963a", color: "#c9963a", fontFamily: "'Lato',sans-serif", fontWeight: 400, fontSize: "0.82rem", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", background: "transparent", backdropFilter: "blur(4px)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#c9963a"; (e.currentTarget as HTMLAnchorElement).style.color = "#1a0a0a"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#c9963a"; }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  @nrityapoojaskathakstudio_
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid, .two-col { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </>
  );
}