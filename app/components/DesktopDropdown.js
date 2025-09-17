// app/components/DesktopDropdown.js
"use client";

import Link from 'next/link';
import styles from './DesktopDropdown.module.css';

export default function DesktopDropdown() {
  const dropdownData = [
    {
      title: 'OWNER',
      href: '/produk/owner',
      subItems: [
        { title: 'Hand & Power Tools | Perkakas Tangan & Listrik', href: '/produk' },
        { title: 'Painting Tools | Perkakas Pengecatan', href: '/produk' },
        { title: 'Layering Tools | Perkakas Pelapis', href: '/produk' },
        { title: 'Door Lock Equipments | Peralatan Kunci Pintu', href: '/produk' },
        { title: 'Sanitary Equipments | Peralatan Sanitasi', href: '/produk' },
        { title: 'Safety Equipments | Peralatan Keselamatan', href: '/produk' },
      ]
    },
    {
      title: 'YO-ZURI',
      href: '/produk/yozuri',
      subItems: [
        { title: 'Power & Plumbing Tools | Peralatan Listrik & Perpipaan', href: '/produk' },
        { title: 'Diamond Wheels | Mata Gerinda', href: '/produk' },
        { title: 'Painting Tools | Peralatan Cat', href: '/produk' },
        { title: 'Drilling Tools | Peralatan Bor', href: '/produk' },
        { title: 'Bricklayering & Plastering Tools | Peralatan Tukang Batu & Plester', href: '/produk' },
        { title: 'Door Lock Equipments | Peralatan Kunci Pintu', href: '/produk' },
        { title: 'Cutting Tools | Peralatan Potong', href: '/produk' },
        { title: 'Measuring & Layout Tools | Peralatan Ukur & Tata Letak', href: '/produk' },
        { title: 'Sanitary Equipments | Peralatan Sanitasi', href: '/produk' },
        { title: 'Safety Equipments | Peralatan Keselamatan', href: '/produk' },
      ]
    },
  ];

  return (
    <ul className={styles.dropdownMenu}>
      {dropdownData.map((item) => (
        <li key={item.title} className={item.subItems ? styles.hasFlyout : ''}>
          <Link href={item.href}>
            <span className={styles.itemText}>{item.title}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

          </Link>

          {item.subItems && (
            <ul className={styles.flyoutMenu}>
              {item.subItems.map((subItem) => (
                <li key={subItem.title}>
                  <Link href={subItem.href}>{subItem.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}