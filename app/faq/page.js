// app/faq/page.js
"use client";

import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Apa itu PT. Samudra Teknik Sejahtera?",
      answer: "PT. Samudra Teknik Sejahtera didirikan di Tangerang pada tanggal 12 november 2015, PT. Samudra Teknik Sejahtera merupakan perusahaan di Indonesia yang bergerak di bidang distributor hardware dan tools yang memberikan jasa kepada pelanggannya baik itu toko-toko material, agen-agen besar dalam skala nasional maupun pelanggan retail."
    },
    {
      question: "Apa saja produk kami?",
      answer: "PT Samudra Teknik Sejahtera menghadirkan beragam produk berkualitas tinggi yang mendukung kebutuhan industri, konstruksi, dan rumah tangga. Kami merupakan distributor resmi dari berbagai merek ternama seperti Yo-Zuri, Owner, Helios, dan Smart Choice yang telah dikenal akan keandalannya di bidang hardware, tools, dan sanitary ware."
    },
    {
      question: "Bagaimana cara memesan produk?",
      answer: "Anda dapat memesan produk melalui toko-toko distributor resmi kami yang tersebar di seluruh Indonesia. Untuk informasi lebih lanjut mengenai lokasi distributor terdekat, silakan hubungi customer service kami."
    },
    {
      question: "Apakah produk yang dijual adalah produk original?",
      answer: "Ya, semua produk yang kami jual adalah 100% original dan bergaransi. Kami adalah distributor resmi yang bekerja sama langsung dengan manufacturer untuk menjamin kualitas dan keaslian produk."
    },
    {
      question: "Apakah ada garansi untuk produk yang dibeli?",
      answer: "Ya, produk-produk kami dilengkapi dengan garansi sesuai dengan kebijakan dari masing-masing manufacturer. Silakan tanyakan detail garansi produk kepada distributor atau customer service kami saat melakukan pembelian."
    },
    {
      question: "Dimana lokasi kantor PT. Samudra Teknik Sejahtera?",
      answer: "Kantor kami berlokasi di Komplek Pergudangan Modern Business Park No.8i, Jl. KH. Hasyim Ashari No.79 A, RT.001/RW.004, Buaran Indah, Kec. Tangerang, Kota Tangerang, Banten 15119."
    },
    {
      question: "Apakah tersedia katalog produk?",
      answer: "Ya, Anda dapat melihat katalog lengkap produk kami di website ini. Untuk katalog dalam bentuk PDF atau informasi produk lebih detail, silakan hubungi customer service kami."
    },
    {
      question: "Jam operasional customer service?",
      answer: "Jadwal layanan customer service kami setiap hari Senin - Sabtu pukul 07:00 - 16:00 WIB. Kami Tutup pada hari Minggu, Hari Besar dan tanggal merah."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
<section className="bg-transparent py-16 px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-helvetica-black text-center mb-4">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="text-center text-lg md:text-xl text-gray-800 font-helvetica-light">
            Temukan jawaban atas pertanyaan umum tentang produk dan layanan kami
          </p>
        </div>  
</section>
      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full bg-white border border-gray-200 rounded-lg p-6 text-left hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-helvetica-black text-gray-800 pr-8">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-blue-600 transform transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {openIndex === index && (
                  <div className="mt-4 text-gray-600 font-helvetica-regular leading-relaxed border-t border-gray-200 pt-4">
                    {faq.answer}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-helvetica-black text-gray-800 mb-4">
            Tidak menemukan jawaban Anda?
          </h2>
          <p className="text-gray-600 font-helvetica-regular mb-6">
            Tim customer service kami siap membantu Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/hubungi-kami"
              className="bg-blue-600 hover:bg-blue-700 text-white font-helvetica-black px-6 py-3 rounded-lg transition-colors"
            >
              Hubungi Kami
            </a>
            {/* <a
              href="tel:02155711055"
              className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 font-helvetica-black px-6 py-3 rounded-lg transition-colors"
            >
              Telepon Sekarang
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}