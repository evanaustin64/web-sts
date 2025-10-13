export default function PartnerLogosSlider() {
  // Data logo partner - ganti dengan logo Anda
  const partners = [
    { id: 1, name: 'Partner 1', logo: '/Images/partner/PT STS - Web Design - Our Partners-08.png' },
    { id: 2, name: 'Partner 2', logo: '/Images/partner/PT STS - Web Design - Our Partners-06.png' },
    { id: 3, name: 'Partner 3', logo: '/Images/partner/PT STS - Web Design - Our Partners-01.png' },
    { id: 4, name: 'Partner 4', logo: '/Images/partner/PT STS - Web Design - Our Partners-02.png' },
    { id: 5, name: 'Partner 5', logo: '/Images/partner/PT STS - Web Design - Our Partners-03.png' },
    { id: 6, name: 'Partner 6', logo: '/Images/partner/PT STS - Web Design - Our Partners-04.png' },
    { id: 7, name: 'Partner 7', logo: '/Images/partner/PT STS - Web Design - Our Partners-05.png' },
    { id: 8, name: 'Partner 8', logo: '/Images/partner/PT STS - Web Design - Our Partners-07.png' },
  ];

  // Duplikasi array untuk seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-helvetica-black text-center uppercase text-gray-800">
          Pelanggan Setia Kami
        </h2>
        <p className="text-center text-gray-600 mt-2 font-helvetica-regular text-xl">
          Dikenal karena Keandalaan, Kepuasan bagi Pelanggan
        </p>
      </div>

      {/* Container untuk animasi scroll */}
      <div className="relative">
        {/* Gradient overlay kiri */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
        
        {/* Gradient overlay kanan */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling container */}
        <div className="flex animate-scroll hover:pause-animation">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center"
              style={{ width: '150px', height: '80px' }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }

        /* Responsive speed */
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}