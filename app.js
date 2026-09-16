// Lilla P B2B Portal — UX Audit report
// Shared rendering logic for index.html (report + findings catalog) and
// caso.html (case detail). Reads from the CASES array defined in data.js.
// Loaded by both pages as a single ES module entry (<script type="module"
// src="/app.js">) — it self-detects which page it's on (see the bottom of
// this file) and runs the matching render function.

import { CASES } from "./data.js";

function severityBadgeClasses(sev) {
  switch (sev) {
    case "High":
      return "bg-terracotta text-white";
    case "Medium":
      return "bg-amber-600 text-white";
    case "Low":
      return "bg-low text-white";
    default:
      return "bg-emerald-700 text-white";
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function computeStats() {
  let findingCount = 0,
    high = 0,
    medium = 0,
    low = 0;
  CASES.forEach((c) =>
    c.findings.forEach((f) => {
      findingCount++;
      if (f.severity === "High") high++;
      else if (f.severity === "Medium") medium++;
      else low++;
    })
  );
  return { caseCount: CASES.length, findingCount, high, medium, low };
}

// ---------------------------------------------------------------------
// index.html
// ---------------------------------------------------------------------

function renderStats() {
  const s = computeStats();
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  set("stat-case-count", s.caseCount);
  set("stat-finding-count", s.findingCount);
  set("stat-high-count", s.high);
  set("stat-medium-count", s.medium);
  set("stat-low-count", s.low);

  const total = s.findingCount || 1;
  const bar = (id, count) => {
    const el = document.getElementById(id);
    if (el) el.style.width = Math.round((count / total) * 100) + "%";
  };
  bar("bar-high", s.high);
  bar("bar-medium", s.medium);
  bar("bar-low", s.low);
}

let currentSeverity = "All";
let currentText = "";
let openGroups = new Set();

function findingRowHtml(c, f) {
  return `
    <tr class="finding-row border-b border-row hover:bg-salvia-light cursor-pointer" data-case="${c.n}" data-open="true">
      <td class="py-3 pl-10 pr-2 font-code text-xs text-forest-muted align-top">${c.n}.${f.n}</td>
      <td class="py-3 pr-2 align-top">
        <a href="caso.html?id=${c.n}#finding-${f.n}" class="font-ui font-medium text-forest-ink hover:text-terracotta hover:underline">${escapeHtml(f.title)}</a>
        <div class="text-xs text-forest-muted mt-1 font-ui">${escapeHtml(f.heuristic)}</div>
      </td>
      <td class="py-3 pr-2 align-top">
        <span class="inline-block px-2 py-0.5 rounded-full text-badge font-ui font-semibold ${severityBadgeClasses(f.severity)}">${f.severity}</span>
      </td>
      <td class="py-3 pr-2 align-top text-sm font-ui text-forest-muted">${escapeHtml(f.category)}</td>
      <td class="py-3 pr-4 align-top text-sm font-ui text-forest-muted">${escapeHtml(f.viewport)}</td>
    </tr>`;
}

function caseGroupRowHtml(c, matchCount) {
  const open = openGroups.has(c.n);
  return `
    <tr class="case-group-row ${open ? "is-open" : ""} bg-salvia-card border-b-2 border-salvia-border" data-case-toggle="${c.n}">
      <td class="py-3 pl-4 pr-2 font-code text-xs text-forest-muted align-middle">
        <span class="chev">&#9656;</span> ${c.n}
      </td>
      <td colspan="2" class="py-3 pr-2 align-middle">
        <a href="caso.html?id=${c.n}" class="font-ui font-semibold text-forest-ink hover:text-terracotta hover:underline">${escapeHtml(c.title)}</a>
        <span class="ml-2 text-xs font-ui text-forest-muted">${escapeHtml(c.screenTag)}</span>
      </td>
      <td class="py-3 pr-2 align-middle">
        ${c.statusBadges.map((b) => `<span class="inline-block px-2 py-0.5 mr-1 rounded-full text-badge font-ui font-semibold bg-forest-ink text-white">${escapeHtml(b)}</span>`).join("")}
      </td>
      <td class="py-3 pr-4 align-middle text-sm font-ui text-forest-muted">${matchCount} finding${matchCount === 1 ? "" : "s"}</td>
    </tr>`;
}

function renderCatalog() {
  const tbody = document.getElementById("catalog-body");
  if (!tbody) return;
  tbody.innerHTML = "";
  let visibleCases = 0;
  let visibleFindings = 0;

  CASES.forEach((c) => {
    const matching = c.findings.filter((f) => {
      const matchesSeverity = currentSeverity === "All" || f.severity === currentSeverity;
      const haystack = (f.title + " " + f.heuristic + " " + f.category + " " + c.title + " " + c.screenTag).toLowerCase();
      const matchesText = !currentText || haystack.includes(currentText.toLowerCase());
      return matchesSeverity && matchesText;
    });
    if (matching.length === 0) return;
    visibleCases++;
    visibleFindings += matching.length;

    tbody.insertAdjacentHTML("beforeend", caseGroupRowHtml(c, matching.length));
    matching.forEach((f) => {
      tbody.insertAdjacentHTML("beforeend", findingRowHtml(c, f));
    });
  });

  tbody.querySelectorAll("[data-case-toggle]").forEach((row) => {
    row.addEventListener("click", () => {
      const caseN = row.getAttribute("data-case-toggle");
      if (openGroups.has(caseN)) openGroups.delete(caseN);
      else openGroups.add(caseN);
      renderCatalog();
    });
  });

  tbody.querySelectorAll(".finding-row").forEach((row) => {
    const caseN = row.getAttribute("data-case");
    if (openGroups.has(caseN)) row.classList.add("is-open");
    row.addEventListener("click", (e) => {
      if (e.target.tagName === "A") return;
      const link = row.querySelector("a");
      if (link) window.location.href = link.getAttribute("href");
    });
  });

  const countLabel = document.getElementById("catalog-count-label");
  if (countLabel) {
    countLabel.textContent = `Showing ${visibleFindings} finding${visibleFindings === 1 ? "" : "s"} across ${visibleCases} case${visibleCases === 1 ? "" : "s"}`;
  }
}

function initIndex() {
  // All groups start open so the full catalog is visible on load.
  CASES.forEach((c) => openGroups.add(c.n));
  renderStats();
  renderCatalog();

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentText = e.target.value;
      renderCatalog();
    });
  }

  document.querySelectorAll("[data-severity-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentSeverity = btn.getAttribute("data-severity-filter");
      document.querySelectorAll("[data-severity-filter]").forEach((b) => b.classList.remove("bg-forest-ink", "text-white"));
      btn.classList.add("bg-forest-ink", "text-white");
      renderCatalog();
    });
  });
}

