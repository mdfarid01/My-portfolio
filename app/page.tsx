import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/Navigation"

export const metadata: Metadata = {
  title: "Md Farid - Full-Stack Developer",
  description: "Building innovative web solutions with passion.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className="text-center mb-32 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            Hey, I&apos;m Farid
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-400 leading-relaxed">
            A curious full-stack dev who loves turning ideas into interactive experiences. From blockchain dApps to sustainable tech, I code with a mix of creativity and grit—because perfect code is boring, but solving real problems isn&apos;t.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-500 transition-colors animate-slide-in-right stagger-1"
            >
              See My Work
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-gray-700 rounded-lg font-semibold hover:bg-gray-900 hover:border-green-600 transition-colors animate-slide-in-right stagger-2"
            >
              About Me
            </Link>
          </div>
        </section>

        {/* Quick Teaser */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div className="animate-fade-in-up stagger-3">
            <h2 className="text-3xl font-bold mb-4 text-white">
              What I Build
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              I specialize in React/Next.js frontends and Node.js backends, but I&apos;ve dabbled in Solidity for dApps and even some IoT for green tech projects. It&apos;s all about making things work—and look good doing it.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Web Apps &amp; PWAs</li>
              <li>• Blockchain &amp; Smart Contracts</li>
              <li>• Sustainable Dev Tools</li>
            </ul>
          </div>
          <div className="animate-float stagger-4">
            <div className="glass p-6 rounded-xl border border-gray-800 shadow-lg hover:border-green-600 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-white">Featured Project</h3>
              <p className="text-gray-400">GreenRoute: Helping farmers optimize routes while cutting emissions. It started as a hackathon idea and became my favorite build yet.</p>
              <Link href="/projects" className="text-green-500 hover:text-green-400 hover:underline mt-4 inline-block">Dive In →</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}