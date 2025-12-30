'use client'
import { useState, useEffect } from 'react';

export default function PromoPopup() {
    const [isOpen, setIsOpen] = useState(false);

    // --- KONFIGURASI PROMO ---
    // Masukkan path gambar poster Anda di sini. 
    // Ubah menjadi null atau "" jika ingin melihat tampilan "Tidak Ada Promo".
    const posterUrl = ""; 
    const whatsappLink = "https://wa.me/6285176878892?text=Halo%20Admin%2C%20saya%20ingin%20tanya%20promo...";

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => setIsOpen(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/75 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm transition-all">
            <div 
                className="relative bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Tombol Close */}
                <button
                    onClick={closePopup}
                    className="absolute top-3 right-3 z-20 w-8 h-8 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-all"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {posterUrl ? (
                    /* --- TAMPILAN JIKA ADA POSTER --- */
                    <div className="relative group">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block outline-none">
                            <img
                                src={posterUrl}
                                alt="Poster Promo"
                                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                            />
                            {/* Overlay Hover */}
                            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </a>
                    </div>
                ) : (
                    /* --- TAMPILAN JIKA TIDAK ADA PROMO --- */
                    <div className="p-10 text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Belum Ada Promo</h3>
                        <p className="text-gray-500 mt-2 mb-6 text-sm">
                            Maaf, saat ini belum ada promo yang aktif.
                        </p>
                        <button
                            onClick={closePopup}
                            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition-colors"
                        >
                            Tutup
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}