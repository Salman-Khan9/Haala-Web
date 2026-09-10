import { PROMISE_TEXT, PROMISE_VISUALS } from "../data";
import { fam, h4 } from "../theme";

const promises = PROMISE_TEXT.map(([title, body], i) => ({ title, body, ...PROMISE_VISUALS[i] }));

export function Promises() {
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginTop: 8 }}>
        {promises.map((p) => (
          <div key={p.title} style={{ border: "1px solid #EDE5DE", borderRadius: 20, padding: 22, background: p.bg }}>
            <div style={{ width: 42, height: 42, borderRadius: 14, background: p.iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke={p.iconInk} strokeWidth="2"><path d={p.icon}></path></svg>
            </div>
            <div style={{ font: h4, color: "#191410", marginTop: 15, textWrap: "pretty" }}>{p.title}</div>
            <div style={{ font: "500 12.5px/1.6 " + fam, color: "#857569", marginTop: 8, textWrap: "pretty" }}>{p.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
