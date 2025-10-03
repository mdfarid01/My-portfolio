"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { Navigation } from "@/components/Navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react"
import { toast } from "sonner"
import { ParticleEffect } from "@/components/ParticleEffect"
import { useTilt } from "@/hooks/use-tilt"

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const { ref, tilt } = useTilt()
  
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showParticles, setShowParticles] = useState(false)

  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.3, triggerOnce: true })
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0.2, triggerOnce: true })
  const { ref: socialRef, inView: socialInView } = useInView({ threshold: 0.3, triggerOnce: true })

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
        setShowParticles(true)
        setTimeout(() => setShowParticles(false), 3000)
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticleEffect trigger={showParticles} />
      <Navigation />
      
      <main className="container mx-auto px-4 py-20 relative z-10">
        <section className="max-w-2xl mx-auto text-center">
          {/* Title Section */}
          <div
            ref={titleRef}
            className={`transition-all duration-1000 ${
              titleInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Let's Talk
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Got a project in mind or just want to chat? Drop me a message and I'll get back to you soon!
            </p>
          </div>

          {/* Contact Form with 3D Tilt */}
          <div
            ref={formRef}
            className={`transition-all duration-1000 delay-200 ${
              formInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <TiltCard className="space-y-6 bg-zinc-900/50 backdrop-blur-xl p-8 rounded-2xl border border-green-500/20 shadow-2xl shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    name="name"
                    placeholder="Your Name" 
                    className="bg-black/50 border-green-500/30 focus:border-green-500 text-white placeholder:text-gray-400 transition-all duration-300 hover:border-green-500/50" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                  <Input 
                    name="email"
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-black/50 border-green-500/30 focus:border-green-500 text-white placeholder:text-gray-400 transition-all duration-300 hover:border-green-500/50" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <Input 
                  name="subject"
                  placeholder="Subject" 
                  className="bg-black/50 border-green-500/30 focus:border-green-500 text-white placeholder:text-gray-400 transition-all duration-300 hover:border-green-500/50" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
                <Textarea 
                  name="message"
                  placeholder="Your message..." 
                  rows={5} 
                  className="bg-black/50 border-green-500/30 focus:border-green-500 text-white placeholder:text-gray-400 transition-all duration-300 hover:border-green-500/50 resize-none" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold py-6 rounded-xl shadow-lg shadow-green-500/50 hover:shadow-green-500/70 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </TiltCard>
          </div>

          {/* Social Links with Scroll Animation */}
          <div
            ref={socialRef}
            className={`mt-16 space-y-6 transition-all duration-1000 delay-400 ${
              socialInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-gray-300 text-lg">or reach me here:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="mailto:mdfarid.0118@gmail.com" 
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3 px-6 py-4 bg-zinc-900/80 backdrop-blur-sm border border-green-500/30 rounded-xl hover:border-green-500 hover:bg-zinc-900 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <Mail className="h-5 w-5 text-green-500 group-hover:scale-125 transition-transform duration-300" />
                  <span className="font-medium text-white">Email</span>
                </div>
              </Link>
              
              <Link 
                href="https://www.linkedin.com/in/md-farid-1aa563291/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3 px-6 py-4 bg-zinc-900/80 backdrop-blur-sm border border-green-500/30 rounded-xl hover:border-green-500 hover:bg-zinc-900 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <Linkedin className="h-5 w-5 text-green-500 group-hover:scale-125 transition-transform duration-300" />
                  <span className="font-medium text-white">LinkedIn</span>
                </div>
              </Link>
              
              <Link 
                href="https://github.com/mdfarid01" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3 px-6 py-4 bg-zinc-900/80 backdrop-blur-sm border border-green-500/30 rounded-xl hover:border-green-500 hover:bg-zinc-900 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <Github className="h-5 w-5 text-green-500 group-hover:scale-125 transition-transform duration-300" />
                  <span className="font-medium text-white">GitHub</span>
                </div>
              </Link>
              
              <Link 
                href="https://x.com/MdFarid7886" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3 px-6 py-4 bg-zinc-900/80 backdrop-blur-sm border border-green-500/30 rounded-xl hover:border-green-500 hover:bg-zinc-900 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <Twitter className="h-5 w-5 text-green-500 group-hover:scale-125 transition-transform duration-300" />
                  <span className="font-medium text-white">Twitter</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}