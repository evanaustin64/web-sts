// app/page.js
"use client";

import Link from 'next/link';
import Slider from 'react-slick';
import react from 'react';

// import { CatalogueNextArrow, CataloguePrevArrow } from '@/app/components/CatalogueArrows';

// import { NextArrow, PrevArrow } from './components/SliderArrow';

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function NextArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow absolute top-1/2 right-8 md:right-8 -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="transition-colors rounded-full w-12 h-12 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </div>
    </div>
  );
}

function PrevArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow absolute top-1/2 left-8 md:left-8 -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="transition-colors rounded-full w-12 h-12 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </div>
    </div>
  );
}
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const slides = [
    { image: '/images/Banner-Utama1.png', title: 'TOOLS YOU CAN TRUST', subtitle: 'Hardware & Tools handal untuk kebutuhan Anda.', buttonText: 'Lihat Katalog    ', link: '/produk' },
    { image: '/images/Banner-Utama2.png', title: 'YOUR PARTNER IN TOOLS', subtitle: 'Kualitas, presisi, dan daya tahan dalam setiap produk.', buttonText: 'Lihat Semua Produk', link: '/produk' }
  ];

  return (
    <section className="w-full relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[500px]">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="container mx-auto px-28">
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // --- TAMBAHKAN PANAH DI SINI ---
    // nextArrow: <CatalogueNextArrow />,
    // prevArrow: <CataloguePrevArrow />,
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
      <h2 className="text-4xl font-black text-center uppercase mb-12">Kategori</h2>
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
      </div>
      <div className='flex text-center justify-center gap-6'>
        <a
          href="/catalogue/katalog-samudra-teknik-sejahtera.pdf"
          className="
      inline-block bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded 
      hover:bg-yellow-600 
      transition-all duration-300 ease-in-out /* <-- Tambahkan ini */
      hover:scale-105 hover:-translate-y-1 /* <-- Tambahkan ini */
    "
          download="Katalog Produk PT STS - 2025.pdf"
        >
          Catalogue - Owner
        </a>
        <a
          href="/catalogue/katalog-samudra-teknik-sejahtera.pdf"
          className="
      inline-block bg-red-500 text-white font-bold py-3 px-8 rounded 
      hover:bg-red-800 /* Perbaikan typo dari hover:bg-red- */
      transition-all duration-300 ease-in-out /* <-- Tambahkan ini */
      hover:scale-105 hover:-translate-y-1 /* <-- Tambahkan ini */
    "
          download="Katalog Produk PT STS - 2025.pdf"
        >
          Catalogue - Yozuri
        </a>
      </div>
    </section>
  );
}

// Komponen FeaturedVideoSection dengan Tailwind CSS
function FeaturedVideoSection() {
  return (
    <section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-3xl font-black uppercase">TEKNOLOGI TERDEPAN</h2>
            <h3 className="text-xl font-bold opacity-90 mb-4">PISAU POTONG PALING CANGGIH</h3>
            <p className="mb-8">Hanya kualitas terbaik yang digunakan dalam produksi alat kami. Teknologi laser canggih untuk performa dan keamanan terbaik. Direkayasa secara presisi dengan baja kualitas tertinggi.</p>
            <a href="https://www.youtube.com/@officialpageyozuri" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-500 text-black font-bold py-3 px-8 rounded hover:bg-yellow-600 transition-colors">
              Jelajahi Jangkauan
            </a>
          </div>
          <div className="aspect-[2] rounded-lg overflow-hidden shadow-2xl">
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


