"use client";

import { useState } from "react";
import { EN, FAQ_TEXT } from "../data";
import { bodyLg, h2, h4size, tight } from "../theme";

export function Faq() {
  const [faq, setFaq] = useState(-1);

  const faqs = FAQ_TEXT.map(([q, a], i) => ({
    q, a, open: faq === i,
    qWeight: faq === i ? 800 : 700,
    iconBg: faq === i ? "#FF5A1F" : "#F5F1ED",
    iconInk: faq === i ? "#fff" : "#5C4E44",
    iconPath: faq === i ? "M5 12h14" : "M12 5v14M5 12h14",
  }));

  return (
    <div id="faq" style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 24px 0" }}>
      <div style={{ font: h2, color: "#191410", letterSpacing: tight }}>{EN.faqTitle}</div>
      <div style={{ marginTop: 24, borderTop: "1px solid #EDE5DE" }}>
        {faqs.map((f, i) => (
          <div key={f.q} onClick={() => setFaq(faq === i ? -1 : i)} style={{ borderBottom: "1px solid #EDE5DE", padding: "18px 0", cursor: "pointer" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div style={{ flex: 1, font: f.qWeight + " " + h4size, color: "#191410", textWrap: "pretty" }}>{f.q}</div>
              <div style={{ width: 26, height: 26, borderRadius: "50%", background: f.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={f.iconInk} strokeWidth="2.6"><path d={f.iconPath}></path></svg>
              </div>
            </div>
            {f.open && (
              <div style={{ font: bodyLg, color: "#857569", marginTop: 11, maxWidth: 720, animation: "fadeUp 220ms ease", textWrap: "pretty" }}>{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
