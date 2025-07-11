import "./globals.css"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Ethylene Absorber | Dickson Synergy',
  description: 'Jaga kesegaran buah lebih lama dengan teknologi ethylene absorber berkualitas tinggi.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-800 selection:bg-lime-200 selection:text-black overflow-x-hidden max-w-[100vw]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

