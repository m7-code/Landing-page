import React, { useState, useEffect, useRef } from "react";
import { C, DONATE_URL } from "../theme";

export default function Footer() {
  // Floating button ko hide/show karne ke liye state
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerButtonRef = useRef(null);

  useEffect(() => {
    // Intersection Observer check karega ke user footer ke button tak pohancha hai ya nahi
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Jab 50% button visible ho jaye
    );

    if (footerButtonRef.current) {
      observer.observe(footerButtonRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-[#141b4a] text-white pt-10 pb-8 font-['Poppins'] relative">
      
      {/* ================= FLOATING BUTTON ================= */}
      {/* Yeh button screen par float karega. Jab footer aayega toh hide ho jayega */}
      <a
        href={DONATE_URL}
        className={`fixed bottom-6 left-5 md:bottom-10 md:right-10 md:left-auto z-[999] 
          bg-[#f2b416] text-[#141b4a] px-5 py-2 md:px-6 md:py-2.5 rounded-lg font-bold text-xs md:text-sm 
          no-underline shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1
          ${isFooterVisible ? "opacity-0 translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"}
        `}
      >
        Donate Now
      </a>

      <div className="max-w-[1290px] mx-auto px-5">
        {/* ================= TOP SECTION ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-6 pb-6 border-b border-white/10">
          
          <p className="text-base font-medium text-white/90 text-center md:text-left m-0">
            A New Haiti is a nonprofit organization.
          </p>
          
          {/* STATIC BUTTON (Footer ke andar) */}
          {/* Ref yahan laga hai taake observer isko track kar sake */}
          <div ref={footerButtonRef} className="w-full md:w-auto flex justify-start md:justify-end">
            <a
              href={DONATE_URL}
              className="bg-[#f2b416] text-[#141b4a] px-5 py-2 md:px-6 md:py-2.5 rounded-lg font-bold text-xs md:text-sm no-underline shadow-sm"
            >
              Donate Now
            </a>
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-6">
          
          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white no-underline hover:bg-white/20 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white no-underline hover:bg-white/20 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white no-underline hover:bg-white/20 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white no-underline hover:bg-white/20 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white no-underline hover:bg-white/20 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
            </a>
          </div>

          {/* Copyright Text */}
          <p className="text-[13px] text-white/60 text-center md:text-right m-0">
            &copy; {new Date().getFullYear()} A New Haiti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}