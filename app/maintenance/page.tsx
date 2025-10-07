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
            {/* Background */}
            <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900" style={{
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 5s ease infinite'
            }}><Image
        src="/Images/AI YO-ZURI - Bricklayering & Platering Tools - Wheelbarrow PVC Black A.jpg" // Ganti dengan path gambar Anda
        alt="Background"
        fill // Ini akan membuat gambar mengisi seluruh parent (div di atasnya)
        priority // Opsional: Untuk memuat gambar lebih awal (penting untuk LCP)
        className="object-cover -z-10" // object-cover agar menutupi dan -z-10 agar di paling belakang
        sizes="100vw" // Penting untuk gambar fullscreen
    /></div>

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

                    {/* Logo Section */}
                    <div className="mb-8 sm:mb-12 animate-float">
                        <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20">
                            <Image
                                src="/Images/Profile Picture - PT Samudra Teknik Sejahtera (White Transparent).png" // Path ke gambar Anda di folder public
                                alt="Maintenance Icon"
                                width={144} 
                                height={144} 
                                className="w-36 h-36" 
                            />
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
