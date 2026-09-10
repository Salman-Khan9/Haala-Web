import { EN, RIDER_FIELD_TEXT } from "../data";
import { fam, h3 } from "../theme";
import { ImageSlot } from "../ImageSlot";

const riderFields = RIDER_FIELD_TEXT.map(([label, hint]) => ({ label, hint }));

export function StoryRider() {
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 24px 0" }}>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
       
        <div style={{ flex: 1, minWidth: "min(100%,280px)", borderRadius: 24, padding: 28, background: "#FFF6EF", border: "1px solid #F2E4D6" }}>
          <div style={{ width: 44, height: 44, borderRadius: 14, background: "#FF5A1F", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9"><circle cx="6.5" cy="17.5" r="3"></circle><circle cx="17.5" cy="17.5" r="3"></circle><path d="M9.5 17.5h5l-2-8h-3M14.5 12h3l2 5.5"></path></svg>
          </div>
          <div style={{ font: h3, color: "#191410", marginTop: 15, textWrap: "pretty" }}>{EN.riderTitle}</div>
          <div style={{ font: "500 12.5px/1.65 " + fam, color: "#857569", marginTop: 10, textWrap: "pretty" }}>{EN.riderBody}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: 9, marginTop: 18 }}>
            {riderFields.map((f) => (
              <div key={f.label} style={{ background: "#fff", border: "1.5px solid #EDE5DE", borderRadius: 12, padding: "11px 12px" }}>
                <div style={{ font: "800 9px/1 " + fam, color: "#A2917F", letterSpacing: ".07em" }}>{f.label}</div>
                <div style={{ font: "600 12px/1 " + fam, color: "#9C8C80", marginTop: 7 }}>{f.hint}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14, background: "#26211E", borderRadius: 999, padding: "14px 0", textAlign: "center", font: "800 13.5px/1 " + fam, color: "#fff", cursor: "pointer" }}>{EN.riderCta}</div>
        </div>
      </div>
    </div>
  );
}
