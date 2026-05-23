# VideoMemory Agent Onboarding

This file is the public copy/paste guide for coding agents that need to use
VideoMemory. It is not a maintenance guide for this static website.

VideoMemory is a local HTTP service for visual monitoring. Use it to create
natural-language monitor tasks over camera streams, then read task notes,
evidence frames, evidence clips, and webhook events.

## Canonical URLs

- Project page: `https://clamepending.github.io/videomemory-site/`
- LLM context file: `https://clamepending.github.io/videomemory-site/llms.txt`
- Source repository: `https://github.com/Clamepending/videomemory`
- Default local server: `http://127.0.0.1:5050`
- OpenAPI spec: `http://127.0.0.1:5050/openapi.json`

## Integration rule

For "when X happens, do Y", put only X in VideoMemory and keep Y in the
agent runtime.

Example:

- VideoMemory task: `A phone is visible in the frame.`
- Agent action: `When the webhook arrives, send the user a message.`

## Core startup

```bash
git clone https://github.com/Clamepending/videomemory
cd videomemory
uv sync
uv run videomemory-server
```

Older checkouts can use:

```bash
uv run flask_app/app.py
```

## Basic HTTP workflow

Check health:

```bash
curl -fsSL http://127.0.0.1:5050/api/health
```

List devices:

```bash
curl -fsSL http://127.0.0.1:5050/api/devices
```

Create a monitor:

```bash
curl -fsSL -X POST http://127.0.0.1:5050/api/tasks \
  -H 'Content-Type: application/json' \
  -d '{
    "io_id": "0",
    "task_description": "A phone is visible in the frame.",
    "bot_id": "coding-agent",
    "save_note_frames": true,
    "save_note_videos": true
  }'
```

Read monitor notes:

```bash
curl -fsSL http://127.0.0.1:5050/api/task/0
```

Ask one question about the current frame:

```bash
curl -fsSL -X POST http://127.0.0.1:5050/api/caption_frame \
  -H 'Content-Type: application/json' \
  -d '{"io_id":"0","prompt":"Describe what is visible in this frame."}'
```

## Claude Code quickstart

```bash
claude auth login
npx -y @clamepending/videomemory@0.1.9 claude
```

Useful prompt:

```text
Use VideoMemory to watch my FaceTime camera. Wake me when a human is visible.
```

## OpenClaw quickstart

Plugin path:

```bash
openclaw plugins install @clamepending/videomemory
```

Then in OpenClaw:

```text
/videomemory-onboard --explain
/videomemory-onboard
```

Host CLI path:

```bash
npx -y @clamepending/videomemory@0.1.9 onboard --safe --explain
npx -y @clamepending/videomemory@0.1.9 onboard --safe
```

Use `http://host.docker.internal:5050` when OpenClaw runs in Docker and
VideoMemory runs on the host. Use `http://videomemory:5050` inside the bundled
Docker network.
