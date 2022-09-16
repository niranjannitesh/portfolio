import { NextPage } from "next"
import Head from "next/head"
import { Card } from "../../components/Card"
import { formatDate } from "../../lib/formatDate"
import { getAllArticles } from "../../lib/getAllArticles"

function Post({ post }: any) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${post.slug}`}>{post.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={post.date}
          className="md:hidden"
          decorate
        >
          {formatDate(post.date)}
        </Card.Eyebrow>
        <Card.Description>{post.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={post.date}
        className="hidden mt-1 md:block"
      >
        {formatDate(post.date)}
      </Card.Eyebrow>
    </article>
  )
}

const BlogPage: NextPage<{ articles: any[] }> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Nitesh Kumar Niranjan — Product Designer / Developer</title>
      </Head>
      <div className="px-6">
        <main className="w-full max-w-2xl mx-auto mt-10 mb-20">
          <h1 className="text-xl font-medium">Blog</h1>
          <p className="mt-4 text-[#676767]">
            dumb things I always wanted to write about
          </p>

          <div className="mt-20">
            <div className="flex flex-col max-w-3xl space-y-16">
              {articles.map((post) => (
                <Post post={post} key={post.date} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default BlogPage

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
