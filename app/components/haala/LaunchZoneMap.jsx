"use client";

import { useEffect, useRef, useState } from "react";
import { FAM, DHA_PESHAWAR_COORDS } from "./data";
import { ImageSlot } from "./ImageSlot";

let gmapsLoadPromise = null;
function loadGoogleMaps() {
  if (window.google?.maps) return Promise.resolve();
  if (gmapsLoadPromise) return gmapsLoadPromise;
  gmapsLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return gmapsLoadPromise;
}

export function LaunchZoneMap({ pillLabel }) {
  const mapEl = useRef(null);
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const hasKey = !!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const failed = !hasKey || loadError;

  useEffect(() => {
    if (!hasKey) return;
    loadGoogleMaps().then(() => setReady(true), () => setLoadError(true));
  }, [hasKey]);

  useEffect(() => {
    if (!ready || !mapEl.current) return;
    const bounds = new window.google.maps.LatLngBounds();
    DHA_PESHAWAR_COORDS.forEach((p) => bounds.extend(p));
    const map = new window.google.maps.Map(mapEl.current, {
      center: bounds.getCenter(),
      zoom: 14,
      disableDefaultUI: true,
      zoomControl: true,
    });
    new window.google.maps.Polygon({
      map,
      paths: DHA_PESHAWAR_COORDS,
      strokeColor: "#FF5A1F",
      strokeWeight: 2,
      fillColor: "#FF5A1F",
      fillOpacity: 0.18,
    });
    map.fitBounds(bounds);
  }, [ready]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 320 }}>
      {failed && <ImageSlot label="Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to .env.local to load the DHA Peshawar map" />}
      <div ref={mapEl} style={{ width: "100%", height: "100%", minHeight: 320, display: failed ? "none" : "block" }} />
      <div style={{ position: "absolute", left: 16, top: 16, background: "rgba(38,33,30,.88)", borderRadius: 999, padding: "8px 13px", font: "800 11px/1 " + FAM, color: "#fff" }}>{pillLabel}</div>
    </div>
  );
}
