// app/components/Header.js

"use client";

import { useState } from 'react';
import Image from 'next/image'; // Gunakan Image component untuk optimasi

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="container">
        <a href="/" className="logo">
          <Image src="/images/logo-sts.png" alt="Logo PT. Samudra Teknik Sejahtera" width={40} height={40} />
          <span>PT. SAMUDRA TEKNIK SEJAHTERA</span>
        </a>

        <nav className="main-nav">
          <ul>
            {/* INI BAGIAN PENTINGNYA */}
            <li
              className="dropdown-container"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {/* Link utama "Produk" */}
              <a href="/produk" onClick={(e) => e.preventDefault()}>
                Produk &#9662;
              </a>

              {/* Menu dropdown */}
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="/produk/owner">Owner</a>
                  </li>
                  <li>
                    <a href="/produk/yo-zuri">Yo-Zuri</a>
                  </li>
                </ul>
              )}
            </li>
            {/* AKHIR BAGIAN PENTING */}
            
            <li><a href="/solusi-industri">Solusi Industri</a></li>
            <li><a href="/layanan">Layanan & Dukungan</a></li>
            <li><a href="/tentang-kami">Tentang Kami</a></li>
          </ul>
        </nav>

        <div className="search-bar">
          <input type="text" placeholder="Cari produk..." />
          <button>Cari</button>
        </div>
      </div>
    </header>
  );
}

