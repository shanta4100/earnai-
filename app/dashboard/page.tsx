"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Page() {
  return (
    <main style={{ padding: 40 }}>
      <h1>dashboard</h1>
      <p>logged in: {auth.currentUser?.email}</p>

      <button onClick={() => signOut(auth)}>logout</button>
    </main>
  );
}