// ---------------------------------------------------------------------
// caso.html
// ---------------------------------------------------------------------

function imageGridHtml(images) {
  if (!images || images.length === 0) return "";
  return `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
      ${images
        .map(
          (img) => `
        <figure class="border border-salvia-border rounded overflow-hidden bg-salvia-light">
          <img src="${img.src}" alt="${escapeHtml(img.caption)}" class="w-full h-auto block" loading="lazy" />
          <figcaption class="text-xs font-ui text-forest-muted px-2 py-1.5 border-t border-salvia-border">${escapeHtml(img.caption)}</figcaption>
        </figure>`
        )
        .join("")}
    </div>`;
}

function findingCardHtml(c, f) {
  return `
    <article id="finding-${f.n}" class="card-finding bg-white border border-salvia-border rounded-lg p-5 md:p-6 scroll-mt-24">
      <div class="flex flex-wrap items-center gap-2 mb-3">
        <span class="inline-block px-2 py-0.5 rounded-full text-badge font-ui font-semibold ${severityBadgeClasses(f.severity)}">${f.severity}</span>
        <span class="inline-block px-2 py-0.5 rounded-full text-badge font-ui font-semibold bg-salvia-card text-forest-ink border border-salvia-border">${escapeHtml(f.category)}</span>
        <span class="inline-block px-2 py-0.5 rounded-full text-badge font-ui font-semibold bg-salvia-card text-forest-ink border border-salvia-border">${escapeHtml(f.viewport)}</span>
        <span class="font-code text-xs text-forest-muted ml-auto">Finding ${c.n}.${f.n}</span>
      </div>
      <div class="font-ui text-xs uppercase tracking-wide text-forest-muted mb-1">${escapeHtml(f.heuristic)}</div>
      <h3 class="font-hero text-2xl md:text-3xl text-forest-ink mb-3">${escapeHtml(f.title)}</h3>
      <div class="font-reading text-body leading-relaxed text-forest-ink space-y-3">
        ${f.body.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
      </div>
      ${imageGridHtml(f.images)}
      <div class="mt-4 bg-terracotta-light border border-callout rounded-md p-4">
        <div class="font-ui text-xs font-semibold uppercase tracking-wide text-terracotta-hover mb-1">Recommendation</div>
        <p class="font-reading text-body text-forest-ink">${escapeHtml(f.recommendation)}</p>
      </div>
      <div class="mt-3 text-xs font-ui text-forest-muted italic">Priority note: ${escapeHtml(f.priorityNote)}</div>
    </article>`;
}

