"use client"

import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/Navigation"
import { BookOpen, Code, Trophy, Zap, Coffee, Target } from "lucide-react"

const activities = [
  {
    icon: Code,
    title: "100 Days of Code",
    period: "2023 - 2024",
    description: "Committed to coding every day for 100 days. Some days were better than others (day 47 was just fixing a CSS bug lol), but I learned consistency matters more than perfection.",
    tags: ["React", "Node.js", "Problem Solving"]
  },
  {
    icon: Trophy,
    title: "Hackathons",
    period: "Various",
    description: "Participated in 3 hackathons. Didn't win any, but GreenRoute came close! Met amazing devs and learned that pizza at 3am hits different when you're debugging.",
    tags: ["Team Work", "Fast Prototyping", "Blockchain"]
  },
  {
    icon: BookOpen,
    title: "Self-Learning Journey",
    period: "Ongoing",
    description: "YouTube tutorials, Stack Overflow deep dives, and way too many Medium articles. Currently exploring Web3 and trying to understand why gas fees exist.",
    tags: ["Web3", "Solidity", "AI/ML"]
  },
  {
    icon: Zap,
    title: "Open Source Contributions",
    period: "2024",
    description: "Made my first PR to a climate tech repo! It was scary, got rejected twice, but the third time was the charm. Now I'm hooked on giving back.",
    tags: ["GitHub", "Community", "Sustainability"]
  },
]

const learningGoals = [
  "Master TypeScript (still mixing up types sometimes)",
  "Build a full dApp from scratch",
  "Contribute to 5 open-source projects this year",
  "Learn system design (because senior devs make it look easy)",
]

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <section className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              What I've Been Up To
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              No fancy job titles yet, but I've been busy learning, building, and occasionally breaking things. Here's the real journey—messy, fun, and 100% me.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className="group bg-zinc-900/50 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-600/20 p-3 rounded-xl group-hover:bg-green-600/30 transition-colors">
                    <activity.icon className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-white">{activity.title}</h3>
                    <p className="text-sm text-green-500">{activity.period}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {activity.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {activity.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-green-600/10 border border-green-500/30 rounded-full text-green-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Learning Goals - More casual/human feel */}
          <div className="bg-zinc-900/30 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-bold text-white">Current Goals (aka my TODO list)</h2>
            </div>
            <ul className="space-y-3">
              {learningGoals.map((goal, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-500 mt-1">→</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Random Fun Fact Section - Human touch */}
          <div className="text-center bg-gradient-to-r from-green-600/10 via-green-500/5 to-green-600/10 p-8 rounded-2xl border border-green-500/20">
            <Coffee className="h-8 w-8 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Fun Fact</h3>
            <p className="text-gray-300 max-w-xl mx-auto">
              I once spent 6 hours debugging only to realize I forgot to save the file. 
              Now I hit Cmd+S compulsively. Every. Single. Time.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-6">
              Want to learn together or collaborate on something cool?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold rounded-xl shadow-lg shadow-green-500/50 hover:shadow-green-500/70 hover:scale-105 transition-all duration-300"
            >
              Let's Connect
              <Zap className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}