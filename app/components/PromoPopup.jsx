'use client'
import { useState, useEffect } from 'react';

export default function PromoPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Tampilkan popup setiap kali halaman dibuka/refresh
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay Background */}
            <div
                className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 animate-fadeIn"
                onClick={closePopup}
            >
                {/* Popup Container */}
                <div
                    className="relative bg-white rounded-2xl max-w-lg w-full shadow-2xl animate-slideUp overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={closePopup}
                        className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90"
                        aria-label="Close popup"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Gambar Iklan */}
                    <a
                        href="https://wa.me/6285176878892?text=Halo%2C%20saya%20tertarik%20dengan%20promo%20dari%20website%20PT%20Samudra%20Teknik%20Sejahtera.%20Saya%20mau%20tau%20lebih%20lanjut"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block cursor-pointer"
                    >
                        <img
                            src="/Images/iklan/PT STS - Web Design - Promo Landing Page (Promo Dapat Kualitas, Dapat Hadiahnya)-01.png"
                            alt="Promo Iklan"
                            className="w-full h-auto object-contain"
                        />
                    </a>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
        </>
    );
}