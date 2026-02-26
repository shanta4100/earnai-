"use client";

import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { auth } from "@/lib/firebase";

export default function ResetPage() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  async function onReset(e: React.FormEvent) {
    e.preventDefault();
    setMsg("");
    try {
      await sendPasswordResetEmail(auth, email);
      setMsg("reset email sent. check your inbox.");
    } catch (err: any) {
      setMsg(err?.message || "reset failed");
    }
  }

  return (
    <main style={{ maxWidth: 520, margin: "40px auto", padding: "0 16px" }}>
      <h1>reset password</h1>

      <form onSubmit={onReset} style={{ display: "grid", gap: 10 }}>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoCapitalize="none"
        />
        <button type="submit">send reset link</button>
      </form>

      {msg ? <p>{msg}</p> : null}

      <p style={{ marginTop: 12 }}>
        <a href="/login">login</a> • <a href="/">home</a>
      </p>
    </main>
  );
}