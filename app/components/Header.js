// app/components/Header.js
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DesktopDropdown from './DesktopDropdown';
import { useRouter, usePathname } from 'next/navigation';
import { catalogueData } from '@/app/data/catalogue-data';

export default function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();
  const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);

  useEffect(() => {
    if (pathname?.startsWith('/maintenance')) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const isMaintenanceModeActive = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';
  if (isMaintenanceModeActive || pathname?.startsWith('/maintenance')) {
    return null;
  }

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
      setMobileSearchOpen(false);
    }
  };

  const handleAccordionToggle = (menuId) => {
    setOpenAccordion(openAccordion === menuId ? null : menuId);
  };

  const menuData = [
    { id: 'owner', title: ' Owner', href: '/produk/owner' },
    { id: 'yozuri', title: 'Yo-Zuri', href: '/produk/yozuri' },
    { id: 'lainnya', title: 'Produk Lainnya', href: '/produk/lainnya' }
  ];

  return (
    <>
      <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-none'}`}>
        <div className="w-full flex justify-between items-center h-24 px-4 sm:px-6 md:px-8">
          <div>
            <Link href="/" className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/Images/logo-sts.png"
                alt="Logo PT. Samudra Teknik Sejahtera"
                width={60}
                height={60}
                className="h-14 w-14 flex-shrink-0"
              />
              <div className="min-w-0">
                <span className="block sm:hidden font-helvetica-black text-cyan-500 text-xs">
                  PT. SAMUDRA<br />TEKNIK SEJAHTERA
                </span>
                <span className="hidden sm:block font-helvetica-black text-cyan-500 text-xl">
                  PT. SAMUDRA TEKNIK SEJAHTERA
                </span>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <nav className="hidden laptop:flex h-full">
              <ul className="flex items-center gap-5 h-full">
                <li
                  className="relative h-full flex items-center group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center font-helvetica-regular uppercase text-gray-800 hover:text-blue-400 transition-colors duration-300 text-sm" onClick={(e) => e.preventDefault()}>
                    Produk
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {isDropdownOpen && <DesktopDropdown />}
                </li>
                <li className="relative h-full flex items-center group">
                  <Link href="/catalogue" className="font-helvetica-regular uppercase text-gray-800 hover:text-blue-400 transition-colors duration-300 text-sm">Catalogue</Link>
                </li>
                <li className="relative h-full flex items-center group">
                  <Link href="/gallery" className="font-helvetica-regular uppercase text-gray-800 hover:text-blue-400 transition-colors duration-300 text-sm">Gallery</Link>
                </li>
                <li className="relative h-full flex items-center group">
                  <Link href="/tentang-kami" className="font-helvetica-regular uppercase text-gray-800 hover:text-blue-400 transition-colors duration-300 text-sm">Tentang Kami</Link>
                </li>
                <li className="relative h-full flex items-center group">
                  <Link href="/hubungi-kami" className="font-helvetica-regular uppercase text-gray-800 hover:text-blue-400 transition-colors duration-300 text-sm">Hubungi Kami</Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              <div className="relative hidden laptop:block">
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-md py-1.5 px-3 w-48 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-helvetica-light"
                  />
                  <button type="submit" className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </button>
                </form>
                {suggestions.length > 0 && (
                  <ul className="absolute top-full right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
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
              <button className="laptop:hidden text-gray-800" onClick={() => setMobileSearchOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
              <button className="laptop:hidden text-gray-800" onClick={() => setMenuOpen(!isMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-4 6h4"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMobileSearchOpen && (
        <div className="laptop:hidden fixed inset-0 bg-white z-50 p-4 flex flex-col">
          <div className="flex justify-end mb-4">
            <button onClick={() => setMobileSearchOpen(false)} className="text-3xl font-bold text-gray-600">&times;</button>
          </div>
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Cari Produk..."
              value={searchTerm}
              onChange={handleInputChange}
              autoFocus
              className="w-full border-2 border-gray-300 bg-white h-12 px-5 pr-12 rounded-full text-lg focus:outline-none focus:border-yellow-500"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <svg className="text-gray-600 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </form>
          {suggestions.length > 0 && (
            <ul className="mt-4 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
              {suggestions.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/produk/${product.brandId}/${product.categoryId}/${product.id}`}
                    className="flex items-center gap-4 p-3 hover:bg-gray-100"
                    onClick={() => { setSearchTerm(''); setSuggestions([]); setMobileSearchOpen(false); }}
                  >
                    <Image src={product.image} alt={product.name} width={40} height={40} className="object-contain flex-shrink-0" />
                    <span className="text-sm text-gray-800">{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {isMenuOpen && (
        <div className={`laptop:hidden fixed top-24 left-0 w-full bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full opacity-0'}`}>
          <ul className="flex flex-col">
            <li>
              <button
                onClick={() => handleAccordionToggle('produk')}
                className="w-full flex justify-between items-center px-4 py-4 font-helvetica-regular uppercase text-gray-800 border-b hover:bg-yellow-500"
              >
                Produk
                <svg className={`w-5 h-5 transition-transform ${openAccordion === 'produk' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {openAccordion === 'produk' && (
                <ul className="bg-gray-50">
                  {menuData.map(item => (
                    <li key={item.id}>
                      <Link href={item.href} className="block px-8 py-3 text-sm font-helvetica-regular text-gray-700 border-b hover:bg-yellow-500" onClick={() => setMenuOpen(false)}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><Link href="/catalogue" className="block px-4 py-4 font-helvetica-regular uppercase text-gray-800 border-b hover:bg-yellow-500" onClick={() => setMenuOpen(false)}>Catalogue</Link></li>
            <li><Link href="/gallery" className="block px-4 py-4 font-helvetica-regular uppercase text-gray-800 border-b hover:bg-yellow-500" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
            <li><Link href="/tentang-kami" className="block px-4 py-4 font-helvetica-regular uppercase text-gray-800 border-b hover:bg-yellow-500" onClick={() => setMenuOpen(false)}>Tentang Kami</Link></li>
            <li><Link href="/hubungi-kami" className="block px-4 py-4 font-helvetica-regular uppercase text-gray-800 hover:bg-yellow-500" onClick={() => setMenuOpen(false)}>Hubungi Kami</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}