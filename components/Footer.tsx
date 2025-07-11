'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Phone, Mail, MapPin, 
  Facebook, Twitter, Instagram, Linkedin 
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <motion.footer 
      className="bg-[#0a2e1d] text-gray-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Decorative top gradient */}
      <div className="h-1 bg-gradient-to-r from-[#55A630] via-[#8CCF42] to-[#55A630]"></div>
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#55A630] to-[#8CCF42] rounded-lg flex items-center justify-center">
                <div className="text-white">
                  <LeafIcon />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">
                Ethylene<span className="font-light">Absorber</span>
              </h3>
            </div>
            
            <p className="mb-6 text-gray-400 max-w-xs">
              Solusi terdepan untuk menjaga kesegaran buah selama distribusi dan ekspor dengan teknologi ethylene absorber.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1e3d2c] flex items-center justify-center hover:bg-[#55A630] transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="text-gray-300 hover:text-white" size={18} />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 pb-2 border-b border-[#55A630]/30">
              Tautan Cepat
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href={link.href} 
                    className="flex items-center gap-2 hover:text-[#8CCF42] transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#55A630]"></div>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 pb-2 border-b border-[#55A630]/30">
              Produk Kami
            </h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href={product.href} 
                    className="flex items-center gap-2 hover:text-[#8CCF42] transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#55A630]"></div>
                    {product.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 pb-2 border-b border-[#55A630]/30">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-[#55A630]">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="font-medium">Telepon</div>
                  <a href="tel:+628123456789" className="hover:text-[#8CCF42] transition-colors">
                    +62 812 3456 7890
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="mt-1 text-[#55A630]">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:info@ethyleneabsorber.com" className="hover:text-[#8CCF42] transition-colors">
                    info@ethyleneabsorber.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="mt-1 text-[#55A630]">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="font-medium">Alamat</div>
                  <div>Jl. Teknologi No. 123, Bandung, Indonesia 40234</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <motion.div 
          className="mt-16 p-6 rounded-xl bg-gradient-to-r from-[#0d3b26] to-[#1a4d32] border border-[#55A630]/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Dapatkan Update Terbaru
            </h3>
            <p className="mb-6 text-gray-300">
              Berlangganan newsletter kami untuk mendapatkan informasi produk terbaru dan tips menjaga kesegaran buah
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="flex-1 px-4 py-3 rounded-lg bg-[#1a4d32] border border-[#55A630]/50 focus:outline-none focus:ring-2 focus:ring-[#8CCF42] text-white"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-[#55A630] to-[#8CCF42] text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Berlangganan
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-[#1a4d32] py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Dickson Synergy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#8CCF42] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#8CCF42] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

const socialLinks = [
  { icon: Facebook, url: "https://facebook.com" },
  { icon: Twitter, url: "https://twitter.com" },
  { icon: Instagram, url: "https://instagram.com" },
  { icon: Linkedin, url: "https://linkedin.com" },
]

const quickLinks = [
  { label: "Beranda", href: "/" },
  { label: "Manfaat", href: "#features" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/kontak" },
  { label: "Blog", href: "/blog" },
]

const products = [
  { label: "Ethylene Absorber", href: "/produk/ethylene-absorber" },
  { label: "Kemasan Buah", href: "/produk/kemasan-buah" },
  { label: "Paket Ekspor", href: "/produk/paket-ekspor" },
  { label: "Solusi Distribusi", href: "/produk/solusi-distribusi" },
]

function LeafIcon() {
  return (
    <svg
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