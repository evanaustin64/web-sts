// app/components/FeaturedNews.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedNews({ news }) {
  if (!news) return null;

  return (
    <Link href={`/berita/${news.slug}`} className="block group">
      <div className="flex flex-col laptop:flex-row bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
        <div className="relative w-full laptop:w-2/3 h-64 sm:h-80 laptop:h-96">
          <Image
            src={news.image}
            alt={news.title}
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="w-full laptop:w-1/3 p-6 sm:p-8 flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase text-yellow-500 mb-2">
            Berita Utama
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300 mb-4 line-clamp-3">
            {news.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {news.snippet}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{news.date}</span>
            <span className="flex items-center text-cyan-600 font-semibold">
              Baca Selengkapnya
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}