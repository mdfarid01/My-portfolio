import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/Navigation"
import { fadeInUpAnimation } from "@/lib/animations" // Assuming animations lib exists or add to globals.css

export const metadata: Metadata = {
  title: "Md Farid - Full-Stack Developer",
  description: "Building innovative web solutions with passion.",
}

export default function HomePage() {
  return (
    &lt;div className="min-h-screen bg-background text-foreground"&gt;
      &lt;Navigation /&gt;
      &lt;main className="container mx-auto px-4 py-20"&gt;
        {/* Hero Section */}
        &lt;section className="text-center mb-32 animate-fade-in-up"&gt;
          &lt;h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"&gt;
            Hey, I&apos;m Farid
          &lt;/h1&gt;
          &lt;p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground leading-relaxed"&gt;
            A curious full-stack dev who loves turning ideas into interactive experiences. From blockchain dApps to sustainable tech, I code with a mix of creativity and grit—because perfect code is boring, but solving real problems isn&apos;t.
          &lt;/p&gt;
          &lt;div className="flex flex-col sm:flex-row gap-4 justify-center"&gt;
            &lt;Link
              href="/projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors animate-slide-in-right stagger-1"
            &gt;
              See My Work
            &lt;/Link&gt;
            &lt;Link
              href="/about"
              className="px-8 py-4 border-2 border-border rounded-lg font-semibold hover:bg-secondary transition-colors animate-slide-in-right stagger-2"
            &gt;
              About Me
            &lt;/Link&gt;
          &lt;/div&gt;
        &lt;/section&gt;

        {/* Quick Teaser */}
        &lt;section className="grid md:grid-cols-2 gap-12 items-center mb-32"&gt;
          &lt;div className="animate-fade-in-up stagger-3"&gt;
            &lt;h2 className="text-3xl font-bold mb-4 text-foreground"&gt;
              What I Build
            &lt;/h2&gt;
            &lt;p className="text-lg text-muted-foreground mb-6"&gt;
              I specialize in React/Next.js frontends and Node.js backends, but I&apos;ve dabbled in Solidity for dApps and even some IoT for green tech projects. It&apos;s all about making things work—and look good doing it.
            &lt;/p&gt;
            &lt;ul className="space-y-2 text-muted-foreground"&gt;
              &lt;li&gt;• Web Apps &amp; PWAs&lt;/li&gt;
              &lt;li&gt;• Blockchain &amp; Smart Contracts&lt;/li&gt;
              &lt;li&gt;• Sustainable Dev Tools&lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
          &lt;div className="animate-float stagger-4"&gt;
            &lt;div className="bg-card p-6 rounded-xl border shadow-lg"&gt;
              &lt;h3 className="text-xl font-semibold mb-2"&gt;Featured Project&lt;/h3&gt;
              &lt;p className="text-muted-foreground"&gt;GreenRoute: Helping farmers optimize routes while cutting emissions. It started as a hackathon idea and became my favorite build yet.&lt;/p&gt;
              &lt;Link href="/projects" className="text-primary hover:underline mt-4 inline-block"&gt;Dive In →&lt;/Link&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/section&gt;
      &lt;/main&gt;
    &lt;/div&gt;
  )
}