import { readFile } from "node:fs/promises";

const requiredFiles = ["index.html", "styles.css", "script.js", "config.js", "assets/voice-agent-demo.png"];
for (const file of requiredFiles) {
  await readFile(new URL(`../${file}`, import.meta.url));
}

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const requiredText = [
  "VideoMemory",
  "Voice agent demo",
  "How it works",
  "Open-source toolkit for video-aware agents",
  "Build your own",
  "Developer primitives",
  "Starter ideas",
];

for (const text of requiredText) {
  if (!html.includes(text)) {
    throw new Error(`Missing required text: ${text}`);
  }
}

console.log("site check passed");
