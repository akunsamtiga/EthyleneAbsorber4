'use client'

import { motion } from 'framer-motion'
import { Leaf, ShieldCheck, Truck, Zap, PackageCheck, Globe, BadgeCheck } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    icon: Leaf,
    title: 'Ramah Lingkungan',
    desc: 'Formulasi biodegradable dengan teknologi nano yang terurai alami dalam 90 hari tanpa residu berbahaya.',
    color: '#55A630',
    delay: 0.1,
    stats: '100% Organik'
  },
  {
    icon: ShieldCheck,
    title: 'Sertifikasi BPOM',
    desc: 'Memiliki sertifikat BPOM RI NA18191100273 dan lolos uji klinis untuk produk pangan internasional.',
    color: '#2563EB',
    delay: 0.2,
    stats: '100% Aman'
  },
  {
    icon: Truck,
    title: 'Distribusi Global',
    desc: 'Digunakan oleh 150+ eksportir di 12 negara dengan tingkat keberhasilan 98.7%.',
    color: '#7C3AED',
    delay: 0.3,
    stats: '12 Negara'
  },
  {
    icon: Zap,
    title: 'Efektivitas Tinggi',
    desc: 'Mengurangi pembusukan buah hingga 72.3% berdasarkan uji coba di laboratorium independen.',
    color: '#D97706',
    delay: 0.4,
    stats: '72.3% Efektif'
  },
  {
    icon: PackageCheck,
    title: 'Kemasan Eksklusif',
    desc: 'Menggunakan teknologi barrier 7 lapis dengan indikator kesegaran digital.',
    color: '#DC2626',
    delay: 0.5,
    stats: '7 Lapis Proteksi'
  },
  {
    icon: Globe,
    title: 'Standar Internasional',
    desc: 'Memenuhi standar FDA (21 CFR 175.300), EU No 10/2011, dan Jepang JHOSPA.',
    color: '#0891B2',
    delay: 0.6,
    stats: '3 Sertifikat'
  }
]

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: feature.delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative group h-full"
      whileHover={{ y: -10 }}
    >
      {/* Background glow effect */}
      <motion.div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundColor: `${feature.color}10` }}
        animate={inView ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 6, repeat: Infinity, delay: feature.delay }}
      />
      
      {/* Animated border */}
      <motion.div 
        className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100"
        style={{ borderColor: feature.color }}
        animate={{
          borderWidth: [1, 2, 1],
          opacity: [0, 0.5, 0]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Main card */}
      <div className="relative z-10 h-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group-hover:shadow-xl transition-all duration-500">
        {/* Header section */}
        <div className="p-8 pb-0">
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{ backgroundColor: `${feature.color}10` }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
          >
            <feature.icon 
              className="text-[--color]" 
              size={32} 
              style={{ '--color': feature.color } as React.CSSProperties}
            />
          </motion.div>
          
          <h3 className="text-2xl font-bold mb-3 text-gray-900 line-clamp-1">
            {feature.title}
            <BadgeCheck 
              className="inline-block ml-2 text-[--color]" 
              size={20} 
              style={{ '--color': feature.color } as React.CSSProperties}
            />
          </h3>
          
          <p className="text-gray-600 mb-6 line-clamp-3">
            {feature.desc}
          </p>
        </div>
        
        {/* Stats bar */}
        <div 
          className="px-8 py-4 bg-gradient-to-r from-white to-gray-50 border-t border-gray-100"
          style={{ borderBottomColor: `${feature.color}30` }}
        >
          <motion.div
            className="text-sm font-semibold text-[--color] flex items-center"
            style={{ '--color': feature.color } as React.CSSProperties}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: feature.delay + 0.3 }}
          >
            <motion.span
              className="inline-block w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: feature.color }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {feature.stats}
          </motion.div>
        </div>
        
        {/* Animated underline */}
        <motion.div
          className="h-1 w-full"
          style={{ backgroundColor: feature.color }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: feature.delay + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  )
}

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4"
        >
          <motion.div
            className="text-sm font-semibold text-[#55A630] bg-[#55A630]/10 px-4 py-1.5 rounded-full mb-3 inline-flex items-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Zap className="mr-2" size={16} />
            <span>Teknologi Mutakhir</span>
          </motion.div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
        >
          Keunggulan <motion.span 
            className="text-[#55A630] inline-block"
            animate={{ textShadow: ['0 0 0px #55A630', '0 0 8px rgba(85, 166, 48, 0.5)', '0 0 0px #55A630'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >Premium</motion.span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-600"
        >
          Teknologi mutakhir yang membedakan produk kami dari yang lain
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>

      {/* Premium Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
        className="mt-20 text-center"
      >
        <motion.div
          className="inline-flex items-center bg-gradient-to-r from-[#55A630] via-[#4CAF50] to-[#8BC34A] text-white px-8 py-4 rounded-full shadow-xl"
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Zap className="mr-3 animate-pulse" size={24} />
          <span className="text-lg font-bold tracking-wide">TECHNOLOGY OF THE YEAR 2024</span>
        </motion.div>
      </motion.div>
    </div>
  )
}