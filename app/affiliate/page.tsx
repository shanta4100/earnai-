"use client";

import { useMemo, useState } from "react";

export default function AffiliatePage() {
  const [code, setCode] = useState("shanta01");

  const home = useMemo(() => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}/?ref=${encodeURIComponent(code)}`;
  }, [code]);

  const order = useMemo(() => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}/order?ref=${encodeURIComponent(code)}`;
  }, [code]);

  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: 20 }}>
      <h1>Affiliate Link Builder</h1>
      <p>Give partners a code. Any customer coming with that code is tracked.</p>

      <label style={{ display: "block", marginTop: 10, fontWeight: 700 }}>
        Your affiliate code
      </label>
      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{ width: "100%", padding: 12, borderRadius: 10, border: "1px solid #ddd" }}
      />

      <div style={{ marginTop: 14 }}>
        <p><b>Homepage link</b></p>
        <code style={codeBox}>{home}</code>

        <p style={{ marginTop: 14 }}><b>Order page link</b></p>
        <code style={codeBox}>{order}</code>
      </div>
    </main>
  );
}

const codeBox: React.CSSProperties = {
  display: "block",
  padding: 12,
  borderRadius: 10,
  border: "1px solid #eee",
  background: "#fafafa",
  wordBreak: "break-all",
};