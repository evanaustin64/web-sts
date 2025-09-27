// app/components/CompareBar.tsx
"use client";

import { useCompare } from '@/app/context/ComparisonContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CompareBar() {
  const { items, removeFromCompare, clearCompare } = useCompare();

  // Jangan tampilkan apa-apa jika tidak ada item yang dipilih
  if (items.length === 0) {
    return null;
  }

  return (
    // Wadah utama bar yang menempel di bawah
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl bg-gray-800 text-white rounded-lg shadow-2xl z-50 p-4 flex items-center justify-between">
      
      <div className="flex items-center gap-4">
        <span className="font-bold hidden sm:block">Compare Items ({items.length}/4)</span>
        {/* Tampilkan gambar item yang dipilih */}
        <div className="flex -space-x-4">
          {items.map(item => (
            <div key={item.id} className="relative h-12 w-12 rounded-full border-2 border-white overflow-hidden">
              <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Tombol Bandingkan, aktif jika item >= 2 */}
        <Link 
          href="/compare" 
          className={`px-6 py-2 font-bold rounded-md transition-all ${items.length >= 2 ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}
        >
          Bandingkan
        </Link>
        {/* Tombol Hapus Semua */}
        <button onClick={clearCompare} className="text-gray-400 hover:text-white">
          Hapus
        </button>
      </div>
    </div>
  );
}