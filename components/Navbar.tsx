'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ShoppingBag, Phone, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openProducts, setOpenProducts] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenProducts(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-sm' : 'bg-white/70'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo with animation */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-[#55A630] to-[#8CCF42] rounded-lg flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <LeafIcon className="text-white w-5 h-5" />
              </motion.div>
            </div>
            <span className="text-xl font-bold text-[#55A630] tracking-tight">
              Ethylene<span className="font-light">Absorber</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-base">
          <NavLink href="/" label="Beranda" />
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setOpenProducts(true)}
            onMouseLeave={() => setOpenProducts(false)}
          >
            <button className="flex items-center gap-1 py-2 group">
              <span className="group-hover:text-[#55A630] transition">Produk</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${openProducts ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {openProducts && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="py-2">
                    <Link
                      href="/produk/ethylene-absorber"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
                    >
                      <ShoppingBag size={18} className="text-[#55A630]" />
                      <div>
                        <div className="font-medium">Ethylene Absorber</div>
                        <div className="text-sm text-gray-500 mt-1">Penyerap etilen premium</div>
                      </div>
                    </Link>
                    <Link
                      href="/produk/kemasan-buah"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
                    >
                      <PackageIcon className="text-[#55A630] w-5 h-5" />
                      <div>
                        <div className="font-medium">Kemasan Buah</div>
                        <div className="text-sm text-gray-500 mt-1">Kemasan khusus ekspor</div>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <NavLink href="#features" label="Manfaat" />
          <NavLink href="/faq" label="FAQ" />
          <NavLink href="/kontak" label="Kontak" />
        </nav>

        {/* CTA Button */}
        <motion.div className="hidden md:block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/kontak"
            className="flex items-center gap-2 bg-gradient-to-r from-[#55A630] to-[#8CCF42] text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <Phone size={18} />
            <span>Hubungi Kami</span>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 z-50" onClick={() => setOpen(!open)}>
          {open ? <X size={28} className="text-gray-800" /> : <Menu size={28} className="text-gray-800" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 bg-white z-40 pt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-8 space-y-6">
              <MobileLink href="/" label="Beranda" setOpen={setOpen} />
              <div className="border-b border-gray-100 pb-3">
                <button
                  className="flex items-center justify-between w-full text-lg font-medium py-3"
                  onClick={() => setOpenProducts(!openProducts)}
                >
                  <span>Produk</span>
                  <ChevronDown size={20} className={`transition-transform ${openProducts ? 'rotate-180' : ''}`} />
                </button>
                {openProducts && (
                  <motion.div className="pl-4 space-y-3 mt-2" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                    <MobileLink href="/produk/ethylene-absorber" label="Ethylene Absorber" setOpen={setOpen} />
                    <MobileLink href="/produk/kemasan-buah" label="Kemasan Buah" setOpen={setOpen} />
                  </motion.div>
                )}
              </div>
              <MobileLink href="#features" label="Manfaat" setOpen={setOpen} />
              <MobileLink href="/faq" label="FAQ" setOpen={setOpen} />
              <MobileLink href="/kontak" label="Kontak" setOpen={setOpen} />
              <motion.div className="pt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <Link
                  href="/kontak"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#55A630] to-[#8CCF42] text-white px-6 py-3 rounded-full shadow-lg"
                  onClick={() => setOpen(false)}
                >
                  <Phone size={20} />
                  <span className="font-medium">Hubungi Kami</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

// Reusable Link Components
const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="relative group py-2">
    <span className="group-hover:text-[#55A630] transition">{label}</span>
    <motion.div
      className="absolute bottom-0 left-0 h-0.5 bg-[#55A630] w-0 group-hover:w-full"
      initial={{ width: 0 }}
      whileHover={{ width: '100%' }}
      transition={{ duration: 0.3 }}
    />
  </Link>
)

const MobileLink = ({ href, label, setOpen }: { href: string; label: string; setOpen: (v: boolean) => void }) => (
  <Link href={href} className="block text-lg font-medium py-3 border-b border-gray-100" onClick={() => setOpen(false)}>
    {label}
  </Link>
)

// Icon Komponen
function LeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}
