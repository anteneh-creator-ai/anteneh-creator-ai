# Anteneh Creator AI

Private, browser-first personal video studio. The core UI and media workflow are designed to work locally without paid AI/video APIs; optional AI providers can be added behind modular adapters.

## Architecture
- **UI:** Next.js App Router + React + TypeScript.
- **Media:** browser File APIs, MediaRecorder, Canvas/WebCodecs where supported; local assets are kept client-side by default.
- **Generation adapters:** optional providers should live behind a server-side adapter boundary; provider secrets must never be exposed to client bundles.
- **Export:** browser/local rendering first, with progressive previews and social presets.

## Authentication and credentials
This initial personal-use build has **no application authentication**. The browser does not receive or store GitHub/Vercel credentials. If optional AI providers are integrated later, API keys belong only in server-side environment variables and are never committed to Git or returned to the browser. User media should use browser-local storage or explicit user-selected exports unless a future storage/auth layer is intentionally enabled.

### Request flow
1. Browser loads the Next.js app.
2. User creates scenes, imports local media, records camera/microphone, edits captions/audio/timeline.
3. Local processing runs in the browser where practical.
4. Optional provider calls go through server-side route handlers/adapters, keeping provider credentials server-only.
5. Export produces a social-ready file locally when browser capabilities allow it.

## Roadmap
Text/story generation, storyboard generation, captions, voice/narration, transitions, effects, avatar adapters, richer timeline editing, and WebCodecs/ffmpeg.wasm export can be layered onto the existing shell without coupling the core app to a paid provider.