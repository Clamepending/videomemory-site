import { readFile } from "node:fs/promises";

const requiredFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "config.js",
  "assets/videos/01-hook-voice-agent-shopkeeper.mp4",
  "assets/videos/02-pitch-explanation.mp4",
  "assets/videos/03-finger-demo-ui.mp4",
  "assets/posters/01-hook-voice-agent-shopkeeper.jpg",
  "assets/posters/02-pitch-explanation.jpg",
  "assets/posters/03-finger-demo-ui.jpg",
];
for (const file of requiredFiles) {
  await readFile(new URL(`../${file}`, import.meta.url));
}

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const requiredText = [
  "VideoMemory",
  "Natural-language monitors over live camera streams.",
  "TL;DR",
  "Voice agent shopkeeper hook",
  "Pitch and mechanism",
  "Tell me when you see a finger",
  "Quickstart",
  "Create a monitor",
  "Voice agent demo",
  "HTTP endpoints",
];

for (const text of requiredText) {
  if (!html.includes(text)) {
    throw new Error(`Missing required text: ${text}`);
  }
}

console.log("site check passed");
