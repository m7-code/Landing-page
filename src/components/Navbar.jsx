import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { C, DONATE_URL } from "../theme";

const links = [
  { label: "Home", href: "#top", icon: true },
  { label: "Vision", href: "#vision" },
  { label: "Pillars", href: "#pillars" },
  { label: "Communities", href: "#communities" },
  { label: "Impact", href: "#impact" },
  { label: "Founder", href: "#founder" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];

function HomeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3.2 2.6 11.4a1 1 0 0 0 .66 1.76H5V20a1 1 0 0 0 1 1h4v-5.5h4V21h4a1 1 0 0 0 1-1v-6.84h1.74a1 1 0 0 0 .66-1.76L12 3.2Z" />
    </svg>
  );
}

function useIsMobile(bp = 1180) {
  const [m, setM] = useState(typeof window !== "undefined" ? window.innerWidth < bp : false);
  useEffect(() => {
    const on = () => setM(window.innerWidth < bp);
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, [bp]);
  return m;
}

// Jo sections page par maujood hain unme se scroll ke hisaab se active link nikalta hai
function useActive() {
  const [active, setActive] = useState("#top");
  useEffect(() => {
    const onScroll = () => {
      let cur = "#top";
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (el && el.getBoundingClientRect().top <= 140) cur = l.href;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return active;
}

export default function Navbar() {
  const mobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const active = useActive();

  const linkStyle = (href) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 600,
    fontSize: 17,
    color: active === href ? C.gold : C.linkBlue,
    transition: "color .15s ease",
    whiteSpace: "nowrap",
  });

  return (
    <header
      style={{
        position: "fixed",
        top: 18,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 18px",
      }}
    >
      <div
        style={{
          maxWidth: 1290,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 30,
          boxShadow: "0 10px 30px rgba(10, 15, 50, 0.25)",
          padding: mobile ? "10px 20px" : "10px 14px 10px 44px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <a href="#top" aria-label="A New Haiti — home" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="A New Haiti logo" style={{ height: mobile ? 58 : 88, width: "auto", display: "block" }} />
          </a>

          {!mobile && (
            <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 26, flex: 1 }}>
              {links.map((l) => (
                <a key={l.href} href={l.href} className="nav-link" style={linkStyle(l.href)}>
                  {l.icon && <HomeIcon />}
                  {l.label}
                </a>
              ))}
            </nav>
          )}

          {!mobile && (
            <a href={DONATE_URL} className="nav-cta" style={{ background: C.purple }}>
              Donate
            </a>
          )}

          {mobile && (
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-expanded={open}
              style={{ background: "none", border: "none", cursor: "pointer", color: C.navy, fontSize: 30, lineHeight: 1 }}
            >
              {open ? "✕" : "☰"}
            </button>
          )}
        </div>

        {mobile && open && (
          <nav style={{ display: "flex", flexDirection: "column", paddingTop: 8, paddingBottom: 10 }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ ...linkStyle(l.href), padding: "14px 4px", borderTop: "1px solid #eceef8" }}
              >
                {l.icon && <HomeIcon />}
                {l.label}
              </a>
            ))}
            <a href={DONATE_URL} className="nav-cta" style={{ background: C.purple, marginTop: 10, textAlign: "center" }}>
              Donate
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}