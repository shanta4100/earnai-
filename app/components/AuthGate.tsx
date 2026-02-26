"use client";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";

export default function AuthGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setReady(true);
    });
    return () => unsub();
  }, []);

  if (!ready) return <p style={{ padding: 16 }}>loading…</p>;

  if (!user) {
    return (
      <main style={{ maxWidth: 700, margin: "40px auto", padding: "0 16px" }}>
        <h1>login required</h1>
        <p>
          <a href="/login">go to login</a>
        </p>
      </main>
    );
  }

  return <>{children}</>;
}