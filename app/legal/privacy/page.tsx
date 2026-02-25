// 10) app/legal/privacy/page.tsx
export default function Page() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p style={{ maxWidth: 720, lineHeight: 1.6 }}>
        This Privacy Policy explains, in simple terms, how basic information may be
        collected and used when you interact with the EarnAI website.
      </p>
      <p style={{ maxWidth: 720, lineHeight: 1.6, marginTop: 16 }}>
        EarnAI itself does not intentionally collect sensitive personal data beyond what
        is necessary to process your orders and communicate with you. Payments are handled
        by Stripe or other payment processors, which have their own privacy and security
        practices. You should review their policies separately.
      </p>
    </>
  );
}
