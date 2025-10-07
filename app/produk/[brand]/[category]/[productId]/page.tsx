"use client";

import Link from 'next/link';
import Image from 'next/image';
import { catalogueData, Product, Category } from '@/app/data/catalogue-data';
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { use, useState, useRef } from 'react';

function CursorZoomImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setZoom(true);
  };

  const handleMouseLeave = () => {
    setZoom(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setPosition({ x, y });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative w-full aspect-square min-h-[300px] md:min-h-[400px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl md:rounded-2xl border border-gray-200 md:border-2 shadow-sm overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        className="object-contain transition-transform duration-200 ease-out"
        style={{
          transform: zoom ? 'scale(2)' : 'scale(1)',
          transformOrigin: `${position.x}% ${position.y}%`,
        }}
      />
       <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md pointer-events-none">
        <ZoomIcon className="w-5 h-5 text-gray-700" />
      </div>
    </div>
  );
}
// Custom Image Slider dengan Tailwind CSS
function ProductImageSlider({ images, productName }: { images: string[]; productName: string }) {
  // State untuk slider
  const [currentIndex, setCurrentIndex] = useState(0);

  // State untuk logika zoom (dipindahkan ke sini)
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Fungsi navigasi slider
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Fungsi event handler untuk zoom (sekarang menjadi bagian dari slider)
  const handleMouseEnter = () => setZoom(true);
  const handleMouseLeave = () => setZoom(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setPosition({ x, y });
    }
  };

  return (
    <div className="w-full max-w-full">
      {/* Kontainer utama ini sekarang yang menangani semua event mouse */}
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="group relative w-full aspect-square min-h-[300px] md:min-h-[400px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl md:rounded-2xl border border-gray-200 md:border-2 shadow-sm overflow-hidden"
      >
        {/* Komponen Image dengan style dinamis untuk zoom */}
        <Image
          key={currentIndex} // Menambahkan key agar React me-render ulang saat gambar ganti
          src={images[currentIndex]}
          alt={`${productName} image ${currentIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className="object-contain p-4 md:p-8 transition-transform duration-200 ease-out"
          style={{
            transform: zoom ? 'scale(2)' : 'scale(1)',
            transformOrigin: `${position.x}% ${position.y}%`,
          }}
        />

        {/* Tombol navigasi (sekarang tidak akan menghalangi event mouse) */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:bg-yellow-400 hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-700 hover:text-white transition-colors" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:bg-yellow-400 hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-700 hover:text-white transition-colors" />
            </button>
          </>
        )}
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md pointer-events-none">
          <ZoomIcon className="w-5 =-5 text-gray-700" />
        </div>
      </div>

      {/* Dots Navigation (tidak ada perubahan) */}
      {images.length > 1 && (
        <div className="mt-4 md:mt-6 pb-2">
          <div className="flex justify-center gap-2 md:gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-6 md:w-8 h-2.5 md:h-3 bg-yellow-400 rounded-full'
                    : 'w-2.5 md:w-3 h-2.5 md:h-3 bg-gray-300 rounded-full hover:bg-gray-400 hover:scale-125'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface PageProps {
  params: Promise<{
    brand: string;
    category: string;
    productId: string;
  }>;
}

function ZoomIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      fill="currentColor" 
      className={className}
      viewBox="0 0 16 16"
    >
      <path 
        fillRule="evenodd" 
        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
      />
      <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
      <path 
        fillRule="evenodd" 
        d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
      />
    </svg>
  );
}

export default function ProductDetailPage({ params }: PageProps) {
  const { brand, category, productId } = use(params);

  const brandCategories = catalogueData[brand] || [];
  let product: Product | undefined;
  let currentCategoryData: Category | undefined;

  for (const cat of brandCategories) {
    const foundProduct = cat.products.find(p => p.id === productId);
    if (foundProduct) {
      product = foundProduct;
      currentCategoryData = cat;
      break;
    }
  }

  if (!product) {
    return <p className="text-center p-12">Produk tidak ditemukan!</p>;
  }

  const handleWhatsAppInquiry = () => {
    const phoneNumber = "6285176878892";
    const message = `Halo, Saya tertarik dengan produk ini :\n${product.name}\nDimohon detail info produknya, Terima kasih.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const brandName = brand.charAt(0).toUpperCase() + brand.slice(1);

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:underline text-yellow-500 hover:text-blue-800 font-helvetica-light uppercase">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/produk" className="hover:underline text-yellow-500 hover:text-blue-800 font-helvetica-light uppercase">Merek</Link>
          <span className="mx-2">/</span>
          <Link href={`/produk/${brand}`} className="hover:underline text-yellow-500 hover:text-blue-800 font-helvetica-light uppercase">{brandName}</Link>
          <span className="mx-2">/</span>
          <Link href={`/produk/${brand}/${currentCategoryData?.id}`} className="hover:underline text-yellow-500 hover:text-blue-800 font-helvetica-light uppercase">{currentCategoryData?.name}</Link>
          <span className="mx-2">/</span>
          <span className="font-helvetica-light uppercase text-gray-700">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Kolom Kiri: Gambar - Menggunakan komponen baru */}
          <div className="w-full">
            {product.galleryImages && product.galleryImages.length > 1 ? (
              <ProductImageSlider images={product.galleryImages} productName={product.name} />
            ) : (
              <CursorZoomImage
                src={product.galleryImages?.[0] || product.image}
                alt={product.name}
                priority
              />
            )}
          </div>

          {/* Kolom Kanan: Info Produk (Tidak ada perubahan di sini) */}
          <div className="flex flex-col">
            <h1 className="text-3xl lg:text-4xl font-helvetica-black text-gray-900 uppercase">{product.name}</h1>

            {/* Keunggulan Produk */}
            {product.features && (
              <div className="mt-6">
                <h2 className="text-lg font-helvetica-regular text-gray-500 mb-3">KEUNGGULAN PRODUK :</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 uppercase font-helvetica-light">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Variasi Produk */}
            {product.variations && product.variations.length > 0 && (
              <div className="mt-6">
                <h2 className="text-lg font-helvetica-regular text-gray-500 uppercase mb-3">Variasi Lainnya</h2>

                <div className="flex flex-wrap gap-4 mt-3">
                  {product.variations.map((variant) => (
                    <div key={variant.id} className="flex flex-col items-center text-center">
                      <Link
                        href={`/produk/${brand}/${category}/${variant.id}`}
                        className="block border-2 rounded-lg p-2 hover:border-yellow-500 transition-colors"
                      >
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image src={variant.image} alt={variant.name} fill className="object-contain" />
                        </div>
                      </Link>
                      <p className="mt-2 text-sm font-helvetica-regular uppercase text-gray-800 max-w-[90px] text-left">{variant.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tabel Spesifikasi */}
            {product.packagingDetails && (
              <div className="mt-6">
                <h2 className="text-base font-helvetica-regular text-gray-500 uppercase mb-3">Rincian Produk</h2>

                {(() => {
                  const hasSize = product.packagingDetails.some(detail => detail.size);
                  const hasType = product.packagingDetails.some(detail => detail.type);
                  return (
                    <table className="w-full text-left text-sm">
                      <thead className="bg-yellow-300 rounded-lg">
                        <tr>
                          {hasSize && <th className="p-2 rounded-l-lg font-helvetica-black uppercase">Size</th>}
                          {hasType && <th className="p-2 font-helvetica-black uppercase">Type</th>}
                          <th className="p-2 font-helvetica-black uppercase">Inner Box</th>
                          <th className="p-2 rounded-r-lg font-helvetica-black uppercase">Outer Box</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.packagingDetails.map(detail => (
                          <tr key={`${detail.size || ''}-${detail.type || ''}`} className="border-b">
                            {hasSize && <td className="p-2 font-helvetica-regular">{detail.size || '-'}</td>}
                            {hasType && <td className="p-2 font-helvetica-regular">{detail.type || '-'}</td>}
                            <td className="p-2 font-helvetica-regular">{detail.innerBox}</td>
                            <td className="p-2 font-helvetica-regular">{detail.outerBox}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  );
                })()}

              </div>
            )}

            {/* Tombol WhatsApp */}
            <div className="mt-auto pt-6">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full bg-blue-500 text-white font-helvetica-regular py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors uppercase"
              >
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}