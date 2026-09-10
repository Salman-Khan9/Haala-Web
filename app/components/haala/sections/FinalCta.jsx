import { EN } from "../data";
import { fam, h1s, tight } from "../theme";

export function FinalCta() {
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 24px 0" }}>
      <div style={{ background: "#FF5A1F", borderRadius: 24, padding: "40px 32px", position: "relative", overflow: "hidden", textAlign: "center" }}>
        <div style={{ position: "absolute", right: -60, top: -80, width: 260, height: 260, borderRadius: "50%", background: "rgba(255,255,255,.10)" }} />
        <div style={{ position: "absolute", left: -50, bottom: -90, width: 220, height: 220, borderRadius: "50%", background: "rgba(38,33,30,.10)" }} />
        <div style={{ position: "relative", font: h1s, color: "#fff", letterSpacing: tight, textWrap: "pretty" }}>{EN.finalTitle}</div>
        <div style={{ position: "relative", font: "600 13.5px/1.6 " + fam, color: "rgba(255,255,255,.86)", marginTop: 12, maxWidth: 440, marginInline: "auto", textWrap: "pretty" }}>{EN.finalSub}</div>
        <a href="#waitlist" style={{ position: "relative", display: "inline-block", marginTop: 22, background: "#fff", borderRadius: 999, padding: "16px 28px", font: "800 14.5px/1 " + fam, color: "#E8480F", textDecoration: "none" }}>{EN.finalCta}</a>
      </div>
    </div>
  );
}
