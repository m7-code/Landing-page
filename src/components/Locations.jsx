import { useState } from "react";
import { C } from "../theme";

const places = [
  { name: "Kissimmee, Florida", note: "Headquarters", q: "Kissimmee, Florida" },
  { name: "Titanyen, Haiti", note: "Community Initiative", q: "Titanyen, Haiti" },
  { name: "Fonds-Parisien, Haiti", note: "Community Initiative", q: "Fonds-Parisien, Haiti" },
  { name: "Figaro, Haiti", note: "Community Initiative", q: "Figaro, Haiti" },
];

export default function Locations() {
  const [i, setI] = useState(0);
  const p = places[i];

  return (
    <section
      id="locations"
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "clamp(60px, 8vw, 110px)",
        // Pillars wala exact blue background
        background: `
          radial-gradient(circle at 6% 22%, rgba(255,255,255,0.07) 0 70px, transparent 71px),
          radial-gradient(circle at 14% 78%, rgba(255,255,255,0.05) 0 110px, transparent 111px),
          radial-gradient(circle at 93% 16%, rgba(255,255,255,0.06) 0 90px, transparent 91px),
          radial-gradient(circle at 88% 86%, rgba(255,255,255,0.05) 0 60px, transparent 61px),
          linear-gradient(180deg, #3a4d92 0%, ${C.navy} 100%)`,
      }}
    >
      <div style={{ position: "relative", maxWidth: 1290, margin: "0 auto", padding: "0 clamp(20px, 3vw, 36px)" }}>
        
        {/* ---------- Heading ---------- */}
        <div style={{ textAlign: "center", maxWidth: 860, margin: "0 auto clamp(36px, 5vw, 56px)" }}>
          <p
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 26,
              fontWeight: 600,
              color: C.gold,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Where We Work
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 3.6vw, 44px)",
              lineHeight: 1.18,
              color: "#fff",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Our Locations
          </h2>
        </div>

        {/* ---------- Buttons ---------- */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 30 }}>
          {places.map((x, k) => (
            <button
              key={x.name}
              onClick={() => setI(k)}
              style={{
                padding: "12px 24px",
                borderRadius: 999,
                cursor: "pointer",
                fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 15,
                transition: "all 0.2s ease",
                border: `2px solid ${i === k ? C.gold : "rgba(255,255,255,0.4)"}`,
                background: i === k ? C.gold : "transparent",
                color: i === k ? "#14172e" : "#fff",
                boxShadow: i === k ? "0 4px 14px rgba(242,180,22,0.4)" : "none",
              }}
            >
              {x.name}
            </button>
          ))}
        </div>

        {/* ---------- Map Box ---------- */}
        <div
          style={{
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 14px 34px rgba(0,0,0,0.3)",
            background: "#fff",
            maxWidth: 1000, // Map ko thora center aur control mein rakha hai
            margin: "0 auto",
          }}
        >
          <iframe
            key={p.q}
            title={p.name}
            src={`https://www.google.com/maps?q=${encodeURIComponent(p.q)}&output=embed`}
            style={{ width: "100%", height: "clamp(350px, 50vw, 500px)", border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div
            style={{
              padding: "20px 24px",
              background: "#fff",
              color: C.navy,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 18,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: C.gold }}></span>
            {p.name}{" "}
            <span style={{ color: "#6b7280", fontWeight: 500, fontSize: 16, marginLeft: 4 }}>
              · {p.note}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}