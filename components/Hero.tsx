'use client';

import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-full pt-32 pb-8 overflow-hidden">
      {/* Background split dengan potongan diagonal di kanan */}
      <div className="absolute inset-0 flex z-0">
        <div className="w-1/4 bg-white" />
        <div
          className="w-3/4 bg-[#ecfdf5]" // hijau muda modern
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center relative z-10">
        
        {/* Left Side: Gambar + Pattern */}
        <div className="relative w-full md:w-1/2">
          {/* SVG Bullet Pattern */}
          <svg
            width="240"
            height="240"
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-[-36px] right-6 z-0"
          >
            <g fill="#a1e8af" fillOpacity="0.7">
              {Array.from({ length: 7 }).map((_, row) =>
                Array.from({ length: 7 }).map((_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={10 + col * 32}
                    cy={10 + row * 32}
                    r="6"
                  />
                ))
              )}
            </g>
          </svg>

          {/* Gambar */}
          <div className="relative z-10 w-full h-full max-w-md">
            <Image
              src="/images/fruit-sachet.webp"
              alt="Fruit Sachet"
              width={600}
              height={700}
              className="rounded-tl-lg rounded-br-[80px] object-cover"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
              }}
              priority
            />
          </div>
        </div>

        {/* Right Side: Teks */}
        <div className="mt-12 md:mt-0 md:ml-16 w-full md:w-1/2">
          <p className="text-[#198754] font-semibold mb-3 tracking-wide uppercase">
            Dickson Synergy
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800 mb-6">
            Solusi terbaik <br /> melindungi <br /> produk anda
          </h1>
          <p className="text-[#4B5563] text-base leading-relaxed max-w-lg">
            PT Dickson Synergy menawarkan solusi terbaik untuk melindungi produk Anda dari
            kerusakan dan kontaminasi yang disebabkan oleh kelembaban dan kondisi lingkungan
            yang tidak tepat. Dengan menggunakan produk silica gel dan desiccant yang berkualitas
            tinggi, kami membantu menjaga kualitas produk dan peralatan industri Anda agar tetap
            dalam kondisi prima dan meminimalkan kerugian.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
