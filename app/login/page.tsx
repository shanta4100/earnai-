"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function onLogin(e: React.FormEvent) {
    e.preventDefault();
    setMsg("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/dashboard";
    } catch (err: any) {
      setMsg(err?.message || "login failed");
    }
  }

  return (
    <main style={{ maxWidth: 520, margin: "40px auto", padding: "0 16px" }}>
      <h1>login</h1>

      <form onSubmit={onLogin} style={{ display: "grid", gap: 10 }}>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoCapitalize="none"
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>

      {msg ? <p style={{ color: "crimson" }}>{msg}</p> : null}

      <p style={{ marginTop: 12 }}>
        <a href="/register">create account</a> • <a href="/reset">reset password</a> •{" "}
        <a href="/">home</a>
      </p>
    </main>
  );
}