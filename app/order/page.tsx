export default function OrderPage() {
  return (
    <main style={{background:"#0f172a", color:"white", minHeight:"100vh", display:"grid", placeItems:"center", padding:"40px", fontFamily:"Arial"}}>
      <div style={{background:"#1e293b", padding:"30px", borderRadius:"12px", maxWidth:"520px", width:"100%", textAlign:"center"}}>
        <h1 style={{marginTop:0}}>Thank You 🎉</h1>
        <p>Your order has been received.</p>
        <p>Please email your topic + niche to:</p>
        <h3 style={{margin:"10px 0"}}>ssgpt6@aol.com</h3>
        <p>Delivery within 48 hours.</p>
        <p><a href="/" style={{color:"#60a5fa", textDecoration:"none"}}>Return Home</a></p>
      </div>
    </main>
  );
}