import "../styles/globals.css"
import type { AppProps } from "next/app"
import BaseLayout from "../components/layout/BaseLayout"
import { useEffect, useRef } from "react"

function usePrevious<T>(value: T) {
  let ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function MyApp({ Component, pageProps, router }: AppProps) {
  let previousPathname = usePrevious(router.pathname)
  return (
    <BaseLayout>
      <Component {...pageProps} previousPathname={previousPathname} />
    </BaseLayout>
  )
}

export default MyApp
