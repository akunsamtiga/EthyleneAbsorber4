// app/kontak/page.tsx
'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, Check, 
  Facebook, Twitter, Instagram, Linkedin, Globe, ChevronDown 
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      details: '+62 812 3456 7890',
      description: 'Hubungi kami selama jam kerja',
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@ethyleneabsorber.com',
      description: 'Respon dalam 1-2 jam kerja',
      color: 'bg-red-500'
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      details: 'Jl. Teknologi No. 123, Bandung',
      description: 'Indonesia 40234',
      color: 'bg-green-500'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: 'Senin - Jumat: 08.00 - 17.00',
      description: 'Sabtu: 08.00 - 12.00',
      color: 'bg-purple-500'
    }
  ];
  
  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com", name: "Facebook" },
    { icon: Twitter, url: "https://twitter.com", name: "Twitter" },
    { icon: Instagram, url: "https://instagram.com", name: "Instagram" },
    { icon: Linkedin, url: "https://linkedin.com", name: "LinkedIn" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f1f9f0] to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0d3b26] to-[#1a4d32] text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>
          <div className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-[#55A630]/20 blur-3xl"></div>
          <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#8CCF42]/20 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center bg-[#55A630] px-4 py-1.5 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Mail size={18} className="mr-2" />
                <span className="font-medium">Hubungi Kami</span>
              </motion.div>
              
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="block">Kami Siap Membantu</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#8CCF42] to-[#C8EE9E]">
                  Pertanyaan Anda
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-gray-200 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Tim dukungan pelanggan kami siap membantu Anda. Hubungi kami melalui formulir di samping atau informasi kontak di bawah ini.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#55A630] transition-colors"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="text-gray-300 hover:text-white" size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Kirim Pesan</h2>
              
              {submitSuccess ? (
                <motion.div
                  className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <Check className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Pesan Terkirim!</h3>
                  <p className="text-green-700">
                    Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-200 mb-2">Nama Lengkap</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#8CCF42] text-white placeholder-white/50"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-gray-200 mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#8CCF42] text-white placeholder-white/50"
                          placeholder="email@contoh.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-gray-200 mb-2">Telepon</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#8CCF42] text-white placeholder-white/50"
                          placeholder="+62 812 3456 7890"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-200 mb-2">Subjek</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#8CCF42] text-white placeholder-white/50"
                        placeholder="Subjek pesan Anda"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-200 mb-2">Pesan</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#8CCF42] text-white placeholder-white/50"
                        placeholder="Tulis pesan Anda..."
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transition-all ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-[#55A630] to-[#8CCF42] hover:shadow-lg'
                      }`}
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Mengirim...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Kirim Pesan</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Contact Info Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center bg-[#55A630] px-4 py-1.5 rounded-full mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <MapPin size={18} className="mr-2 text-white" />
            <span className="font-medium text-white">Informasi Kontak</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hubungi Kami Melalui <span className="text-[#55A630]">Berbagai Cara</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Kami siap membantu Anda melalui berbagai saluran komunikasi. Pilih cara yang paling nyaman untuk Anda.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`h-2 ${item.color}`}></div>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-lg font-medium text-gray-800 mb-2">{item.details}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-[#0d3b26] to-[#1a4d32] rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 text-white">
              <motion.div
                className="inline-flex items-center bg-[#55A630] px-4 py-1.5 rounded-full mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <MapPin size={18} className="mr-2" />
                <span className="font-medium">Lokasi Kami</span>
              </motion.div>
              
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Kunjungi Kantor Kami
              </motion.h2>
              
              <motion.p
                className="text-xl text-gray-200 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Kami berada di lokasi strategis di Bandung, Indonesia. Silakan kunjungi kantor kami selama jam kerja untuk konsultasi langsung.
              </motion.p>
              
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#8CCF42] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Alamat</h3>
                    <p>Jl. Teknologi No. 123, Gedung Inovasi Lt. 5, Bandung, Indonesia 40234</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-[#8CCF42] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Jam Operasional</h3>
                    <p>Senin - Jumat: 08.00 - 17.00 WIB</p>
                    <p>Sabtu: 08.00 - 12.00 WIB</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Globe className="text-[#8CCF42] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Navigasi</h3>
                    <p>Koordinat: -6.917464, 107.619125</p>
                    <a href="#" className="text-[#8CCF42] hover:underline">Petunjuk arah di Google Maps</a>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              className="bg-gray-200 h-96 lg:h-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {/* Placeholder for Map */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#55A630] to-[#8CCF42]">
                <div className="text-center p-6 text-white">
                  <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center mx-auto mb-4">
                    <MapPin size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Lokasi Kami</h3>
                  <p>Jl. Teknologi No. 123, Bandung</p>
                  <p className="mt-4 text-sm opacity-80">Peta interaktif akan ditampilkan di sini</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* FAQ Mini Section */}
      <div className="max-w-5xl mx-auto px-4 pb-24">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-8 border-b border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Pertanyaan Umum</h3>
            <p className="text-gray-600">Temukan jawaban untuk pertanyaan yang sering diajukan terkait kontak kami</p>
          </div>
          
          <div className="divide-y divide-gray-100">
            <div className="py-6 px-8">
              <button className="flex items-center justify-between w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  Berapa lama waktu respon untuk email?
                </h3>
                <ChevronDown className="text-[#55A630]" size={24} />
              </button>
              <div className="pt-4 pb-2 text-gray-600">
                Kami berusaha merespons semua email dalam waktu 1-2 jam kerja pada hari kerja. Untuk permintaan di akhir pekan, respons akan diberikan pada hari kerja berikutnya.
              </div>
            </div>
            
            <div className="py-6 px-8">
              <button className="flex items-center justify-between w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  Apakah saya perlu membuat janji sebelum datang ke kantor?
                </h3>
                <ChevronDown className="text-[#55A630]" size={24} />
              </button>
              <div className="pt-4 pb-2 text-gray-600">
                Meskipun tidak wajib, kami sangat menyarankan untuk membuat janji terlebih dahulu. Ini memastikan bahwa staf yang tepat akan tersedia untuk membantu Anda. Anda dapat membuat janji melalui telepon atau formulir kontak di atas.
              </div>
            </div>
            
            <div className="py-6 px-8">
              <button className="flex items-center justify-between w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  Apakah ada layanan dukungan 24/7?
                </h3>
                <ChevronDown className="text-[#55A630]" size={24} />
              </button>
              <div className="pt-4 pb-2 text-gray-600">
                Untuk dukungan teknis darurat, kami menyediakan layanan 24/7 melalui hotline khusus: +62 812 3456 7891. Untuk pertanyaan non-darurat, silakan gunakan saluran reguler.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}