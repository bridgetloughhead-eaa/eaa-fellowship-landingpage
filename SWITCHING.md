# Switching the page between "Apply now" and "Between rounds"

The site has two states. Which one visitors see is controlled by **one flag**.

| State | Flag | What visitors see |
|---|---|---|
| Between rounds | `courseOpen = false` | Next round date, newsletter signup, EAGx. No apply links. |
| Applications open | `courseOpen = true` | The full "Apply now" landing page. |

**Current state: between rounds** (set 5 August 2026).

Nothing is deleted when you switch. Both pages live in the repo permanently:

- `src/ApplyPage.tsx` — the "Apply now" page
- `src/BetweenRoundsPage.tsx` — the "between rounds" page
- `src/Layout.tsx` — the header and footer, shared by both
- `src/content.ts` — all copy for both, in `siteContent` and `betweenRounds`

---

## To turn applications back on for the next round

### 1. Flip the flag

In `src/content.ts`, near the top:

```ts
export const courseOpen = true;
```

### 2. Update the dates in `siteContent`

Still in `src/content.ts`. Every one of these currently says 2026 and needs
changing, or the page will advertise last year's course:

| Where | What to change |
|---|---|
| `siteContent.links.applyForm` | The new round's application form URL |
| `siteContent.hero.closingDate` | "Applications close Monday 13 July 2026" |
| `siteContent.quickFacts` | "6 weeks, 20 July – 29 August" |
| `siteContent.howItWorks.steps[2].desc` | "...20 July to 29 August. Free." |
| `siteContent.finalCta.dateRange` | "Course runs 20 July – 29 August 2026 · Applications close Monday 13 July" |
| `siteContent.moreTestimonials[].citation` | "2026 course participant" — update or leave as historical |
| `siteContent.footer.copyright` | "© 2026 ..." |

### 3. Swap the two commented blocks in `index.html`

`index.html` has two pairs of clearly marked blocks (search for `ACTIVE:`):

- **Meta descriptions** — near the top of `<head>`
- **Structured data** — the `application/ld+json` script

In each pair: comment out the `BETWEEN ROUNDS` block and uncomment the
`APPLY ROUND` block. Update `startDate` and `endDate` in the structured data to
the new round's dates before you do.

### 4. Optionally update `public/sitemap.xml`

Change `<lastmod>` to today's date.

### 5. Push to `main`

The GitHub Action in `.github/workflows/deploy.yml` builds and deploys to
GitHub Pages automatically. Before pushing, it's worth running locally:

```
npm run lint     # type-check
npm run build    # full production build, including the prerender step
npm run preview  # serve dist/ and click through
```

---

## To turn applications off again after a round finishes

The same four steps in reverse: set `courseOpen = false`, update
`betweenRounds.hero.nextRound`, `betweenRounds.statusStrip` and
`betweenRounds.finalCta.eyebrow` to the new "next round" date, and swap the two
`index.html` block pairs back.

---

## Things that must not break

`public/readings/anna-goldsworthy/` is a hand-written static page with a PDF,
served at <https://introcourse.eaa.org.au/readings/anna-goldsworthy/>. It is
**not** part of the React app — Vite copies `public/` into `dist/` verbatim. It
is unaffected by the switch, but if you ever restructure the build, check that
URL still loads and that the PDF still opens.
