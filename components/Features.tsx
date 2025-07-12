'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Umbrella,
  CalendarCheck,
  ShieldCheck,
  BadgeCheck,
} from 'lucide-react';

const features = [
  {
    title: 'Container Dry® II',
    description: 'Desiccant untuk melindungi kontainer dari kelembaban.',
    image: '/images/container.webp',
  },
  {
    title: 'Desi Pak®',
    description: 'Desiccant dalam kemasan kantong untuk berbagai aplikasi.',
    image: '/images/desi.webp',
  },
  {
    title: 'Silica Gel',
    description: 'Silica gel berkualitas untuk proteksi kelembaban.',
    image: '/images/silica.webp',
  },
];

const advantages = [
  {
    title: 'Menjaga dari kelembapan.',
    description: 'Produk kami dirancang untuk menjaga produk anda dari kelembapan.',
    icon: <Umbrella size={36} className="text-[#198754]" />,
  },
  {
    title: 'Jangka waktu yang lama.',
    description: 'Produk anda akan dijaga dari kelembapan dengan waktu yang panjang.',
    icon: <CalendarCheck size={36} className="text-[#198754]" />,
  },
  {
    title: 'Kualitas Produk.',
    description: 'Produk kami memiliki kualitas terbaik sehingga anda tidak perlu khawatir akan produk anda.',
    icon: <ShieldCheck size={36} className="text-[#198754]" />,
  },
  {
    title: 'Ecotain Sertifikat.',
    description: 'Produk EcoTain® secara signifikan melebihi standar pasar keberlanjutan.',
    icon: <BadgeCheck size={36} className="text-[#198754]" />,
  },
];

const Features = () => {
  return (
    <>
      {/* Section: Produk */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-400 font-medium mb-2">Produk</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-14">
            Produk terbaik kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="relative group flex flex-col items-center text-center"
              >
                <div className="w-[250px] h-[320px] relative mb-5 overflow-hidden rounded-md shadow-md transition-transform duration-500 ease-in-out transform group-hover:scale-105">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-[#198754]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col items-center justify-center text-white px-4 text-sm text-center backdrop-blur-sm">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="opacity-90">{item.description}</p>
                  </div>
                </div>
                <h3 className="text-[#198754] text-sm font-bold uppercase mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Sample Produk */}
      <section className="w-full bg-white px-6 mt-10 relative overflow-visible">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative">
          {/* Gambar Sample + Pattern */}
          <div className="relative z-10">
            {/* Bullet Pattern */}
            <div className="absolute bottom-[-50px] right-[-50px] z-0 opacity-30">
              <svg
                width="180"
                height="180"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#198754">
                  {Array.from({ length: 7 }).map((_, row) =>
                    Array.from({ length: 7 }).map((_, col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={8 + col * 24}
                        cy={8 + row * 24}
                        r="6"
                      />
                    ))
                  )}
                </g>
              </svg>
            </div>

            {/* Gambar Sample */}
            <div className="rounded-xl overflow-hidden shadow-lg w-[300px] md:w-[350px] h-[280px] relative z-10">
              <Image
                src="/images/ps1.webp"
                alt="Sample Produk"
                fill
                className="object-cover"
              />
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 w-full bg-[#198754] text-white p-5 rounded-b-xl z-20">
              <h3 className="text-base font-semibold mb-1">Dapatkan sample produk</h3>
              <p className="text-sm opacity-90">Dapatkan sample produk kami untuk anda.</p>
            </div>
          </div>

          {/* Text Kanan */}
          <div className="text-center md:text-left max-w-xl z-10">
            <p className="text-sm text-gray-400 font-medium mb-2">Contoh produk</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">
              Kami berikan contoh <br className="hidden md:block" />
              produk untuk anda.
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Kami memberikan contoh produk untuk anda, silahkan mengirimkan kebutuhan
              untuk perusahaan anda di halaman hubungi kami.
            </p>
            <Link
              href="/produk"
              className="text-[#198754] font-semibold text-sm border-b border-[#198754] inline-block"
            >
              — Semua Produk
            </Link>
          </div>
        </div>
      </section>

      {/* Section: Keunggulan Kami */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-400 font-medium mb-1">Keuntungan</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003c5c] mb-12">
            Jaga produk anda <br className="hidden md:block" /> dengan keunggulan kami
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {advantages.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#eafaf0] rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-[#003c5c] text-base font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
