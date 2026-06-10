"use client";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

const classes = [
  {
    badge: "Beginners",
    title: "Foundation Batch",
    desc: "The perfect starting point for anyone curious about Kathak. Students learn the fundamental footwork (tatkaar), hand gestures (hastas), body posture, and simple compositions. Classes are structured to be encouraging, fun, and age-appropriate.",
    details: [
      ["Age Group", "5 years and above"],
      ["Schedule", "Monday to Friday · 8:00 PM – 9:00 PM"],
      ["Duration", "1 hour per class"],
      ["Prior Experience", "None required"],
    ],
  },
  {
    badge: "Advanced",
    title: "Advanced Batch",
    desc: "For students who have prior Kathak training and wish to continue, restart, or prepare for examinations under Akhil Bharatiya Gandharva Mahavidyalaya Mandal. Also ideal for those rejoining after a break or aiming for stage performances. Covers classical compositions, expressive abhinaya, and performance-readiness.",
    details: [
      ["Age Group", "12 years and above"],
      ["Schedule", "Flexible · By mutual availability"],
      ["Duration", "1.5–2 hours per session"],
      ["Prior Experience", "By assessment"],
    ],
  },
];

export default function Classes() {
  return (
    <>
      <section style={{ position: "relative", minHeight: "100vh", padding: "8rem 5%" }}>
        {/* Background */}
        <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
          <Image src="/images/ghungroo.png" alt="" fill
            style={{ objectFit: "cover", objectPosition: "center 70%" }} priority />
          <div style={{ position: "absolute", inset: 0, background: "rgba(253,246,238,0.15)" }} />
        </div>

        {/* Page Title */}
        <AnimateIn>
          <div style={{ position: "relative", zIndex: 2, textAlign: "center", marginBottom: "5rem" }}>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.2rem,6vw,4rem)", color: "#fdf6ee", textShadow: "0 2px 10px rgba(0,0,0,0.9)" }}>Find Your Batch</h1>
            <div style={{ width: 40, height: 2, background: "#c9963a", margin: "1rem auto 0" }} />
          </div>
        </AnimateIn>

        {/* Cards */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: "3rem" }}>
          {classes.map((c, i) => (
            <AnimateIn key={c.title} delay={i * 0.15}>
              <div style={{
                background: "rgba(253,246,238,0.82)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(201,150,58,0.35)",
                padding: "3rem",
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: "3rem",
                alignItems: "start"
              }} className="class-row">
                {/* Left: text */}
                <div>
                  <span style={{ display: "inline-block", background: "#c9963a", color: "#1a0a0a", fontFamily: "'Lato',sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", padding: "0.3rem 0.8rem", marginBottom: "1.2rem" }}>{c.badge}</span>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.9rem", color: "#1a0a0a", marginBottom: "1rem" }}>{c.title}</h2>
                  <div style={{ width: 30, height: 2, background: "#c9963a", marginBottom: "1.2rem" }} />
                  <p style={{ color: "#3a1a0a", lineHeight: 1.85, fontSize: "0.97rem" }}>{c.desc}</p>
                </div>
                {/* Right: details */}
                <div>
                  {c.details.map(([k, v]) => (
                    <div key={k} style={{ marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(201,150,58,0.25)" }}>
                      <p style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9963a", marginBottom: "0.25rem" }}>{k}</p>
                      <p style={{ color: "#1a0a0a", fontSize: "0.95rem" }}>{v}</p>
                    </div>
                  ))}
                  <a href={`https://wa.me/919403493219?text=Hi%20Pooja!%20I%27m%20interested%20in%20the%20${encodeURIComponent(c.title)}`}
                    target="_blank" rel="noreferrer"
                    style={{ display: "block", textAlign: "center", marginTop: "1.5rem", padding: "0.75rem", background: "#c9963a", color: "#1a0a0a", fontFamily: "'Lato',sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
                    Message to Enquire
                  </a>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .class-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </>
  );
}