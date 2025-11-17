// app/components/NewsCard.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsCard({ news }) {
  return (
    <Link href={`/berita/${news.slug}`} className="block group h-full">
      <div className="bg-white h-full rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-full h-48">
          <Image
            src={news.image}
            alt={news.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <p className="text-xs text-gray-500 mb-2">{news.date}</p>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300 mb-3 line-clamp-2">
            {news.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
            {news.snippet}
          </p>
          <span className="text-sm font-semibold text-yellow-600 flex items-center mt-auto">
            Baca Lebih Lanjut
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </span>
        </div>
      </div>
    </Link>
  );
}