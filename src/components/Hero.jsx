import { C, DONATE_URL, HERO_BG, HERO_IMAGE } from "../theme";

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

const pillars = ["Care", "Discipleship", "Development"];

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        overflow: "hidden",
        background: HERO_BG
          ? `url(${HERO_BG}) center / cover no-repeat`
          : `radial-gradient(circle at 18% 20%, #3d4fa5 0%, ${C.navy} 45%, ${C.navyDark} 100%)`,
        paddingTop: "clamp(150px, 18vw, 210px)",
        paddingBottom: "clamp(60px, 8vw, 110px)",
      }}
    >
      {/* navy overlay so text stays readable over any background photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: HERO_BG ? "rgba(31, 42, 107, 0.88)" : "transparent",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 1290,
          margin: "0 auto",
          padding: "0 clamp(20px, 3vw, 36px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "clamp(32px, 5vw, 64px)",
          alignItems: "center",
        }}
      >
        {/* ---------- left: text ---------- */}
        <div>
          <p
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "clamp(26px, 3vw, 34px)",
              fontWeight: 600,
              color: C.gold,
              marginBottom: 14,
              letterSpacing: "0.02em",
            }}
          >
            A New Haiti
          </p>

          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(30px, 4vw, 46px)",
              lineHeight: 1.18,
              color: "#fff",
              margin: 0,
            }}
          >
            Building Healthy Families. Strengthening Communities. Creating Sustainable Futures.
          </h1>

          <p style={{ marginTop: 24, fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.94)" }}>
            A New Haiti was born from a vision shared with Pastor Jean Telfort - to help create a Haiti where individuals
            and families recognize their God-given value, experience dignity and hope, and have the opportunity to build
            healthy, productive and sustainable communities.
          </p>

          <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.94)" }}>
            Through Care, Discipleship, and Development, A New Haiti works in partnership with the global community to
            address immediate needs while creating pathways for spiritual, educational, vocational, economic, and
            community development.
          </p>

          <div style={{ marginTop: 22, display: "flex", flexWrap: "wrap", gap: "10px 26px" }}>
            {pillars.map((p) => (
              <span key={p} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: C.gold, fontWeight: 600, fontSize: 17 }}>
                <Check />
                {p}
              </span>
            ))}
          </div>

          <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 16 }}>
            <a href={DONATE_URL} className="hero-btn" style={{ background: C.gold, color: "#111" }}>
              Support Our Work
            </a>
            <a href="#pillars" className="hero-btn" style={{ background: "#eef6fd", color: "#1e8fe8" }}>
              Learn About Our Programs
            </a>
          </div>
        </div>

        {/* ---------- right: photo (placeholder until pictures arrive) ---------- */}
        <div>
          {HERO_IMAGE ? (
            <img
              src={HERO_IMAGE}
              alt="A New Haiti community"
              style={{ width: "100%", height: "clamp(300px, 42vw, 520px)", objectFit: "cover", borderRadius: 26, display: "block" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "clamp(300px, 42vw, 520px)",
                borderRadius: 26,
                background: "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04))",
                border: "2px dashed rgba(255,255,255,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.75)",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textAlign: "center",
                padding: 20,
              }}
            >
              Photo to be provided
            </div>
          )}
        </div>
      </div>
    </section>
  );
}