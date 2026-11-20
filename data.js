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
  where: "Perimeter Institute",
  mailingList: "",   // URL to subscribe, or ""
  contactEmail: "",  // or ""
};

// The four organizers. `url` and `affiliation` are optional.
const ORGANIZERS = [
  { name: "Kendrick Smith", affiliation: "Perimeter Institute", url: "" },
  { name: "Benoît Assi", affiliation: "Perimeter Institute", url: "" },
  { name: "Lizzie Pratt", affiliation: "Perimeter Institute", url: "" },
  { name: "Yurii Kvasiuk", affiliation: "Perimeter Institute", url: "" },
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
    date: "2026-11-26",
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
];
