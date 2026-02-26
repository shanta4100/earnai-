"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e: any) {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    router.replace("/dashboard");
  }

  return (
    <main style={{ maxWidth: 400, margin: "60px auto" }}>
      <h1>login</h1>

      <form onSubmit={login} style={{ display: "grid", gap: 10 }}>
        <input placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
        <button>login</button>
      </form>

      <p>
        <Link href="/register">create account</Link>
      </p>
    </main>
  );
}