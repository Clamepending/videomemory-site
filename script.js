const config = window.VIDEOMEMORY_SITE_CONFIG || {};

for (const link of document.querySelectorAll("[data-github-link]")) {
  if (config.githubUrl) link.href = config.githubUrl;
}

for (const link of document.querySelectorAll("[data-docs-link]")) {
  if (config.docsUrl) link.href = config.docsUrl;
}

const demoUrl = String(config.demoUrl || "").trim();
const demoEmbed = document.getElementById("demoEmbed");
const demoStatus = document.getElementById("demoStatus");
const demoOpenLink = document.getElementById("demoOpenLink");

if (demoUrl && demoEmbed && demoStatus && demoOpenLink) {
  demoStatus.textContent = "Live demo";
  demoOpenLink.textContent = "Open";
  demoOpenLink.href = demoUrl;
  const iframe = document.createElement("iframe");
  iframe.src = demoUrl;
  iframe.title = "VideoMemory live voice agent demo";
  iframe.loading = "lazy";
  demoEmbed.replaceChildren(iframe);
}
