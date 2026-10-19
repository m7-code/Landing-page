import React from "react";
import { C, DONATE_URL } from "../theme"; // Path apne hisaab se check kar lein

export default function Footer() {
  return (
    <footer
      style={{
        background: "#141b4a", // Deep dark blue matching the image
        color: "#fff",
        padding: "40px 0 30px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1290,
          margin: "0 auto",
          padding: "0 clamp(20px, 3vw, 36px)",
        }}
      >
        {/* ================= TOP ROW ================= */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            paddingBottom: 24,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <p style={{ margin: 0, fontSize: 16, fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>
            A New Haiti is a nonprofit organization.
          </p>
          <a
            href={DONATE_URL}
            style={{
              background: C.gold,
              color: "#141b4a",
              padding: "10px 28px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
            onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
          >
            Donate Now
          </a>
        </div>

        {/* ================= BOTTOM ROW ================= */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            paddingTop: 24,
          }}
        >
          {/* Social Icons */}
          <div style={{ display: "flex", gap: 12 }}>
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={iconStyle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={iconStyle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* TikTok */}
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" style={iconStyle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a href="https://x.com" target="_blank" rel="noreferrer" style={iconStyle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer" style={iconStyle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
          </div>

          {/* Copyright Text */}
          <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,0.6)", textAlign: "right" }}>
            &copy; {new Date().getFullYear()} A New Haiti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Common Icon Style
const iconStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 36,
  height: 36,
  borderRadius: "50%",
  background: "rgba(255,255,255,0.1)",
  color: "#fff",
  textDecoration: "none",
  transition: "background 0.2s ease",
};