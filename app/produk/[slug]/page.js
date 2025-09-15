// app/produk/[slug]/page.js
"use client";

import { useState, use } from 'react';
import { products } from '@/app/data/products';
// Hapus import yang berhubungan dengan cart dan toast

function ProductTabs({ product }) {
    // ... (Komponen ProductTabs tidak perlu diubah) ...
}

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const product = products.find((p) => p.slug === slug);

  if (!product) return <p>Produk tidak ditemukan!</p>;
  
  // --- FUNGSI BARU UNTUK WHATSAPP ---
  const handleWhatsAppInquiry = () => {
    const phoneNumber = "6281234567890"; // GANTI DENGAN NOMOR WA ANDA
    const message = `Halo, saya tertarik dengan produk ini:
Nama Produk: ${product.name}
SKU: ${product.sku}

Mohon informasinya. Terima kasih.`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };
  // --- AKHIR FUNGSI BARU ---

  return (
    <div className="container">
      <div className="pdp-layout">
        <div className="pdp-image-gallery">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="pdp-info">
          <h1>{product.name}</h1>
          <p className="sku">SKU: {product.sku}</p>
          
          {/* Hapus bagian harga dan kuantitas */}

          <p className="pdp-inquiry-text">
            Untuk informasi ketersediaan, booking, atau pemesanan, silakan hubungi tim sales kami.
          </p>
          <button className="btn whatsapp-btn" onClick={handleWhatsAppInquiry}>
            <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="whatsapp-logo"/> Hubungi via WhatsApp
          </button>
        </div>
      </div>
      <ProductTabs product={product} />
    </div>
  );
}