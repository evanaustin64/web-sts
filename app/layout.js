// app/layout.js
import './globals.css'
import { CartProvider } from './context/CartContext';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import localFont from 'next/font/local'

const helveticaLight = localFont({
  src: './fonts/HelveticaLightExtend.otf',
  variable: '--font-helvetica-light',
  display: 'swap',
})

const helveticaRegular = localFont({
  src: './fonts/HelveticaRegularExtend.otf',
  variable: '--font-helvetica-regular',
  display: 'swap',
})

const helveticaBlack = localFont({
  src: './fonts/HelveticaBlackExtend.otf',
  variable: '--font-helvetica-black',
  display: 'swap',
})

const helveticaBlackOblique = localFont({
  src: './fonts/HelveticaBlackExtendOblique.otf',
  variable: '--font-helvetica-black-oblique',
  display: 'swap',
})

export const metadata = {
  title: 'PT. Samudra Teknik Sejahtera',
  description: 'Peralatan Teknik Profesional',
}

export default function RootLayout({ children }) {
  return (
     <html lang="id" className={`
      ${helveticaLight.variable} 
      ${helveticaRegular.variable} 
      ${helveticaBlack.variable} 
      ${helveticaBlackOblique.variable}
    `}>
      <body className="bg-white text-gray-800 flex flex-col min-h-screen">
        <CartProvider>
          <Toaster />
          <Header />
          
          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}