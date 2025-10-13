'use client';

import { useState } from 'react';

// Menambahkan properti 'name' untuk teks tooltip
const contactLinks = [
  {
    type: 'whatsapp',
    name: 'Hubungi via WhatsApp',
    href: 'https://wa.me/6285176878892?text=Halo%20PT.%20Samudra%20Teknik%20Sejahtera,%20saya%20ingin%20bertanya%20tentang%20produk%20Anda',
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
    color: 'bg-gradient-to-br from-green-400 to-green-600',
  },
  {
    type: 'instagram',
    name: 'Lihat Instagram Kami',
    href: 'https://www.instagram.com/NAMA_INSTAGRAM_ANDA',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
    ),
    color: 'bg-gradient-to-br from-pink-500 to-purple-600',
  },
  {
    type: 'email',
    name: 'Kirim Email kepada Kami',
    href: 'mailto:info@perusahaan.com',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
    ),
    color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
  },
];

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null); // <-- State baru untuk melacak hover
  const [isMainButtonHovered, setIsMainButtonHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setHoveredIcon(null); // Reset hover saat menu ditutup
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center">
      {/* Menu Opsi Kontak yang muncul */}
      <div
        className={`flex flex-col items-center space-y-3 transition-all duration-300 ease-in-out mb-4 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {contactLinks.map((link) => (
          <div 
            key={link.type} 
            className="relative flex items-center"
            onMouseEnter={() => setHoveredIcon(link.type)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            {/* Tooltip (Bubble Chat) */}
            <div
              className={`absolute right-16 bg-white text-gray-800 text-sm px-3 py-1 rounded-md shadow-lg whitespace-nowrap transition-all duration-300 ${
                hoveredIcon === link.type ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
              }`}
            >
              {link.name}
              {/* Arrow tip */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-white"></div>
            </div>
            
            {/* Ikon Kontak */}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 ${link.color}`}
              aria-label={link.name}
            >
              {link.icon}
            </a>
          </div>
        ))}
      </div>

      <div 
        className="relative flex items-center"
        onMouseEnter={() => setIsMainButtonHovered(true)}
        onMouseLeave={() => setIsMainButtonHovered(false)}
      >
        {/* Tooltip untuk Tombol Utama */}
        <div
          className={`font-helvetica-regular absolute right-[72px] bg-white text-gray-800 text-lg px-3 py-1 rounded-md shadow-lg whitespace-nowrap transition-all duration-300 ${
            isMainButtonHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
          }`}
        >
          {isOpen ? 'Tutup Menu' : 'Tanya Kami?'}
          {/* Arrow tip */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-white"></div>
        </div>

      {/* Tombol Utama (Toggler) */}
      <button
        onClick={toggleMenu}
        className="relative w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Toggle contact menu"
      >
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
        
        <div className="relative transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
          {isOpen ? (
            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="white" // Memastikan ikon mewarisi warna dari className
      className='w-9 h-9'
    >
      <g transform="translate(1.4065934065934016 1.4065934016) scale(2.81 2.81)">
        <path
          d="M 76.031 35.134 h -0.82 C 74.031 19.494 60.937 7.126 45 7.126 S 15.968 19.494 14.788 35.134 h -0.819 C 6.267 35.134 0 41.401 0 49.104 v 6.147 C 0 62.953 6.267 69.22 13.969 69.22 h 3.723 c 1.657 0 3 -1.343 3 -3 v -7.364 V 38.134 v -0.7 c 0 -13.403 10.905 -24.308 24.308 -24.308 s 24.308 10.905 24.308 24.308 v 0.7 v 20.721 v 7.364 c 0 3.236 -2.633 5.87 -5.869 5.87 h -8.572 c -1.177 -2.808 -3.952 -4.785 -7.182 -4.785 h -5.369 c -4.292 0 -7.785 3.492 -7.785 7.785 c 0 4.292 3.492 7.784 7.785 7.784 h 5.369 c 3.229 0 6.004 -1.977 7.181 -4.784 h 8.573 c 5.507 0 10.136 -3.776 11.47 -8.87 h 1.123 C 83.733 69.22 90 62.953 90 55.251 v -6.147 C 90 41.401 83.733 35.134 76.031 35.134 z"
        />
      </g>
    </svg>
          )}
        </div>
      </button>
    </div>
    </div>
  );
}