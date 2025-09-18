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
        { title: 'Hand & Power Tools | Perkakas Tangan & Listrik', href: '/produk/owner/hand-power-tools' },
        { title: 'Painting Tools | Perkakas Pengecatan', href: '/produk/owner/painting-tools' },
        { title: 'Layering Tools | Perkakas Pelapis', href: '/produk/owner/layering-tools' },
        { title: 'Door Lock Equipments | Peralatan Kunci Pintu', href: '/produk/owner/door-lock-equipments' },
        { title: 'Sanitary Equipments | Peralatan Sanitasi', href: '/produk/owner/sanitary-equipments' },
        { title: 'Safety Equipments | Peralatan Keselamatan', href: '/produk/owner/safety-equipments' },
      ]
    },
    {
      title: 'YO-ZURI',
      href: '/produk/yozuri',
      subItems: [
        { title: 'Power & Plumbing Tools | Peralatan Listrik & Perpipaan', href: '/produk/yozuri/power-plumbing-tools' },
        { title: 'Diamond Wheels | Mata Gerinda', href: '/produk/yozuri/diamond-wheels' },
        { title: 'Painting Tools | Peralatan Cat', href: '/produk/yozuri/painting-tools' },
        { title: 'Drilling Tools | Peralatan Bor', href: '/produk/yozuri/drilling-tools' },
        { title: 'Bricklayering & Plastering Tools | Peralatan Tukang Batu & Plester', href: '/produk/yozuri/bricklayering-plastering-tools' },
        { title: 'Door Lock Equipments | Peralatan Kunci Pintu', href: '/produk/yozuri/door-lock-equipments' },
        { title: 'Cutting Tools | Peralatan Potong', href: '/produk/yozuri/cutting-tools' },
        { title: 'Measuring & Layout Tools | Peralatan Ukur & Tata Letak', href: '/produk/yozuri/measuring-layout-tools' },
        { title: 'Sanitary Equipments | Peralatan Sanitasi', href: '/produk/yozuri/sanitary-equipments' },
        { title: 'Safety Equipments | Peralatan Keselamatan', href: '/produk/yozuri/safety-equipments' },
      ]
    },
    {
      title: 'HELIOS',
      href: '/produk/yozuri',
      subItems: [
        { title: 'Power & Plumbing Tools | Peralatan Listrik & Perpipaan', href: '/produk' },
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