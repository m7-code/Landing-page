import { useEffect, useState } from "react";
import { C } from "../theme";

/* Material-style 24x24 icons */
const icons = {
  church: <path fillRule="evenodd" d="M11 2h2v2h2v2h-2v2.2l5 3.3V21H4v-9.5l5-3.3V6H7V4h4V2zm-1 19h4v-5h-4v5z" />,
  school: <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />,
  build: (
    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
  ),
  health: (
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
  ),
  growth: <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />,
  road: (
    <path d="M8 2h2L6.5 22h-2L8 2zM14 2h2l3.5 20h-2L14 2zM11 2h2v4h-2V2zm0 7h2v4h-2V9zm0 7h2v4h-2v-4z" />
  ),
  home: <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  people: (
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  ),
};

const items = [
  ["Faith & Worship", "Churches and worship centers that nurture spiritual growth and community.", "church"],
  ["Education", "Schools providing quality education from Pre-Kindergarten through Secondary School.", "school"],
  ["Workforce Development", "Trade programs that prepare youth and adults with workforce-ready skills.", "build"],
  ["Healthcare", "Clinics providing preventive medical, dental, and counseling services.", "health"],
  ["Economic Opportunity", "Business incubators that support entrepreneurship and the growth of local businesses.", "growth"],
  ["Infrastructure", "Roads, utilities, and other foundational infrastructure needed for sustainable communities.", "road"],
  ["Housing & Hospitality", "Transitional housing and accommodations for visitors and tourists.", "home"],
  ["Family & Child Support", "Programs and facilities designed to protect and support vulnerable children and families.", "people"],
];

function useCols() {
  const calc = () => {
    if (typeof window === "undefined") return 4;
    const w = window.innerWidth;
    return w >= 1150 ? 4 : w >= 640 ? 2 : 1;
  };
  const [c, setC] = useState(calc);
  useEffect(() => {
    const on = () => setC(calc());
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return c;
}

function Circle({ i, title, text, icon, dark, offset }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", paddingTop: offset ? 44 : 0 }}>
      <div
        className="circle-card"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 304,
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          background: dark ? "linear-gradient(135deg, #4a5fa8 0%, #2a3680 55%, #1f2a6b 100%)" : "#fff",
          boxShadow: dark ? "0 18px 36px rgba(31,42,107,0.35)" : "0 10px 40px rgba(31,42,107,0.14)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "30px 34px",
        }}
      >
        {/* number badge */}
        <span
          style={{
            position: "absolute",
            top: "4%",
            left: "6%",
            width: 46,
            height: 46,
            borderRadius: "50%",
            background: dark ? C.gold : C.purple,
            color: dark ? "#14172e" : "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: 20,
            boxShadow: "0 4px 10px rgba(0,0,0,0.18)",
          }}
        >
          {i + 1}
        </span>

        {/* icon */}
        <span
          style={{
            width: 54,
            height: 54,
            borderRadius: "50%",
            background: "#ffd966",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
            flex: "none",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#14172e" aria-hidden="true">
            {icons[icon]}
          </svg>
        </span>

        <h3
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 18.5,
            lineHeight: 1.2,
            color: dark ? "#fff" : "#14172e",
            margin: 0,
          }}
        >
          {title}
        </h3>
        <p style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.45, color: dark ? "rgba(255,255,255,0.86)" : "#5a5f74" }}>{text}</p>
      </div>
    </div>
  );
}

export default function Communities() {
  const cols = useCols();
  return (
    <section
      id="communities"
      style={{
        background: "#fff",
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "clamp(60px, 8vw, 110px)",
      }}
    >
      <div style={{ maxWidth: 1290, margin: "0 auto", padding: "0 clamp(20px, 3vw, 36px)" }}>
        {/* ---------- heading ---------- */}
        <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto clamp(40px, 5vw, 64px)" }}>
          <p
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 26,
              fontWeight: 600,
              color: C.purple,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Titanyen · Fonds-Parisien · Figaro
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 3.6vw, 44px)",
              lineHeight: 1.18,
              color: "#14172e",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Building Communities That Can Thrive
          </h2>
          <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.7, color: "#555a6e" }}>
            From Titanyen, approximately 30 miles north of Port-au-Prince, to Fonds-Parisien and Figaro, A New Haiti's
            community initiatives are designed around a holistic model of development. We envision communities with access
            to:
          </p>
        </div>

        {/* ---------- circles ---------- */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            gap: cols === 1 ? 28 : "34px 28px",
          }}
        >
          {items.map(([t, d, ic], i) => (
            <Circle key={t} i={i} title={t} text={d} icon={ic} dark={i % 2 === 1} offset={cols > 1 && i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}