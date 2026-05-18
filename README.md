# VideoMemory Site

Standalone static project page for the open-source VideoMemory project. The
page is intentionally plain: title, links, TL;DR, screenshot, quickstart, and
API examples.

The site is intentionally dependency-free: plain HTML, CSS, and JavaScript.
It can be hosted directly on GitHub Pages, Cloudflare Pages, or any static host.

## Run Locally

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173
```

## Configure Demo Embed

The live voice-agent demo needs a public server because it mints OpenAI Realtime
client secrets and receives VideoMemory webhooks. When that exists, set
`demoUrl` in `config.js`:

```js
window.VIDEOMEMORY_SITE_CONFIG = {
  demoUrl: "https://demo.example.com"
};
```

Until then the page shows a local-run command and a screenshot of the demo.

## Check

```bash
npm run check
```
