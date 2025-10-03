"use client"

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
}

export function ParticleEffect({ trigger }: { trigger: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!trigger || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create particles
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    for (let i = 0; i < 50; i++) {
      const angle = (Math.PI * 2 * i) / 50
      particlesRef.current.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * (2 + Math.random() * 3),
        vy: Math.sin(angle) * (2 + Math.random() * 3),
        life: 1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vy += 0.1 // gravity
        particle.life -= 0.01

        if (particle.life > 0) {
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(34, 197, 94, ${particle.life})`
          ctx.fill()
          return true
        }
        return false
      })

      if (particlesRef.current.length > 0) {
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [trigger])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ display: trigger ? 'block' : 'none' }}
    />
  )
}