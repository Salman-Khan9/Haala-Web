import { EN, SCREEN_TEXT } from "../data";
import { fam, h2, tight } from "../theme";
import { ImageSlot } from "../ImageSlot";

const screens = SCREEN_TEXT.map(([label, slot, src]) => ({ label, slot, src }));

export function AppPreview() {
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 24px 0" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div style={{ font: h2, color: "#191410", letterSpacing: tight }}>{EN.previewTitle}</div>
        <div style={{ font: "600 12.5px/1.5 " + fam, color: "#857569" }}>{EN.previewSub}</div>
      </div>
      <div style={{ display: "flex", gap: 18, overflow: "auto", marginTop: 26, paddingBottom: 8 }}>
        {screens.map((s) => (
          <div key={s.slot} style={{ flex: "none", width: 212 }}>
            <div style={{ width: 212, height: 430, borderRadius: 30, background: "#191410", padding: 7, boxShadow: "0 16px 34px rgba(25,20,16,.16)" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: 24, overflow: "hidden", background: "#F7F3EF" }}>
                <ImageSlot label={s.label} src={s.src} />
              </div>
            </div>
            <div style={{ font: "700 12.5px/1.3 " + fam, color: "#191410", marginTop: 12, textAlign: "center" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
