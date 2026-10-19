import { C, IMPACT_IMAGE } from "../theme";

/* Material-style 24x24 icons */
const icons = {
  church: <path fillRule="evenodd" d="M11 2h2v2h2v2h-2v2.2l5 3.3V21H4v-9.5l5-3.3V6H7V4h4V2zm-1 19h4v-5h-4v5z" />,
  heart: (
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  ),
  school: <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />,
  growth: <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />,
};

const items = [
  ["Faith", "inspires action", "church"],
  ["Care", "creates stability", "heart"],
  ["Education", "opens doors", "school"],
  ["Development", "creates opportunity", "growth"],
];

export default function Impact() {
  return (
    <section
      id="impact"
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(60px, 8vw, 110px)",
        paddingBottom: "clamp(60px, 8vw, 110px)",
        background: IMPACT_IMAGE
          ? `url(${IMPACT_IMAGE}) center / cover no-repeat`
          : `linear-gradient(120deg, ${C.maroon} 0%, #4a1a5c 45%, ${C.navy} 100%)`,
      }}
    >
      {/* dark overlay, left side thora halka taake photo nazar aaye */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, rgba(20,27,74,0.25) 0%, rgba(20,27,74,0.55) 60%, rgba(20,27,74,0.8) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* placeholder label (sirf jab photo na ho) */}
      {!IMPACT_IMAGE && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "clamp(20px, 12%, 180px)",
            transform: "translateY(-50%)",
            color: "rgba(255,255,255,0.55)",
            fontWeight: 600,
            letterSpacing: "0.06em",
            fontSize: 18,
            pointerEvents: "none",
          }}
        >
          Photo to be provided
        </div>
      )}

      <div
        style={{
          position: "relative",
          maxWidth: 1290,
          margin: "0 auto",
          padding: "0 clamp(20px, 3vw, 36px)",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {/* ---------- glass card ---------- */}
        <div
          style={{
            width: "100%",
            maxWidth: 640,
            background: "rgba(31, 42, 107, 0.82)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 26,
            padding: "clamp(26px, 4vw, 44px)",
            boxShadow: "0 24px 60px rgba(8, 12, 50, 0.4)",
          }}
        >
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(30px, 3.4vw, 42px)",
              lineHeight: 1.15,
              color: "#fff",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            The Impact
          </h2>

          <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.88)" }}>
            A New Haiti is working toward a future where faith inspires action, care creates stability, education opens
            doors, and development creates opportunity.
          </p>

          <ul style={{ margin: "28px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 22 }}>
            {items.map(([t, d, ic]) => (
              <li key={t} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <span
                  style={{
                    flex: "none",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: C.gold,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#14172e" aria-hidden="true">
                    {icons[ic]}
                  </svg>
                </span>
                <span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: 22,
                      lineHeight: 1.2,
                      color: "#fff",
                    }}
                  >
                    {t}
                  </span>
                  <span style={{ display: "block", marginTop: 3, fontSize: 17, color: "rgba(255,255,255,0.8)" }}>{d}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}