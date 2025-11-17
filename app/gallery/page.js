// app/gallery/page.js
"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Data galeri gambar dengan property featured untuk highlight
  const galleryImages = [
    {
      id: 1,
      src: '/Images/award/PT STS - Awards Display 001.png',
      alt: 'Project 1',
      category: 'Achievements',
      title: 'Awards From ONDA',
      featured: true // Gambar besar/highlight
    },
    {
      id: 2,
      src: '/Images/award/PT STS - Awards Display 002.png',
      alt: 'Project 2',
      category: 'Achievements',
      title: 'Business Coaching From GRATYO dan  Distributor 2017 "GOLD CATEGORY" From NAPOLEON LIGHT INDUSTRIES',
      featured: true // Gambar besar/highlight
    },  
    {
      id: 5,
      src: '/Images/WS/Gudang 1.png',
      alt: 'warehouse 1',
      category: 'warehouse',
      title: 'WareHouse Facility',
      featured: false // Gambar besar/highlight
    },
    {
      id: 14,
      src: '/Images/WS/Gudang 2.png',
      alt: 'warehouse 1',
      category: 'warehouse',
      title: 'WareHouse Facility',
      featured: false // Gambar besar/highlight
    },
    {
      id: 15,
      src: '/Images/WS/Gudang 4.png',
      alt: 'warehouse 1',
      category: 'warehouse',
      title: 'WareHouse Facility',
      featured: false // Gambar besar/highlight
    },
    {
      id: 16,
      src: '/Images/WS/Gudang 5.png',
      alt: 'warehouse 1',
      category: 'warehouse',
      title: 'WareHouse Facility',
      featured: false // Gambar besar/highlight
    },
    {
      id: 6,
      src: '/Images/WS/Gudang 3.png',
      alt: 'warehouse 2',
      category: 'warehouse',
      title: 'Team at Work',
      featured: false
    },
    {
      id: 7,
      src: '/Images/gallery/PT STS - Tukar Kado Valentine 2025.png',
      alt: 'Event 1',
      category: 'events',
      title: 'Tukar Kado Valentine',
      featured: false
    },
    {
      id: 8,
      src: '/Images/gallery/PT STS - BukBer Ramadhan 2025 A.png',
      alt: 'Event 2',
      category: 'events',
      title: 'BukBer Ramadhan 2025',
      featured: true // Gambar besar/highlight
    },
    {
      id: 9,
      src: '/Images/gallery/PT STS - Ultah Direktur Utama 2025 B.png',
      alt: 'Event 3',
      category: 'events',
      title: 'Ultah Direktur Utama 2025',
      featured: true
    },
    {
      id: 10,
      src: '/Images/gallery/Bansos 1.jpg',
      alt: 'Event 4',
      category: 'events',
      title: 'Pemberian Bansos di wilayah sekitar 2025',
      featured: false
    },
    {
      id: 11,
      src: '/Images/gallery/PT STS - BukBer Ramadhan 2025 B.png',
      alt: 'Event 3',
      category: 'events',
      title: 'Berbagi Paket Ramadhan',
      featured: false
    },
    {
      id: 12,
      src: '/Images/gallery/PT STS - BukBer Ramadhan 2025 C.png',
      alt: 'Event 3',
      category: 'events',
      title: 'Berbagi Paket Ramadhan',
      featured: false
    },
    {
      id: 13,
      src: '/Images/gallery/PT STS - BukBer Ramadhan 2025 D.png',
      alt: 'Event 3',
      category: 'events',
      title: 'Berbagi Paket Ramadhan',
      featured: false
    },
    {
      id: 17,
      src: '/Images/gallery/bansos 2.jpg',
      alt: 'Event 3',
      category: 'events',
      title: 'Pemberian Bansos di wilayah sekitar 2025',
      featured: false
    },
    {
      id: 18,
      src: '/Images/gallery/bansos 3.jpg',
      alt: 'Event 3',
      category: 'events',
      title: 'Pemberian Bansos di wilayah sekitar 2025',
      featured: false
    },
    {
      id: 19,
      src: '/Images/gallery/bansos 4.jpg',
      alt: 'Event 3',
      category: 'events',
      title: 'Pemberian Bansos di wilayah sekitar 2025',
      featured: false
    },
    {
      id: 20,
      src: '/Images/gallery/badmin.jpg',
      alt: 'Event 3',
      category: 'events',
      title: 'STS Badmintonan',
      featured: false
    },
    {
      id: 21,
      src: '/Images/gallery/badmin 2.jpg',
      alt: 'Event 3',
      category: 'events',
      title: 'STS Badmintonan',
      featured: false
    },
    {
      id: 22,
      src: '/Images/gallery/badmin 3.jpg',
      alt: 'Event 3',
      category: 'events',
      title: 'STS Badmintonan',
      featured: false
    },
    {
      id: 23,
      src: '/Images/gallery/pecang 1.jpg',
      alt: 'Event 3',
      category: 'events',
      title: 'Plesir Ujung Kulon 2025',
      featured: true
    },
    {
      id: 24,
      src: '/Images/gallery/pecang 2.jpg',
      alt: 'Event 3',
      category: 'events',
      title: 'Plesir Ujung Kulon 2025',
      featured: false
    },
    {
      id: 25,
      src: '/Images/gallery/pecang 3.jpg',
      alt: 'Event 3',
      category: 'events',
      title: 'Plesir Ujung Kulon 2025',
      featured: false
    },
    {
      id: 26,
      src: '/Images/gallery/pecang 4.jpg',
      alt: 'Event 3',
      category: 'events',
      title: 'Plesir Ujung Kulon 2025',
      featured: false
    },
    {
      id: 27,
      src: '/Images/gallery/pecang 5.jpg',
      alt: 'Event 3',
      category: 'events',
      title: 'Plesir Ujung Kulon 2025',
      featured: false
    },
    {
      id: 28,
      src: '/Images/gallery/pecang 6.jpg',
      alt: 'Event 3',
      category: 'events',
      title: 'Plesir Ujung Kulon 2025',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'Achievements', label: 'Penghargaan' },
    // { id: 'products', label: 'Produk' },
    { id: 'warehouse', label: 'Warehouse' },
    { id: 'events', label: 'Event' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-helvetica-black mb-4">
              Gallery Kami
            </h1>
            <p className="text-lg md:text-xl font-helvetica-light max-w-2xl mx-auto">
              Dokumentasi perjalanan kami dalam memberikan solusi terbaik untuk pelanggan
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white shadow-sm sticky top-24 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-helvetica-regular transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-yellow-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid dengan Mixed Sizes */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white
                ${image.featured ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}
              `}
              onClick={() => setSelectedImage(image)}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image Container with different heights */}
              <div className={`relative w-full ${image.featured ? 'h-96 lg:h-[500px]' : 'h-48 lg:h-60'}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Featured Badge */}
                {/* {image.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-xs font-helvetica-bold">
                    HIGHLIGHT
                  </div>
                )} */}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className={`font-helvetica-regular mb-1 ${image.featured ? 'text-xl' : 'text-base'}`}>
                      {image.title}
                    </h3>
                    <p className="text-sm font-helvetica-regular capitalize">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg font-helvetica-regular">
              Tidak ada gambar dalam kategori ini
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}  
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <div className="max-w-5xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain mx-auto"
              />
            </div>
            <div className="text-center mt-4 text-white">
              <h3 className="text-2xl font-helvetica-regular mb-2">{selectedImage.title}</h3>
              <p className="text-lg font-helvetica-black capitalize">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}