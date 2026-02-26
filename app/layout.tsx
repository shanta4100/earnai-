// app/layout.tsx
import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "EarnAI",
  description: "Business dashboard and earning hub"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
