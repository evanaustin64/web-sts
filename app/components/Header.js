// app/components/Header.js
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DesktopDropdown from './DesktopDropdown';

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-none'}`}>
      <div className="container mx-auto flex justify-between items-center h-24 px-4">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/logo-sts.png"
              alt="Logo PT. Samudra Teknik Sejahtera"
              width={60}
              height={60}
            />
            <span className="font-bold text-gray-800 text-xl whitespace-nowrap">
              PT. SAMUDRA TEKNIK SEJAHTERA
            </span>
          </Link>
        </div>

        {/* Navigasi Desktop - disembunyikan di layar kecil */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-10">
            <li
              className="relative h-full flex items-center"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a href="/produk" className="flex items-center gap-2 text-sm font-bold uppercase text-gray-800 hover:text-yellow-500" onClick={(e) => e.preventDefault()}>
                Produk <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
              {isDropdownOpen && <DesktopDropdown />}
            </li>
            <li><Link href="/tentang-kami" className="text-sm font-bold uppercase text-gray-800 hover:text-yellow-500">Tentang Kami</Link></li>
            <li><Link href="#" className="text-sm font-bold uppercase text-gray-800 hover:text-yellow-500">Komunitas</Link></li>
            <li><Link href="#" className="text-sm font-bold uppercase text-gray-800 hover:text-yellow-500">Hubungi Kami</Link></li>
          </ul>
        </nav>

        {/* Actions Kanan */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block relative">
            <input type="text" placeholder="Search" className="border border-gray-300 rounded-md py-1.5 px-3 w-48 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <svg className="w-4 h-4 absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <button className="lg:hidden text-gray-800" onClick={() => setMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-4 6h4"></path></svg>
          </button>
        </div>
      </div>

      {/* ... (Navigasi Mobile bisa dibuat di sini dengan style Tailwind) ... */}
    </header>
  );
}