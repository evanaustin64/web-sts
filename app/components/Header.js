// app/components/Header.js
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DesktopDropdown from './DesktopDropdown';
import { useRouter } from 'next/navigation';
import { catalogueData } from '@/app/data/catalogue-data';

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // --- State & Logika untuk Live Search ---
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const allProductsWithContext = Object.entries(catalogueData).flatMap(([brandId, categories]) => 
    categories.flatMap(category => 
      category.products.map(product => ({
        ...product,
        brandId: brandId,
        categoryId: category.id
      }))
    )
  );

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.length > 1) {
      const filteredSuggestions = allProductsWithContext.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setSuggestions([]);
    }
  };
  // --- Akhir State & Logika Live Search ---

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

        {/* Navigasi Desktop - Tidak Diubah */}
        <nav className="hidden md:flex h-full">
          <ul className="flex items-center gap-10 h-full">
            <li
              className="relative h-full flex items-center group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a href="/produk" className="flex items-center gap-1 text-sm font-bold uppercase text-gray-800" onClick={(e) => e.preventDefault()}>
                Produk 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
              {isDropdownOpen && <DesktopDropdown />}
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </li>
            <li className="relative h-full flex items-center group">
              <Link href="/tentang-kami" className="text-sm font-bold uppercase text-gray-800">Tentang Kami</Link>
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </li>
            <li className="relative h-full flex items-center group">
              <Link href="#" className="text-sm font-bold uppercase text-gray-800">Komunitas</Link>
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </li>
            <li className="relative h-full flex items-center group">
              <Link href="#" className="text-sm font-bold uppercase text-gray-800">Hubungi Kami</Link>
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </li>
          </ul>
        </nav>

        {/* Actions Kanan - dengan Live Search */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <form onSubmit={handleSearchSubmit}>
              <input 
                type="text" 
                placeholder="Search" 
                value={searchTerm}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md py-1.5 px-3 w-48 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button type="submit" className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
            </form>

            {/* Hasil Live Search */}
            {suggestions.length > 0 && (
              <ul className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                {suggestions.map((product) => (
                  <li key={product.id}>
                    <Link 
                      href={`/produk/${product.brandId}/${product.categoryId}/${product.id}`}
                      className="flex items-center gap-4 p-3 hover:bg-gray-100"
                      onClick={() => { setSearchTerm(''); setSuggestions([]); }}
                    >
                      <Image src={product.image} alt={product.name} width={40} height={40} className="object-contain flex-shrink-0" />
                      <span className="text-sm text-gray-800">{product.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
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