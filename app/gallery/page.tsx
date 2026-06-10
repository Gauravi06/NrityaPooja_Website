"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import AnimateIn from "@/components/AnimateIn";

const horizontalVideo = { src: "/videos/class1.mp4", label: "Choreography in Class", sublabel: "A glimpse into studio sessions" };

const verticalVideos = [
  { src: "/videos/exam1.mp4", label: "Exam Performance", sublabel: "Students at their examination" },
  { src: "/videos/exam2.mp4", label: "A Proud Moment", sublabel: "Watching them perform — confidently and passionately" },
  { src: "/videos/class2.mp4", label: "Footwork Drills", sublabel: "Tatkaar practice in class" },
];

const photos = [
  { src: "/images/pooja-spin-clean.jpg", label: "The Chakkar", sublabel: "Classical spin", rotate: -2, span: 2 },
  { src: "/images/pooja-sitting.jpg", label: "In Repose", sublabel: "Between movements", rotate: 1.5, span: 1 },
  { src: "/images/pooja-candlelit-clean.jpg", label: "Candlelit Abhinaya", sublabel: "Expression in light", rotate: -1, span: 1 },
  { src: "/images/ghungroo.png", label: "The Ghungroo", sublabel: "The bells of Kathak", rotate: 2, span: 1 },
  { src: "/images/pooja-forest-back.png", label: "In the Forest", sublabel: "Outdoor shoot", rotate: -1.5, span: 1 },
  { src: "/images/pooja-forest-front.png", label: "Flowing Skirt", sublabel: "Lehenga in motion", rotate: 1, span: 2 },
  { src: "/images/pooja-hands.png", label: "Mudra", sublabel: "Expressive hands", rotate: -2.5, span: 1 },
  { src: "/images/pooja-saree-clean.jpg", label: "Portrait", sublabel: "Pooja Kukreja", rotate: 1.5, span: 1 },
  { src: "/images/workshop-vijay1.jpg", label: "Workshop · Vijayakonvin", sublabel: "Teaching students", rotate: -1, span: 1 },
  { src: "/images/workshop-vijay2.jpg", label: "Workshop · Vijayakonvin", sublabel: "Hand gestures class", rotate: 2, span: 1 },
  { src: "/images/workshop-group.jpg", label: "Studio Workshop", sublabel: "Personal conducted workshop", rotate: -1.5, span: 2 },
  { src: "/images/award.jpg", label: "Felicitation", sublabel: "Recognition at Anuradha Nritya Kala Mandir", rotate: 1, span: 1 },
  { src: "/images/students-performance.jpg", label: "Before the Stage", sublabel: "Students before performance", rotate: -2, span: 1 },
  { src: "/images/students-exam.jpg", label: "After the Exam", sublabel: "First exam batch", rotate: 1.5, span: 1 },
  { src: "/images/gurupurnima.webp", label: "Guru Purnima", sublabel: "First ever Guru Purnima at Nrityapooja's Studio", rotate: -1, span: 2 },
];

