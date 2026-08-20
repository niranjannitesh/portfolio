export type Note = {
  title: string
  date: string
  href: string
  description: string
}

// Published under my own name at inside.anuvaya.com. This page is an index, the
// posts live there.
export const notes: Note[] = [
  {
    title: "Multi-Agent Conversational AI",
    date: "2026-06-03",
    href: "https://inside.anuvaya.com/notes/multi-agent-orchestration",
    description:
      "What production conversational AI takes once you stop treating it as request and response: instant talk, slow thinking, one hard invariant, and patience for the third of users who send the next message before you have finished answering the last one.",
  },
  {
    title: "Terra: An Agent Framework Extracted from Production",
    date: "2026-06-03",
    href: "https://inside.anuvaya.com/notes/terra",
    description:
      "An Elixir agent framework built on gen_statem. Stateful processes, context aging, multi-agent coordination, and why the five-line demo disappears the moment an agent has to survive a crash mid-response.",
  },
  {
    title: "Rune: Long-Term Memory for AI Agents",
    date: "2026-06-02",
    href: "https://inside.anuvaya.com/notes/rune",
    description:
      "An append-only knowledge graph that records how a person's life changes over time. Deterministic, causal, and fast enough to sit inside a real conversation.",
  },
  {
    title: "The Realtime Context Engine",
    date: "2025-11-28",
    href: "https://inside.anuvaya.com/notes/realtime-context-engine",
    description:
      "Treating context as a living system rather than a retrieval problem: a temporal hierarchy, freshness states that expire on their own, and a scratch pad the model reasons in before it answers.",
  },
  {
    title: "Stateful Agent Orchestration",
    date: "2025-08-15",
    href: "https://inside.anuvaya.com/notes/stateful-agent-orchestration",
    description:
      "The dual-buffer design and the coherence invariant underneath it: what the user sees, what gets saved, and what the model knows have to be identical. It sounds obvious. It was not.",
  },
  {
    title: "The Boring Designer",
    date: "2025-04-12",
    href: "https://inside.anuvaya.com/notes/the-boring-designer",
    description:
      "On the ninety-nine percent of design work that nobody screenshots, and why boring is usually the correct output.",
  },
]

// On Medium, 2018 and 2019.
export const earlierNotes: Note[] = [
  {
    title: "TailwindCSS: Easy UI development",
    date: "2019-04-27",
    href: "https://medium.com/@niranjannitesh/tailwindcss-easy-ui-development-c369c0cb218b",
    description:
      "Why I stopped reaching for Bootstrap, six months into using Tailwind on personal projects and in production.",
  },
  {
    title: "UI Design Guide for Non-Designers",
    date: "2018-07-25",
    href: "https://medium.com/prototypr/ui-design-guide-for-non-designers-beginners-ea394f3d9e41",
    description:
      "The basics of interface design for people who build things but do not design them.",
  },
  {
    title: "Intro to Machine Learning with Linear Regression",
    date: "2018-06-17",
    href: "https://medium.com/@niranjannitesh/intro-to-machine-learning-with-linear-regression-the-easy-way-c45e63557a1a",
    description:
      "Linear regression for the first time, without the notation getting in the way.",
  },
]
