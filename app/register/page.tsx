"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register(e:any) {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password);
    router.replace("/dashboard");
  }

  return (
    <main style={{ maxWidth: 400, margin: "60px auto" }}>
      <h1>register</h1>

      <form onSubmit={register} style={{ display: "grid", gap: 10 }}>
        <input placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
        <button>create account</button>
      </form>
    </main>
  );
}