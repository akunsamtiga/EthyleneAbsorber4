'use client'

import Hero from '@/components/Hero'
import Features from '@/components/Features'

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800">
      <Hero />

      <section id="features" className="pt-10 pb-0 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Features />
        </div>
      </section>
    </main>
  )
}
