import { EN, FAM, NAV_TEXT } from "../data";
import { fam } from "../theme";

const navLinks = NAV_TEXT.map(([href, label]) => ({ href, label }));

export function Header() {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(255,255,255,.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #F1EBE4" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: "#FF5A1F", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", font: "800 16px/1 " + FAM }}>H</div>
          <div style={{ font: "800 19px/1 " + FAM, color: "#191410", letterSpacing: "-.01em" }}>HAALA</div>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 26, flexWrap: "wrap" }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} style={{ font: "600 13.5px/1 " + fam, color: "#5C4E44", textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="#waitlist" style={{ background: "#FF5A1F", borderRadius: 999, padding: "11px 18px", font: "800 13px/1 " + fam, color: "#fff", textDecoration: "none", boxShadow: "0 6px 16px rgba(255,90,31,.28)" }}>{EN.navCta}</a>
        </div>
      </div>
    </div>
  );
}
