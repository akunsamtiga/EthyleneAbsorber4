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
        className="py-32 bg-[#f1f5f9] relative"
        style={{ y }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#55A630]/10 blur-3xl"
            animate={{ scale: [0.8, 1] }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute left-10 bottom-10 w-80 h-80 rounded-full bg-[#8CCF42]/10 blur-3xl"
            animate={{ scale: [0.7, 0.9] }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Features />
        </div>
      </motion.section>

      {/* SECTION: CTA */}
      <section
        id="cta"
        className="relative isolate py-32 bg-gradient-to-tr from-[#55A630] via-[#8CCF42] to-[#C8EE9E] text-white overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/fruit-bg.svg')] bg-cover bg-right-top opacity-5 pointer-events-none" />

          {/* Floating particles */}
          {particles.map((p, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full bg-white/10"
              style={{
                width: p.width,
                height: p.height,
                left: p.left,
                top: p.top,
              }}
              animate={{
                x: [0, p.x],
                y: [0, p.y],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Floating fruits */}
          {fruits.map((f, i) => (
            <motion.div
              key={`fruit-${i}`}
              className="absolute"
              style={{
                left: f.left,
                top: f.top,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: f.duration,
                repeat: Infinity,
                delay: f.delay
              }}
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <div className="w-10 h-10 rounded-full bg-white/30" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
  className="max-w-3xl mx-auto px-6 text-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>
  <h2 className="text-5xl font-extrabold tracking-tight mb-6 drop-shadow-sm">
    Jaga Kesegaran <span className="text-[#E9F5DB] inline-block">Buah</span> Anda
  </h2>

  <p className="text-xl leading-relaxed mb-10 text-white/90">
    Ethylene absorber dari Dickson Synergy menjaga buah tetap segar selama distribusi dan ekspor.
    Efektif, aman, dan ramah lingkungan.
  </p>

  <a
    href="/kontak"
    className="inline-block rounded-full bg-white text-primary font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
  >
    <span className="relative text-green-600 z-10 font-bold">Hubungi Kami</span>
    <span className="absolute inset-0 bg-gradient-to-r from-[#55A630]/10 to-[#8CCF42]/10 opacity-0 group-hover:opacity-100 transition duration-500" />

    <span 
      className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"
    />
  </a>
</motion.div>

      </section>
    </motion.main>
  )
}
