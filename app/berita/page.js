// app/berita/page.js
'use client';
import React, { useState, useMemo } from 'react';
import Image from 'next/image';

// Data dummy (Tidak Berubah)
const newsData = [
  {
    id: 1,
    title: "OWNER Meluncurkan Identitas Baru yang Lebih Modern: Menggali Filosofi 'Craft, Create, and, Conquer with OWNER'",
    date: "10 November 2025",
    category: "Konsep LOGO",
    image: "/Images/gallery/berita1.jpg",
    content: [
      {
        heading: "Ide Sentral dan Komitmen Merek",
        points: [
          "OWNER secara resmi meluncurkan konsep identitas merek dengan ide sentral: Craft, Create, and, Conquer with OWNER.",
          "Tujuan: Menegaskan komitmen OWNER untuk tampil jauh lebih Berbeda dan Lebih Baru di pasar.",
          "Gaya Merek: Mengedepankan atribut Elegan, Tegas, dan Kreatif.",
          "Ajak Konsumen: OWNER mengajak konsumen untuk Berkarya (Craft), Mencipta (Create), dan Menaklukkan (Conquer)."
        ]
      },
      {
        heading: "Filosofi Pemilihan Warna Logo",
        points: [
          "Hitam: Melambangkan sifat Elegan dan Tegas (kesan kuat dan berkualitas premium).",
          "Kuning: Diartikan sebagai Kuning Optimis dan Ramah (semangat positif dan kedekatan dengan konsumen).",
          "Putih: Mewakili sifat Jernih dan Seimbang (menjanjikan produk yang andal dan terpercaya)."
        ]
      }
    ]
  },
  // {
  //   id: 2,
  //   title: "Peluncuran Produk Yo-Zuri Terbaru: Lure Series 'Deep Diver'",
  //   date: "28 September 2024",
  //   category: "Produk Baru",
  //   image: "/Images/news-lure.jpg",
  //   content: [
  //     "Bandung – Kabar gembira untuk komunitas pemancing di seluruh Indonesia! PT. STS, sebagai distributor resmi Yo-Zuri, hari ini resmi meluncurkan seri umpan tiruan terbaru: Yo-Zuri Deep Diver Series.",
  //     "Lure ini dirancang secara khusus dengan teknologi aerodinamis untuk mencapai kedalaman air yang ekstrem dengan cepat. Cocok untuk memancing di perairan dalam dan menargetkan ikan pelagis besar.",
  //     "Tersedia dalam lima pilihan warna neon yang telah teruji efektifitasnya. Segera kunjungi distributor resmi kami untuk mendapatkan seri Deep Diver ini sebelum kehabisan!"
  //   ]
  // },
  // {
  //   id: 3,
  //   title: "Edukasi Keselamatan Kerja di Lingkungan Gudang",
  //   date: "05 September 2024",
  //   category: "Internal",
  //   image: "/Images/news-safety.jpg",
  //   content: [
  //     "Surabaya – Dalam rangka menjaga standar Keselamatan dan Kesehatan Kerja (K3), PT. STS telah menyelesaikan program pelatihan intensif K3L untuk seluruh staf operasional gudang.",
  //     "Pelatihan ini mencakup penanganan material berbahaya, prosedur evakuasi darurat, dan penggunaan alat pelindung diri (APD) terbaru. Kami percaya bahwa lingkungan kerja yang aman adalah kunci untuk produktivitas yang berkelanjutan."
  //   ]
  // },
  // // Tambahkan beberapa dummy data lagi agar pagination terlihat. 
  // // Saya duplikasi dua artikel di bawah untuk simulasi.
  // {
  //   id: 4,
  //   title: "Studi Kasus: Peningkatan Efisiensi Logistik 20%",
  //   date: "10 Agustus 2024",
  //   category: "Pencapaian",
  //   image: "/Images/news-logistics.jpg",
  //   content: [
  //     "PT. STS berhasil memangkas waktu tunggu pengiriman sebesar 20% dalam kuartal terakhir berkat implementasi sistem manajemen gudang (WMS) yang baru. Ini membuktikan komitmen kami pada layanan cepat.",
  //     "Direktur Operasional menyatakan bahwa kunci keberhasilan adalah kolaborasi tim dan investasi teknologi yang tepat sasaran."
  //   ]
  // },
  // {
  //   id: 5,
  //   title: "Yo-Zuri Menambah Varian Warna Untuk Minnow Series",
  //   date: "25 Juli 2024",
  //   category: "Produk Baru",
  //   image: "/Images/news-lure-update.jpg",
  //   content: [
  //     "Sebagai respon atas permintaan pasar, Yo-Zuri telah merilis tiga varian warna eksklusif untuk seri umpan Minnow favorit. Varian baru ini difokuskan untuk kondisi air keruh.",
  //     "Varian baru tersebut kini tersedia di semua jaringan distributor resmi PT. STS."
  //   ]
  // }
];

const ImageModal = ({ src, alt, onClose }) => {
  if (!src) return null; // Jangan tampilkan jika tidak ada sumber gambar

  return (
    // ... (Overlay Modal tetap sama)
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Kontainer Gambar */}
      <div
        className="relative w-11/12 h-5/6 max-w-4xl bg-transparent rounded-lg p-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-2 text-white text-3xl font-bold p-2 z-50 bg-red-600 rounded-lg hover:bg-red-800 transition"
          aria-label="Tutup gambar"
        >
          &times;
        </button>

        {/* Gambar Full: Tambahkan visual debug border */}
        <div className="relative w-full h-full">
          <Image
            // Cek apakah SRC sudah benar-benar berupa string yang valid
            src={src}
            alt={alt || "Gambar Berita Penuh"}
            fill
            priority
            sizes="100vw"
            // Pastikan object-contain digunakan
            className="object-contain"
            // Tambahkan onError untuk debugging di konsol
            onError={(e) => console.error("Gagal memuat gambar di modal:", src, e)}
          />
        </div>
      </div>
    </div>
  );
};

