// 1) app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "EarnAI – QuickEarn Hub",
  description: "EarnAI – Script bundles, earnings tools, and automation hub.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          backgroundColor: "#050816",
          color: "#f9fafb",
        }}
      >
        <header
          style={{
            borderBottom: "1px solid #1f2933",
            padding: "12px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 20,
            background: "rgba(5, 8, 22, 0.9)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "#e5e7eb" }}>
            <strong>EarnAI</strong> <span style={{ fontSize: 12 }}>QuickEarn Hub</span>
          </Link>
          <nav style={{ display: "flex", gap: 16, fontSize: 14 }}>
            <Link href="/pricing">Pricing</Link>
            <Link href="/affiliate">Affiliate</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main style={{ maxWidth: 960, margin: "32px auto", padding: "0 16px 64px" }}>
          {children}
        </main>
        <footer
          style={{
            borderTop: "1px solid #1f2933",
            padding: "16px 24px",
            fontSize: 12,
            color: "#9ca3af",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} GNAIAAC LLC · EarnAI ·{" "}
          <Link href="/legal/terms">Terms</Link> ·{" "}
          <Link href="/legal/privacy">Privacy</Link> ·{" "}
          <Link href="/legal/disclaimer">Disclaimer</Link> ·{" "}
          <Link href="/legal/refund">Refund</Link>
        </footer>
      </body>
    </html>
  );
}
