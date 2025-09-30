// app/tentang-kami/page.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { BuildingStorefrontIcon, ScaleIcon, UsersIcon } from '@heroicons/react/24/outline';

// Data Tim (Anda bisa menambah atau mengubahnya

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-80 bg-gray-900">
        <Image
          src="/Images/banner-tentang-kami.jpg" // Ganti dengan foto banner Anda
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
      <section className="container mx-auto px-4 py-16 bg-yellow-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Sejarah Kami</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              PT. SAMUDRA TEKNIK SEJAHTERA, dalam kurun waktu kurang dari 2 (dua) tahun hingga sekarang telah berhasil melahirkan lebih dari 100 (seratus) produk terlaris. Untuk menjaga kepercayaan Customer yang telah terbangun, kami memastikan produk yang kami jual memiliki standar kualitas terjamin sehingga perusahaan kami menjadi distributor terpercaya untuk Customer kamu yang telah tersebar di seluruh Indonesia.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Memiliki lebih dari 20 tahun pengalaman, PT. SAMUDRA TEKNIK SEJAHTERA yang berlokasi di Tangerang, Indonesia, adalah perusahaan yang bergerak di bidang distribusi alat-alat Pertukangan, Perkakas dan Sanitary yang mengutamakan kualitas yang berawal dari 2 (dua) merk unggulannya OWNER & YO-ZURI.
            </p>
          </div>
          <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-xl">
             <Image
                src="/Images/download.jpg" // Ganti dengan foto sejarah Anda
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
            <p className="text-gray-600">Menjadi Perusahaan distributor Hardware & Tools berkualitas tinggi pilihan utama andalan masyarakat.</p>
          </div>
          <div className="text-center md:text-left">
             <BuildingStorefrontIcon className="h-12 w-12 text-yellow-500 mx-auto md:mx-0 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Misi Kami</h3>
            <p className="text-gray-600">- Memastikan standar kualitas produk terjamin.</p>
            <p className="text-gray-600">- Menghasilkan SDM yang memiliki budaya profesional.</p>
            <p className="text-gray-600">- Memperkenalkan merk ke seluruh masyarakat melalui platform/media yang tersedia.</p>
            <p className="text-gray-600">- Mempererat dan memperluas relasi dan koneksi bisnis</p>
          </div>
        </div>
      </section>
    </div>
  );
}