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
    link: "https://github.com/farid/movie-dapp", // Placeholder
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
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <section className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Projects I&apos;ve Built
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These are some highlights from my journey. Each one taught me something new—usually the hard way. Click around or check the repos for details.
          </p>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 animate-fade-in-up stagger-1">
          {projects.map((project, index) => (
            <div key={project.title} className={`bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300 animate-slide-in-right stagger-${index}`}>
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Tech: {project.tech}</p>
                <Link
                  href={project.link}
                  className="text-primary hover:underline inline-block text-sm font-medium"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <section className="text-center mt-16 animate-fade-in-up stagger-5">
          <p className="text-muted-foreground mb-6">
            Got an idea? Let&apos;s collaborate—I&apos;m always up for new challenges.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors"
          >
            Get in Touch
          </Link>
        </section>
      </main>
    </div>
  )
}