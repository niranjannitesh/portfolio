export type Tool = {
  name: string
  kind: string
  href: string
  icon: string
  /** true when the asset is a full app icon and should fill its tile */
  fill: boolean
}

export const tools: Tool[] = [
  {
    name: "Zed",
    kind: "Editor",
    href: "https://zed.dev",
    icon: "/img/tools/zed.png",
    fill: true,
  },
  {
    name: "Ghostty",
    kind: "Terminal",
    href: "https://ghostty.org",
    icon: "/img/tools/ghostty.png",
    fill: true,
  },
  {
    name: "Raycast",
    kind: "Launcher",
    href: "https://www.raycast.com",
    icon: "/img/tools/raycast.png",
    fill: true,
  },
  {
    name: "HTTPie",
    kind: "API client",
    href: "https://httpie.io",
    icon: "/img/tools/httpie.png",
    fill: false,
  },
  {
    name: "Nota",
    kind: "Notes",
    href: "https://nota.md",
    icon: "/img/tools/nota.png",
    fill: true,
  },
  {
    name: "tldraw",
    kind: "Whiteboard",
    href: "https://tldraw.com",
    icon: "/img/tools/tldraw.svg",
    fill: true,
  },
  {
    name: "Conductor",
    kind: "Coding agents, in parallel",
    href: "https://www.conductor.build",
    icon: "/img/tools/conductor.png",
    fill: true,
  },
]
