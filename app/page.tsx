// app/page.js
"use client";

import Link from 'next/link';
import Slider from 'react-slick';
// import { NextArrow, PrevArrow } from './components/SliderArrow';

// Komponen Hero (Banner Utama) dengan Tailwind CSS
function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    // --- PENGATURAN PANAH KUSTOM ---
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />
  };

  const slides = [
    { image: '/images/Banner-Utama1.png', title: 'KEVLAR CHALK REEL', subtitle: 'BUILT WITH KEVLAR FOR UNRIVALLED STRENGTH', buttonText: 'Jelajahi Sekarang', link: '/produk' },
    { image: '/images/Banner-Utama2.png', title: 'KOLEKSI LENGKAP OWNER & YO-ZURI', subtitle: 'Kualitas dan Daya Tahan Terjamin untuk Proyek Anda', buttonText: 'Lihat Semua Produk', link: '/produk' }
  ];

   return (
    <section className="w-full relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[420px] bg-inherit"> {/* Tambahkan bg-black untuk latar belakang saat contain */}
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-contain" // <-- UBAH KE OBJECT-CONTAIN DI SINI
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-xl text-white">
                  <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">{slide.title}</h1>
                  <p className="text-lg md:text-xl mb-8">{slide.subtitle}</p>
                  <Link href={slide.link} className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded hover:bg-yellow-600 transition-colors">
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
// Komponen CatalogueSlider dengan Tailwind CSS
function CatalogueSlider() {
  const settings = {
    dots: false, infinite: false, speed: 500, slidesToShow: 4, slidesToScroll: 1, arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  const catalogueItems = [
    { image: '/images/Yo-Zuri - Product Pages-84.jpg', link: '/produk' }, { image: '/images/Yo-Zuri - Product Pages-85.jpg', link: '/produk' },
    { image: '/images/Yo-Zuri - Product Pages-86.jpg', link: '/produk' }, { image: '/images/Yo-Zuri - Product Pages-87.jpg', link: '/produk' },
    { image: '/images/Yo-Zuri - Product Pages-88.jpg', link: '/produk' },
  ];

  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-black text-center uppercase mb-12">Catalogue</h2>
      <div className="-mx-2">
        <Slider {...settings}>
          {catalogueItems.map((item, index) => (
            <div key={index} className="px-2">
              <Link href={item.link} className="block group relative h-96 overflow-hidden">
                <img src={item.image} alt={`Catalogue item ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

// Komponen DownloadCatalogueSection dengan Tailwind CSS
function DownloadCatalogueSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-black mb-4">Dapatkan Katalog Lengkap Kami</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">Unduh katalog produk terbaru kami dalam format PDF untuk melihat semua koleksi dan spesifikasi teknisnya.</p>
        <a 
          href="/catalogue/katalog-samudra-teknik-sejahtera.pdf" 
          className="inline-block bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded hover:bg-yellow-600 transition-colors" 
          download="Katalog Produk PT STS - 2025.pdf"
        >
          Download Sekarang
        </a>
      </div>
    </section>
  );
}

// Komponen FeaturedVideoSection dengan Tailwind CSS
function FeaturedVideoSection() {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-3xl font-black uppercase">TEKNOLOGI TERDEPAN</h2>
            <h3 className="text-xl font-bold opacity-90 mb-4">PISAU POTONG PALING CANGGIH</h3>
            <p className="mb-8">Hanya kualitas terbaik yang digunakan dalam produksi alat kami. Teknologi laser canggih untuk performa dan keamanan terbaik. Direkayasa secara presisi dengan baja kualitas tertinggi.</p>
            <a href="https://www.youtube.com/@officialpageyozuri" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-900 text-white font-bold py-3 px-8 rounded hover:bg-black transition-colors">
              Jelajahi Jangkauan
            </a>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.youtube.com/embed/lmk1qdkXCXE?si=qAluaeyFZ-r0hTSt" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

// Halaman Utama yang sudah menggunakan komponen Tailwind
export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <CatalogueSlider />
      <DownloadCatalogueSection />
      <FeaturedVideoSection />
    </>
  );
}


