// app/produk/[brand]/[category]/page.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { catalogueData } from '@/app/data/catalogue-data';

type CategoryProductsPageParams = {
  params: {
    brand: string;
    category: string;
  }
}

export default function CategoryProductsPage({ params }: CategoryProductsPageParams) {
  const { brand, category } = params;

  const brandCategories = catalogueData[brand] || [];
  const currentCategory = brandCategories.find(cat => cat.id === category);
  const allProducts = currentCategory?.products || [];

  const brandName = brand.charAt(0).toUpperCase() + brand.slice(1);
  const categoryName = currentCategory?.name || '';

  return (
     <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-sm text-gray-500 mb-2">
          <Link href="/" className="hover:underline text-yellow-500 hover:text-blue-800">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/produk" className="hover:underline text-yellow-500 hover:text-blue-800">Merek</Link>
          <span className="mx-2">/</span>
          <Link href={`/produk/${brand}`} className="hover:underline text-yellow-500 hover:text-blue-800">{brandName}</Link>
          <span className="mx-2">/</span>
          <span>{categoryName}</span>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 uppercase tracking-wider mb-10">
          {categoryName}
        </h1>

        <main>
          <div className="mb-4">
            <p className="text-gray-600">
              Showing all {allProducts.length} results
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {allProducts.map((product) => (
              // --- UBAH 'div' MENJADI 'Link' DI SINI ---
              <Link
                key={product.id}
                href={`/produk/${brand}/${category}/${product.id}`}
                className="block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm group hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 w-full ">
                  <Image src={product.image} alt={product.name} layout="fill" objectFit="contain" />
                </div>
                <div className="p-4 text-center ">
                  <h3 className="font-bold text-gray-800 uppercase text-xm">{product.name}</h3>
                  {/* SKU bisa ditambahkan kembali di sini jika Anda mau */}
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}