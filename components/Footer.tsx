import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0f0505", borderTop: "1px solid rgba(201,150,58,0.15)", padding: "3rem 5% 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "2.5rem", marginBottom: "2.5rem" }}>
        <div>
          <p style={{ fontFamily: "'Playfair Display',serif", color: "#c9963a", fontSize: "1.2rem", marginBottom: "0.5rem" }}>Nrityapooja's</p>
          <p style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8b85a", marginBottom: "1rem" }}>Kathak Studio</p>
          <p style={{ color: "#7a5a4a", fontSize: "0.88rem", lineHeight: 1.7 }}>Classical Kathak in the<br />Lucknow Gharana tradition.<br />Amravati, Maharashtra.</p>
        </div>
        <div>
          <p style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9963a", marginBottom: "1.2rem" }}>Navigate</p>
          {["/", "/about", "/classes", "/gallery"].map((href, i) => (
            <Link key={href} href={href} style={{ display: "block", color: "#9a7a6a", fontSize: "0.88rem", marginBottom: "0.6rem", textDecoration: "none" }}>
              {["Home", "About", "Classes", "Gallery" ][i]}
            </Link>
          ))}
        </div>
        <div>
          <p style={{ fontFamily: "'Lato',sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9963a", marginBottom: "1.2rem" }}>Connect</p>
          <a href="https://www.instagram.com/nrityapoojaskathakstudio_" target="_blank" rel="noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#e8b85a", fontSize: "0.88rem", textDecoration: "none", marginBottom: "1rem" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            @nrityapoojaskathakstudio_
          </a>
          <p style={{ color: "#9a7a6a", fontSize: "0.88rem" }}>📞 +91 94034 93219</p>
          <p style={{ color: "#9a7a6a", fontSize: "0.88rem", marginTop: "0.4rem" }}>✉️ poojaakukreja07@gmail.com</p>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(201,150,58,0.1)", paddingTop: "1.5rem", textAlign: "center", color: "#5a3a2a", fontSize: "0.78rem", letterSpacing: "0.05em" }}>
        © 2025 Nrityapooja's Kathak Studio · Amravati · All rights reserved
      </div>
    </footer>
  );
}
