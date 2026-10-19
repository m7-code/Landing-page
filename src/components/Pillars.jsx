import { useEffect, useState } from "react";
import { C } from "../theme";

const BLUE = "#3b4f9a";

const pillars = [
  {
    n: "01",
    title: "Care",
    tagline: "Meeting needs. Restoring dignity. Building a foundation for growth.",
    intro:
      "Care is the foundation of each of A New Haiti initiatives. Through our Cornerstone-Village approach, we seek to provide access to essential services including:",
    chips: ["Food & Water", "Shelter", "Clothing", "Medical & Dental Care", "Counseling", "Education"],
    note:
      "We recognize that individuals must often receive care and support before they can fully participate in the process of rebuilding their lives, families, and communities.",
  },
  {
    n: "02",
    title: "Discipleship",
    tagline: "Developing the whole person. Empowering families for life.",
    intro:
      "A New Haiti promotes spiritual, educational, vocational, and financial wholeness by creating opportunities for children, youth, adults, and families to learn, grow, serve, and lead.",
    listTitle: "Our focus includes:",
    list: [
      ["Spiritual Development", "Encouraging lives of faith, love, service, and community."],
      ["Education", "Expanding access to quality education from Pre-Kindergarten through Secondary School."],
      [
        "Vocational Development",
        "Building skills and knowledge in areas such as accounting, architecture, banking, business development, and construction.",
      ],
      [
        "Business & Workforce Development",
        "Providing practical training in agriculture, carpentry, culinary arts, livestock management, masonry, plumbing, and other trades.",
      ],
    ],
  },
  {
    n: "03",
    title: "Development",
    tagline: "Building the infrastructure for sustainable communities.",
    intro:
      "A New Haiti develops projects that integrate care, discipleship, and development to create the infrastructure and opportunities necessary for individuals, families, and communities to thrive.",
    note: "Our goal is not simply to build facilities, but to help build healthy, connected, sustainable communities.",
  },
];

function useNarrow(bp = 860) {
  const [n, setN] = useState(typeof window !== "undefined" ? window.innerWidth < bp : false);
  useEffect(() => {
    const on = () => setN(window.innerWidth < bp);
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, [bp]);
  return n;
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e5a500" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: 4 }} aria-hidden="true">
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

function Note({ children }) {
  return (
    <p
      style={{
        marginTop: 20,
        padding: "14px 18px",
        borderLeft: `5px solid ${C.gold}`,
        background: "#fff8e3",
        borderRadius: "0 12px 12px 0",
        fontSize: 16,
        lineHeight: 1.6,
        color: "#14172e",
        fontWeight: 500,
      }}
    >
      {children}
    </p>
  );
}

function Row({ p, narrow }) {
  return (
    <article
      className="pillar-card"
      style={{
        display: "flex",
        flexDirection: narrow ? "column" : "row",
        background: "#fff",
        borderRadius: 22,
        overflow: "hidden",
        boxShadow: "0 14px 34px rgba(8, 12, 50, 0.28)",
      }}
    >
      {/* gold number panel (SSSI "01 | ..." jaisa) */}
      <div
        style={{
          flex: narrow ? "none" : "0 0 230px",
          display: "flex",
          flexDirection: narrow ? "row" : "column",
          alignItems: "center",
          justifyContent: narrow ? "flex-start" : "center",
          gap: narrow ? 20 : 8,
          padding: narrow ? "16px 24px" : "24px 16px",
          background: "linear-gradient(135deg, #ffd96a 0%, #ffc021 100%)",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: narrow ? 46 : 76,
            lineHeight: 1,
            color: BLUE,
          }}
        >
          {p.n}
        </span>
        <h3
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: narrow ? 20 : 22,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            color: "#14172e",
            margin: 0,
          }}
        >
          {p.title}
        </h3>
      </div>

      {/* white content */}
      <div style={{ flex: 1, minWidth: 0, padding: narrow ? "24px 22px 28px" : "30px 38px 34px" }}>
        <p style={{ fontFamily: "'Caveat', cursive", fontSize: 30, fontWeight: 600, lineHeight: 1.15, color: BLUE }}>{p.tagline}</p>

        <p style={{ marginTop: 12, fontSize: 16.5, lineHeight: 1.65, color: "#3d4157", maxWidth: 860 }}>{p.intro}</p>

        {p.chips && (
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 10 }}>
            {p.chips.map((c) => (
              <span
                key={c}
                style={{
                  background: "#fff4d1",
                  color: "#14172e",
                  border: "1px solid #ffd96a",
                  borderRadius: 999,
                  padding: "7px 16px",
                  fontWeight: 600,
                  fontSize: 15,
                }}
              >
                {c}
              </span>
            ))}
          </div>
        )}

        {p.list && (
          <>
            <p style={{ marginTop: 20, fontWeight: 700, color: "#14172e", fontSize: 17 }}>{p.listTitle}</p>
            <ul
              style={{
                margin: "12px 0 0",
                padding: 0,
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: narrow ? "1fr" : "repeat(2, minmax(0, 1fr))",
                gap: 14,
              }}
            >
              {p.list.map(([t, d]) => (
                <li
                  key={t}
                  style={{
                    display: "flex",
                    gap: 10,
                    padding: "14px 16px",
                    background: "#fff8e3",
                    borderRadius: 14,
                    fontSize: 15.5,
                    lineHeight: 1.55,
                    color: "#3d4157",
                  }}
                >
                  <Check />
                  <span>
                    <strong style={{ color: "#14172e" }}>{t}</strong> — {d}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}

        {p.note && <Note>{p.note}</Note>}
      </div>
    </article>
  );
}

export default function Pillars() {
  const narrow = useNarrow();
  return (
    <section
      id="pillars"
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "clamp(60px, 8vw, 110px)",
        background: `
          radial-gradient(circle at 6% 22%, rgba(255,255,255,0.07) 0 70px, transparent 71px),
          radial-gradient(circle at 14% 78%, rgba(255,255,255,0.05) 0 110px, transparent 111px),
          radial-gradient(circle at 93% 16%, rgba(255,255,255,0.06) 0 90px, transparent 91px),
          radial-gradient(circle at 88% 86%, rgba(255,255,255,0.05) 0 60px, transparent 61px),
          linear-gradient(180deg, #3a4d92 0%, ${C.navy} 100%)`,
      }}
    >
      <div style={{ position: "relative", maxWidth: 1290, margin: "0 auto", padding: "0 clamp(20px, 3vw, 36px)" }}>
        {/* ---------- heading ---------- */}
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
            Care · Discipleship · Development
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
            Three Pillars. One Holistic Vision.
          </h2>
        </div>

        {/* ---------- 3 rows ---------- */}
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          {pillars.map((p) => (
            <Row key={p.n} p={p} narrow={narrow} />
          ))}
        </div>
      </div>
    </section>
  );
}