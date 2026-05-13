---
name: testing-niyom
description: End-to-end testing procedure for the নিয়ম education platform. Use when verifying UI features, page rendering, or interactive components.
---

# Testing নিয়ম App

## Prerequisites

- Node.js installed (check with `node -v`)
- Dependencies installed: `npm install` in the repo root
- Dev server running: `npx next dev -p 3000`
- Wait for compilation before navigating pages

## Dev Server Notes

- The app uses Next.js with Turbopack. First page load triggers compilation (~2-5s).
- Each new route compiles on first visit. Wait for "Compiling..." indicator to disappear.
- If port 3000 is occupied, kill existing processes: `lsof -ti:3000 | xargs kill -9`

## Page Routes

| Route | Page | Key Features |
|-------|------|-------------|
| `/` | Landing | Hero section, stat cards, feature cards, CTA buttons |
| `/dashboard` | Dashboard | Greeting, 4 stat cards, routine list, countdown, study chart, subject progress |
| `/routine` | Routine Planner | Pomodoro timer, AI routine generator, weekly planner |
| `/ai-teacher` | AI Teacher | Full-screen chat interface with quick reply chips |
| `/subjects` | Subjects | Accordion groups (বিজ্ঞান, আবশ্যিক, মানবিক, ব্যবসায়) |
| `/countdown` | Countdown | 6 exam countdown cards with real-time ticking |
| `/analytics` | Analytics | Line chart, pie chart, radar chart, stat cards |
| `/profile` | Profile | Avatar selection, name editing, stats, badges |

## Interactive Features to Test

### Theme Toggle
- Click Sun/Moon icon in top-right navbar
- Verify: background gradient, text color, and card styles change
- Toggle back to verify bidirectional switching
- Theme persists via localStorage

### Pomodoro Timer (`/routine`)
- Three modes: ফোকাস (25:00), বিরতি (05:00), লম্বা বিরতি (15:00)
- Play button starts countdown
- Pause button freezes timer
- Reset button returns to current mode's default duration
- Session counter increments on completion

### AI Chatbot
- Floating bot button at bottom-right corner on all pages
- Opens glassmorphism chat overlay
- Quick reply chips trigger predefined responses
- "নিউটনের গতিসূত্র কী?" chip returns response containing "F = ma"
- Also accessible as dedicated page at `/ai-teacher`

### Profile Editing (`/profile`)
- Click avatar emoji to change (8 options available)
- Click pencil icon next to name to enable editing
- Type new name and click "সংরক্ষণ" (Save) button
- Default: avatar 👨‍🎓, name "শিক্ষার্থী"

### Subject Accordion (`/subjects`)
- First group "বিজ্ঞান বিভাগ" is expanded by default (6 subjects)
- Clicking another group header expands it and collapses the current one
- Each subject card shows progress %, chapter count, and action tags

### Countdown (`/countdown`)
- 6 countdown cards with days/hours/minutes/seconds
- Seconds should visibly tick (update every second)
- SSC 2028 card should show days > 0

## Known Quirks

- **Bangla text input**: The `type` action in computer-use may not properly input Bangla unicode. Use JavaScript `dispatchEvent` as a workaround:
  ```js
  const input = document.querySelector('input[type="text"]');
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  setter.call(input, 'new value');
  input.dispatchEvent(new Event('input', { bubbles: true }));
  ```
- **Recharts warnings**: Console shows chart width/height `-1` warnings during initial render. These are cosmetic and resolve after layout.
- **Framer Motion warning**: `strokeDashoffset` animation from `undefined` is cosmetic.
- **AI Routine Generator button**: On the routine page, the "AI রুটিন তৈরি করো" button might be near the floating chat button — be careful not to click it accidentally.
- **File manager popup**: Scrolling too aggressively on the routine page might trigger the OS file manager. Close it if it appears.

## Devin Secrets Needed

None required for testing with mock data. If real Gemini API integration is added, a `GEMINI_API_KEY` secret would be needed.
