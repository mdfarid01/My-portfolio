"use client"

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function AnimatedSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useFrame((state) => {
    if (meshRef.current && isMounted.current) {
      try {
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
        meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5
      } catch (error) {
        // Silently handle animation errors
      }
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#22c55e"
        roughness={0.2}
        metalness={0.8}
        emissive="#22c55e"
        emissiveIntensity={0.1}
      />
    </mesh>
  )
}

function FloatingBox({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useFrame((state) => {
    if (meshRef.current && isMounted.current) {
      try {
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
        meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5
      } catch (error) {
        // Silently handle animation errors
      }
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color="#10b981"
        roughness={0.3}
        metalness={0.7}
        emissive="#22c55e"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

export function ThreeBackground() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="fixed inset-0 -z-10 opacity-30 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0)
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#22c55e" />
        
        <AnimatedSphere position={[-3, 2, 0]} />
        <AnimatedSphere position={[4, -1, -2]} />
        <FloatingBox position={[2, 3, -1]} />
        <FloatingBox position={[-4, -2, -3]} />
      </Canvas>
    </div>
  )
}