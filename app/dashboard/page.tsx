import AuthGate from "@/app/components/AuthGate";

export default function DashboardPage() {
  return (
    <AuthGate>
      <main style={{ maxWidth: 980, margin: "40px auto", padding: "0 16px" }}>
        <h1>dashboard</h1>
        <p>this page is protected (login required).</p>

        <ul>
          <li><a href="/pricing">pricing</a></li>
          <li><a href="/affiliate">affiliate</a></li>
          <li><a href="/order">order</a></li>
          <li><a href="/">home</a></li>
        </ul>
      </main>
    </AuthGate>
  );
}