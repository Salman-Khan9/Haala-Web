import { EN, FAM, FOOTER_TEXT, SOCIAL_ICONS } from "../data";
import { fam } from "../theme";

const footerCols = FOOTER_TEXT.map(([title, links]) => ({ title, links: links.map((name) => ({ name })) }));

export function Footer() {
  return (
    <div style={{ background: "#191410", marginTop: 72 }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "44px 24px 28px", display: "flex", gap: 36, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "min(100%,240px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: 9, background: "#FF5A1F", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", font: "800 15px/1 " + FAM }}>H</div>
            <div style={{ font: "800 17px/1 " + FAM, color: "#fff" }}>HAALA</div>
          </div>
          <div style={{ font: "500 12px/1.65 " + fam, color: "rgba(255,255,255,.6)", marginTop: 13, maxWidth: 250, textWrap: "pretty" }}>{EN.footerTag}</div>
          <div style={{ display: "flex", gap: 9, marginTop: 18 }}>
            {SOCIAL_ICONS.map((icon, i) => (
              <div key={i} style={{ width: 34, height: 34, borderRadius: 11, background: "rgba(255,255,255,.09)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="1.9"><path d={icon}></path></svg>
              </div>
            ))}
          </div>
        </div>
        {footerCols.map((c) => (
          <div key={c.title} style={{ flex: "none", minWidth: 130 }}>
            <div style={{ font: "800 9.5px/1 " + fam, color: "rgba(255,255,255,.45)", letterSpacing: ".09em" }}>{c.title}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11, marginTop: 14 }}>
              {c.links.map((l) => (
                <div key={l.name} style={{ font: "600 12.5px/1 " + fam, color: "rgba(255,255,255,.72)", cursor: "pointer" }}>{l.name}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px 32px" }}>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.12)", paddingTop: 18, display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div style={{ font: "500 11.5px/1.5 " + fam, color: "rgba(255,255,255,.45)" }}>{EN.copyright}</div>
          <div style={{ font: "600 11.5px/1.5 " + fam, color: "rgba(255,255,255,.6)" }}>{EN.madeIn}</div>
        </div>
      </div>
    </div>
  );
}
