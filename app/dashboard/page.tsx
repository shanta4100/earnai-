// 8) app/dashboard/page.tsx
export default function Page() {
  return (
    <>
      <h1>EarnAI Dashboard</h1>
      <p style={{ maxWidth: 640, lineHeight: 1.6 }}>
        This is a placeholder dashboard view. In future, this can show your orders,
        affiliate stats, and links to your script bundles or tools. For now, it simply
        confirms that the route is live and working.
      </p>
      <p style={{ marginTop: 16 }}>
        You can extend this page later with authentication, metrics, and automation
        panels as your system grows.
      </p>
    </>
  );
}
