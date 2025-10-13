// app/page.js
"use client";

import Link from 'next/link';
import Slider from 'react-slick';
import react from 'react';
import PartnerLogosSlider from './components/PartnerLogosSlider';
// import { CatalogueNextArrow, CataloguePrevArrow } from '@/app/components/CatalogueArrows';

// import { NextArrow, PrevArrow } from './components/SliderArrow';


const PRODUK_UNGGULAN_SAYA = [
  {
    id: 1,
    image: '/Images/PT STS - Web Design - Product Highlights 1290x840px - 001A.png',
    link: '/produk/owner/painting-tools/own-paint-001 ',
  },
  {
    id: 2,
    image: '/Images/PT STS - Web Design - Product Highlights 1290x840px-02.png',
    link: '/produk/yozuri/door-lock-equipments/yoz-lock-004',
  },
];

type Product = {
  id: number;
  image: string;
  link: string;
};

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

// const preventDefault = (e: React.MouseEvent) => e.preventDefault();

const BannerProductCard = ({ product }: { product: Product }) => (
  <a
    href={product.link}
    // onClick={preventDefault}
    className="relative block aspect-[2/1] md:aspect-[16/7] rounded-2xl overflow-hidden group shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1"
  >
    <img
      src={product.image}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 "></div>
    <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-full">
      {/* <p className="text-sm font-helvetica-regular uppercase text-yellow-400">{product.category}</p> */}
      {/* <h1 className="text-xl md:text-3xl font-helvetica-black-oblique">{product.name}</h1> */}
      <div className="mt-4 font-helvetica-light text-white inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        Lihat Produk
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  </a>
);

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

function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  // MODIFIKASI #1: Data disederhanakan, hanya butuh gambar dan link tujuan.
  const slides = [
    { image: '/Images/PT STS - Web Design - Header Promo (September 2025)-01.png', link: '/produk/yozuri' },
    { image: '/Images/PT STS - Web Design - Header-05.png', link: '/produk/owner' },
    { image: '/Images/PT STS - Web Design - Header-04.png', link: '/produk/yozuri' },
    { image: '/Images/PT STS - Web Design - Header-06.png', link: '/produk/lainnya/helios' }
  ];

  return (
    <section className="w-full relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          // MODIFIKASI #2: Seluruh area slide sekarang adalah sebuah link.
          <Link key={index} href={slide.link}>
            {/* Wadah ini tetap menggunakan 'aspect-[1920/600]' 
              untuk menjaga rasio gambar agar tidak terpotong.
            */}
            <div className="relative w-full aspect-[1920/600] bg-gray-200">
              <img
                src={slide.image}
                alt={`Banner slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        ))}
      </Slider>
    </section>
  );
}

// Komponen CatalogueSlider dengan Tailwind CSS
// app/page.js -> Ganti komponen CatalogueSlider Anda dengan ini

// Komponen CatalogueSlider dengan Tailwind CSS
function CatalogueSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024, // Untuk layar tablet (di bawah 1024px)
        settings: {
          slidesToShow: 2, // Tampilkan 3 item
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,  // Untuk layar mobile (di bawah 768px)
        settings: {
          slidesToShow: 2, // Tampilkan 2 item
          slidesToScroll: 1,
        }
      }
    ]
  };

  const catalogueItems = [
    { image: '/Images/PT STS - Web Design - YO-ZURI Categories - Hand & Plumbing Tools.png', link: '/produk/yozuri/power-plumbing-tools' },
    { image: '/Images/PT STS - Web Design - OWNER Categories 720px - Layering Tools.png', link: '/produk/owner/layering-tools' },
    { image: '/Images/PT STS - Web Design - YO-ZURI Categories - Drilling Tools.png', link: '/produk/yozuri/drilling-tools' },
    { image: '/Images/PT STS - Web Design - OWNER Categories 720px - Door Lock Equipments.png', link: '/produk/owner/door-lock-equipments' },
    { image: '/Images/PT STS - Web Design - YO-ZURI Categories - Diamond Wheels.png', link: '/produk/yozuri/diamond-wheels' },
    { image: '/Images/PT STS - Web Design - OWNER Categories 720px - Safety Equipments.png', link: '/produk/owner/safety-equipments' },
    { image: '/Images/PT STS - Web Design - YO-ZURI Categories - Painting Tools.png', link: '/produk/yozuri/painting-tools' },
    { image: '/Images/PT STS - Web Design - OWNER Categories 720px - Sanitary Equipments.png', link: '/produk/owner/sanitary-equipments' },
  ];

  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-helvetica-black text-center uppercase mb-12">Kategori</h2>
      {/* <div className="-mx-2"> */}
        <Slider {...settings}>
          {catalogueItems.map((item, index) => (
            <div key={index}>
              <Link
                href={item.link}
                className="group relative aspect-square rounded-lg
                           overflow-hidden flex items-center justify-center
                           transition-shadow duration-300 hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={`Catalogue item ${index + 1}`}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
          ))}
        </Slider>
      {/* </div> */}
    </section>
  );
}

function FeaturedProductsSection({ products }: { products: Product[] }) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text font-bold text-4xl uppercase font-helvetica-black">Produk Pilihan</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-helvetica-regular">
            Koleksi eksklusif yang kami rekomendasikan khusus untuk Anda.
          </p>
        </div>
        {/* REVISI GRID: diubah menjadi 2 kolom untuk layout banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product) => (
            <BannerProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Komponen DownloadCatalogueSection dengan Tailwind CSS

// Komponen FeaturedVideoSection dengan Tailwind CSS
function FeaturedVideoSection() {
  return (
    <div className="w-full bg-cyan-500">
    <section className=" text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-3xl font-helvetica-black-oblique uppercase">PRESISI TAK TERTANDINGI</h2>
            <h3 className="text-xl font-helvetica-black-oblique opacity-90 mb-4">UNTUK HASIL TERBAIK</h3>
            <p className="mb-8 font-helvetica-regular">Saksikan Waterpass Magnet YO-ZURI terbaru dalam aksi! Dengan teknologi magnetik canggih dan desain ergonomis, alat ini memastikan pengukuran yang akurat dan pemasangan yang mudah di berbagai permukaan. Rasakan perbedaan presisi di setiap proyek Anda.</p>
            <a href="https://www.youtube.com/@officialpageyozuri" target="_blank" rel="noopener noreferrer" className="font-helvetica-regular uppercase inline-block bg-white text-gray-800 py-3 px-8 rounded 
            hover:bg-gray-200 

            transition-all duration-300 ease-in-out
            hover:scale-105 hover:-translate-y-1">
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
  </div>
  );
}


// Halaman Utama yang sudah menggunakan komponen Tailwind
export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <PartnerLogosSlider />
      <CatalogueSlider />
      <FeaturedProductsSection products={PRODUK_UNGGULAN_SAYA} />
      <FeaturedVideoSection />
    </>
  );
}