// 🚀 MODIFIKASI: Menambahkan logika untuk menangani dua tipe struktur konten
const FullNewsArticle = ({ news, onImageClick }) => {
  return (
    <article className="bg-white rounded-xl shadow-xl overflow-hidden mb-12 flex flex-col laptop:flex-row border-l-4 border-cyan-500">

      {/* Kolom Kiri: Gambar (1/3 di layar besar) */}
      <div className="relative w-full laptop:w-2/5 h-72 laptop:h-auto flex-shrink-0 p-4 bg-gray-100 flex items-center justify-center">

        {/* onClick sekarang akan berfungsi karena onImageClick didefinisikan sebagai prop */}
        <div
          onClick={() => onImageClick(news.image, news.title)} // Ini yang memanggil prop
          className="absolute inset-0 cursor-pointer group flex items-center justify-center"
        >
          <Image
            src={news.image}
            alt={news.title}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
          {/* Visual Hover: Ikon Zoom */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
          </div>
        </div>

      </div>

      {/* Kolom Kanan: Konten Teks (2/3 di layar besar) */}
      <div className="w-full laptop:w-3/5 p-6 sm:p-8 flex flex-col">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-snug">
          {news.title}
        </h2>

        <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4 border-b pb-4">
          <span className="font-semibold text-cyan-600 uppercase">{news.category}</span>
          <span>|</span>
          <span>Dipublikasikan: {news.date}</span>
        </div>

        <div className="text-gray-700 space-y-4">

          {news.content.map((item, index) => {
            // 1. Deteksi apakah item adalah objek (tipe terstruktur seperti di id=1)
            if (typeof item === 'object' && item !== null && item.heading && item.points) {
              return (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800 pt-2 border-t mt-4 first:mt-0 first:border-t-0">
                    {item.heading}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    {item.points.map((point, pIndex) => (
                      <li key={pIndex} className="leading-relaxed text-sm">{point}</li>
                    ))}
                  </ul>
                </div>
              );
            }

            // 2. Jika item adalah string (tipe paragraf biasa)
            else if (typeof item === 'string') {
              return (
                <p key={index} className="leading-relaxed">
                  {item}
                </p>
              );
            }
            return null; // Fallback jika item tidak terdeteksi
          })}
        </div>

      </div>
    </article>
  );
};

// Komponen Kontrol Pagination (Tidak Berubah)
const PaginationControls = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      {/* Tombol Sebelumnya */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        &larr; Sebelumnya
      </button>

      {/* Tombol Halaman */}
      {pageNumbers.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition 
              ${currentPage === page
              ? 'bg-yellow-500 text-white shadow-lg'
              : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-100'
            }`}
        >
          {page}
        </button>
      ))}

      {/* Tombol Selanjutnya */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Selanjutnya &rarr;
      </button>
    </div>
  );
};


export default function NewsPage() {
  // 1. Tentukan state untuk halaman saat ini
  const [currentPage, setCurrentPage] = useState(1);
  // Tentukan jumlah artikel per halaman
  const ITEMS_PER_PAGE = 3;
  const [modalImage, setModalImage] = useState(null);
  const [modalAlt, setModalAlt] = useState('');

  const handleImageClick = (src, alt) => {
    setModalImage(src);
    setModalAlt(alt);
  };

  // Handler untuk menutup modal
  const handleCloseModal = () => {
    setModalImage(null);
    setModalAlt('');
  };
  // 2. Hitung total halaman
  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);

  // 3. Gunakan useMemo untuk menentukan data yang akan ditampilkan
  const currentNews = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return newsData.slice(startIndex, endIndex);
  }, [currentPage]); // Re-calculate when currentPage changes

  // Handler untuk mengubah halaman
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Opsional: Scroll ke atas halaman saat pindah halaman
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 🚀 MODIFIKASI: Hero Section / Banner dengan Background Image dan Overlay */}
      <div
        className="relative mb-8 overflow-hidden h-40 sm:h-60 laptop:h-80"
      >
        {/* Latar Belakang Gambar menggunakan Next/Image */}
        <div className="absolute inset-0">
          <Image
            src="/Images/banner-berita2.png" // Ganti dengan path gambar Anda
            alt="News background"
            fill
            priority
            sizes="100vw"
            className="object-contain" // Gunakan opacity rendah agar teks tidak sulit dibaca
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pb-16">

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-yellow-500 pl-3">
            Artikel Terbaru (Halaman {currentPage} dari {totalPages})
          </h2>
        </div>

        {/* --- Daftar Berita Lengkap (Menggunakan currentNews) --- */}
        {currentNews.map(news => (
          <FullNewsArticle
            key={news.id}
            news={news}
            onImageClick={handleImageClick} // Prop dikirim ke komponen anak
          />
        ))}

        {/* --- Kontrol Pagination --- */}
        {totalPages > 1 && (
          <PaginationControls
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}

      </div>
      {/* 🚀 INTEGRASI MODAL */}
      {modalImage && (
        <ImageModal
          src={modalImage}
          alt={modalAlt}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}