// app/faq/page.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Search, ChevronDown, ChevronUp, Leaf, Phone, Mail } from 'lucide-react'

const FAQ_DATA = [
  {
    id: 1,
    question: "Apa itu ethylene absorber?",
    answer: "Ethylene absorber adalah produk inovatif yang dirancang untuk menyerap gas etilen yang dihasilkan oleh buah dan sayuran selama proses pematangan. Gas etilen mempercepat proses pembusukan, sehingga dengan menyerapnya, kami dapat memperpanjang masa kesegaran produk segar Anda hingga 2-3 kali lipat."
  },
  {
    id: 2,
    question: "Bagaimana cara penggunaan ethylene absorber?",
    answer: "Cara penggunaan sangat sederhana: tempatkan sachet ethylene absorber di dalam kemasan buah/sayuran yang ingin Anda awetkan kesegarannya. Satu sachet efektif untuk ruang dengan volume 1-2 m³. Pastikan kemasan tertutup rapat untuk hasil optimal. Produk mulai bekerja segera setelah dibuka dari kemasan aslinya."
  },
  {
    id: 3,
    question: "Berapa lama masa efektif ethylene absorber?",
    answer: "Masa efektif standar produk kami adalah 30 hari setelah dibuka. Namun dalam kondisi penyimpanan ideal (suhu ruang, kelembaban normal), produk dapat bertahan hingga 45 hari. Kami menambahkan indikator warna pada sachet yang berubah ketika produk tidak lagi efektif."
  },
  {
    id: 4,
    question: "Apakah ethylene absorber aman untuk makanan?",
    answer: "Sangat aman. Produk kami telah mendapatkan sertifikasi BPOM RI NA18191100273 dan memenuhi standar keamanan pangan internasional termasuk FDA (21 CFR 175.300), EU No 10/2011, dan JHOSPA Jepang. Bahan aktif kami tidak bersentuhan langsung dengan produk pangan karena dikemas dalam material food-grade khusus."
  },
  {
    id: 5,
    question: "Bagaimana ethylene absorber mempengaruhi rasa buah?",
    answer: "Ethylene absorber tidak mempengaruhi rasa, aroma, atau tekstur buah dan sayuran sama sekali. Produk kami bekerja hanya dengan menyerap gas etilen tanpa mengubah komposisi kimia produk segar Anda. Uji organoleptik menunjukkan tidak ada perbedaan signifikan antara buah yang menggunakan dan tidak menggunakan produk kami."
  },
  {
    id: 6,
    question: "Dapatkah ethylene absorber digunakan untuk pengiriman ekspor?",
    answer: "Tentu. Produk kami secara khusus dirancang untuk kebutuhan ekspor buah dan sayuran. Dengan masa efektif hingga 45 hari, produk ideal untuk pengiriman laut yang memakan waktu 3-4 minggu. Kami juga menyediakan kemasan khusus dengan indikator suhu untuk memantau kondisi selama pengiriman."
  },
  {
    id: 7,
    question: "Berapa lama waktu yang dibutuhkan untuk melihat hasil?",
    answer: "Anda akan melihat perbedaan signifikan dalam 24-48 jam pertama penggunaan. Buah yang biasanya menunjukkan tanda pembusukan pada hari ke-3 akan tetap segar hingga hari ke-7 atau lebih, tergantung jenis buah dan kondisi penyimpanan."
  },
  {
    id: 8,
    question: "Bagaimana cara menyimpan ethylene absorber yang belum digunakan?",
    answer: "Simpan sachet dalam kemasan aslinya di tempat sejuk dan kering, jauh dari sinar matahari langsung. Produk yang belum dibuka memiliki masa simpan 2 tahun. Setelah dibuka, gunakan segera dan jangan simpan kembali produk yang sudah terpapar udara."
  }
];

const FAQ_CATEGORIES = [
  { id: 'all', name: 'Semua Kategori' },
  { id: 'product', name: 'Produk' },
  { id: 'usage', name: 'Penggunaan' },
  { id: 'shipping', name: 'Pengiriman' },
  { id: 'safety', name: 'Keamanan' }
];

