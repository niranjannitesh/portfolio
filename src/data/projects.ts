export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  name: string
  eyebrow: string
  description: string
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    name: "Tupli",
    eyebrow: "Personal · 2026 · Alpha",
    description:
      "A native macOS client for Postgres, written in Rust on GPUI, the GPU-composited UI framework behind Zed. TablePlus is fast and closed, pgAdmin is a web app in a wrapper, DataGrip is a JVM taking a minute to think about it, and all three make you wait. This one is on screen before you have let go of the keys and scrolls a million rows without dropping a frame, because everything under the UI is off the main thread by construction. It is alpha, it is being built in the open, and it is not ready to be anybody's daily driver.",
    links: [
      { label: "GitHub", href: "https://github.com/niranjannitesh/tupli" },
    ],
  },
  {
    name: "soma-tts-1 and soma-asr-1",
    eyebrow: "Anuvaya · 2026",
    description:
      "Two speech models for romanised Hindi and Hinglish, one that listens and one that talks. Voice cloning, voice design, and Indic voices that sound like somebody from here instead of a dubbing studio. The training was the part that behaved. The hard problem was knowing whether they had actually got better, when the only instrument you have is another model.",
    links: [{ label: "soma-tts-1", href: "https://anuvaya.com/soma/tts-1" }],
  },
  {
    name: "Terra",
    eyebrow: "Anuvaya · 2026 · Open source",
    description:
      "An agent framework pulled out of a running product rather than designed up front. It sits on Elixir's gen_statem, so an agent is a stateful process that survives a crash mid-response, ages its own tool results out of context, and coordinates with other agents while all of them are mid-conversation. The JS ecosystem is home for us, but OTP was already built for this.",
    links: [
      { label: "GitHub", href: "https://github.com/anuvaya/terra" },
      { label: "Write-up", href: "https://inside.anuvaya.com/notes/terra" },
    ],
  },
  {
    name: "Rune",
    eyebrow: "Anuvaya · 2026",
    description:
      "Long-term memory for agents, built as an append-only causal graph instead of a pile of embeddings. Nothing is ever overwritten, so you can ask what somebody's situation looked like at any point in the past and get the same answer twice. Reads come back in about twenty milliseconds, which is the only reason it can sit inside a live conversation at all.",
    links: [
      { label: "Write-up", href: "https://inside.anuvaya.com/notes/rune" },
    ],
  },
  {
    name: "Realtime Context Engine",
    eyebrow: "Anuvaya · 2025",
    description:
      "The knowledge layer the agents actually read from. Context is organised by time rather than by similarity, every piece of it carries a freshness state and ages out on its own, and the model gets a scratch pad to think in before it commits to saying anything.",
    links: [
      {
        label: "Whitepaper",
        href: "https://inside.anuvaya.com/notes/realtime-context-engine",
      },
    ],
  },
  {
    name: "Vaya",
    eyebrow: "Anuvaya · 2024 to now",
    description:
      "The product everything above runs in production for. Consultations with classically trained astrologers, built so the expertise and the credentials are the thing you see and the AI underneath is never the pitch. Private beta opened in December 2024 and it has been live ever since.",
    links: [{ label: "vaya.so", href: "https://vaya.so" }],
  },
]

export const earlierProjects: Project[] = [
  {
    name: "react-native-msgpack",
    eyebrow: "2023",
    description:
      "MessagePack for React Native, done as a native C module rather than a JavaScript implementation. It is on npm.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/niranjannitesh/react-native-msgpack",
      },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/react-native-msgpack",
      },
    ],
  },
  {
    name: "ex_joi",
    eyebrow: "2022",
    description: "A tiny validation library for Elixir, in the shape of Joi.",
    links: [
      { label: "GitHub", href: "https://github.com/niranjannitesh/ex_joi" },
    ],
  },
]
