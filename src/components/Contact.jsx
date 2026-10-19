import React from "react";
import { C } from "../theme";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "clamp(60px, 8vw, 110px)",
        background: C.navy, 
      }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: 1200, 
          margin: "0 auto",
          padding: "0 clamp(20px, 3vw, 36px)",
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(40px, 5vw, 80px)",
          alignItems: "center", 
        }}
      >
        {/* ================= LEFT SIDE: CONTACT INFO ================= */}
        <div style={{ flex: "1 1 400px", color: "#fff" }}>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 4vw, 46px)",
              lineHeight: 1.1,
              margin: "0 0 20px 0",
              letterSpacing: "-0.02em",
            }}
          >
            Join us in transforming Haitian youth through sports and education.
          </h2>
          
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.85)",
              marginBottom: 40,
              maxWidth: 500,
            }}
          >
            We're here to answer your questions and help you find the best way to support youth development through sports and education.
          </p>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", marginBottom: 40 }}></div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 40 }}>
            {/* Email Support */}
            <div style={{ flex: "1 1 200px" }}>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h4 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px 0" }}>Email Support</h4>
              
              {/* ====== EMAIL YAHAN ADD KAR DIYA HAI ====== */}
              <a 
                href="mailto:silenttruths.ig@gmail.com" 
                style={{ 
                  margin: 0, 
                  color: "rgba(255,255,255,0.7)", 
                  fontSize: 15, 
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "color 0.2s ease",
                  wordBreak: "break-all" // Agar email lambi ho toh line break ho jaye
                }}
                onMouseEnter={(e) => e.target.style.color = "#fff"}
                onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.7)"}
              >
                silenttruths.ig@gmail.com
              </a>
              {/* ========================================== */}

            </div>

            {/* Phone Support */}
            <div style={{ flex: "1 1 200px" }}>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h4 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px 0" }}>Phone Support</h4>
              <p style={{ margin: 0, color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.6 }}>
                US: (689) 312-2621 <br />
                Haiti: (Coming Soon)
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: CONTACT FORM ================= */}
        <div
          style={{
            flex: "1 1 400px",
            maxWidth: 520, 
            margin: "0 auto", 
            background: "#fff",
            borderRadius: 24,
            padding: "clamp(24px, 4vw, 36px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          }}
        >
          <form style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            
            {/* Form Fields - 2 Columns */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>First Name</label>
              <input type="text" placeholder="First Name" style={inputStyle} />
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>Last Name</label>
              <input type="text" placeholder="Last Name" style={inputStyle} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>Your Email</label>
              <input type="email" placeholder="Email Address" style={inputStyle} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>Phone Number</label>
              <input type="tel" placeholder="Phone Number" style={inputStyle} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6, gridColumn: "1 / -1", marginTop: 4 }}>
              <label style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>How can we help you?</label>
              <textarea rows="3" placeholder="Type your message here..." style={{ ...inputStyle, resize: "none" }}></textarea>
            </div>

            {/* Checkbox */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, gridColumn: "1 / -1", marginTop: 8 }}>
              <input type="checkbox" id="agree" style={{ marginTop: 4, cursor: "pointer" }} />
              <label htmlFor="agree" style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.4, cursor: "pointer" }}>
                I agree to be contacted by A New Haiti regarding partnership opportunities.
              </label>
            </div>

            {/* Submit Button */}
            <div style={{ gridColumn: "1 / -1", marginTop: 8 }}>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: 12,
                  background: C.purple,
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                Send Message
              </button>
            </div>
          </form>

          <p style={{ textAlign: "center", fontSize: 12, color: "#9ca3af", marginTop: 16, marginBottom: 0 }}>
            *We usually respond within 24–48 hours. Your information is safe.
          </p>
        </div>
      </div>
    </section>
  );
}

// Common Input Styles
const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: 8,
  border: "1px solid #e5e7eb",
  background: "#f9fafb",
  fontSize: 14,
  color: "#1f2937",
  outline: "none",
  transition: "border 0.2s",
};