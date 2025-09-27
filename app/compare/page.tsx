// app/compare/page.tsx
"use client";

import { useCompare } from '@/app/context/ComparisonContext';
import Image from "next/image";

export default function ComparePage() {
  const { items, clearCompare } = useCompare();

  // Kumpulkan semua kunci spesifikasi unik dari produk yang dipilih
  const allSpecKeys = Array.from(new Set(items.flatMap(item => item.specifications?.map(spec => spec.key) || [])));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 uppercase">Perbandingan Produk</h1>
        {items.length > 0 && (
          <button onClick={clearCompare} className="text-sm text-red-600 hover:underline">
            Hapus Semua
          </button>
        )}
      </div>

      {items.length < 2 ? (
        <p>Pilih minimal 2 produk untuk dibandingkan.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-4 w-1/5">Fitur</th>
                {items.map(item => (
                  <th key={item.id} className="border p-4">
                    <div className="relative h-40 w-full mb-2">
                      <Image src={item.image} alt={item.name} layout="fill" objectFit="contain" />
                    </div>
                    <p className="font-bold">{item.name}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Baris untuk Deskripsi */}
              <tr className="bg-white">
                <td className="border p-4 font-bold">Deskripsi</td>
                {items.map(item => (
                  <td key={item.id} className="border p-4 text-sm">{item.description}</td>
                ))}
              </tr>
              {/* Baris untuk setiap Spesifikasi */}
              {allSpecKeys.map(key => (
                <tr key={key} className="bg-white">
                  <td className="border p-4 font-bold">{key}</td>
                  {items.map(item => {
                    const spec = item.specifications?.find(s => s.key === key);
                    return <td key={item.id} className="border p-4">{spec ? spec.value : '-'}</td>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}