"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { catalogueData } from '@/app/data/catalogue-data';

type BrandPageParams = {
  params: { brand: string; }
}

export default function BrandPage({ params }: BrandPageParams) {
  const { brand } = params;
  const categories = catalogueData[brand] || [];
  const brandName = brand.charAt(0).toUpperCase() + brand.slice(1);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-sm text-gray-500 mb-2">
          <Link href="/" className="hover:underline text-yellow-500 hover:text-blue-800">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/produk" className="hover:underline text-yellow-500 hover:text-blue-800">Merk</Link>
          <span className="mx-2">/</span>
          <span>{brandName}</span>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 uppercase tracking-wider mb-10">
          Kategori {brandName}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/produk/${brand}/${cat.id}`} className="block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm group hover:shadow-lg transition-shadow h-full">
              <div className="relative h-48 w-full">
                <Image src={cat.image} alt={cat.name} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 uppercase">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}