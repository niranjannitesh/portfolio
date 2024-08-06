import { Metadata, NextPage } from "next"

export const metadata: Metadata = {
  title: "Blog — theux.dev",
}

const WritingPage: NextPage = () => {
  return (
    <>
      <div className="px-6">
        <main className="w-full max-w-2xl mx-auto mt-10 mb-20">
          <h1 className="text-xl font-medium">Blog</h1>
          <p className="mt-4 text-[#676767]">
            dumb things I always wanted to write about
          </p>

          <div className="mt-20">
            <div className="flex flex-col max-w-3xl space-y-16"></div>
          </div>
        </main>
      </div>
    </>
  )
}

export default WritingPage
