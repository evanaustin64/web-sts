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
    image: "/Images/gallery/Berita2-03.png",
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
  {
  id: 2,
  title: "PT STS Raih 2nd Winner ONDA 2021 dan Apresiasi ONDA",
  date: "18 November 2025",
  category: "Pencapaian",
  image: "/Images/award/award-onda1.png",
  content: [
    "Jakarta – PT Samudra Teknik Sejahtera (PT STS) berhasil meraih predikat 2nd Winner dalam ajang ONDA 2021 yang diselenggarakan oleh ONDA, melalui kinerja cemerlang Grup Merak.",
    {
      heading: "Pengakuan Kinerja Distribusi",
      points: [
        "Prestasi ini menegaskan posisi PT STS sebagai distributor terkemuka yang konsisten dan memiliki performa distribusi luar biasa sepanjang tahun 2021.",
        "Hal ini menjadi bukti komitmen PT STS dalam mencapai target dan mendukung kemitraan strategis."
      ]
    },
    {
      heading: "Apresiasi Individu",
      points: [
        "Bapak Tjendra Simin dari PT STS juga menerima piagam Terima Kasih dari ONDA, yang diserahkan oleh Bapak Heri Sonianto Sudji (Direktur PT Central Cipta Selaras).",
        "Penghargaan ini memotivasi seluruh tim untuk terus meningkatkan kualitas pelayanan dan kemitraan di sektor sanitari dan perkakas."
      ]
    }
  ]
},
{
  id: 3, // Sesuaikan dengan ID berikutnya yang tersedia
  title: "Momen Kebersamaan: PT STS Buka Bersama Ramadhan 2025",
  date: "18 November 2025", // Tanggal perkiraan Bukber
  category: "Internal",
  image: "/Images/gallery/PT STS - BukBer Ramadhan 2025 A.png", // Sesuaikan path gambar Anda
  content: [
    "Jakarta – Dalam rangka mempererat tali silaturahmi dan kebersamaan, PT Samudra Teknik Sejahtera (PT STS) sukses menggelar acara Buka Bersama (Bukber) Ramadhan 1446 H/2025.",
    {
      heading: "Semangat Kekeluargaan Tim",
      points: [
        "Acara ini dihadiri oleh seluruh karyawan dari berbagai divisi, menciptakan suasana hangat dan kekeluargaan di luar jam kerja formal.",
        "Bukber Ramadhan menjadi tradisi tahunan PT STS untuk memperkuat sinergi tim dan menjalin komunikasi yang lebih akrab, yang diharapkan berdampak positif pada semangat kerja dan kolaborasi di masa mendatang.",
        "Manajemen mengucapkan terima kasih atas kontribusi seluruh tim dan berharap semangat Ramadhan dapat membawa berkah bagi perusahaan dan karyawan."
      ]
    }
  ]
},
  // // Tambahkan beberapa dummy data lagi agar pagination terlihat. 
  // // Saya duplikasi dua artikel di bawah untuk simulasi.
  {
    id: 4,
    title: "COMING SOON",
    date: "-",
    category: "-",
    image: "/Images/COMING SOON-01.png",
    content: [
      "COMING SOON"
    ]
  },
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
    <article className="bg-white rounded-xl shadow-xl overflow-hidden mb-12 flex flex-col border-l-4 border-cyan-500">
      
      {/* 1. Kolom Atas: Gambar - HAPUS PADDING p-4 */}
      {/* Gambar sekarang menyentuh tepi container article, membuatnya tampak lebih terpisah dari teks di bawahnya */}
      <div className="relative w-full h-72 flex-shrink-0 flex items-center justify-center"> 

        <div
          onClick={() => onImageClick(news.image, news.title)} 
          className="absolute inset-0 cursor-pointer group flex items-center justify-center"
        >
          <Image
            src={news.image}
            alt={news.title}
            fill
            sizes="100vw" 
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" 
          />
          {/* Visual Hover: Ikon Zoom */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
          </div>
        </div>

      </div>

{/* 2. Kolom Bawah: Konten Teks - Container ini tetap memiliki shadow/border */}
      <div className="w-full p-4 sm:p-6 flex flex-col bg-white rounded-b-xl shadow-xl border-l-4 border-cyan-500 z-20">
        
        {/* 🚀 PERUBAHAN UTAMA: Tambahkan wrapper MAX-WIDTH di sini */}
        <div className="max-w-4xl mx-auto w-full"> 
            <h2 className="text-2xl sm:text-3xl font-helvetica-black text-gray-900 mb-2 leading-snug">
                {news.title}
            </h2>

            <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4 border-b pb-4">
                <span className="font-helvetica-regular text-cyan-600 uppercase">{news.category}</span>
                <span>|</span>
                <span className="font-helvetica-regular">Dipublikasikan: {news.date}</span>
            </div>

            <div className="text-gray-700 space-y-4">

                {news.content.map((item, index) => {
                    // 1. Deteksi apakah item adalah objek (tipe terstruktur seperti di id=1)
                    if (typeof item === 'object' && item !== null && item.heading && item.points) {
                        return (
                            <div key={index} className="space-y-2">
                                <h3 className="text-lg font-helvetica-black text-gray-800 pt-2 border-t mt-4 first:mt-0 first:border-t-0">
                                    {item.heading}
                                </h3>
                                <ul className="list-disc list-inside space-y-1 ml-4 font-helvetica-regular">
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
                    return null; 
                })}
            </div>
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
          <h2 className="text-3xl font-helvetica-regular text-gray-800 mb-8 border-l-4 border-yellow-500 pl-3">
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