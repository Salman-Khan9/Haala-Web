import { FAM } from "./data";

export const ImageSlot = ({ label, src, style }) =>
  src ? (
    <div style={{ width: "100%", height: "100%", background: "#fff", padding: 10, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", ...style }}>
      <img
        src={src}
        alt={label || ""}
        style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
      />
    </div>
  ) : (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#B3A498",
        font: "600 11px/1.4 " + FAM,
        padding: 10,
        background: "#F7F3EF",
        ...style,
      }}
    >
      {label}
    </div>
  );
