import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/Navigation"

export const metadata: Metadata = {
  title: "Projects - Md Farid",
  description: "Explore my portfolio of web and blockchain projects.",
}

const projects = [
  {
    title: "FasalMittar",
    description: "An AI-powered crop monitoring tool for farmers. Used computer vision to detect plant health—saved me hours debugging image uploads!",
    tech: "React, Node.js, TensorFlow",
    link: "#",
  },
  {
    title: "Movie Ticket DApp",
    description: "Decentralized ticketing on Ethereum. Built during a weekend hackathon; the smart contracts were tricky, but seeing it go live was thrilling.",
    tech: "Solidity, Web3.js, React",
    link: "https://github.com/farid/movie-dapp",
  },
  {
    title: "GreenRoute",
    description: "Eco-friendly route optimizer for logistics. Integrated Google Maps API with carbon footprint calculations—born from a real need in my hometown.",
    tech: "Next.js, Express, Google APIs",
    link: "#",
  },
  {
    title: "Personal Finance Tracker",
    description: "Simple app to visualize expenses. Started as a budget helper for myself; added charts after realizing pie graphs make data fun.",
    tech: "React, Chart.js, LocalStorage",
    link: "#",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <section className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              Projects I&apos;ve <span className="text-green-500">Built</span>
            </h1>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              These are some highlights from my journey. Each one taught me something new—usually the hard way. Click around or check the repos for details.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up stagger-1">
            {projects.map((project, index) => (
              <div key={project.title} className={`glass rounded-3xl p-8 shadow-lg hover:shadow-xl hover:border-green-600 transition-all duration-300 hover:scale-[1.02] animate-slide-in-right stagger-${index % 4}`}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(", ").map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-green-500 hover:text-green-400 font-semibold transition-colors group"
                  >
                    View Project 
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <section className="text-center mt-20 animate-fade-in-up stagger-5">
            <p className="text-gray-400 mb-6 text-lg">
              Got an idea? Let&apos;s collaborate—I&apos;m always up for new challenges.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-green-600 text-white rounded-2xl font-semibold hover:bg-green-500 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </section>
        </div>
      </main>
    </div>
  )
}