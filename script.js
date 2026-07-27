(function () {
  const STORAGE_KEY = "lb-portfolio-lang";

  function detectLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "pt" || stored === "en") return stored;
    const nav = (navigator.language || "en").toLowerCase();
    return nav.startsWith("pt") ? "pt" : "en";
  }

  function setLang(lang, persist) {
    const c = CONTENT[lang];
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = c.meta.title;
    document.querySelector('meta[name="description"]').setAttribute("content", c.meta.description);

    document.getElementById("lang-toggle").textContent = c.nav.toggleLabel;
    document.querySelectorAll("[data-nav]").forEach((el) => {
      el.textContent = c.nav[el.dataset.nav];
    });

    document.getElementById("hero-kicker").textContent = c.hero.kicker;
    document.getElementById("hero-name").textContent = c.hero.name;
    document.getElementById("hero-headline").textContent = c.hero.headline;
    document.getElementById("hero-location").textContent = c.hero.location;
    const ctaCv = document.getElementById("hero-cta-cv");
    ctaCv.textContent = c.hero.ctaCv;
    ctaCv.href = lang === "pt" ? "assets/curriculo-pt.pdf" : "assets/curriculo-en.pdf";
    document.getElementById("hero-cta-contact").textContent = c.hero.ctaContact;

    document.getElementById("about-title").textContent = c.about.title;
    document.getElementById("about-body").innerHTML = c.about.paragraphs
      .map((p) => `<p>${p}</p>`)
      .join("");

    document.getElementById("experience-title").textContent = c.experience.title;
    document.getElementById("experience-list").innerHTML = c.experience.items
      .map(
        (job) => `
        <div class="border-l-2 border-dotnet pl-6">
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <h3 class="font-semibold text-white">${job.role}</h3>
            <span class="text-sm text-slate-400">${job.period}</span>
          </div>
          <p class="text-dotnet-light">${job.company}</p>
          <ul class="mt-3 list-disc space-y-1.5 pl-5 text-slate-300">
            ${job.bullets.map((b) => `<li>${b}</li>`).join("")}
          </ul>
        </div>`
      )
      .join("");

    document.getElementById("skills-title").textContent = c.skills.title;
    document.getElementById("skills-list").innerHTML = c.skills.groups
      .map(
        (g) => `
        <div>
          <h3 class="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">${g.name}</h3>
          <div class="flex flex-wrap gap-2">
            ${g.items
              .map((i) => `<span class="skill-badge${g.agent ? " skill-badge--agent" : ""}">${i}</span>`)
              .join("")}
          </div>
        </div>`
      )
      .join("");

    document.getElementById("education-title").textContent = c.education.title;
    document.getElementById("education-body").innerHTML = `
      <div class="rounded-lg border border-surface-border bg-surface-panel p-4">
        <p class="font-semibold text-white">${c.education.degree.title}</p>
        <p class="text-slate-300">${c.education.degree.place}</p>
        <p class="text-sm text-slate-400">${c.education.degree.period}</p>
      </div>
      ${c.education.certifications
        .map(
          (cert) => `
        <div class="flex flex-wrap items-baseline justify-between gap-2 rounded-lg border border-surface-border bg-surface-panel p-4">
          <span class="font-semibold text-white">${cert.title} — <span class="font-normal text-slate-300">${cert.issuer}</span></span>
          <span class="text-sm text-slate-400">${cert.date}</span>
        </div>`
        )
        .join("")}
    `;

    document.getElementById("contact-title").textContent = c.contact.title;
    document.getElementById("contact-subtitle").textContent = c.contact.subtitle;
    document.getElementById("contact-links").innerHTML = `
      <a class="btn-primary" href="mailto:lucasbalani@gmail.com">${c.contact.email}</a>
      <a class="btn-secondary" href="https://www.linkedin.com/in/lucas-balani-616b1a148/" target="_blank" rel="noopener">${c.contact.linkedin}</a>
      <a class="btn-secondary" href="https://github.com/lucasbalani" target="_blank" rel="noopener">${c.contact.github}</a>
      <a class="btn-secondary" href="${lang === "pt" ? "assets/curriculo-pt.pdf" : "assets/curriculo-en.pdf"}" download>${c.contact.ctaCv}</a>
    `;

    document.getElementById("footer-text").textContent = c.footer;

    if (persist) localStorage.setItem(STORAGE_KEY, lang);
    document.body.dataset.lang = lang;
  }

  document.getElementById("lang-toggle").addEventListener("click", () => {
    const next = document.body.dataset.lang === "pt" ? "en" : "pt";
    setLang(next, true);
  });

  setLang(detectLang(), false);
})();
