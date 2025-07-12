'use client'

import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Features from '@/components/Features'

interface Particle {
  width: number
  height: number
  left: string
  top: string
  x: number
  y: number
  duration: number
}

interface Fruit {
  left: string
  top: string
  duration: number
  delay: number
}

function useRandomParticles(count: number) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generated: Particle[] = [...Array(count)].map(() => ({
      width: Math.random() * 20 + 10,
      height: Math.random() * 20 + 10,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      x: (Math.random() - 0.5) * 50,
      y: (Math.random() - 0.5) * 50,
      duration: Math.random() * 10 + 5,
    }))
    setParticles(generated)
  }, [count])

  return particles
}

function useRandomFruits(count: number) {
  const [fruits, setFruits] = useState<Fruit[]>([])

  useEffect(() => {
    const generated: Fruit[] = [...Array(count)].map((_, i) => ({
      left: `${10 + i * 15}%`,
      top: `${20 + Math.random() * 60}%`,
      duration: 4 + Math.random() * 3,
      delay: i * 0.5,
    }))
    setFruits(generated)
  }, [count])

  return fruits
}

export default function HomePage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.03])
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])

  const particles = useRandomParticles(15)
  const fruits = useRandomFruits(5)

  return (
    <motion.main 
      ref={containerRef}
      className="bg-white text-gray-800 overflow-hidden"
      style={{ scale }}
    >
      <Hero />

      {/* SECTION: Manfaat */}
      <motion.section 
        id="features" 
        className="pt-10 pb-0 bg-white relative"
        style={{ y }}
      > 
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Features />
        </div>
      </motion.section>

  
    </motion.main>
  )
}
