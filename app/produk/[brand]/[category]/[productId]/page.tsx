"use client";

import Link from 'next/link';
import Image from 'next/image';
import { catalogueData, Product, Category } from '@/app/data/catalogue-data';
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { use, useState } from 'react';

// Custom Image Slider dengan Tailwind CSS
function ProductImageSlider({ images, productName }: { images: string[]; productName: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-full">
      {/* Main Image Container */}
      <div className="relative w-full aspect-square min-h-[300px] md:min-h-[400px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl md:rounded-2xl border border-gray-200 md:border-2 shadow-sm overflow-hidden group">
        {/* Images with Animation */}
        <div className="relative w-full h-full">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0'
                  : index < currentIndex
                  ? direction === 'right'
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                  : direction === 'right'
                  ? 'opacity-0 translate-x-full'
                  : 'opacity-0 -translate-x-full'
              }`}
            >
              <Image 
                src={img} 
                alt={`${productName} image ${index + 1}`} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4 md:p-8"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        {images.length > 1 && (
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:bg-yellow-400 hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-700 hover:text-white transition-colors" />
          </button>
        )}

        {/* Right Arrow */}
        {images.length > 1 && (
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:bg-yellow-400 hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-700 hover:text-white transition-colors" />
          </button>
        )}
      </div>

      {/* Dots Navigation */}
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

          {/* Kolom Kiri: Gambar - Conditional Rendering */}
          <div className="w-full">
            {product.galleryImages && product.galleryImages.length > 1 ? (
              // Tampilkan Slider jika lebih dari 1 gambar
              <ProductImageSlider images={product.galleryImages} productName={product.name} />
            ) : (
              // Tampilkan gambar tunggal jika hanya 1 gambar atau menggunakan image biasa
              <div className="w-full">
                <div className="relative w-full aspect-square min-h-[300px] md:min-h-[400px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl md:rounded-2xl border border-gray-200 md:border-2 shadow-sm overflow-hidden">
                  <Image 
                    src={product.galleryImages?.[0] || product.image} 
                    alt={product.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            )}
          </div>

          {/* Kolom Kanan: Info Produk */}
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