function initCaso() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const c = CASES.find((x) => x.n === id);
  const root = document.getElementById("caso-root");
  if (!c) {
    if (root) {
      root.innerHTML = `<div class="bg-white border border-salvia-border rounded-lg p-8 text-center">
        <p class="font-ui text-forest-muted">No case found for id "${escapeHtml(id || "")}".</p>
        <a href="index.html" class="inline-block mt-4 font-ui text-terracotta hover:underline">&larr; Back to report</a>
      </div>`;
    }
    return;
  }

  document.title = `${c.title} — Lilla P B2B Portal UX Audit`;

  const badgesHtml = c.statusBadges
    .map((b) => `<span class="inline-block px-2 py-0.5 mr-1 rounded-full text-badge font-ui font-semibold bg-forest-ink text-white">${escapeHtml(b)}</span>`)
    .join("");

  const stepsHtml = c.steps.map((s) => `<li class="pl-1">${escapeHtml(s)}</li>`).join("");

  const findingsHtml = c.findings.map((f) => findingCardHtml(c, f)).join("");

  const positivesHtml = c.positives && c.positives.length
    ? `
    <section class="mt-10">
      <h2 class="font-hero text-2xl text-forest-ink mb-3">Positive observations</h2>
      <ul class="list-disc pl-6 space-y-2 font-reading text-body text-forest-ink">
        ${c.positives.map((p) => `<li>${escapeHtml(p)}</li>`).join("")}
      </ul>
    </section>`
    : "";

  const notesHtml = c.notes && c.notes.length
    ? `
    <section class="mt-10">
      <h2 class="font-hero text-2xl text-forest-ink mb-3">Notes</h2>
      <ul class="list-disc pl-6 space-y-2 font-reading text-body text-forest-muted">
        ${c.notes.map((n) => `<li>${escapeHtml(n)}</li>`).join("")}
      </ul>
    </section>`
    : "";

  root.innerHTML = `
    <nav class="no-print mb-6">
      <a href="index.html" class="font-ui text-sm text-terracotta hover:underline">&larr; Back to report</a>
    </nav>
    <div class="mb-4 flex flex-wrap items-center gap-2">
      <span class="font-code text-xs text-forest-muted">Case ${c.n}</span>
      ${badgesHtml}
      <span class="text-xs font-ui text-forest-muted">${escapeHtml(c.screenTag)}</span>
    </div>
    <h1 class="font-hero text-4xl md:text-5xl text-forest-ink leading-tight mb-4">${escapeHtml(c.title)}</h1>
    <p class="font-reading text-lead leading-relaxed text-forest-ink max-w-3xl mb-8">${escapeHtml(c.description)}</p>

    <section class="mb-10">
      <h2 class="font-hero text-2xl text-forest-ink mb-3">Steps performed</h2>
      <ol class="list-decimal pl-6 space-y-2 font-reading text-body text-forest-ink max-w-3xl">
        ${stepsHtml}
      </ol>
    </section>

    <section>
      <h2 class="font-hero text-2xl text-forest-ink mb-4">Findings (${c.findings.length})</h2>
      <div class="space-y-6">
        ${findingsHtml}
      </div>
    </section>

    ${positivesHtml}
    ${notesHtml}
  `;

  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      target.classList.add("highlight-target");
    }
  }
}

// ---------------------------------------------------------------------
// Entry point — this file is loaded as a single module by both pages
// (index.html and caso.html). It self-detects which page it's on by
// looking for that page's root element, and runs the matching renderer.
// ---------------------------------------------------------------------

if (document.getElementById("catalog-body")) {
  initIndex();
} else if (document.getElementById("caso-root")) {
  initCaso();
}
