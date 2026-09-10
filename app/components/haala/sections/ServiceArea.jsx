import { EN, ZONE_TEXT } from "../data";
import { fam, h3 } from "../theme";
import { LaunchZoneMap } from "../LaunchZoneMap";

const zones = ZONE_TEXT.map((name) => ({ name }));

export function ServiceArea() {
  return (
    <div id="area" style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 24px 0" }}>
      <div style={{ border: "1px solid #EDE5DE", borderRadius: 24, overflow: "hidden", display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "min(100%,320px)", position: "relative", minHeight: 320, background: "#EDEAE4" }}>
          <LaunchZoneMap pillLabel={EN.mapPill} />
        </div>
        <div style={{ flex: 1, minWidth: "min(100%,320px)", padding: 28 }}>
          <div style={{ font: "800 10px/1 " + fam, color: "#A2917F", letterSpacing: ".09em" }}>{EN.areaEyebrow}</div>
          <div style={{ font: h3, color: "#191410", marginTop: 11, textWrap: "pretty" }}>{EN.areaTitle}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
            {zones.map((z) => (
              <div key={z.name} style={{ border: "1px solid #EDE5DE", borderRadius: 999, padding: "8px 13px", font: "600 12px/1 " + fam, color: "#3D3128" }}>{z.name}</div>
            ))}
          </div>
          <div style={{ marginTop: 22, background: "#FFF6EF", borderRadius: 16, padding: 16 }}>
            <div style={{ font: "800 13px/1.35 " + fam, color: "#191410", textWrap: "pretty" }}>{EN.notCoveredTitle}</div>
            <div style={{ font: "500 11.5px/1.55 " + fam, color: "#857569", marginTop: 7, textWrap: "pretty" }}>{EN.notCoveredBody}</div>
            <div style={{ display: "flex", gap: 9, marginTop: 13, flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: 150, background: "#fff", border: "1.5px solid #EDE5DE", borderRadius: 12, padding: "12px 13px", font: "600 12px/1 " + fam, color: "#9C8C80" }}>{EN.areaPlaceholder}</div>
              <div style={{ background: "#FF5A1F", borderRadius: 999, padding: "12px 18px", font: "800 12.5px/1 " + fam, color: "#fff", cursor: "pointer", flex: "none" }}>{EN.areaCta}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
