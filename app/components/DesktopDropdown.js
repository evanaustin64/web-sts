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
        { title: 'Perkakas Tangan & Listrik', href: '/produk/owner/hand-power-tools' },
        { title: 'Peralatan Cat', href: '/produk/owner/painting-tools' },
        { title: 'Peralatan plester & Pelapis', href: '/produk/owner/layering-tools' },
        { title: 'Peralatan Kunci Pintu', href: '/produk/owner/door-lock-equipments' },
        { title: 'Peralatan Sanitasi', href: '/produk/owner/sanitary-equipments' },
        { title: 'Peralatan Keselamatan', href: '/produk/owner/safety-equipments' },
      ]
    },
    {
      title: 'YO-ZURI',
      href: '/produk/yozuri',
      subItems: [
        { title: 'Peralatan Listrik & Perpipaan', href: '/produk/yozuri/power-plumbing-tools' },
        { title: 'Mata Gerinda', href: '/produk/yozuri/diamond-wheels' },
        { title: 'Peralatan Cat', href: '/produk/yozuri/painting-tools' },
        { title: 'Peralatan Bor', href: '/produk/yozuri/drilling-tools' },
        { title: 'Peralatan Tukang Batu & Plester', href: '/produk/yozuri/bricklayering-plastering-tools' },
        { title: 'Peralatan Kunci Pintu', href: '/produk/yozuri/door-lock-equipments' },
        { title: 'Peralatan Potong', href: '/produk/yozuri/cutting-tools' },
        { title: 'Peralatan Ukur & Tata Letak', href: '/produk/yozuri/measuring-layout-tools' },
        { title: 'Peralatan Sanitasi', href: '/produk/yozuri/sanitary-equipments' },
        { title: 'Peralatan Keselamatan', href: '/produk/yozuri/safety-equipments' },
      ]
    },
    {
      title: 'PRODUK LAINNYA',
      href: '/produk/lainnya',
    }
  ];

  return (
    <ul className={styles.dropdownMenu}>
      {dropdownData.map((item) => (
        <li key={item.title} className={item.subItems ? styles.hasFlyout : ''}>
          <Link href={item.href}>
            <span className={styles.itemText}>{item.title}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
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