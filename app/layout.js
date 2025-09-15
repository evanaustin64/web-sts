// app/layout.js

import './globals.css'
import { CartProvider } from './context/CartContext';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header'; // <-- 1. IMPORT HEADER
import Footer from './components/Footer'; // <-- 2. IMPORT FOOTER
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: 'PT. Samudra Teknik Sejahtera',
  description: 'Peralatan Teknik Profesional',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <CartProvider>
          <Toaster />
          <Header /> {/* <-- 3. LETAKKAN HEADER DI SINI */}
          <main> {/* Bungkus {children} dengan <main> */}
            {children}
          </main>
          <Footer /> {/* <-- 4. LETAKKAN FOOTER DI SINI */}
        </CartProvider>
      </body>
    </html>
  )
}