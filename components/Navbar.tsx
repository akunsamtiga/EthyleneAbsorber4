'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ShoppingBag, Phone, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all ${scrolled ? 'bg-white/90 shadow-sm' : 'bg-white/70'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-[#55A630] to-[#8CCF42] rounded-lg flex items-center justify-center">
            <LeafIcon className="text-white" />
          </div>
          <span className="text-xl font-bold text-[#55A630]">
            Ethylene<span className="font-light">Absorber</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/">Beranda</NavLink>
          
          <div className="relative" 
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}>
            <button className="flex items-center gap-1">
              Produk <ChevronDown size={16} className={`transition ${productsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {productsOpen && (
                <motion.div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}>
                  <ProductItem href="/produk/ethylene-absorber" icon={<ShoppingBag size={18} />} title="Ethylene Absorber" />
                  <ProductItem href="/produk/kemasan-buah" icon={<PackageIcon />} title="Kemasan Buah" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink href="#features">Manfaat</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
          <NavLink href="/kontak">Kontak</NavLink>
          
          <Link href="/kontak" className="flex items-center gap-2 bg-gradient-to-r from-[#55A630] to-[#8CCF42] text-white px-4 py-2 rounded-full ml-2">
            <Phone size={16} /> Hubungi Kami
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div 
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div 
                ref={mobileMenuRef}
                className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-xl md:hidden"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', ease: 'easeInOut' }}
              >
                <div className="h-full flex flex-col">
                  {/* Menu Header with Close Button */}
                  <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-lg font-semibold">Menu</h3>
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-full hover:bg-gray-100"
                      aria-label="Close menu"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  {/* Menu Content */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    <MobileLink href="/" onClick={() => setIsOpen(false)}>Beranda</MobileLink>
                    
                    <div className="border-b py-2">
                      <button 
                        className="flex justify-between items-center w-full py-3"
                        onClick={() => setProductsOpen(!productsOpen)}
                      >
                        Produk <ChevronDown size={20} className={`transition ${productsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {productsOpen && (
                        <div className="pl-4 space-y-2 mt-2">
                          <MobileLink href="/produk/ethylene-absorber" onClick={() => setIsOpen(false)}>Ethylene Absorber</MobileLink>
                          <MobileLink href="/produk/kemasan-buah" onClick={() => setIsOpen(false)}>Kemasan Buah</MobileLink>
                        </div>
                      )}
                    </div>
                    
                    <MobileLink href="#features" onClick={() => setIsOpen(false)}>Manfaat</MobileLink>
                    <MobileLink href="/faq" onClick={() => setIsOpen(false)}>FAQ</MobileLink>
                    <MobileLink href="/kontak" onClick={() => setIsOpen(false)}>Kontak</MobileLink>
                  </div>
                  
                  {/* Menu Footer */}
                  <div className="p-4 border-t">
                    <Link 
                      href="/kontak" 
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#55A630] to-[#8CCF42] text-white py-3 px-6 rounded-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <Phone size={18} />
                      Hubungi Kami
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

// Reusable Components
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="relative px-3 py-2 hover:text-[#55A630] transition">
    {children}
    <span className="absolute bottom-0 left-1/2 h-0.5 bg-[#55A630] w-0 hover:w-3/4 -translate-x-1/2 transition-all duration-300" />
  </Link>
)

const MobileLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link 
    href={href} 
    onClick={onClick} 
    className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition"
  >
    {children}
  </Link>
)

const ProductItem = ({ href, icon, title }: { href: string; icon: React.ReactNode; title: string }) => (
  <Link href={href} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg">
    <span className="text-[#55A630]">{icon}</span>
    <span>{title}</span>
  </Link>
)

// Icons (same as before)
function LeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}