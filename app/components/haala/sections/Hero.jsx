"use client";

import { useEffect, useRef, useState } from "react";
import { AVATAR_COLORS, AVATAR_LETTERS, EN, FAM, money } from "../data";
import { bodyFont, fam, headFont } from "../theme";
import { ImageSlot } from "../ImageSlot";

const avatars = AVATAR_LETTERS.map((i, n) => ({ i, bg: AVATAR_COLORS[n], overlap: n === 0 ? "0" : "-9px" }));
const trustMarkers = [["BACKED BY", "PLACEHOLDER — investor"], ["FOUNDING TEAM FROM", "PLACEHOLDER — prior company"]];

export function Hero() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("form");
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useState(2847);
  const submitTimer = useRef(null);
  const copyTimer = useRef(null);

  useEffect(() => () => {
    clearTimeout(submitTimer.current);
    clearTimeout(copyTimer.current);
  }, []);

  const digits = phone.replace(/\D/g, "");
  const valid = digits.length === 10 && /^3/.test(digits);
  const otpFull = otp.length === 4;

  const fmtPhone = (v) => {
    const d = v.replace(/\D/g, "").slice(0, 10);
    return d.replace(/^(\d{0,3})(\d{0,7}).*/, (m, a, b) => [a, b].filter(Boolean).join(" "));
  };

  const submitPhone = () => {
    if (!valid || sending) return;
    setSending(true);
    clearTimeout(submitTimer.current);
    submitTimer.current = setTimeout(() => {
      setSending(false);
      setStep("otp");
      setOtp("");
    }, 800);
  };

  const pressOtp = (k) => setOtp((o) => (k === "⌫" ? o.slice(0, -1) : o.length < 4 ? o + k : o));

  const verifyOtp = () => {
    if (!otpFull) return;
    setStep("done");
    setCount((c) => c + 1);
  };

  const copyLink = () => {
    setCopied(true);
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 1600);
  };

  const phoneBorder = phone && !valid ? "#C0331A" : valid ? "#FF5A1F" : "#E4DBD3";
  const phoneError = !!phone && !valid && digits.length >= 10;
  const ctaBg = valid ? "#FF5A1F" : "#EDE5DE";
  const ctaInk = valid ? "#fff" : "#A99B90";
  const ctaShadow = valid ? "0 6px 16px rgba(255,90,31,.32)" : "none";
  const otpCtaBg = otpFull ? "#FF5A1F" : "#EDE5DE";
  const otpCtaInk = otpFull ? "#fff" : "#A99B90";
  const otpCtaShadow = otpFull ? "0 6px 16px rgba(255,90,31,.32)" : "none";
  const otpSub = "Sent to +92 " + fmtPhone(phone);
  const refCode = "H" + (4820 + (digits ? parseInt(digits.slice(-3), 10) : 17));
  const doneSub = "You're #" + money(count) + " in line. Three referrals move you into early access.";
  const socialProof = "Join " + money(count) + "+ people already on the list";
  const otpBoxes = [0, 1, 2, 3].map((i) => ({
    char: otp[i] || "",
    border: otp.length === i ? "#FF5A1F" : otp[i] ? "#26211E" : "#EDE5DE",
  }));

  return (
    <div style={{ background: "linear-gradient(180deg,#FFF6EF 0%,#fff 100%)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 24px 64px", display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "min(100%,340px)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", border: "1px solid #F2E4D6", borderRadius: 999, padding: "7px 13px" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF5A1F" }} />
            <div style={{ font: "700 11.5px/1 " + fam, color: "#5C4E44" }}>{EN.badge}</div>
          </div>
          <h1 style={{ font: headFont, color: "#191410", margin: "22px 0 0", letterSpacing: "-.02em", textWrap: "pretty" }}>{EN.headline}</h1>
          <p style={{ font: bodyFont, color: "#5C4E44", margin: "16px 0 0", maxWidth: 480, textWrap: "pretty" }}>{EN.subhead}</p>

          <div id="waitlist" style={{ marginTop: 28, maxWidth: 470 }}>
            {step === "form" && (
              <>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: 220, display: "flex", alignItems: "center", gap: 10, background: "#fff", border: "1.8px solid " + phoneBorder, borderRadius: 14, padding: "0 14px", height: 56 }}>
                    <div style={{ font: "700 14px/1 " + fam, color: "#857569", flex: "none" }}>🇵🇰 +92</div>
                    <div style={{ width: 1, height: 22, background: "#EDE5DE" }} />
                    <input
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      placeholder="3XX XXXXXXX"
                      value={fmtPhone(phone)}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                      onKeyDown={(e) => e.key === "Enter" && submitPhone()}
                      style={{ flex: 1, minWidth: 0, font: "700 15px/1 " + FAM, color: "#191410", letterSpacing: ".02em", border: "none", outline: "none", background: "transparent", padding: 0 }}
                    />
                  </div>
                  <div onClick={submitPhone} style={{ height: 56, padding: "0 24px", borderRadius: 999, background: ctaBg, color: ctaInk, display: "flex", alignItems: "center", justifyContent: "center", gap: 9, font: "800 14.5px/1 " + fam, cursor: "pointer", boxShadow: ctaShadow, flex: "none" }}>
                    {sending && <div style={{ width: 15, height: 15, borderRadius: "50%", border: "2.4px solid rgba(255,255,255,.4)", borderTopColor: "#fff", animation: "spin 800ms linear infinite" }} />}
                    {EN.notifyCta}
                  </div>
                </div>
                {phoneError && (
                  <div style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 11 }} role="alert">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C0331A" strokeWidth="2.2"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4.5M12 16h.01"></path></svg>
                    <div style={{ font: "700 11.5px/1.4 " + fam, color: "#C0331A" }}>{EN.phoneErr}</div>
                  </div>
                )}
              </>
            )}

            {step === "otp" && (
              <div style={{ background: "#fff", border: "1.8px solid #EDE5DE", borderRadius: 18, padding: 20 }}>
                <div style={{ font: "800 15px/1.3 " + fam, color: "#191410" }}>{EN.otpTitle}</div>
                <div style={{ font: "500 12.5px/1.5 " + fam, color: "#857569", marginTop: 7 }}>{otpSub}</div>
                <div style={{ display: "flex", gap: 9, marginTop: 16 }}>
                  {otpBoxes.map((b, i) => (
                    <div key={i} style={{ width: 52, height: 58, borderRadius: 13, border: "2px solid " + b.border, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: "800 22px/1 " + FAM, color: "#191410" }}>{b.char}</div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 6, marginTop: 14, flexWrap: "wrap" }}>
                  {["3", "4", "5", "0", "⌫"].map((k) => (
                    <div key={k} onClick={() => pressOtp(k)} style={{ width: 38, height: 34, borderRadius: 8, border: "1px solid #E4DBD3", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: "700 13px/1 " + fam, color: "#5C4E44", cursor: "pointer" }}>{k}</div>
                  ))}
                </div>
                <div onClick={verifyOtp} style={{ marginTop: 16, height: 54, borderRadius: 999, background: otpCtaBg, color: otpCtaInk, display: "flex", alignItems: "center", justifyContent: "center", font: "800 14.5px/1 " + fam, cursor: "pointer", boxShadow: otpCtaShadow }}>{EN.verifyCta}</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 13 }}>
                  <div onClick={() => { setStep("form"); setOtp(""); }} style={{ font: "700 12px/1 " + fam, color: "#857569", cursor: "pointer" }}>{EN.changeNumber}</div>
                  <div style={{ font: "700 12px/1 " + fam, color: "#A99B90" }}>{EN.resend}</div>
                </div>
              </div>
            )}

            {step === "done" && (
              <div style={{ background: "#26211E", borderRadius: 20, padding: 22, animation: "fadeUp 320ms ease" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#FFD84D", display: "flex", alignItems: "center", justifyContent: "center", animation: "pop 380ms cubic-bezier(.22,1,.36,1)", flex: "none" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#26211E" strokeWidth="2.8"><path d="M4 12.5l5 5L20 6.5"></path></svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ font: "800 17px/1.25 " + fam, color: "#fff" }}>{EN.doneTitle}</div>
                    <div style={{ font: "500 12px/1.5 " + fam, color: "rgba(255,255,255,.72)", marginTop: 5 }}>{doneSub}</div>
                  </div>
                </div>
                <div style={{ marginTop: 18, background: "rgba(255,255,255,.09)", borderRadius: 14, padding: 13 }}>
                  <div style={{ font: "800 9.5px/1 " + fam, color: "rgba(255,255,255,.6)", letterSpacing: ".09em" }}>{EN.yourLink}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}>
                    <div style={{ flex: 1, minWidth: 0, font: "600 12.5px/1 ui-monospace,Menlo,monospace", color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>haala.pk/r/{refCode}</div>
                    <div onClick={copyLink} style={{ flex: "none", background: "#fff", color: "#26211E", borderRadius: 999, padding: "8px 13px", font: "800 11.5px/1 " + fam, cursor: "pointer" }}>{copied ? EN.copied : EN.copy}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 9, marginTop: 12, flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: 130, background: "#25D366", borderRadius: 12, padding: 12, textAlign: "center", font: "800 12.5px/1 " + fam, color: "#062E14", cursor: "pointer" }}>{EN.shareWa}</div>
                  <div style={{ flex: 1, minWidth: 130, background: "rgba(255,255,255,.12)", borderRadius: 12, padding: 12, textAlign: "center", font: "800 12.5px/1 " + fam, color: "#fff", cursor: "pointer" }}>{EN.shareIg}</div>
                </div>
                <div style={{ font: "500 11px/1.55 " + fam, color: "rgba(255,255,255,.6)", marginTop: 13 }}>{EN.queueNote}</div>
              </div>
            )}

            <div style={{ display: "flex", alignItems: "center", gap: 11, marginTop: 18 }}>
              <div style={{ display: "flex" }}>
                {avatars.map((a, i) => (
                  <div key={i} style={{ width: 28, height: 28, borderRadius: "50%", background: a.bg, border: "2px solid #fff", marginInlineStart: a.overlap, display: "flex", alignItems: "center", justifyContent: "center", font: "800 10px/1 " + fam, color: "#fff" }}>{a.i}</div>
                ))}
              </div>
              <div style={{ font: "600 12.5px/1.4 " + fam, color: "#5C4E44" }}>{socialProof}</div>
            </div>

          
          </div>
        </div>

        <div style={{ flex: "none", width: "min(100%,320px)", display: "flex", justifyContent: "center" }}>
          <div style={{ width: 280, height: 568, borderRadius: 38, background: "#191410", padding: 9, boxShadow: "0 30px 60px rgba(25,20,16,.28)" }}>
            <div style={{ width: "100%", height: "100%", borderRadius: 30, overflow: "hidden", background: "#F7F3EF", position: "relative" }}>
              <ImageSlot label="App home screenshot" src="/images/home.png" />
              <div style={{ position: "absolute", left: 14, bottom: 14, right: 14, background: "rgba(25,20,16,.88)", backdropFilter: "blur(8px)", borderRadius: 14, padding: "12px 13px", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, background: "#FF5A1F", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2"><circle cx="12" cy="12" r="9"></circle><path d="M12 7.5V12l3 2"></path></svg>
                </div>
                <div style={{ font: "800 12px/1.35 " + fam, color: "#fff" }}>{EN.phoneOverlay}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
