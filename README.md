# AI × Physics Seminar — website

Static site for the AI × Physics seminar series at Perimeter Institute. No build step.

## Updating the site

Everything editable is in [`data.js`](data.js):

- `SERIES` — title, blurb, default time/room, mailing list, contact
- `ORGANIZERS` — the four organizers
- `EVENTS` — talks. Add an entry with a `date` (`YYYY-MM-DD`); the page sorts
  talks and moves them from "Upcoming" to "Past" automatically.

Edit the file (the GitHub web editor works fine), commit, and the page updates.

## Preview locally

Open `index.html` in a browser.

## Publishing on GitHub Pages

1. Create a repository on GitHub and push this folder to it.
2. In the repo: **Settings → Pages → Build and deployment → Deploy from a branch**,
   pick `main` and `/ (root)`.
3. The site appears at `https://<owner>.github.io/<repo>/` after a minute or so.
