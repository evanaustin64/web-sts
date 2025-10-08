// app/produk/[brand]/[category]/page.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { catalogueData } from '@/app/data/catalogue-data';
import { use } from 'react';

type CategoryProductsPageParams = {
  params: Promise<{
    brand: string;
    category: string;
  }>;
}

export default function CategoryProductsPage({ params }: CategoryProductsPageParams) {
  const { brand, category } = use(params);

  const brandCategories = catalogueData[brand] || [];
  const currentCategory = brandCategories.find(cat => cat.id === category);
  const allProducts = currentCategory?.products || [];

  const brandName = brand.charAt(0).toUpperCase() + brand.slice(1);
  const categoryName = currentCategory?.name || '';

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-sm text-gray-500 mb-2">
          <Link href="/" className="hover:underline text-yellow-500 hover:text-blue-800 font-helvetica-light uppercase">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/produk" className="hover:underline text-yellow-500 hover:text-blue-800 font-helvetica-light uppercase">Merek</Link>
          <span className="mx-2">/</span>
          <Link href={`/produk/${brand}`} className="hover:underline text-yellow-500 hover:text-blue-800 font-helvetica-light uppercase">{brandName}</Link>
          <span className="mx-2">/</span>
          <span className='font-helvetica-light uppercase'>{categoryName}</span>
        </div>
        <h1 className="text-4xl font-helvetica-black uppercase text-gray-900 mb-10">
          {categoryName}
        </h1>

        <main>
          <div className="mb-4">
            <p className="text-gray-600 font-helvetica-light">
              Showing all {allProducts.length} results
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {allProducts.map((product) => (
              <Link
                key={product.id}
                href={`/produk/${brand}/${category}/${product.id}`}
                className="block bg-white rounded-lg overflow-hidden shadow-lg group relative"
              >
                {/* Gambar Produk */}
                <div className="relative h-48 w-full">
                  <Image src={product.image} alt={product.name} layout="fill" objectFit="contain" />
                </div>

                {/* Kotak Teks Nama Produk yang Muncul dari Bawah */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-600 text-white
                            transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100
                            transition-all duration-300 ease-in-out flex items-center justify-center min-h-[40px]"> {/* min-h untuk konsistensi tinggi */}

                  {/* Teks Nama Produk dengan Efek Hover */}
                  <h3 className="font-helvetica-regular uppercase text-sm text-center
                             transform group-hover:scale-105 group-hover:-translate-y-1
                             transition-all duration-300 ease-out">
                    {product.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}