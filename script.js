const config = window.VIDEOMEMORY_SITE_CONFIG || {};

for (const link of document.querySelectorAll("[data-github-link]")) {
  if (config.githubUrl) link.href = config.githubUrl;
}

for (const link of document.querySelectorAll("[data-docs-link]")) {
  if (config.docsUrl) link.href = config.docsUrl;
}

const demoUrl = String(config.demoUrl || "").trim();
const demoStatus = document.getElementById("demoStatus");
const demoOpenLink = document.getElementById("demoOpenLink");

if (demoUrl && demoStatus && demoOpenLink) {
  demoStatus.textContent = "Live demo";
  demoOpenLink.textContent = "Start live demo";
  demoOpenLink.href = demoUrl;
  demoOpenLink.target = "_blank";
  demoOpenLink.rel = "noopener noreferrer";
}
