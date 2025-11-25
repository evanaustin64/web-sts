"use client";
import Image from 'next/image';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactUsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Bagian Judul */}
      <section className="relative w-full aspect-[1920/400] bg-gray-900">
              <Image
                src="/Images/PT STS - Web Design - Header 1920x400px-01 (1).png" // Ganti dengan foto banner Anda
                alt="Tim PT. Samudra Teknik Sejahtera"
                layout="fill"
                objectFit="cover"
                className="opacity-100"
                quality={100}
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  {/* <h1 className="text-5xl md:text-7xl font-helvetica-black uppercase">Hubungi Kami</h1> */}
                  {/* <p className="mt-4 text-lg md:text-xl font-helvetica-regular">Kami siap membantu Anda. Silakan isi formulir di bawah atau hubungi kami melalui detail kontak yang tersedia.</p> */}
                </div>
              </div>
            </section>
      {/* Bagian Konten Utama */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {/* Kolom Kiri: Formulir Kontak (Sudah Diperbarui) */}
          <div className="bg-yellow-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-helvetica-black text-gray-800 mb-6">Kirim Pesan</h2>
            {/* Arahkan action ke endpoint Formspree Anda */}
            <form action="https://formspree.io/f/mzzjgndg" method="POST" className="space-y-6">
              
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-helvetica-regular mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  placeholder="John Doe"
                  required
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" 
                />
              </div>z 
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-helvetica-regular mb-1">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="you@example.com"
                  required
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" 
                />
              </div>
              
              {/* Phone (Baru) */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 font-helvetica-regular mb-1">Phone</label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  placeholder="08xxxxxx"
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" 
                />
              </div>
              
              {/* Subject (Baru) */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 font-helvetica-regular mb-1">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  placeholder="Inquiry about Vintage products"
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" 
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-helvetica-regular mb-1">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
                  placeholder="Your message here..."
                  required
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                ></textarea>
              </div>

              {/* Tombol Kirim */}
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-yellow-500 text-white font-helvetica-regular font-bold py-3 px-6 rounded-lg hover:bg-yellow-800 transition-colors duration-300 text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Kolom Kanan: Info Kontak & Peta (Tetap Sama) */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-helvetica-black text-gray-800 mb-4">Informasi Kontak</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-4 font-helvetica-regular">
                  <BuildingOffice2Icon className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <span>Komplek Pergudangan Modern Business Park No.8i, Jl. KH. Hasyim Ashari No.79 A, RT.001/RW.004, Buaran Indah, Kec. Tangerang, Kota Tangerang, Banten 15119</span>
                </div>
                <div className="flex items-center gap-4 font-helvetica-regular">
                  <EnvelopeIcon className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                  <span>cssamudra3@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 font-helvetica-regular">
                  <PhoneIcon className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                  <span>(021) 55711055</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-helvetica-black">Lokasi Kami</h2>
              <div className="aspect-video rounded-lg overflow-hidden border">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6090776448627!2d106.64861347475018!3d-6.183043593804427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9211d6e95dd%3A0x2e50689d1267987b!2sPT.%20SAMUDRA%20TEKNIK%20SEJAHTERA!5e0!3m2!1sid!2sid!4v1759205172566!5m2!1sid!2sid"
                  width="100%"
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