function HorizontalVideoCard() {
  const [muted, setMuted] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMuted(m => { if (ref.current) ref.current.muted = !m; return !m; });
  };

  return (
    <>
      <div style={{ position: "relative", borderRadius: "2px", overflow: "hidden", cursor: "pointer", background: "#000" }} onClick={() => setExpanded(true)}>
        <video ref={ref} src={horizontalVideo.src} autoPlay muted loop playsInline
          style={{ width: "100%", aspectRatio: "16/9", objectFit: "contain", display: "block", background: "#000" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(26,10,10,0)", transition: "background 0.3s" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(26,10,10,0.3)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(26,10,10,0)"; }} />
        <button onClick={toggleMute}
          style={{ position: "absolute", top: "0.8rem", right: "0.8rem", background: "rgba(26,10,10,0.7)", border: "1px solid rgba(201,150,58,0.5)", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#c9963a", fontSize: "0.9rem", backdropFilter: "blur(4px)" }}>
          {muted ? "🔇" : "🔊"}
        </button>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(26,10,10,0.9), transparent)", padding: "2.5rem 1.2rem 1rem" }}>
          <p style={{ fontFamily: "'Playfair Display',serif", color: "#fdf6ee", fontSize: "1.05rem", marginBottom: "0.2rem" }}>{horizontalVideo.label}</p>
          <p style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.72rem", letterSpacing: "0.08em", color: "#c9963a" }}>{horizontalVideo.sublabel}</p>
        </div>
        <div style={{ position: "absolute", top: "0.8rem", left: "0.8rem", background: "rgba(201,150,58,0.15)", border: "1px solid rgba(201,150,58,0.4)", padding: "0.25rem 0.7rem" }}>
          <span style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", color: "#c9963a", textTransform: "uppercase" }}>Click to expand</span>
        </div>
      </div>

      {expanded && (
        <div onClick={() => setExpanded(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(10,4,4,0.97)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", cursor: "zoom-out" }}>
          <video src={horizontalVideo.src} autoPlay muted={muted} loop playsInline
            style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain" }} />
          <button onClick={() => setExpanded(false)}
            style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", color: "#c9963a", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>
        </div>
      )}
    </>
  );
}

function VerticalVideoCard({ video }: { video: typeof verticalVideos[0] }) {
  const [muted, setMuted] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMuted(m => { if (ref.current) ref.current.muted = !m; return !m; });
  };

  return (
    <>
      <div
        style={{ position: "relative", borderRadius: "2px", overflow: "hidden", cursor: "pointer", background: "#000", height: "100%" }}
        onClick={() => setExpanded(true)}
      >
        <video ref={ref} src={video.src} autoPlay muted loop playsInline
          style={{ width: "100%", aspectRatio: "9/16", objectFit: "cover", display: "block" }} />
        <div
          style={{ position: "absolute", inset: 0, background: "rgba(26,10,10,0)", transition: "background 0.3s" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(26,10,10,0.3)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(26,10,10,0)"; }}
        />
        <button onClick={toggleMute}
          style={{ position: "absolute", top: "0.8rem", right: "0.8rem", background: "rgba(26,10,10,0.7)", border: "1px solid rgba(201,150,58,0.5)", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#c9963a", fontSize: "0.9rem", backdropFilter: "blur(4px)" }}>
          {muted ? "🔇" : "🔊"}
        </button>
        <div style={{ position: "absolute", top: "0.8rem", left: "0.8rem", background: "rgba(201,150,58,0.15)", border: "1px solid rgba(201,150,58,0.4)", padding: "0.25rem 0.7rem" }}>
          <span style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", color: "#c9963a", textTransform: "uppercase" }}>Click to expand</span>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(26,10,10,0.9), transparent)", padding: "2rem 1rem 0.9rem" }}>
          <p style={{ fontFamily: "'Playfair Display',serif", color: "#fdf6ee", fontSize: "0.95rem", marginBottom: "0.15rem" }}>{video.label}</p>
          <p style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.72rem", letterSpacing: "0.08em", color: "#c9963a" }}>{video.sublabel}</p>
        </div>
      </div>

      {expanded && (
        <div onClick={() => setExpanded(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(10,4,4,0.97)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", cursor: "zoom-out" }}>
          <video src={video.src} autoPlay muted={muted} loop playsInline
            style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain" }} />
          <button onClick={() => setExpanded(false)}
            style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", color: "#c9963a", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>
        </div>
      )}
    </>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <style>{`
        .polaroid { transition: transform 0.35s ease, box-shadow 0.35s ease; }
        .polaroid:hover { transform: rotate(0deg) scale(1.04) translateY(-6px) !important; box-shadow: 0 20px 50px rgba(26,10,10,0.35) !important; }
        .polaroid .caption { opacity: 0; transition: opacity 0.3s; }
        .polaroid:hover .caption { opacity: 1; }
        @keyframes floatDot { 0%,100% { transform: translateY(0px); opacity:0.4; } 50% { transform: translateY(-18px); opacity:0.9; } }
        @media (max-width: 768px) {
          .vertical-grid { grid-template-columns: 1fr !important; }
          .photo-grid { columns: 1 !important; }
        }
      `}</style>

      {/* Floating gold particles */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        {[...Array(18)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            width: i % 3 === 0 ? 5 : 3,
            height: i % 3 === 0 ? 5 : 3,
            borderRadius: "50%",
            background: "#c9963a",
            left: `${(i * 17 + 5) % 100}%`,
            top: `${(i * 23 + 10) % 100}%`,
            animation: `floatDot ${3 + (i % 4)}s ease-in-out ${i * 0.4}s infinite`,
            opacity: 0.4,
          }} />
        ))}
      </div>

      {/* Videos Section */}
      <section style={{ background: "#1a0a0a", padding: "6rem 5%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn>
            <p style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9963a", marginBottom: "0.4rem" }}>In Motion</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#fdf6ee", marginBottom: "0.5rem" }}>Moments in Motion</h2>
            <div style={{ width: 40, height: 2, background: "#c9963a", marginBottom: "0.8rem" }} />
            <p style={{ color: "#7a5a4a", fontSize: "0.85rem", marginBottom: "3rem" }}>Tap 🔇 on any video to hear the music</p>
          </AnimateIn>

          <AnimateIn>
            <HorizontalVideoCard />
          </AnimateIn>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "3rem 0" }}>
            <div style={{ flex: 1, height: 1, background: "rgba(201,150,58,0.2)" }} />
            <span style={{ color: "#c9963a", fontSize: "1.2rem" }}>✦</span>
            <div style={{ flex: 1, height: 1, background: "rgba(201,150,58,0.2)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", alignItems: "stretch" }} className="vertical-grid">
            {verticalVideos.map((v, i) => (
              <AnimateIn key={v.src} delay={i * 0.12}>
                <VerticalVideoCard video={v} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div style={{ background: "#1a0a0a", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem 5%", position: "relative", zIndex: 1 }}>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, rgba(201,150,58,0.6))" }} />
        <div style={{ margin: "0 1.5rem", textAlign: "center" }}>
          <div style={{ width: 10, height: 10, background: "#c9963a", borderRadius: "50%", margin: "0 auto 0.3rem" }} />
          <div style={{ fontFamily: "'Cormorant Garamond',serif", color: "#c9963a", fontSize: "1.4rem" }}>✦</div>
          <div style={{ width: 10, height: 10, background: "#c9963a", borderRadius: "50%", margin: "0.3rem auto 0" }} />
        </div>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, rgba(201,150,58,0.6))" }} />
      </div>

      {/* Photos Section */}
      <section style={{ padding: "6rem 5%", background: "#fdf6ee", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimateIn>
            <p style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9963a", marginBottom: "0.4rem" }}>Photography</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#1a0a0a", marginBottom: "0.5rem" }}>Frames & Feelings</h2>
            <div style={{ width: 40, height: 2, background: "#c9963a", marginBottom: "3rem" }} />
          </AnimateIn>

          <div style={{ columns: "3 280px", gap: "2rem" }} className="photo-grid">
            {photos.map((p, i) => (
              <AnimateIn key={p.src} delay={i * 0.04}>
                <div className="polaroid" onClick={() => setLightbox(i)}
                  style={{
                    breakInside: "avoid",
                    marginBottom: "2rem",
                    cursor: "pointer",
                    transform: `rotate(${p.rotate}deg)`,
                    background: "#fff",
                    padding: "10px 10px 40px",
                    boxShadow: "0 6px 24px rgba(26,10,10,0.15)",
                  }}>
                  <Image src={p.src} alt={p.label} width={600} height={800}
                    style={{ width: "100%", height: "auto", display: "block" }} />
                  <div className="caption" style={{ paddingTop: "0.6rem", textAlign: "center" }}>
                    <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", color: "#1a0a0a", fontSize: "0.95rem", marginBottom: "0.15rem" }}>{p.label}</p>
                    <p style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.68rem", letterSpacing: "0.1em", color: "#c9963a" }}>{p.sublabel}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(10,4,4,0.97)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", cursor: "zoom-out" }}>
          <button onClick={e => { e.stopPropagation(); setLightbox(l => l !== null && l > 0 ? l - 1 : photos.length - 1); }}
            style={{ position: "absolute", left: "1.5rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "1px solid rgba(201,150,58,0.4)", color: "#c9963a", fontSize: "1.5rem", padding: "0.5rem 1rem", cursor: "pointer" }}>‹</button>
          <div style={{ maxHeight: "90vh", maxWidth: "80vw", textAlign: "center", background: "#fff", padding: "12px 12px 50px", boxShadow: "0 20px 60px rgba(0,0,0,0.8)", transform: `rotate(${photos[lightbox].rotate * 0.3}deg)` }}>
            <Image src={photos[lightbox].src} alt={photos[lightbox].label} width={900} height={1200}
              style={{ maxHeight: "75vh", maxWidth: "75vw", objectFit: "contain", display: "block", margin: "0 auto" }} />
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", color: "#1a0a0a", marginTop: "0.8rem", fontSize: "1rem" }}>{photos[lightbox].label}</p>
            <p style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.72rem", color: "#c9963a", marginTop: "0.2rem", letterSpacing: "0.08em" }}>{photos[lightbox].sublabel}</p>
          </div>
          <button onClick={e => { e.stopPropagation(); setLightbox(l => l !== null && l < photos.length - 1 ? l + 1 : 0); }}
            style={{ position: "absolute", right: "1.5rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "1px solid rgba(201,150,58,0.4)", color: "#c9963a", fontSize: "1.5rem", padding: "0.5rem 1rem", cursor: "pointer" }}>›</button>
          <button onClick={() => setLightbox(null)}
            style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", color: "#c9963a", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>
        </div>
      )}
    </>
  );
}