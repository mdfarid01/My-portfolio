import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/Navigation"

export const metadata: Metadata = {
  title: "Experience - Md Farid",
  description: "My professional journey and skills in development.",
}

const experiences = [
  {
    role: "100 Days of Code Challenge",
    company: "Self-Learning",
    period: "2024 - Present",
    description: "Committed to coding every day—sharing progress on Twitter. Some days I built cool stuff, other days I just fixed bugs lol. The consistency taught me more than any bootcamp.",
    achievements: ["Built 20+ mini projects", "Active on dev Twitter", "Learned TypeScript the hard way"],
  },
  {
    role: "College Tech Fest Hackathons",
    company: "Team Projects",
    period: "2023 - 2024",
    description: "Participated in 3 hackathons. Won one, lost two—but the pizza at 3am and debugging with teammates made it worth it. Built a mental health chatbot that actually worked!",
    achievements: ["1st place in GreenHack 2024", "Collaborated with designers", "Learned to present under pressure"],
  },
  {
    role: "Self-Learning Journey",
    company: "YouTube University & Docs",
    period: "2023 - Present",
    description: "Started with basic HTML/CSS, then dove into React, Next.js, and blockchain. Made tons of mistakes—like pushing API keys to GitHub (oops). Every bug made me stronger.",
    achievements: ["Built 10+ personal projects", "Explored Web3 and Solidity", "Started a dev blog"],
  },
  {
    role: "Open Source Contributions",
    company: "GitHub Community",
    period: "2024",
    description: "Contributed to a climate tech project tracking carbon footprints. First PR got rejected, second one merged—felt like winning an Oscar. Small changes, big impact.",
    achievements: ["Fixed 3 bugs in popular repos", "Learned Git workflows", "Connected with global devs"],
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <section className="max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
            Activities & Learning
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16 leading-relaxed">
            I don't have formal work experience yet, but I've been busy building, learning, and growing. Here's what I've been up to—real projects, real mistakes, real growth.
          </p>

          <div className="space-y-8 animate-fade-in-up stagger-1">
            {experiences.map((exp, index) => (
              <div key={exp.role} className="flex gap-6 p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-2 text-white">{exp.role}</h2>
                  <h3 className="text-lg font-medium text-gray-400 mb-2">{exp.company}</h3>
                  <p className="text-sm text-green-500 mb-4">{exp.period}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-center gap-2">
                        • {ach}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-1 bg-zinc-800 h-full relative">
                  <div className="w-4 h-4 bg-green-500 rounded-full absolute -left-1.5 top-0"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Fun story section */}
          <div className="mt-12 p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-white">Current Goals</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Land my first internship or freelance gig</li>
              <li>• Master Next.js and full-stack development</li>
              <li>• Contribute to more open source projects</li>
              <li>• Build a SaaS product from scratch</li>
            </ul>
          </div>

          <section className="mt-16 text-center animate-slide-in-right stagger-4">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-500 transition-colors"
            >
              Let's Connect!
            </Link>
          </section>
        </section>
      </main>
    </div>
  )
}