"use client";

import { useState } from "react";
import { CAT_ICONS, CAT_TEXT, EN } from "../data";
import { fam, h2 } from "../theme";

export function Categories() {
  const [hover, setHover] = useState(null);

  const categories = CAT_TEXT.map(([name, sample], i) => {
    const on = hover === i;
    return {
      name,
      sample: on ? sample : "",
      icon: CAT_ICONS[i],
      border: on ? "#FFCBA8" : "#EDE5DE",
      bg: on ? "#FFFBF7" : "#fff",
      iconBg: on ? "#FFF1E6" : "#F5F1ED",
      iconInk: on ? "#FF5A1F" : "#5C4E44",
      scale: on ? "translateY(-3px)" : "none",
    };
  });

  return (
    <div id="categories" style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 24px 0" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div style={{ font: "800 10px/1 " + fam, color: "#A2917F", letterSpacing: ".09em" }}>{EN.catEyebrow}</div>
          <div style={{ font: h2, color: "#191410", marginTop: 12, letterSpacing: "-.01em" }}>{EN.catTitle}</div>
        </div>
        <div style={{ font: "600 12.5px/1.5 " + fam, color: "#857569", maxWidth: 320, textWrap: "pretty" }}>{EN.catSub}</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 14, marginTop: 26 }}>
        {categories.map((c, i) => (
          <div key={c.name} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} style={{ border: "1px solid " + c.border, borderRadius: 18, padding: 16, background: c.bg, cursor: "default", transition: "transform 180ms ease,border-color 180ms ease", transform: c.scale }}>
            <div style={{ width: 38, height: 38, borderRadius: 12, background: c.iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c.iconInk} strokeWidth="1.9"><path d={c.icon}></path></svg>
            </div>
            <div style={{ font: "800 13.5px/1.3 " + fam, color: "#191410", marginTop: 13, textWrap: "pretty" }}>{c.name}</div>
            <div style={{ font: "500 11px/1.5 " + fam, color: "#857569", marginTop: 6, minHeight: 32, textWrap: "pretty" }}>{c.sample}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
