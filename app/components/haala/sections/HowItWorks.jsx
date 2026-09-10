import { EN, STEP_ICONS, STEP_TEXT } from "../data";
import { fam, h2 } from "../theme";

const steps = STEP_TEXT.map(([title, body], i) => ({ n: "0" + (i + 1), title, body, icon: STEP_ICONS[i] }));

export function HowItWorks() {
  return (
    <div id="how" style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 24px 0" }}>
      <div style={{ font: "800 10px/1 " + fam, color: "#A2917F", letterSpacing: ".09em" }}>{EN.howEyebrow}</div>
      <div style={{ font: h2, color: "#191410", marginTop: 12, letterSpacing: "-.01em" }}>{EN.howTitle}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginTop: 26 }}>
        {steps.map((s) => (
          <div key={s.n} style={{ position: "relative", border: "1px solid #EDE5DE", borderRadius: 20, padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ width: 40, height: 40, borderRadius: 13, background: "#FFF6EF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF5A1F" strokeWidth="1.9"><path d={s.icon}></path></svg>
              </div>
              <div style={{ font: "800 26px/1 " + fam, color: "#F1EBE4" }}>{s.n}</div>
            </div>
            <div style={{ font: "800 14.5px/1.3 " + fam, color: "#191410", marginTop: 14 }}>{s.title}</div>
            <div style={{ font: "500 12px/1.55 " + fam, color: "#857569", marginTop: 7, textWrap: "pretty" }}>{s.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
