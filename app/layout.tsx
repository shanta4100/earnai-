import type { ReactNode } from "react";
import RefTracker from "./components/RefTracker";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RefTracker />
        {children}
      </body>
    </html>
  );
}