// ─────────────────────────────────────────────────────────────
// All site content lives here. Edit this file to update the page.
// ─────────────────────────────────────────────────────────────

const SERIES = {
  title: "AI × Physics Seminar",
  institution: "Perimeter Institute for Theoretical Physics",
  blurb:
    "A seminar series at Perimeter Institute on the interface of artificial " +
    "intelligence and physics: machine learning for physics, physics for " +
    "machine learning, and everything in between.",
  // Default details shown in the "Logistics" section. Leave "" to hide a line.
  when: "Thursdays, 11:00 am ET",
  where: "Room TBA, Perimeter Institute",
  mailingList: "",   // URL to subscribe, or ""
  contactEmail: "",  // or ""
};

// The "Schedule" calendar: one row per weekly slot, marked taken (a talk in
// EVENTS has that date) or open.
const SCHEDULE = {
  weekday: 4,                 // 0 = Sunday … 4 = Thursday
  firstDate: "2026-12-03",    // first slot of the series
  lastDate: "2027-05-31",     // list slots up to this date
  // Dates with no seminar (holidays etc.): "YYYY-MM-DD": "reason"
  noSeminar: {
    "2026-12-24": "Holiday break",
    "2026-12-31": "Holiday break",
  },
};

// The four organizers. `email`, `url` and `affiliation` are optional.
const ORGANIZERS = [
  { name: "Kendrick Smith", email: "kmsmith@perimeterinstitute.ca", affiliation: "Perimeter Institute", url: "" },
  { name: "Benoît Assi", email: "bassi@perimeterinstitute.ca", affiliation: "Perimeter Institute", url: "" },
  { name: "Lizzie Pratt", email: "lpratt@perimeterinstitute.ca", affiliation: "Perimeter Institute", url: "https://lizziepratt.com" },
  { name: "Yurii Kvasiuk", email: "ykvasiuk@perimeterinstitute.ca", affiliation: "Perimeter Institute", url: "https://ykvasiuk.github.io" },
];

// Talks, in any order. The page sorts them and splits upcoming / past
// automatically based on today's date.
//
//   date:     "YYYY-MM-DD"  (required)
//   time:     free text, e.g. "11:00 am ET"   (optional, falls back to nothing)
//   speaker, affiliation, title               (title can be "TBA")
//   speakerUrl: optional link on the speaker's name
//   room:     optional, overrides the default location
//   abstract: optional, shown in a click-to-expand block
//   link:     optional, e.g. Zoom link
//   recording / slides: optional, shown for past talks
//
const EVENTS = [
  {
    date: "2026-12-03",
    time: "11:00 am ET",
    speaker: "Erik Schnetter",
    speakerUrl: "http://www.perimeterinstitute.ca/personal/eschnetter/",
    affiliation: "Perimeter Institute",
    title: "Physics with AI Agents – First Steps",
    abstract:
      "By now, everybody has typed a few questions into a chatbot to see what " +
      "it can do. I will take this a few steps further: I'll show how you can " +
      "set up things on a laptop to have an agent help when writing a paper, " +
      "talk to Mathematica, write some code, or help with git and Github. I " +
      "will also explain concepts such as model, token, context, memory, " +
      "skills, etc., which are mostly rather simple ideas hiding behind " +
      "impressive words.",
  },
  {
    date: "2026-12-10",
    time: "11:00 am ET",
    speaker: "Zohar Ringel",
    affiliation: "Hebrew University of Jerusalem",
    title: "Journal club",
  },
  {
    date: "2027-03-18",
    time: "11:00 am ET",
    speaker: "David Shih",
    affiliation: "Rutgers University",
    title: "TBA",
  },
];
