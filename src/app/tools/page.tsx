import { Metadata, NextPage } from "next"
import Head from "next/head"

export const metadata: Metadata = {
  title: "Tools — theux.dev",
}

const ToolsPage: NextPage = () => {
  return (
    <>
      <div className="px-6">
        <main className="w-full max-w-2xl mx-auto mt-10 mb-20">
          <h1 className="text-xl font-medium">Tools</h1>
          <p className="mt-4 text-[#676767]">things I use to build things</p>

          <div className="mt-20">
            <div className="flex flex-col max-w-3xl space-y-16"></div>
          </div>
        </main>
      </div>
    </>
  )
}

export default ToolsPage
