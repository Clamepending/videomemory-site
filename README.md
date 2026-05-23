# VideoMemory Site

Standalone static project page for the open-source VideoMemory project. The
page is intentionally simple: title, links, a hero demo video, two supporting
videos, quickstart, and API examples.

The site is intentionally dependency-free: plain HTML, CSS, and JavaScript.
It can be hosted directly on GitHub Pages, Cloudflare Pages, or any static host.

## Videos

The checked-in videos are web-optimized exports derived from:

- `/Users/mark/Movies/videomemdemo.aep_AME/Comp 1.mp4`
- `/Users/mark/Movies/videomemdemo.aep_AME/Comp 2.mp4`
- `/Users/mark/Movies/videomemdemo.aep_AME/Comp 3.mp4`

They are committed under `assets/videos/`, with poster frames under
`assets/posters/`.

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
