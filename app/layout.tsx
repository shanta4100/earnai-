export const metadata = {
  title: "EarnAI",
  description: "YouTube Shorts Scripts Delivered in 48 Hours",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Arial" }}>
        {children}
      </body>
    </html>
  );
}