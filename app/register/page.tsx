"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "@/lib/firebase";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function onRegister(e: React.FormEvent) {
    e.preventDefault();
    setMsg("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      window.location.href = "/dashboard";
    } catch (err: any) {
      setMsg(err?.message || "register failed");
    }
  }

  return (
    <main style={{ maxWidth: 520, margin: "40px auto", padding: "0 16px" }}>
      <h1>register</h1>

      <form onSubmit={onRegister} style={{ display: "grid", gap: 10 }}>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoCapitalize="none"
        />
        <input
          placeholder="password (min 6)"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">create account</button>
      </form>

      {msg ? <p style={{ color: "crimson" }}>{msg}</p> : null}

      <p style={{ marginTop: 12 }}>
        <a href="/login">back to login</a> • <a href="/">home</a>
      </p>
    </main>
  );
}