import { readFile } from "node:fs/promises";

const requiredFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "config.js",
  "llms.txt",
  "AGENTS.md",
  "assets/videos/01-hook-voice-agent-shopkeeper.mp4",
  "assets/videos/02-pitch-explanation.mp4",
  "assets/videos/03-finger-demo-ui.mp4",
  "assets/posters/01-hook-voice-agent-shopkeeper.jpg",
  "assets/posters/02-pitch-explanation.jpg",
  "assets/posters/03-finger-demo-ui.jpg",
  "assets/social-card.png",
];
for (const file of requiredFiles) {
  await readFile(new URL(`../${file}`, import.meta.url));
}

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const requiredText = [
  "VideoMemory",
  "VideoMemory - Natural-language video monitors for AI agents",
  "twitter:card",
  "summary_large_image",
  "og:image",
  "https://clamepending.github.io/videomemory-site/assets/social-card.png",
  "application/ld+json",
  "Natural-language monitors over live camera streams.",
  "TL;DR",
  "Try the live voice agent",
  "https://clamepending-videomemory-demo.hf.space/",
  "Voice agent shopkeeper with VideoMemory",
  "How it works",
  "Basic demo",
  "Tell me when you see a finger",
  "Quickstart",
  "Create a monitor",
  "Voice agent demo",
  "HTTP endpoints",
  "Use it from an agent",
  "Any coding agent",
  "llms.txt",
  "Claude Code",
  "OpenClaw",
  "npx -y @clamepending/videomemory claude",
];

for (const text of requiredText) {
  if (!html.includes(text)) {
    throw new Error(`Missing required text: ${text}`);
  }
}

const llms = await readFile(new URL("../llms.txt", import.meta.url), "utf8");
for (const text of [
  "Default local server: http://127.0.0.1:5050",
  "Claude Code quickstart",
  "OpenClaw quickstart",
  "npx -y @clamepending/videomemory claude",
  "npx -y @clamepending/videomemory onboard --safe",
]) {
  if (!llms.includes(text)) {
    throw new Error(`Missing llms.txt text: ${text}`);
  }
}

const agents = await readFile(new URL("../AGENTS.md", import.meta.url), "utf8");
for (const text of [
  "VideoMemory Agent Onboarding",
  "For \"when X happens, do Y\"",
  "Basic HTTP workflow",
]) {
  if (!agents.includes(text)) {
    throw new Error(`Missing AGENTS.md text: ${text}`);
  }
}

console.log("site check passed");
