"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/Navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react"
import { toast } from "sonner"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success("Thanks for your message! I'll get back to you soon.")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        toast.error(data.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <section className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
            Let's Talk
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Got a project in mind or just want to say hi? I'm always excited to hear from fellow creators. Drop a message—no pressure, I reply when I'm not deep in code.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900 p-8 rounded-lg border border-zinc-800 animate-slide-in-right stagger-1">
            <div>
              <Input 
                name="name"
                placeholder="Your Name" 
                className="mb-2 bg-black border-zinc-800 text-white" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              <Input 
                name="email"
                type="email" 
                placeholder="Your Email" 
                className="mb-2 bg-black border-zinc-800 text-white" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <Input 
              name="subject"
              placeholder="Subject" 
              className="mb-2 bg-black border-zinc-800 text-white" 
              value={formData.subject}
              onChange={handleChange}
              required 
            />
            <Textarea 
              name="message"
              placeholder="Tell me about your idea..." 
              rows={5} 
              className="mb-2 bg-black border-zinc-800 text-white" 
              value={formData.message}
              onChange={handleChange}
              required 
            />
            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-500 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          {/* Social Links */}
          <div className="mt-12 space-y-6 animate-fade-in-up stagger-2">
            <p className="text-gray-400">or reach me here:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="mailto:mdfarid.0118@gmail.com" 
                className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors group"
              >
                <Mail className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="text-white">Email</span>
              </Link>
              <Link 
                href="https://www.linkedin.com/in/md-farid-1aa563291/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="text-white">LinkedIn</span>
              </Link>
              <Link 
                href="https://github.com/mdfarid01" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors group"
              >
                <Github className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="text-white">GitHub</span>
              </Link>
              <Link 
                href="https://x.com/MdFarid7886" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors group"
              >
                <Twitter className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="text-white">Twitter</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}