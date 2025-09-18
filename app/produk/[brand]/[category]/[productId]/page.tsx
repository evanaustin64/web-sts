// app/produk/[brand]/[category]/[productId]/page.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { catalogueData, Product } from '@/app/data/catalogue-data';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function ProductDetailPage({ params }: { params: { brand: string; category: string; productId: string; } }) {
  const { brand, category, productId } = params;
  
  const brandCategories = catalogueData[brand] || [];
  let product: Product | undefined;
  let currentCategoryData: any; 

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
    const phoneNumber = "6281289987829"; // GANTI DENGAN NOMOR WA ANDA
    const message = `Halo, saya tertarik dengan produk ini:\nNama Produk: ${product.name}\nMohon informasinya. Terima kasih.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const brandName = brand.charAt(0).toUpperCase() + brand.slice(1);

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:underline text-yellow-500 hover:text-blue-800">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/produk" className="hover:underline text-yellow-500 hover:text-blue-800">Merek</Link>
          <span className="mx-2">/</span>
          <Link href={`/produk/${brand}`} className="hover:underline text-yellow-500 hover:text-blue-800">{brandName}</Link>
          <span className="mx-2">/</span>
          <Link href={`/produk/${brand}/${currentCategoryData?.id}`} className="hover:underline text-yellow-500 hover:text-blue-800">{currentCategoryData?.name}</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-gray-700">{product.name}</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Kolom Kiri: Gambar Utama */}
          <div className="relative aspect-square bg-gray-100 rounded-lg border">
            <Image src={product.image} alt={product.name} layout="fill" objectFit="contain" className="p-8" />
          </div>
          
          {/* Kolom Kanan: Semua Info Produk */}
          <div className="flex flex-col">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 uppercase tracking-wide">{product.name}</h1>
            
            {/* BAGIAN BARU: UNGGULAN (IKON) */}
            {product.features && (
              <div className="mt-6">
                <h2 className="text-lg font-bold text-gray-500 mb-3">KEUNGGULAN PRODUK :</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 uppercase">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* BAGIAN VARIASI */}
            {product.variations && product.variations.length > 0 && (
              <div className="mt-6">
                <h2 className="text-lg font-bold text-gray-500 uppercase tracking-wider mb-3">Variasi Lainnya</h2>
                <div className="flex flex-wrap gap-4">
                  {product.variations.map((variant) => (
                    <Link key={variant.id} href={`/produk/${brand}/${category}/${variant.id}`} className="block border-2 rounded-lg p-2 hover:border-yellow-500 transition-colors">
                      <div className="relative w-20 h-20">
                        <Image src={variant.image} alt={variant.name} layout="fill" objectFit="contain" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* BAGIAN BARU: TABEL SPESIFIKASI */}
            {product.packagingDetails && (
              <div className="mt-6">
                 <h2 className="text-base font-bold text-gray-500 uppercase tracking-wider mb-3">Ukuran & Kemasan</h2>
                 <table className="w-full text-left text-sm">
                    <thead className="bg-yellow-300">
                        <tr>
                            <th className="p-2 rounded-l-lg">SIZE</th>
                            <th className="p-2">INNER BOX</th>
                            <th className="p-2 rounded-r-lg">OUTER BOX</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.packagingDetails.map(detail => (
                            <tr key={detail.size} className="border-b">
                                <td className="p-2">{detail.size}</td>
                                <td className="p-2">{detail.innerBox}</td>
                                <td className="p-2">{detail.outerBox}</td>
                            </tr>
                        ))}
                    </tbody>
                 </table>
              </div>
            )}
            
            {/* Tombol WA dipindah ke paling bawah kolom */}
            <div className="mt-auto pt-6">
              <button onClick={handleWhatsAppInquiry} className="w-full bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-black transition-colors uppercase">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
        
        {/* HAPUS BAGIAN TABS DI BAWAH HALAMAN */}
        {/* <ProductTabs product={product} /> */}
      </div>
    </div>
  );
}