export default function FAQPage() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredFaqs, setFilteredFaqs] = useState(FAQ_DATA);
  
  useEffect(() => {
    const results = FAQ_DATA.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Dalam implementasi nyata, kita akan memiliki kategori di setiap FAQ
      // Untuk demo, kita asumsikan FAQ 1-3 produk, 4-5 safety, 6 shipping, 7-8 usage
      const matchesCategory = selectedCategory === 'all' || 
        (selectedCategory === 'product' && [1,2,3].includes(faq.id)) ||
        (selectedCategory === 'safety' && [4,5].includes(faq.id)) ||
        (selectedCategory === 'shipping' && [6].includes(faq.id)) ||
        (selectedCategory === 'usage' && [7,8].includes(faq.id));
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredFaqs(results);
  }, [searchTerm, selectedCategory]);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center bg-[#55A630] px-4 py-1.5 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Leaf size={18} className="mr-2" />
              <span className="font-medium">Pertanyaan Umum</span>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="block">Pertanyaan yang Sering</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#8CCF42] to-[#C8EE9E]">
                Diajukan
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl max-w-3xl mx-auto text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Temukan jawaban untuk pertanyaan umum seputar produk ethylene absorber kami. Jika Anda tidak menemukan jawaban yang Anda cari, tim kami siap membantu.
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      {/* FAQ Content */}
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 -mt-16 relative z-20">
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Search and Filter */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Cari pertanyaan..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#55A630] focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {FAQ_CATEGORIES.map(category => (
                  <motion.button
                    key={category.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-[#55A630] to-[#8CCF42] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
          
          {/* FAQ List */}
          <div className="divide-y divide-gray-100">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map(faq => (
                <div key={faq.id} className="py-6 px-6">
                  <button
                    className="flex items-center justify-between w-full text-left"
                    onClick={() => toggleAccordion(faq.id)}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 ml-4">
                      {activeId === faq.id ? (
                        <ChevronUp className="text-[#55A630]" size={24} />
                      ) : (
                        <ChevronDown className="text-gray-500" size={24} />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {activeId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 text-gray-600">
                          {faq.answer}
                        </div>
                        
                        {/* Additional Info */}
                        {faq.id === 1 && (
                          <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
                            <h4 className="font-semibold text-green-800 mb-2">Fakta Menarik:</h4>
                            <p className="text-green-700">Produk kami dapat mengurangi kerusakan buah hingga 72.3% berdasarkan uji laboratorium independen.</p>
                          </div>
                        )}
                        
                        {faq.id === 4 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              BPOM Certified
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                              FDA Approved
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              EU Standard
                            </span>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div className="py-12 text-center">
                <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                  <Search className="text-gray-400" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Tidak ditemukan</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Maaf, tidak ada pertanyaan yang cocok dengan pencarian Anda. Coba kata kunci lain atau jelajahi kategori yang berbeda.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
      
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="bg-gradient-to-r from-[#0d3b26] to-[#1a4d32] rounded-3xl overflow-hidden shadow-2xl relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>
            <div className="absolute top-10 -right-10 w-96 h-96 rounded-full bg-[#55A630]/20 blur-3xl"></div>
            <div className="absolute bottom-10 -left-10 w-80 h-80 rounded-full bg-[#8CCF42]/20 blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto py-16 px-6 text-center relative z-10">
            <motion.div
              className="inline-flex items-center bg-[#55A630] px-4 py-1.5 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Phone size={18} className="mr-2" />
              <span className="font-medium">Butuh Bantuan?</span>
            </motion.div>
            
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Masih ada pertanyaan?
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-200 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Tim dukungan pelanggan kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="tel:+628123456789"
                className="flex items-center justify-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3.5 rounded-lg hover:bg-gray-100 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                <span>Hubungi Kami</span>
              </motion.a>
              
              <motion.a
                href="mailto:info@ethyleneabsorber.com"
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                <span>Kirim Email</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-5xl font-bold text-[#55A630] mb-4">98%</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tingkat Kepuasan</h3>
            <p className="text-gray-600">Pengguna melaporkan peningkatan kualitas produk yang signifikan</p>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-5xl font-bold text-[#55A630] mb-4">12+</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Negara Pengguna</h3>
            <p className="text-gray-600">Produk kami digunakan oleh eksportir di seluruh dunia</p>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-5xl font-bold text-[#55A630] mb-4">24/7</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Dukungan Pelanggan</h3>
            <p className="text-gray-600">Tim kami siap membantu kapan saja melalui berbagai saluran</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}