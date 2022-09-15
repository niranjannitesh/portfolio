import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="font-sans antialiased text-white bg-x-black selection:bg-white/10">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
