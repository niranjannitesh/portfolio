import type { NextPage } from "next"
import Head from "next/head"
import NextLink from "next/link"

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nitesh Kumar Niranjan — Product Designer / Developer</title>
      </Head>
      <div className="px-6">
        <main className="w-full max-w-xl mx-auto mt-10 mb-20">
          <h1 className="text-xl font-medium">Hey 🙋 I&apos;m Nitesh.</h1>
          <p className="mt-4 text-[#676767]">
            I&apos;m a 21-year-old <s>designer, developer, and tinkerer</s>{" "}
            <span className="border-b text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#F59E0B] border-[#242424] py-1">
              hacker
            </span>
            .
          </p>
          <p className="text-[#676767] mt-6 leading-loose">
            I design things, I build things, sometimes I break things and then I
            put them back together. Building things from scratch for a while
            now.
          </p>
          <p className="text-[#676767] mt-6 leading-loose">
            When I&apos;m not designing or coding, you can find me playing with
            my cat, cooking or just relaxing at home.
          </p>
          <div className="mt-8">
            <p className="text-[#676767]">
              <span className="text-[#CDCDCD] border-b border-[#242424] py-2 pr-1">
                Tech Lead
              </span>{" "}
              at{" "}
              <a href="https://ripen.in" target="_blank" rel="noreferrer">
                <span className="bg-[#0F0F0F] inline-flex items-center gap-2 border border-[#161616] px-5 py-2 rounded-full text-[#B9B9B9] font-medium ml-1">
                  Ripen
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className="w-4 h-4"
                  >
                    <rect
                      opacity="0.12"
                      x="2"
                      y="4"
                      width="18"
                      height="18"
                      rx="5"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.25 2C16.25 2.41421 16.5858 2.75 17 2.75H20.1893L11.4697 11.4697C11.1768 11.7626 11.1768 12.2374 11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303L21.25 3.81066V7C21.25 7.41421 21.5858 7.75 22 7.75C22.4142 7.75 22.75 7.41421 22.75 7V2C22.75 1.58579 22.4142 1.25 22 1.25H17C16.5858 1.25 16.25 1.58579 16.25 2ZM10 3.25L9.96644 3.25C8.59472 3.25 7.51929 3.24999 6.65494 3.32061C5.77479 3.39252 5.04769 3.54138 4.38955 3.87671C3.30762 4.42798 2.42798 5.30762 1.87671 6.38955C1.54138 7.04768 1.39252 7.77479 1.32061 8.65494C1.24999 9.51929 1.25 10.5947 1.25 11.9664V12V14V14.0336C1.25 15.4053 1.24999 16.4807 1.32061 17.3451C1.39252 18.2252 1.54138 18.9523 1.87671 19.6104C2.42798 20.6924 3.30762 21.572 4.38956 22.1233C5.04768 22.4586 5.77479 22.6075 6.65494 22.6794C7.51927 22.75 8.59469 22.75 9.96637 22.75H9.96642H10H12H12.0336H12.0336C13.4053 22.75 14.4807 22.75 15.3451 22.6794C16.2252 22.6075 16.9523 22.4586 17.6104 22.1233C18.6924 21.572 19.572 20.6924 20.1233 19.6104C20.4586 18.9523 20.6075 18.2252 20.6794 17.3451C20.75 16.4807 20.75 15.4053 20.75 14.0336V14.0336V14V11C20.75 10.5858 20.4142 10.25 20 10.25C19.5858 10.25 19.25 10.5858 19.25 11V14C19.25 15.4125 19.2494 16.4268 19.1844 17.2229C19.12 18.0103 18.9964 18.518 18.7868 18.9295C18.3793 19.7291 17.7291 20.3793 16.9295 20.7868C16.518 20.9964 16.0103 21.12 15.2229 21.1844C14.4268 21.2494 13.4125 21.25 12 21.25H10C8.58749 21.25 7.57322 21.2494 6.77708 21.1844C5.9897 21.12 5.48197 20.9964 5.07054 20.7868C4.27085 20.3793 3.62068 19.7291 3.21322 18.9295C3.00359 18.518 2.87996 18.0103 2.81563 17.2229C2.75058 16.4268 2.75 15.4125 2.75 14V12C2.75 10.5875 2.75058 9.57322 2.81563 8.77708C2.87996 7.9897 3.00359 7.48197 3.21322 7.07054C3.62068 6.27085 4.27085 5.62068 5.07054 5.21322C5.48197 5.00359 5.9897 4.87996 6.77708 4.81563C7.57322 4.75058 8.58749 4.75 10 4.75H13C13.4142 4.75 13.75 4.41421 13.75 4C13.75 3.58579 13.4142 3.25 13 3.25H10Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </p>
          </div>
          <div className="mt-12 text-[#676767] flex items-center gap-5">
            <a
              href="https://twitter.com/niranjannitesh"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center hover:bg-[#1A1A1A] rounded-lg"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 26 23"
                width={24}
                height={24}
              >
                <path
                  fillRule="evenodd"
                  d="M8.177 22.292c9.812 0 15.177-8.335 15.177-15.563 0-.237-.005-.472-.015-.707A11.004 11.004 0 0026 3.19c-.956.435-1.984.729-3.063.86a5.467 5.467 0 002.345-3.025 10.539 10.539 0 01-3.387 1.328A5.268 5.268 0 0018.001.625c-2.946 0-5.334 2.45-5.334 5.47 0 .428.046.846.138 1.246C8.37 7.112 4.44 4.936 1.809 1.626a5.562 5.562 0 00-.722 2.75c0 1.897.942 3.573 2.374 4.553a5.196 5.196 0 01-2.416-.685v.07c0 2.65 1.838 4.861 4.279 5.362a5.217 5.217 0 01-2.41.094c.68 2.173 2.649 3.755 4.984 3.8A10.534 10.534 0 010 19.834a14.83 14.83 0 008.177 2.457"
                />
              </svg>
            </a>
            <a
              href="https://dribbble.com/niranjannitesh"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center hover:bg-[#1A1A1A] rounded-lg"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 26 26"
                width={24}
                height={24}
              >
                <path d="M24.676 10.602a12.026 12.026 0 010 4.799 11.9 11.9 0 01-1.796 4.264 12.06 12.06 0 01-1.453 1.763 12.1 12.1 0 01-1.764 1.453A11.874 11.874 0 0113 24.917a11.88 11.88 0 01-2.4-.244 11.737 11.737 0 01-2.24-.694 11.94 11.94 0 01-7.037-8.578 12.057 12.057 0 010-4.8A11.856 11.856 0 013.12 6.339 11.998 11.998 0 016.336 3.12c.637-.432 1.318-.8 2.025-1.1a11.94 11.94 0 017.039-.694c.765.156 1.519.391 2.24.694.706.3 1.387.668 2.023 1.1a11.93 11.93 0 015.013 7.48zm-7.778 3.677c1.457 4 2.049 7.259 2.162 7.929 2.492-1.683 4.408-4.35 4.902-7.445-.23-.075-3.479-1.058-7.064-.484zm-3.897 9.824c1.536 0 3.002-.315 4.334-.88-.165-.971-.809-4.37-2.371-8.43l-.075.024c-6.585 2.294-8.713 6.935-8.713 6.935s-.102-.075-.249-.194a11.059 11.059 0 007.074 2.545zM1.897 12.999a11.06 11.06 0 002.84 7.414s3.04-5.39 9.031-7.325c.145-.049.29-.093.437-.133a36.623 36.623 0 00-.9-1.888c-5.716 1.71-11.201 1.587-11.399 1.582-.003.116-.009.233-.009.35zM8.371 2.961c-3.097 1.461-5.515 4.312-6.235 7.751.292.005 5.028.062 10.359-1.355A66.403 66.403 0 008.37 2.96zm6.017 5.728c4.192-1.57 5.917-3.978 5.945-4.02A11.058 11.058 0 0013 1.9c-.902 0-1.923.11-2.762.313.167.22 2.252 2.99 4.15 6.477zm1.835 3.836c3.814-.48 7.716.329 7.877.364a11.058 11.058 0 00-2.526-6.94c-.021.03-1.945 2.604-6.33 4.394.259.528.508 1.066.739 1.61.082.192.16.383.24.572zm9.514-2.141a13.119 13.119 0 010 5.235 12.981 12.981 0 01-1.958 4.652 13.152 13.152 0 01-1.586 1.923 13.2 13.2 0 01-1.924 1.585c-.694.47-1.437.873-2.208 1.198-.786.334-1.608.587-2.443.757a12.93 12.93 0 01-2.617.266c-.882 0-1.763-.089-2.619-.266a12.804 12.804 0 01-2.443-.757A13.025 13.025 0 01.263 15.62a13.153 13.153 0 010-5.235 12.934 12.934 0 011.958-4.652 13.089 13.089 0 013.509-3.51 13.11 13.11 0 012.209-1.2 13.025 13.025 0 017.679-.756c.835.17 1.657.426 2.443.757.77.327 1.514.729 2.208 1.2a13.016 13.016 0 015.468 8.16zM13 23.834c5.983 0 10.833-4.85 10.833-10.834 0-5.983-4.85-10.833-10.833-10.833C7.017 2.167 2.167 7.017 2.167 13c0 5.983 4.85 10.833 10.833 10.833z" />
              </svg>
            </a>
            <a
              href="https://github.com/niranjannitesh"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center hover:bg-[#1A1A1A] rounded-lg"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 26 26"
                width={24}
                height={24}
              >
                <path
                  fillRule="evenodd"
                  d="M13 0C5.817 0 0 5.817 0 13c0 5.753 3.721 10.611 8.889 12.334.65.114.894-.276.894-.618 0-.309-.017-1.332-.017-2.421-3.266.601-4.111-.796-4.371-1.528-.146-.373-.78-1.527-1.332-1.836-.455-.244-1.105-.845-.017-.861 1.024-.016 1.755.942 1.999 1.332 1.17 1.967 3.039 1.414 3.786 1.073.114-.845.455-1.414.829-1.739-2.893-.325-5.915-1.446-5.915-6.418 0-1.414.504-2.584 1.332-3.494-.13-.325-.585-1.658.13-3.445 0 0 1.09-.341 3.576 1.332a12.063 12.063 0 013.25-.439c1.104 0 2.21.147 3.25.44 2.486-1.69 3.575-1.333 3.575-1.333.715 1.787.26 3.12.13 3.445.828.91 1.332 2.063 1.332 3.494 0 4.988-3.039 6.093-5.931 6.418.471.406.877 1.186.877 2.405 0 1.739-.016 3.137-.016 3.575 0 .341.244.748.894.618C22.279 23.61 26 18.736 26 13c0-7.183-5.817-13-13-13z"
                />
              </svg>
            </a>
          </div>
        </main>
      </div>
    </>
  )
}

export default HomePage
