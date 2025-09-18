// app/tentang-kami/page.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { BuildingStorefrontIcon, ScaleIcon, UsersIcon } from '@heroicons/react/24/outline';

// Data Tim (Anda bisa menambah atau mengubahnya)
const teamMembers = [
  {
    name: 'Pak Hasan',
    role: 'Founder & CEO',
    imageUrl: '/images/logo-sts.png', // Ganti dengan path foto tim Anda
    bio: 'Dengan pengalaman lebih dari 20 tahun di industri perkakas, Pak Hasan memimpin perusahaan dengan visi untuk menyediakan kualitas terbaik.'
  },
  {
    name: 'Jane Doe',
    role: 'Head of Sales',
    imageUrl: '/images/logo-sts.png',
    bio: 'Jane memastikan setiap pelanggan mendapatkan solusi terbaik dan pelayanan yang memuaskan.'
  },
  {
    name: 'John Smith',
    role: 'Operations Manager',
    imageUrl: '/images/logo-sts.png',
    bio: 'John bertanggung jawab atas efisiensi operasional, mulai dari gudang hingga pengiriman.'
  },
];

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-80 bg-gray-900">
        <Image
          src="/images/banner-tentang-kami.jpg" // Ganti dengan foto banner Anda
          alt="Tim PT. Samudra Teknik Sejahtera"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-black uppercase">Tentang Kami</h1>
            <p className="mt-4 text-lg md:text-xl">Mengenal Lebih Dekat Dedikasi Kami pada Kualitas</p>
          </div>
        </div>
      </section>

      {/* 2. Sejarah Perusahaan */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Sejarah Kami</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Berawal dari sebuah toko kecil di tahun 2010, PT. Samudra Teknik Sejahtera didirikan atas dasar komitmen untuk menyediakan peralatan teknik yang andal dan tahan lama bagi para profesional di seluruh Indonesia.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Selama lebih dari satu dekade, kami terus berinovasi dan memperluas jangkauan produk kami, bekerja sama dengan merek-merek terbaik seperti OWNER dan YO-ZURI untuk memastikan setiap pelanggan mendapatkan perkakas dengan standar kualitas tertinggi.
            </p>
          </div>
          <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-xl">
             <Image
                src="/images/sejarah-perusahaan.jpg" // Ganti dengan foto sejarah Anda
                alt="Toko pertama PT. STS"
                layout="fill"
                objectFit="cover"
              />
          </div>
        </div>
      </section>

      {/* 3. Visi & Misi */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="text-center md:text-left">
            <ScaleIcon className="h-12 w-12 text-yellow-500 mx-auto md:mx-0 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Visi Kami</h3>
            <p className="text-gray-600">Menjadi distributor peralatan teknik terdepan dan paling tepercaya di Indonesia, yang dikenal karena kualitas produk dan pelayanan pelanggan yang unggul.</p>
          </div>
          <div className="text-center md:text-left">
             <BuildingStorefrontIcon className="h-12 w-12 text-yellow-500 mx-auto md:mx-0 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Misi Kami</h3>
            <p className="text-gray-600">Menyediakan akses mudah terhadap produk perkakas berkualitas tinggi, memberikan solusi inovatif, dan membangun hubungan jangka panjang dengan pelanggan.</p>
          </div>
        </div>
      </section>
      
      {/* 4. Tim Kami */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Tim Profesional Kami</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">Kami didukung oleh tim yang bersemangat dan berdedikasi untuk memberikan yang terbaik.</p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((person) => (
                <div key={person.name} className="text-center">
                    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
                        <Image
                            src={person.imageUrl}
                            alt={person.name}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h4 className="mt-6 text-xl font-bold text-gray-900">{person.name}</h4>
                    <p className="text-yellow-600 font-semibold">{person.role}</p>
                    <p className="mt-2 text-gray-500">{person.bio}</p>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}