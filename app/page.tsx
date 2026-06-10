"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/ghungroo.png" alt="" fill style={{ objectFit: "cover", objectPosition: "center 65%" }} priority />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(26,10,10,0.35) 0%, rgba(26,10,10,0.20) 50%, rgba(26,10,10,0.70) 100%)" }} />
        </div>
        {[200, 340, 480, 630].map((size, i) => (
          <motion.div key={i}
            style={{ position: "absolute", width: size, height: size, borderRadius: "50%", border: "1px solid rgba(201,150,58,0.4)", pointerEvents: "none" }}
            animate={{ scale: [0.88, 1.12], opacity: [0, 0.4, 0] }}
            transition={{ duration: 4, delay: i * 1, repeat: Infinity, ease: "easeOut" }}
          />
        ))}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "8rem 5% 4rem", maxWidth: 760 }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9963a", marginBottom: "1.4rem" }}>
            Lucknow Gharana · Classical Kathak
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(3rem,8vw,6rem)", color: "#fdf6ee", lineHeight: 1.05, marginBottom: "0.6rem" }}>
            Pooja Kukreja
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "clamp(1.1rem,3vw,1.6rem)", color: "#e8b85a", marginBottom: "2rem" }}>
            Where every beat tells a story
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            style={{ color: "#c8b0a0", fontSize: "1rem", lineHeight: 1.8, maxWidth: 520, margin: "0 auto 3rem" }}>
            13 years of rigorous training. A Nritya Visharad degree. A studio built with love.<br />
            Join Nrityapooja's Kathak Studio in Amravati.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            
          </motion.div>
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
          style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", color: "#c9963a", fontSize: "1.2rem" }}>↓</motion.div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: "#1a0a0a", padding: "4rem 5%", borderTop: "1px solid rgba(201,150,58,0.15)", borderBottom: "1px solid rgba(201,150,58,0.15)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "2rem", textAlign: "center" }}>
          {[
            { num: "13", label: "Years of Training" },
            { num: "5+", label: "Years Teaching" },
            { num: "3", label: "Workshops Conducted" },
            { num: "50+", label: "Students Mentored" },
          ].map(s => (
            <AnimateIn key={s.label}>
              <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.8rem", color: "#c9963a", lineHeight: 1 }}>{s.num}</p>
              <p style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a7a6a", marginTop: "0.5rem" }}>{s.label}</p>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── FEATURED SPLIT ── */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh" }} className="split-section">
        <div style={{ position: "relative", minHeight: 600 }}>
          <Image src="/images/nataraja.png" alt="Nataraja" fill loading="eager" sizes="50vw"
            style={{ objectFit: "cover", objectPosition: "center top" }} />
        </div>
        <div style={{ background: "#fdf6ee", display: "flex", alignItems: "center", padding: "5rem 8% 5rem 6%" }}>
          <AnimateIn direction="left">
            <p style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9963a", marginBottom: "0.8rem" }}>Classical · Expressive · Joyful</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#1a0a0a", lineHeight: 1.2, marginBottom: "1.2rem" }}>
              The art of Kathak,<br />passed with care
            </h2>
            <div style={{ width: 40, height: 2, background: "#c9963a", marginBottom: "1.8rem" }} />
            <p style={{ color: "#7a5a4a", lineHeight: 1.85, fontSize: "1rem", marginBottom: "2rem" }}>
              Kathak derives its spirit from the phrase <b>“कथा कहे सो कथक कहलावे,”</b> meaning <i>'one who narrates a story is known as a Kathakar'.</i> This legacy is honoured by nurturing not only dance skills, but also the art of expression, emotion, and storytelling.
             I aim to bring my unique style and to pass on my passion with every class. Whether you are five or fifty, a complete beginner or preparing for your Visharad, there is a place for you here.
            </p>
            <Link href="/about" style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9963a", textDecoration: "none", borderBottom: "1px solid #c9963a", paddingBottom: "2px" }}>
              Know more about Me →
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── NATARAJA CTA ── */}
      <section style={{ background: "linear-gradient(to right, #2a1a0a 0%, #1a0a0a 60%)", borderTop: "1px solid rgba(201,150,58,0.15)", padding: "6rem 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="nataraja-grid">
          <AnimateIn direction="left">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src="/images/pooja-candlelit-clean.jpg" alt="A glimpse" width={580} height={580}
                style={{ objectFit: "contain" }} />
            </div>
          </AnimateIn>
          <AnimateIn direction="right" delay={0.15}>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "1.4rem", color: "#e8b85a", marginBottom: "1rem" }}>Begin your Kathak journey today</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fdf6ee", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Your first class is just<br />a message away
            </h2>
            <div style={{ width: 40, height: 2, background: "#c9963a", marginBottom: "1.8rem" }} />
            <p style={{ color: "#9a7a6a", lineHeight: 1.8, fontSize: "1rem", marginBottom: "2.5rem" }}>
              Every journey in Kathak begins with a single step—and often, a simple conversation. Whether you're exploring the art for the first time or seeking a deeper connection with it, I'd be happy to listen, answer your questions, and help you find your place in this tradition.

            </p>
            <a href="https://wa.me/919403493219?text=Hi%20Pooja!%20I%27m%20interested%20in%20joining%20Kathak%20classes." target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.95rem 2.4rem", background: "#c9963a", color: "#1a0a0a", fontFamily: "'Lato',sans-serif", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Me
            </a>
          </AnimateIn>
        </div>
      </section>
      <style>{`
        @media (max-width: 768px) {
          .split-section { grid-template-columns: 1fr !important; }
          .nataraja-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}