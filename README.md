# Blair Chappell — Portfolio (Next.js)

Personal portfolio site for Blair Chappell, videographer & UGC creator.
Next.js 15 (App Router) + TypeScript, no UI dependencies.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. On vercel.com → **Add New → Project** → import the repo.
3. Framework preset: **Next.js**. No env vars, no build overrides needed.
4. Deploy. Add your custom domain under Project → Settings → Domains.

> If this folder is nested inside a larger repo, set **Root Directory** to `nextjs` in the Vercel project settings.

## Structure

```
app/layout.tsx      fonts, metadata, global CSS
app/page.tsx        the whole page; content lives in the arrays at the top
app/globals.css     all styling (dark editorial theme)
components/VideoTile.tsx   9:16 reel tile — hover to preview, click for sound
public/videos/      self-hosted vertical clips
public/img/         poster stills + headshot
```

## Editing content

Everything editable is in the arrays at the top of `app/page.tsx`:

- `reels` — the 9:16 Work tiles. Add an entry with `src`, `poster`, `kicker`, `title`.
- `openSlots` — remaining empty tiles. Delete entries as you fill them with real reels.
- `ads` — Advertisement Work cards; `id` is the YouTube video id.
- `craft`, `services` — the skill cards and service list.

Change the accent color in one place: `--accent` in `app/globals.css`.

## Adding a video

1. Drop the `.mp4` (H.264) in `public/videos/`.
2. Export a still frame as a `.png` into `public/img/` for the poster.
3. Add it to the `reels` array.

**Keep videos small.** Clips are served straight from `public/`, so a 15 MB file is
a 15 MB download. Compress to ~2–4 MB each (1080×1920, H.264, CRF 26):

```bash
ffmpeg -i in.mp4 -vf scale=1080:-2 -c:v libx264 -crf 26 -preset slow -c:a aac -b:a 96k out.mp4
```

For anything longer than ~20 s, consider Vercel Blob, Mux, or Cloudflare Stream
instead of committing the file to git.

## Hero background

The hero currently uses a CSS-animated stand-in (warm bokeh + drifting light).
To use real footage, replace the `.heroBg` block in `app/page.tsx` with:

```tsx
<video src="/videos/hero.mp4" autoPlay muted loop playsInline
  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
```
# Ugc
