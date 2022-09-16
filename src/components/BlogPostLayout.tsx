import React from "react"
import clsx from "clsx"
import { formatDate } from "../lib/formatDate"
import { useRouter } from "next/router"

const BlogPostLayout: React.FC<{
  meta: any
  children: React.ReactNode
  previousPathname: string
}> = ({ children, meta, previousPathname }) => {
  const router = useRouter()
  return (
    <div className="relative w-full px-6 mx-auto max-w-7xl">
      {previousPathname && (
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Go back to articles"
          className="flex items-center justify-center w-10 h-10 mt-12 mb-8 transition border rounded-full shadow-md xl:absolute group shadow-zinc-800/5 border-zinc-700/50 bg-zinc-800 ring-0 ring-white/10 hover:border-zinc-700 hover:ring-white/20"
        >
          <svg
            className="w-4 h-4 transition fill-zinc-500 group-hover:fill-zinc-400"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5303 4.46967C10.8232 4.76257 10.8232 5.23744 10.5303 5.53033L4.81067 11.2499H21C21.4142 11.2499 21.75 11.5857 21.75 11.9999C21.75 12.4141 21.4142 12.7499 21 12.7499H4.81066L10.5303 18.4696C10.8232 18.7625 10.8232 19.2374 10.5303 19.5303C10.2374 19.8232 9.76256 19.8232 9.46967 19.5303L2.46967 12.5303C2.32902 12.3896 2.25 12.1988 2.25 11.9999C2.25 11.801 2.32902 11.6102 2.46967 11.4696L9.46967 4.46967C9.76257 4.17678 10.2374 4.17678 10.5303 4.46967Z"
            />
          </svg>
        </button>
      )}
      <main className="w-full max-w-2xl mx-auto mt-32 mb-60">
        <article>
          <header className="flex flex-col">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
              {meta.title}
            </h1>
            <time
              dateTime={meta.date}
              className="flex items-center order-first text-base text-zinc-500"
            >
              <span className="h-4 w-0.5 rounded-full bg-zinc-500" />
              <span className="ml-3">{formatDate(meta.date)}</span>
            </time>
          </header>
          <div className={clsx("mt-8", "prose prose-invert")}>{children}</div>
        </article>
      </main>
    </div>
  )
}

export default BlogPostLayout
