// app/layout.js

import './globals.css'
import { CartProvider } from './context/CartContext'; // Jika masih dipakai
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer'; // Pastikan Anda membuat komponen Footer dengan Tailwind
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: 'PT. Samudra Teknik Sejahtera',
  description: 'Peralatan Teknik Profesional',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      {/* Tambahkan class Tailwind ke body untuk style dasar dan layout full-height */}
      <body className="bg-white text-gray-800 flex flex-col min-h-screen">
        <CartProvider>
          <Toaster />
          <Header />
          
          {/* Tambahkan class flex-grow agar main content mengisi ruang kosong */}
          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}