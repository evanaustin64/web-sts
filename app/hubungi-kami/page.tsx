// app/hubungi-kami/page.tsx
"use client";

import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactUsPage() {
  return (
    <div className="bg-yellow-50 min-h-screen">
      {/* Bagian Judul */}
      <div className="bg-gradient-to-r from-yellow-300 to-orange-300 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black uppercase tracking-wider">Hubungi Kami</h1>
          <p className="mt-4 max-w-2xl mx-auto text-black text-base md:text-lg">
            Kami siap membantu Anda. Silakan isi formulir di bawah atau hubungi kami melalui detail kontak yang tersedia.
          </p>
        </div>
      </div>

      {/* Bagian Konten Utama */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Grid: 1 kolom di mobile, 2 kolom di desktop (md) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {/* Kolom Kiri: Formulir Kontak */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>
            <form action="https://formspree.io/f/xblzrydv" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Alamat Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan Anda</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={4} 
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-black transition-colors"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>

          {/* Kolom Kanan: Info Kontak & Peta */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Informasi Kontak</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-4">
                  <BuildingOffice2Icon className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <span>Jl. Industri Utama No. 123, Jakarta, Indonesia.</span>
                </div>
                <div className="flex items-center gap-4">
                  <EnvelopeIcon className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                  <span>info@samudrateknik.co.id</span>
                </div>
                <div className="flex items-center gap-4">
                  <PhoneIcon className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                  <span>(021) 1234-5678</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Lokasi Kami</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322083!2d106.819597314769!3d-6.194741395514658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f428c4b8a213%3A0x59972322ac9a490!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4fv1631168489812!5m2!1sen!2sid"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}