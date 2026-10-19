import { C, VISION_IMAGE } from "../theme";
import { BLOB_W, BLOB_H, PHOTO_D, GOLD_D } from "./blobShapes";

function BlobImage() {
  return (
    <svg
      viewBox={`0 0 ${BLOB_W} ${BLOB_H}`}
      style={{ width: "100%", height: "auto", display: "block" }}
      role="img"
      aria-label="A New Haiti"
    >
      <defs>
        <clipPath id="vision-blob">
          <path d={PHOTO_D} />
        </clipPath>
        <linearGradient id="vision-ph" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.purple} />
          <stop offset="1" stopColor={C.navy} />
        </linearGradient>
      </defs>

      {/* gold shape behind */}
      <path d={GOLD_D} fill={C.gold} />

      {/* photo */}
      {VISION_IMAGE ? (
        <image href={VISION_IMAGE} x="0" y="0" width={BLOB_W} height={BLOB_H} preserveAspectRatio="xMidYMid slice" clipPath="url(#vision-blob)" />
      ) : (
        <g clipPath="url(#vision-blob)">
          <rect x="0" y="0" width={BLOB_W} height={BLOB_H} fill="url(#vision-ph)" />
          <text x={BLOB_W / 2} y={BLOB_H / 2} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="22" fontWeight="600" fontFamily="Poppins, sans-serif">
            Photo to be provided
          </text>
        </g>
      )}
    </svg>
  );
}

export default function Vision() {
  return (
    <section
      id="vision"
      style={{
        background: "#fff",
        paddingTop: "clamp(56px, 7vw, 96px)",
        paddingBottom: "clamp(56px, 7vw, 96px)",
        scrollMarginTop: 20,
      }}
    >
      <div
        style={{
          maxWidth: 1290,
          margin: "0 auto",
          padding: "0 clamp(20px, 3vw, 36px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "clamp(36px, 6vw, 96px)",
        }}
      >
        {/* ---------- left: text (SSSI jaisa narrow column) ---------- */}
        <div style={{ flex: "1 1 400px", minWidth: 0 }}>
          <p
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 26,
              fontWeight: 600,
              color: C.purple,
              marginBottom: 6,
              letterSpacing: "0.02em",
            }}
          >
            Our Vision
          </p>

          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(26px, 2.6vw, 34px)",
              lineHeight: 1.22,
              color: "#14172e",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            A New Haiti begins with a renewed understanding of the value of people.
          </h2>

          {/* banner (SSSI "5+ | Years of Experience" jaisa) */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              marginTop: 22,
              borderRadius: 14,
              background: `linear-gradient(90deg, ${C.navy} 0%, #4a2a98 60%, ${C.purple} 100%)`,
              padding: "12px 24px",
              display: "flex",
              alignItems: "center",
              gap: 20,
              color: "#fff",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                width: "42%",
                backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1.6px, transparent 1.8px)",
                backgroundSize: "11px 11px",
                WebkitMaskImage: "linear-gradient(to left, #000, transparent)",
                maskImage: "linear-gradient(to left, #000, transparent)",
                pointerEvents: "none",
              }}
            />
            <span
              style={{
                position: "relative",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(30px, 3vw, 40px)",
                color: C.gold,
                lineHeight: 1,
                paddingRight: 20,
                borderRight: "1px solid rgba(255,255,255,0.35)",
              }}
            >
              Faith
            </span>
            <span style={{ position: "relative", fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.35, fontWeight: 500 }}>
              Compassion · Education · Opportunity · Community Development
            </span>
          </div>

          <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.6, color: "#555a6e" }}>
            We believe transformation takes place when Haitians love and value themselves, when families are strengthened,
            and when individuals are loved and valued by others—reflecting the love and value God has placed in every
            person.
          </p>

          <p style={{ marginTop: 14, fontSize: 17, lineHeight: 1.6, color: "#555a6e" }}>
            Our work brings together faith, compassion, education, opportunity, and community development to help
            individuals and families move from immediate need toward self-sufficiency and sustainable growth.
          </p>

          <a href="#contact" className="vision-btn">
            Partner With Us
          </a>
        </div>

        {/* ---------- right: blob photo (thora wider column, SSSI jaisa) ---------- */}
        <div style={{ flex: "1.2 1 420px", minWidth: 0 }}>
          <BlobImage />
        </div>
      </div>
    </section>
  );
}