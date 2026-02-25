(function () {
  const form = document.getElementById("orderForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const details = String(fd.get("details") || "").trim();

    const subject = encodeURIComponent("EarnAI Order — Shorts Script Package");
    const body = encodeURIComponent(
`Hello EarnAI (GNAIAAAC LLC),

Name: ${name}
Email: ${email}

Package: Basic / Standard / Pro
Details:
${details}

Delivery: 48 hours
Thank you.
`
    );

    window.location.href = `mailto:ssgpt6@aol.com?subject=${subject}&body=${body}`;
  });
})();