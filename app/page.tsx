// app/page.js
"use client";

import Link from 'next/link';
import { products } from './data/products';
import Slider from 'react-slick';

// Komponen Hero (Banner Utama)
function HeroSlider() {
  // Pengaturan untuk slider
  const settings = {
    dots: true,           // Menampilkan titik navigasi di bawah
    infinite: true,       // Loop slider tanpa henti
    speed: 500,           // Kecepatan transisi (ms)
    slidesToShow: 1,      // Tampilkan 1 slide dalam satu waktu
    slidesToScroll: 1,    // Geser 1 slide dalam satu waktu
    arrows: true,         // Menampilkan panah kiri-kanan
    autoplay: true,       // Putar otomatis
    autoplaySpeed: 4000,  // Jeda antar slide (4 detik)
  };

  const slides = [
    {
      image: '/images/Banner-Utama1.png', // Ganti dengan path gambar Anda
      title: 'KEVLAR CHALK REEL',
      subtitle: 'BUILT WITH KEVLAR FOR UNRIVALLED STRENGTH',
      buttonText: 'Jelajahi Sekarang',
      link: '/produk'
    },
    {
      image: '/images/Banner-Utama2.png ', // Ganti dengan path gambar Anda
      title: 'KOLEKSI LENGKAP OWNER & YO-ZURI',
      subtitle: 'Kualitas dan Daya Tahan Terjamin untuk Proyek Anda',
      buttonText: 'Lihat Semua Produk',
      link: '/produk'
    }
  ];

  return (
    <section className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-item">
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <div className="slide-content">
              <div className="container">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <Link href={slide.link} className="btn">
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

function CatalogueSlider() {
  // Pengaturan untuk slider katalog
  const settings = {
    dots: false,
    infinite: false, // Set false agar tidak looping jika item kurang
    speed: 500,
    slidesToShow: 4, // Tampilkan 4 item dalam satu waktu
    slidesToScroll: 1,
    arrows: true,
    responsive: [ // Pengaturan untuk layar yang lebih kecil
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  // Data untuk kartu katalog
  const catalogueItems = [
    {  image: '/images/produk-bor.png', link: '/produk' },
    {  image: '/images/produk-gerinda.png', link: '/produk' },
    {  image: '/images/produk-gergaji.png', link: '/produk' },
    {  image: '/images/produk-laser.png', link: '/produk' },
    {  image: '/images/Yo-Zuri - Kunci Pipa.png', link: '/produk' },
    // Tambahkan 5 item lagi di sini sesuai kebutuhan Anda
  ];

  return (
    <section className="container">
      <h2 className="section-title">Catalogue</h2>
      <div className="catalogue-slider">
        <Slider {...settings}>
          {catalogueItems.map((item, index) => (
            <div key={index} className="catalogue-card-wrapper">
              <Link href={item.link} className="catalogue-card">
                <div className="card-overlay"></div>
                <div className="card-text">
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

// Halaman Utama yang sudah disederhanakan
export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <CatalogueSlider />
    </>
  );
}