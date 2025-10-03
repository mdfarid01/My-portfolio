import { Metadata } from "next"
import { Navigation } from "@/components/Navigation"

export const metadata: Metadata = {
  title: "About - Md Farid",
  description: "Get to know me and my journey in development.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <section className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
            A Bit About Me
          </h1>
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Growing up in a small town, I always tinkered with gadgets—disassembling old radios before I even touched a keyboard. Fast forward to today, and I'm a full-stack developer passionate about building tools that make a difference. My code isn't always the cleanest on the first try (who's is?), but it gets the job done with heart.
            </p>
            <p className="mb-8 text-gray-400">
              I'm currently pursuing my CS degree but learned the real stuff through late-night coding sessions and community projects. Coffee fuels my sprints, and I believe good software should feel intuitive, like chatting with a friend.
            </p>
            <blockquote className="border-l-4 border-green-500 pl-6 italic text-gray-300 mb-8">
              "Code is like poetry: sometimes messy, but always meaningful." - Me, after too many bugs
            </blockquote>
          </div>

          {/* Skills Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">What I Bring to the Table</h2>
            <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up stagger-1">
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2 text-white">Frontend</h3>
                <p className="text-gray-400 text-sm">React, Next.js, Tailwind</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2 text-white">Backend</h3>
                <p className="text-gray-400 text-sm">Node.js, Express, Drizzle</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2 text-white">Other Magic</h3>
                <p className="text-gray-400 text-sm">Solidity, Web3, Python</p>
              </div>
            </div>
          </section>

          {/* Education Timeline */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Education</h2>
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="flex gap-4 items-start p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                <span className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mt-0.5 flex-shrink-0">2023</span>
                <div>
                  <h3 className="font-semibold text-white">Bachelor of Engineering, Computer Science</h3>
                  <p className="text-green-500 text-sm mb-1">RGPV</p>
                  <p className="text-gray-400 text-sm">2023 - 2027</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                <span className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mt-0.5 flex-shrink-0">2020</span>
                <div>
                  <h3 className="font-semibold text-white">Higher Secondary Certificate (HSC)</h3>
                  <p className="text-green-500 text-sm mb-1">Agrasen DAV Public School, Bharechnagar</p>
                  <p className="text-gray-400 text-sm">2020 - 2022</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                <span className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mt-0.5 flex-shrink-0">2020</span>
                <div>
                  <h3 className="font-semibold text-white">Secondary School Certificate (SSC)</h3>
                  <p className="text-green-500 text-sm mb-1">DAV Public School, Gidi - A</p>
                  <p className="text-gray-400 text-sm">2020</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}