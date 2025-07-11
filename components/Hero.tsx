'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { ShieldCheck, Globe } from 'lucide-react'

// ✅ Type Definitions
type Decoration = {
  width: number
  height: number
  left: string
  top: string
  x: number
  y: number
  duration: number
}

type Dot = {
  left: string
  top: string
}

// ✅ Helper hooks
function useRandomDecorations(count: number): Decoration[] {
  const [items, setItems] = useState<Decoration[]>([])

  useEffect(() => {
    const generated: Decoration[] = [...Array(count)].map(() => ({
      width: Math.random() * 300 + 100,
      height: Math.random() * 300 + 100,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      x: (Math.random() - 0.5) * 100,
      y: (Math.random() - 0.5) * 100,
      duration: Math.random() * 10 + 10
    }))
    setItems(generated)
  }, [count])

  return items
}

function useRandomDots(count: number): Dot[] {
  const [dots, setDots] = useState<Dot[]>([])

  useEffect(() => {
    const generated: Dot[] = [...Array(count)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }))
    setDots(generated)
  }, [count])

  return dots
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const decorations = useRandomDecorations(12)
  const dots = useRandomDots(3)

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[800px] overflow-hidden bg-gradient-to-br from-white to-[#F1F5F9] flex items-center"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
            'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
            'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {decorations.map((item, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#55A630]/10"
            style={{
              width: item.width,
              height: item.height,
              left: item.left,
              top: item.top
            }}
            animate={{
              x: [0, item.x],
              y: [0, item.y],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="relative z-10" style={{ y, opacity }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
                <motion.span
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-[#55A630] to-[#8CCF42]"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                >
                  Solusi Segar
                </motion.span>
                <motion.span className="block">untuk Buah</motion.span>
                <motion.span className="inline-block bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] bg-clip-text text-transparent">
                  Berkualitas Ekspor
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-600 max-w-xl mb-8"
              >
                Ethylene absorber premium kami menjaga kesegaran buah selama distribusi.
                Teknologi mutakhir dengan desain elegan.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="/produk"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 25px -5px rgba(85, 166, 48, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block rounded-full bg-gradient-to-r from-[#55A630] to-[#8CCF42] text-white font-semibold px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Lihat Produk</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#8CCF42] to-[#55A630] opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* Animated dots */}
                  {dots.map((dot, i) => (
                    <motion.span
                      key={i}
                      className="absolute rounded-full bg-white/30"
                      style={{
                        width: 8,
                        height: 8,
                        left: dot.left,
                        top: dot.top
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.8, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                    />
                  ))}
                </motion.a>

                <motion.a
                  href="/kontak"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block rounded-full bg-white text-gray-800 border border-gray-300 font-semibold px-6 py-3 text-base shadow-sm hover:shadow-md hover:border-gray-400 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Konsultasi Gratis</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 -translate-x-full group-hover:translate-x-full" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Produk Premium */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-md h-[400px]">
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-[#55A630]/20 blur-2xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />

                  <div className="relative h-full w-full flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: [0, 2, -2, 0], y: [0, -10, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Image
                        src="/images/fruit-sachet.webp"
                        alt="Ethylene Absorber Premium"
                        width={500}
                        height={500}
                        className="object-contain h-full w-full z-10 drop-shadow-2xl"
                        priority
                      />
                    </motion.div>
                  </div>

                  {/* Floating Fruits */}
                  <motion.div
                    className="absolute -left-10 -top-10 z-20"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 15, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    >
                      <Image
                        src="/images/buahsegar2.webp"
                        alt="Buah Segar"
                        width={150}
                        height={150}
                        className="drop-shadow-lg"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="absolute -right-10 -bottom-10 z-20"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, -15, 0] }}
                      transition={{ duration: 7, repeat: Infinity }}
                    >
                      <Image
                        src="/images/minuman1.webp"
                        alt="Buah Segar"
                        width={130}
                        height={130}
                        className="drop-shadow-lg"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Badges */}
              <motion.div
                className="absolute left-0 top-1/4 bg-white rounded-lg shadow-xl p-3 z-30 flex items-center backdrop-blur-sm bg-white/80"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-[#55A630] rounded-md p-2 mr-3">
                  <ShieldCheck className="text-white" size={24} />
                </div>
                <span className="text-sm font-medium">Sertifikasi BPOM</span>
              </motion.div>

              <motion.div
                className="absolute right-0 bottom-1/4 bg-white rounded-lg shadow-xl p-3 z-30 flex items-center backdrop-blur-sm bg-white/80"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-[#2B6CB0] rounded-md p-2 mr-3">
                  <Globe className="text-white" width={24} height={24} />
                </div>
                <span className="text-sm font-medium">Standar Ekspor</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#55A630] rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <motion.div
            className="w-1 h-2 bg-[#55A630] rounded-full mt-1"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <motion.div
          className="text-[#55A630] text-xs font-medium mt-2 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll untuk jelajahi
        </motion.div>
      </motion.div>
    </section>
  )
}
