// app/search/page.tsx
"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { catalogueData } from '@/app/data/catalogue-data';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q'); // Mengambil kata kunci dari URL

  // Menggabungkan semua produk dari semua brand dan kategori menjadi satu array
  const allProducts = Object.entries(catalogueData).flatMap(([brandId, categories]) => 
    categories.flatMap(category => 
      category.products.map(product => ({
        ...product,
        brandId: brandId,
        categoryId: category.id
      }))
    )
  );

  // Memfilter produk berdasarkan kata kunci pencarian
  const filteredProducts = query
    ? allProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 uppercase tracking-wider mb-4">
          Hasil Pencarian
        </h1>
        <p className="text-gray-600 mb-10">
          {query && filteredProducts.length > 0
            ? `Menampilkan ${filteredProducts.length} hasil untuk "${query}"`
            : `Tidak ada hasil untuk "${query}". Coba kata kunci lain.`}
        </p>

        {filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <Link 
                key={product.id} 
                href={`/produk/${product.brandId}/${product.categoryId}/${product.id}`}
                className="block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm group hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image src={product.image} alt={product.name} layout="fill" objectFit="contain" className="p-4"/>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-800 uppercase text-sm">{product.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}