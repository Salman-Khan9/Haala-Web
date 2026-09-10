import { EN, PERK_ICONS, PERK_TEXT } from "../data";
import { fam, h2, tight } from "../theme";

const perks = PERK_TEXT.map(([title, body], i) => ({ title, body, icon: PERK_ICONS[i] }));

export function Perks() {
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 24px 0" }}>
      <div style={{ background: "#26211E", borderRadius: 24, padding: 32, display: "flex", gap: 32, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "min(100%,260px)" }}>
          <div style={{ font: "800 10px/1 " + fam, color: "rgba(255,255,255,.5)", letterSpacing: ".09em" }}>{EN.perksEyebrow}</div>
          <div style={{ font: h2, color: "#fff", marginTop: 12, letterSpacing: tight, textWrap: "pretty" }}>{EN.perksTitle}</div>
          <div style={{ font: "500 12.5px/1.65 " + fam, color: "rgba(255,255,255,.7)", marginTop: 12, maxWidth: 300, textWrap: "pretty" }}>{EN.perksBody}</div>
          <a href="#waitlist" style={{ display: "inline-block", marginTop: 20, background: "#FF5A1F", borderRadius: 999, padding: "14px 22px", font: "800 13.5px/1 " + fam, color: "#fff", textDecoration: "none" }}>{EN.perksCta}</a>
        </div>
        <div style={{ flex: 1, minWidth: "min(100%,280px)", display: "flex", flexDirection: "column", gap: 11 }}>
          {perks.map((p) => (
            <div key={p.title} style={{ background: "rgba(255,255,255,.07)", borderRadius: 16, padding: 16, display: "flex", gap: 13, alignItems: "flex-start" }}>
              <div style={{ width: 34, height: 34, borderRadius: 11, background: "#FFD84D", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#26211E" strokeWidth="2.1"><path d={p.icon}></path></svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ font: "800 13.5px/1.3 " + fam, color: "#fff", textWrap: "pretty" }}>{p.title}</div>
                <div style={{ font: "500 11.5px/1.55 " + fam, color: "rgba(255,255,255,.68)", marginTop: 6, textWrap: "pretty" }}>{p.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
