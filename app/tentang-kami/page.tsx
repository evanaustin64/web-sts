// app/tentang-kami/page.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
// Tambahkan ikon-ikon baru yang akan kita gunakan
import {
  BuildingStorefrontIcon,
  ScaleIcon,
  UsersIcon,
  SparklesIcon,
  LightBulbIcon,
  StarIcon,
  FireIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';


// Data Nilai-Nilai Perusahaan
const stsValues = [
  {
    name: 'Berketuhanan Yang Maha Esa',
    description: 'Menjadi pribadi yang selalu bersandar dan bersyukur sesuai kepercayaan dan agama masing-masing.',
    icon: <SparklesIcon className="h-10 w-10 text-yellow-500 mb-4" />
  },
  {
    name: 'Kreatif',
    description: 'Berdaya cipta, inovatif, memiliki ide-ide cemerlang yang bersifat pembaharuan ke arah yang lebih baik.',
    icon: <LightBulbIcon className="h-10 w-10 text-yellow-500 mb-4" />
  },
  {
    name: 'Unggul Melayani',
    description: 'Memberikan pelayanan yang unggul, terbaik, respon tercepat, rapi, teratur, dan lebih dari yang diharapkan kepada pelanggan, sesuai dengan sistem kerja untuk mencapai hasil maksimal',
    icon: <StarIcon className="h-10 w-10 text-yellow-500 mb-4" />
  },
  {
    name: 'Antusias',
    description: 'Bersemangat dalam bekerja dan bertindak saling tolong menolong untuk mencapai tujuan bersama.',
    icon: <FireIcon className="h-10 w-10 text-yellow-500 mb-4" />
  },
  {
    name: 'Loyalitas',
    description: 'Memiliki sikap yang setia, patuh, dan dedikasi yang kuat dalam menumbuhkan dan mencapai tujuan perusahaan.',
    icon: <ShieldCheckIcon className="h-10 w-10 text-yellow-500 mb-4" />
  },
  {
    name: 'Integritas',
    description: 'Jujur dengan mengedepankan etika.',
    icon: <ScaleIcon className="h-10 w-10 text-yellow-500 mb-4" />
  },
  {
    name: 'Tanggung Jawab',
    description: 'Menuntaskan segala tanggung jawab yang diberikan.',
    icon: <ClipboardDocumentCheckIcon className="h-10 w-10 text-yellow-500 mb-4" />
  },
  {
    name: 'Adaptif',
    description: 'Menyesuaikan diri dengan keadaan/tekanan dari internal dan eksternal dengan cara perbaikan yang berkelanjutan.',
    icon: <AdjustmentsHorizontalIcon className="h-10 w-10 text-yellow-500 mb-4" />
  },
  {
    name: 'Solid',
    description: 'Peduli, saling mendukung dan bekerja sama.',
    icon: <UsersIcon className="h-10 w-10 text-yellow-500 mb-4" />
  },
];


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
            <h1 className="text-5xl md:text-7xl font-helvetica-black uppercase">Tentang Kami</h1>
            <p className="mt-4 text-lg md:text-xl font-helvetica-regular">Mengenal Lebih Dekat Dedikasi Kami pada Kualitas</p>
          </div>
        </div>
      </section>

      {/* 2. Sejarah Perusahaan */}
      <section className="w-full bg-blue-500">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-helvetica-black text-white mb-4">Sejarah Kami</h2>
              <p className="text-white leading-relaxed mb-4 font-helvetica-regular">
                PT. SAMUDRA TEKNIK SEJAHTERA, dalam kurun waktu kurang dari 2 (dua) tahun hingga sekarang telah berhasil melahirkan lebih dari 100 (seratus) produk terlaris. Untuk menjaga kepercayaan Customer yang telah terbangun, kami memastikan produk yang kami jual memiliki standar kualitas terjamin sehingga perusahaan kami menjadi distributor terpercaya untuk Customer kamu yang telah tersebar di seluruh Indonesia.
              </p>
              <p className="text-white leading-relaxed font-helvetica-regular">
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
        </div>
      </section>

      {/* 3. Visi & Misi */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="text-center md:text-left">
            <ScaleIcon className="h-12 w-12 text-yellow-500 mx-auto md:mx-0 mb-4" />
            <h3 className="text-2xl font-helvetica-black text-gray-900 mb-2">Visi Kami</h3>
            <p className="text-gray-600 font-helvetica-regular">Menjadi Perusahaan distributor Hardware & Tools berkualitas tinggi pilihan utama andalan masyarakat.</p>
          </div>
          <div className="text-center md:text-left">
            <BuildingStorefrontIcon className="h-12 w-12 text-yellow-500 mx-auto md:mx-0 mb-4" />
            <h3 className="text-2xl font-helvetica-black text-gray-900 mb-2">Misi Kami</h3>
            <p className="text-gray-600 font-helvetica-regular">- Memastikan standar kualitas produk terjamin.</p>
            <p className="text-gray-600 font-helvetica-regular">- Menghasilkan SDM yang memiliki budaya profesional.</p>
            <p className="text-gray-600 font-helvetica-regular">- Memperkenalkan merk ke seluruh masyarakat melalui platform/media yang tersedia.</p>
            <p className="text-gray-600 font-helvetica-regular">- Mempererat dan memperluas relasi dan koneksi bisnis</p>
          </div>
        </div>
      </section>

      {/* 4. Nilai-Nilai Perusahaan (BARU) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-helvetica-black text-gray-900 mb-4">Nilai-Nilai Perusahaan</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12 font-helvetica-regular">
            Sembilan pilar yang menjadi landasan kami dalam bekerja dan melayani, yang terangkum dalam semangat <span className="font-helvetica-black text-yellow-500">"BERKUALITAS"</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {stsValues.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-left hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-start items-center mb-3">
                  {value.icon}
                </div>
                <h3 className="text-xl font-helvetica-black text-gray-900 mb-2">{value.name}</h3>
                <p className="text-gray-600 font-helvetica-regular">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}