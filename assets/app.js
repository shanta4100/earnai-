// assets/app.js

const STRIPE_LINKS = {
  basic: "https://buy.stripe.com/bJe8wO1Mn9HAe2Gfk557W03",
  standard: "https://buy.stripe.com/fZufZggHh4ng0bQ4Fr57W04",
  pro: "https://buy.stripe.com/3cI4gydv53jc2jY2xj57W05",
};

// ---- Affiliate tracking (simple) ----
// 1) capture ?ref=NAME from URL
// 2) store it
// 3) whenever user clicks a buy button, we attach ?client_reference_id=ref (safe to try)
// If Stripe ignores it, checkout still works.

(function initAffiliateRef() {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get("ref");
  if (ref) {
    localStorage.setItem("earnai_ref", ref);
  }
})();

function withRef(url) {
  const ref = localStorage.getItem("earnai_ref");
  if (!ref) return url;

  const u = new URL(url);
  // Optional tracking param (won’t break checkout if ignored)
  u.searchParams.set("client_reference_id", ref);
  return u.toString();
}

// Expose helpers to HTML
window.EARNAI = {
  STRIPE_LINKS,
  buy(plan) {
    const url = STRIPE_LINKS[plan];
    if (!url) return;
    window.location.href = withRef(url);
  },
  getRef() {
    return localStorage.getItem("earnai_ref") || "";
  }
};