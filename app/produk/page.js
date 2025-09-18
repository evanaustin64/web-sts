// app/produk/page.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function ProdukUtamaPage() {

  const brands = [
    {
      name: 'OWNER',
      href: '/produk/owner',
      image: '/images/Owner.png',
      bgColor: 'bg-yellow-400'
    },
    {
      name: 'YO-ZURI',
      href: '/produk/yozuri',
      image: '/images/Yozuri.jpg',
      bgColor: 'bg-red-700'
    },
    {
      name: 'HELIOS',
      href: '/produk/helios',
      image: '/images/Helios.png',
      bgColor: 'bg-white'
    }
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="breadcrumbs text-sm text-gray-500 mb-2">
          <Link href="/" className="hover:underline text-yellow-500 hover:text-blue-800">Home</Link>
          <span className="mx-2">/</span>
          <span>Merk</span>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 uppercase mb-10">
          Merk Kami
        </h1>

        {/* GANTI DARI 'FLEX' MENJADI 'GRID' DAN ATUR MENJADI 3 KOLOM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand) => (
            // div pembungkus tambahan sudah tidak diperlukan lagi
            <Link 
              key={brand.name} 
              href={brand.href} 
              className={`block relative h-60 rounded-lg overflow-hidden shadow-lg group ${brand.bgColor} flex items-center justify-center`}
            >
              <Image 
                src={brand.image} 
                alt={`Produk ${brand.name}`}
                layout="fill" 
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}