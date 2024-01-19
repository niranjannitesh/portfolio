import { type Metadata } from "next"

import "@/styles/globals.css"
import BaseLayout from "@/components/layout/BaseLayout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="font-sans antialiased text-white bg-x-black selection:bg-white/10">
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  )
}
