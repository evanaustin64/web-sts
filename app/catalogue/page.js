// app/catalogue/page.js
"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function CataloguePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-transparent py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-helvetica-black text-gray-800 mb-4">
            Wujudkan Ide Anda Bersama Kami
          </h1>
          <p className="text-lg md:text-xl text-gray-800 font-helvetica-light">
            Jelajahi Dunia Hardware, Tools, & Sanitary Ware Kami, dimulai dari Ujung Jari Anda!
          </p>
        </div>
      </section>

      {/* Catalogue Cards Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Owner Catalogue Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all active:shadow-md transform hover:-translate-y-3 active:translate-y-2 duration-200">
            <div className="bg-yellow-500 h-64 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/Images/PT STS - Web Design - E-Catalogue Covers-02.png"
                  alt="Owner Catalogue"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-helvetica-black text-gray-800 mb-4">Katalog Produk OWNER - Update
</h3>
              <p className="text-gray-600 font-helvetica-light mb-6 leading-relaxed">
                Temukan setiap detail produk yang anda butuhkan, akses Gratis dan Unduh sekarang.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-gray-700 font-helvetica-regular">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Detail Spesifikasi Produk
                </li>
                <li className="flex items-center text-gray-700 font-helvetica-regular">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Tampilan Visual Produk
                </li>
                <li className="flex items-center text-gray-700 font-helvetica-regular">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Format PDF User-Friendly
                </li>
              </ul>
              <a 
                href="https://drive.google.com/file/d/1NQaZzPGuQnH2IEgPKN0LsHukhKR7g5LN/view?usp=drive_link"
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-black text-center font-helvetica-bold py-3 md:py-4 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl active:shadow-md transform hover:-translate-y-1 active:translate-y-0 duration-200"
              >
                <span className="flex items-center justify-center font-helvetica-regular text-sm md:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span className="hidden sm:inline">Download Catalogue Owner</span>
                  <span className="sm:hidden">Download Catalogue Owner</span>
                </span>
              </a>
            </div>
          </div>

          {/* Yo-Zuri Catalogue Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all active:shadow-md transform hover:-translate-y-3 active:translate-y-2 duration-200">
            <div className="bg-red-500 h-64 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/Images/PT STS - Web Design - E-Catalogue Covers-01.png"
                  alt="Yo-Zuri Catalogue"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-helvetica-black text-gray-800 mb-4">Katalog Produk YO-ZURI - Update</h3>
              <p className="text-gray-600 font-helvetica-light mb-6 leading-relaxed">
              Temukan setiap detail produk yang anda butuhkan, akses Gratis dan Unduh sekarang.
.              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-gray-700 font-helvetica-regular">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                   Detail Spesifikasi Produk
                </li>
                <li className="flex items-center text-gray-700 font-helvetica-regular">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Tampilan Visual Produk
                </li>
                <li className="flex items-center text-gray-700 font-helvetica-regular">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Format PDF User-Friendly
                </li>
              </ul>
              <a 
                href="https://drive.google.com/file/d/1JZ6ZJdXoF35fcAr0CSmA6q3ml1JRbKOj/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-black hover:bg-gray-800 active:bg-gray-900 text-white text-center font-helvetica-bold py-3 md:py-4 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl active:shadow-md transform hover:-translate-y-1 active:translate-y-0 duration-200"
              >
                <span className="flex items-center justify-center font-helvetica-regular text-sm md:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span className="hidden sm:inline">Download Catalogue Yo-Zuri</span>
                  <span className="sm:hidden">Download Catalogue Yo-Zuri</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-helvetica-black text-gray-800 mb-4">
            Butuh Bantuan?
          </h2>
          <p className="text-gray-600 font-helvetica-regular mb-6">
            Jika Anda memiliki pertanyaan tentang produk kami atau memerlukan informasi lebih lanjut, jangan ragu untuk menghubungi kami.
          </p>
          <Link 
            href="/hubungi-kami"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-helvetica-black py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl active:shadow-md transform hover:-translate-y-1 active:translate-y-0 duration-200"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </div>
  );
}