"use client";

import { useEffect } from 'react';
import Image from 'next/image';

export default function MaintenancePage() {
    useEffect(() => {
        // Auto refresh setiap 5 menit untuk cek apakah maintenance sudah selesai
        const timer = setTimeout(() => {
            window.location.reload();
        }, 300000); // 300000ms = 5 menit

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="overflow-x-hidden">
            {/* Background dengan gradient (tanpa gambar dulu untuk testing) */}
            <div
                className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900"
                style={{
                    backgroundSize: '200% 200%',
                    animation: 'gradient-shift 5s ease infinite'
                }}
            />

            {/* JIKA mau pakai background image, gunakan cara ini: */}
            {/* 
            <div className="fixed inset-0 -z-10">
                <Image
                    src="/images/background.jpg"
                    alt="Background"
                    fill
                    priority
                    className="object-cover opacity-30"
                    sizes="100vw"
                />
            </div>
            */}

            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div
                className="fixed inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
            ></div>

            {/* Main Content */}
            <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl w-full text-center">

                    {/* Logo Section - FIXED */}
                    <div className="mb-8 sm:mb-12 animate-float">
                        <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden">
                            {/* Ganti path ke /images/ (huruf kecil) */}
                            <svg
                                version="1.1"
                                id="Layer_2"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 500 500"
                                xmlSpace="preserve"
                            >
                                {/* Blok <style> sudah dihapus */}
                                <path
                                    className="opacity-65 fill-white" // <-- Kelas Tailwind diterapkan di sini
                                    d="M388,381.45c0,0-46.43,36.66-128.25,9.38l-75.95-28.74c0,0-57.19-29.03-118.48-3.52v-3.23
	c0,0,40.47-33.43,106.45-22.14c0,0,35.48,4.84,93.18,32.69c0,0,65.18,31.09,123.05,13.35V381.45z M411.85,342.85
	c-58.39,15.93-122.57-17.17-122.57-17.17c-56.8-29.64-92.12-35.58-92.12-35.58c-65.6-13.34-107.09,18.82-107.09,18.82l-0.1,3.22
	c62.06-23.59,118.31,7.21,118.31,7.21l75.02,31.09c80.93,29.81,128.48-5.39,128.48-5.39L411.85,342.85z M375,250
	c0,30.84-11.17,59.06-29.68,80.86c-5.52-0.25-11.15-0.93-16.78-1.93c1.71-15.7-9.19-19.77-9.19-19.77l-0.07-58.51
	c19.94-16.94,1.47-30.72,1.47-30.72l-1.47,0.95v13.32l-7.04,3.98h-2.42l-6.89-3.98l-0.07-13.62l-1.91-0.95
	c-17.67,17.67,2.49,31.16,2.49,31.16l0.15,57.82c-6.78,3.65-8.79,9.49-9.21,11.01c-20.24-7.19-35.73-15.34-37.8-16.45l-1.59-32.07
	l-2.79-27.71l0.61-47.87c5.01-0.05,4.96-6.82,4.96-6.82c3.96-13.27,19.14-7.77,19.14-7.77c5.5,1.39,13.49,7.89,13.49,7.89
	c3.4,2.76,2.44-0.49,2.44-0.49c-1.95-5.82-7.48-11-7.48-11c-14.13-13.59-41.06-12.56-41.06-12.56c-15.59,0.05-18.77,5.82-18.77,5.82
	c-0.76,2.03-7.06,2.66-7.06,2.66v-3.56c-0.18-4.62-4.29-4.45-4.29-4.45c-4.49,0.42-4.4,4.23-4.4,4.23v18.31
	c0.93,4.29,4.36,4.4,4.36,4.4c5.21,0.15,4.55-7,4.55-7c10.78,1.1,13.22,3.96,13.22,3.96c1.39,6.48,7.6,6.53,7.6,6.53l-0.73,47.51
	l-4.25,27.57l-1.15,23.05l0,0c-13.06-4.77-24.94-8.23-35.61-10.7v-17.29c-5.52-7.62-0.54-11.88-0.54-11.88v-2.39l-4.25-1.03v-35.92
	l2.05-3.32l-1.91-10.22h-3.71l-2.01,10.17l2.01,3.23v35.92l-4.06,1.03v2.3c4.84,5.67-0.48,11.78-0.48,11.78v15.01v0
	c-36.9-6.47-56-0.51-56.24-0.44c-2.37-9.62-3.64-19.68-3.64-30.04c0-69.04,55.96-125,125-125S375,180.96,375,250z M229.68,149.8
	c-0.45-1.69-1.92-2.25-3.43-2.62c-3.03-0.75-6.11-0.57-9.18-0.38c-1.69,0.11-3.38,0.23-5.07,0.01c-1.09-0.14-2.15-0.43-2.52-1.65
	c-0.38-1.25,0.33-2.14,1.13-2.95c0.31-0.31,0.67-0.59,1.04-0.84c2.35-1.55,4.98-2.37,7.75-2.7c1.66-0.2,3.29,0.12,4.41,1.42
	c0.99,1.14,2.01,0.55,2.89,0.21c0.78-0.3,0.2-1.16,0.14-1.77c-0.05-0.58-0.2-1.14-0.23-1.72c-0.04-0.66-0.31-0.8-0.94-0.69
	c-1.54,0.26-3.1,0.35-4.63,0.66c-5.1,1.04-10.01,2.57-14.23,5.79c-1.29,0.98-2.43,2.1-3.09,3.62c-0.91,2.11-0.09,3.71,2.14,4.23
	c0.74,0.18,1.49,0.22,2.25,0.23c3.04,0.05,6.03-0.58,9.07-0.67c1.25,0.06,2.49,0.1,3.74,0.18c0.35,0.02,0.7,0.13,1.04,0.23
	c2.02,0.64,2.68,2.63,1.43,4.35c-0.5,0.7-1.16,1.24-1.91,1.64c-2.61,1.42-5.37,2.39-8.33,2.7c-1.23,0.13-2.5,0-3.39-0.9
	c-1.01-1.02-1.8-0.27-2.61,0.13c-0.96,0.48-0.08,1.15-0.02,1.73c0.05,0.52,0.3,1.02,0.44,1.54c0.16,0.6,0.37,0.87,1.11,0.63
	c4.5-1.43,9.05-2.7,13.44-4.44c2.16-0.86,4.28-1.8,6-3.42C229.46,153.12,230.16,151.61,229.68,149.8z M267.56,135.4
	c0.15-0.81-0.17-0.96-0.88-1.07c-6.14-0.94-12.3-1.4-18.51-1.35c-5,0.04-9.97,0.47-14.92,1.16c-0.56,0.08-1.46-0.13-1.3,1.01
	c0.19,1.37,0.32,2.74,0.48,4.11c0.03,0.26,0.03,0.53,0.37,0.62c0.77,0.21,2.3-0.5,2.63-1.26c1.08-2.47,2.92-3.87,5.65-4.02
	c1.34-0.08,2.68-0.1,4-0.28c1.16-0.16,1.43,0.32,1.44,1.37c0.03,4.41,0.12,8.83,0.18,13.24c0.01,0.76,0.02,1.51-0.02,2.27
	c-0.05,1.01-0.6,1.65-1.57,1.93c-0.47,0.14-0.95,0.24-1.42,0.39c-0.27,0.08-0.73,0.05-0.63,0.51c0.09,0.44,0.49,0.25,0.78,0.23
	c3.39-0.18,6.78-0.12,10.16-0.05c0.62,0.01,1.24,0.11,1.86,0.17c0.24,0.02,0.47-0.05,0.51-0.31c0.04-0.26-0.16-0.38-0.4-0.44
	c-0.3-0.07-0.61-0.15-0.91-0.23c-1.92-0.5-2.34-1.03-2.35-2.98c-0.01-2.41,0-4.82,0-7.22c0.11,0,0.21,0,0.32,0
	c0-2.63,0.02-5.26-0.01-7.89c-0.01-0.76,0.22-1.03,0.99-0.95c1.55,0.15,3.12,0.17,4.67,0.33c2.41,0.25,4.15,1.49,5.18,3.7
	c0.09,0.2,0.2,0.4,0.28,0.61c0.45,1.18,1.55,0.91,2.4,0.95c0.86,0.03,0.55-0.86,0.63-1.35C267.37,137.53,267.37,136.45,267.56,135.4
	z M296.6,144.62c0.17-0.55-0.34-0.68-0.66-0.85c-1.4-0.78-2.79-1.59-4.24-2.27c-4.42-2.08-8.97-3.72-13.81-3.87
	c-1.69,0.03-3.25,0.16-4.64,0.97c-1.73,1-2.14,2.78-1.05,4.45c0.55,0.83,1.28,1.48,2.06,2.08c1.77,1.36,3.71,2.46,5.62,3.61
	c2.33,1.41,4.69,2.77,6.58,4.78c1.21,1.3,1.5,2.62,0.85,3.76c-0.79,1.38-2.16,1.54-3.51,1.36c-2.89-0.39-5.64-1.28-8.2-2.71
	c-1.32-0.74-2.4-1.77-2.82-3.26c-0.36-1.26-1.42-1.17-2.24-1.21c-0.92-0.05-0.51,0.93-0.65,1.45c-0.15,0.56-0.16,1.15-0.28,1.71
	c-0.12,0.58,0.04,0.91,0.63,1.11c4.93,1.69,9.77,3.64,14.86,4.81c1.77,0.41,3.57,0.78,5.42,0.38c2.89-0.63,3.98-3,2.51-5.56
	c-0.88-1.53-2.16-2.71-3.5-3.83c-2.37-1.97-5.04-3.52-7.59-5.24c-1.18-0.8-2.38-1.6-3.23-2.77c-1.24-1.7-0.56-3.6,1.5-3.76
	c4.3-0.34,8.07,1.04,11.2,4.03c0.68,0.65,1.13,1.52,1.3,2.45c0.24,1.37,1.49,1.35,2.37,1.85c0.25,0.14,0.42-0.04,0.5-0.28
	C295.93,146.74,296.28,145.69,296.6,144.62z"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Status Badge */}
                    <div className="mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 backdrop-blur-md rounded-full border border-yellow-400/30 text-yellow-300 text-sm font-semibold">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
                            </span>
                            UNDER MAINTENANCE
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
                        Kami Sedang Melakukan
                        <br />
                        <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                            Pemeliharaan
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/80 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                        Website kami sedang dalam proses pembaruan untuk memberikan pengalaman yang lebih baik untuk Anda.
                    </p>

                    {/* Loader */}
                    <div className="mb-8 sm:mb-12">
                        <div className="inline-flex gap-1.5 text-yellow-400">
                            <span className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                            <span className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                            <span className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4">
                        {/* Card 1 */}
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Estimasi Waktu</h3>
                            <p className="text-blue-200/70 text-sm">2-4 Jam</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Pembaruan</h3>
                            <p className="text-blue-200/70 text-sm">Fitur Baru</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Keamanan</h3>
                            <p className="text-blue-200/70 text-sm">Data Aman</p>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10 max-w-2xl mx-auto mb-8">
                        <h2 className="text-white font-bold text-xl mb-4">Butuh Bantuan Segera?</h2>
                        <p className="text-blue-200/70 mb-6">Hubungi kami melalui kontak di bawah ini</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {/* WhatsApp Button */}
                            <a
                                href="https://api.whatsapp.com/send?phone=6285176878892&text=Halo,%20saya%20ingin%20bertanya"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp
                            </a>

                            {/* Email Button */}
                            <a
                                href="mailto:info@ptsamudrateknik.com"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email Kami
                            </a>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-blue-200/60 text-sm">
                        <p>&copy; 2025 PT Samudra Teknik Sejahtera. All rights reserved.</p>
                        <p className="mt-2">Terima kasih atas kesabaran Anda 🙏</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float 3s ease-in-out 1s infinite;
                }
                
                .animate-pulse-slow {
                    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                
                @keyframes gradient-shift {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
            `}</style>
        </div>
    );
}