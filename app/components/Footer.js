// app/components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto px-4 py-16">
        {/* Grid untuk kolom-kolom footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Kolom 1: Produk */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4 uppercase">Produk</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-yellow-500 transition-colors">Power Tools</Link></li>
              <li><Link href="#" className="hover:text-yellow-500 transition-colors">Hand Tools</Link></li>
              <li><Link href="#" className="hover:text-yellow-500 transition-colors">Aksesoris</Link></li>
              <li><Link href="#" className="hover:text-yellow-500 transition-colors">Produk Baru</Link></li>
            </ul>
          </div>

          {/* Kolom 2: Dukungan */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4 uppercase">Dukungan</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-yellow-500 transition-colors">Hubungi Kami</Link></li>
              <li><Link href="#" className="hover:text-yellow-500 transition-colors">Lokasi Service Center</Link></li>
              <li><Link href="#" className="hover:text-yellow-500 transition-colors">Garansi</Link></li>
              <li><Link href="#" className="hover:text-yellow-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Kolom 3: Perusahaan */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4 uppercase">Perusahaan</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-yellow-500 transition-colors">Tentang PT. STS</Link></li>
              <li><Link href="#" className="hover:text-yellow-500 transition-colors">Karir</Link></li>
              <li><Link href="#" className="hover:text-yellow-500 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Info Perusahaan */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4 uppercase">PT. Samudra Teknik Sejahtera</h4>
            <p className="leading-relaxed">Jl. Industri Utama No. 123, Jakarta, Indonesia.</p>
            <p>Email: info@samudrateknik.co.id</p>
            <p>Telp: (021) 1234-5678</p>
          </div>

        </div>

        {/* Bagian Bawah Footer (Copyright) */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm">
          <p>&copy; 2025 PT. Samudra Teknik Sejahtera. Semua Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}