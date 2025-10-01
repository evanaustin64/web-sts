// app/produk/[brand]/[category]/[productId]/page.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { catalogueData, Product, Category } from '@/app/data/catalogue-data';
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { use } from 'react';
import Slider from 'react-slick';

interface ArrowProps {
  onClick?: () => void;
}

// Custom Arrow Components dengan Tailwind
function NextArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:bg-yellow-400 hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
    >
      <ChevronRightIcon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
    </button>
  );
}

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:bg-yellow-400 hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
    >
      <ChevronLeftIcon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
    </button>
  );
}

function ProductImageSlider({ images, productName }: { images: string[]; productName: string }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots",
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-6">
        <ul className="flex justify-center gap-3"> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="w-full">
      <style jsx global>{`
        .slick-dots li {
          width: auto;
          height: auto;
          margin: 0;
        }
        .slick-dots li button {
          width: 12px;
          height: 12px;
          padding: 0;
        }
        .slick-dots li button:before {
          content: '';
          width: 12px;
          height: 12px;
          background-color: #D1D5DB;
          border-radius: 50%;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .slick-dots li button:hover:before {
          background-color: #9CA3AF;
          transform: scale(1.2);
        }
        .slick-dots li.slick-active button:before {
          background-color: #FACC15;
          width: 14px;
          border-radius: 6px;
          transform: scale(1);
        }
        .slick-slider {
          position: relative;
        }
      `}</style>
      
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 shadow-sm overflow-hidden">
              <Image 
                src={img} 
                alt={`${productName} image ${index + 1}`} 
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        ))}
      </Slider>
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
    const phoneNumber = "6281289987829";
    const message = `Halo, saya tertarik dengan produk ini:\nNama Produk: ${product.name}\nMohon informasinya. Terima kasih.`;
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
              <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 shadow-sm overflow-hidden">
                <Image 
                  src={product.galleryImages?.[0] || product.image} 
                  alt={product.name} 
                  fill
                  className="object-contain p-8"
                />
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
                <h2 className="text-base font-helvetica-regular text-gray-500 uppercase mb-3">Ukuran & Kemasan</h2>

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