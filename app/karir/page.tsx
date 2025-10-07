// app/karir/page.tsx
"use client";
import Image from 'next/image';
import { BuildingOffice2Icon, EnvelopeIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

// Data untuk posisi yang tersedia dan persyaratan
const jobPositions = [
    'Sales Executive', 'Customer Service', 'Finance & Accounting', 'Supir Gudang',
    'Kernet', 'Helper Gudang', 'Collector', 'Graphic Designer',
    'Admin Gudang', 'Stock Control', 'Checker Gudang'
];

const requiredDocuments = [
    'CV (Daftar Riwayat Hidup)',
    'Surat Lamaran Kerja',
    'Pas Foto berwarna',
    'Fotokopi KTP',
    'Fotokopi NPWP (jika ada)',
    'Fotokopi Ijazah terakhir',
    'Daftar Nilai / Transkrip Nilai',
    'SKCK yang masih berlaku',
    'Sertifikat keahlian (jika ada)'
];

const recruitmentEmail = 'rekrut.sts@gmail.com';

export default function CareerPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Bagian Judul */}
            <section className="relative w-full aspect-[1920/400] bg-gray-900">
                <Image
                    src="/Images/PT STS - Web Design - Header 1920x400px-02.png" // Ganti dengan foto banner Anda
                    alt="Tim PT. Samudra Teknik Sejahtera"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-100"
                    quality={100}
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        {/* <h1 className="text-5xl md:text-5xl font-helvetica-black uppercase">Bergabunglah bersama Kami</h1> */}
                        {/* <p className="mt-4 text-lg md:text-xl font-helvetica-regular">Kami mengajak orang yang handal seperti anda untuk bergabung bersama kami. Buktikan kemampuan anda jika memenuhi kriteria.</p> */}
                    </div>
                </div>
            </section>

            {/* Bagian Konten Utama */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-4xl mx-auto">

                    {/* Posisi yang Tersedia */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-helvetica-black text-gray-800 mb-6">Posisi yang Tersedia</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {jobPositions.map((position, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center">
                                    <CheckBadgeIcon className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                                    <span className="font-helvetica-regular text-gray-700">{position}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Persyaratan Berkas */}
                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-helvetica-black text-gray-800 mb-6">Persyaratan Berkas Lamaran</h2>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <ul className="space-y-3 list-disc list-inside">
                                {requiredDocuments.map((doc, index) => (
                                    <li key={index} className="font-helvetica-light text-gray-700">{doc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Cara Melamar */}
                    <div className="mt-12 text-center bg-yellow-50 border border-yellow-200 p-8 rounded-lg">
                        <h2 className="text-2xl md:text-3xl font-helvetica-black text-gray-800 mb-4">Cara Melamar</h2>
                        <p className="font-helvetica-regular text-gray-700 max-w-2xl mx-auto mb-6">
                            Jika Anda tertarik dan memenuhi kualifikasi, silakan kirimkan semua berkas lamaran Anda dalam satu file PDF ke alamat email kami.
                        </p>
                        <a
                            href={`mailto:${recruitmentEmail}?subject=Lamaran Pekerjaan - [Posisi yang Dilamar]`}
                            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gray-800 text-white font-helvetica-regular py-3 px-8 rounded-lg hover:bg-black transition-colors text-lg shadow-lg"
                        >
                            <EnvelopeIcon className="h-6 w-6" />
                            Kirim Email Lamaran
                        </a>
                        <p className="mt-4 text-sm font-helvetica-light text-gray-500">
                            Subjek email: Lamaran Pekerjaan - [Posisi yang Anda Lamar]
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}