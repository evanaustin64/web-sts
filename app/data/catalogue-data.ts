// app/data/catalogue-data.ts

// Definisikan tipe data untuk konsistensi
export type Product = {
  id: string;
  name: string;
  image: string;
  description?: string; // Deskripsi produk (opsional)
  specifications?: { key: string; value: string }[]; // Spesifikasi produk (opsional)
  variations?: { id: string; name: string; image: string }[];  // Spesifikasi produk (opsional)
  features?: { text: string }[];
  packagingDetails?: { size: string; innerBox: number; outerBox: number }[];
};

export type Category = {
  id: string; // contoh: 'hand-power-tools'
  name: string; // contoh: 'Hand & Power Tools'
  image: string; // Gambar representatif untuk kategori ini
  products: Product[];
};

export const catalogueData: Record<string, Category[]> = {
  owner: [
    {
      id: 'hand-power-tools',
      name: 'Hand & Power Tools | Perkakas tangan & listrik',
      image: '/images/Hand tools.png', // Ganti dengan gambar Anda
      // Di dalam catalogueData -> owner -> 'hand-power-tools'
      products: [
        {
          id: 'own-001',
          name: 'Palu Kambing Gerigi | Gagang Fiber',
          image: '/images/own/Owner - Palu Kambing Gagang Fiber - Gerigi.png',
          description: 'Palu kambing OWNER PRO series dengan kepala gerigi dirancang untuk daya cengkeram paku maksimal. Gagang fiber anti-slip memberikan kenyamanan dan keamanan ekstra saat digunakan.',
          specifications: [
            { key: 'Ukuran Kepala', value: '8oz' },
            { key: 'Material Gagang', value: 'Fiberglass' },
            { key: 'Fitur', value: 'Kepala Gerigi Anti-Slip' },
          ],
          features: [
            { text: 'Baja Kuat' },
            { text: 'Gagang Nyaman' },
            { text: 'Presisi Tinggi' },
          ],
          packagingDetails: [
            { size: '8 OZ', innerBox: 6, outerBox: 48 },
            { size: '12 OZ', innerBox: 6, outerBox: 36 },
            { size: '16 OZ', innerBox: 6, outerBox: 24 },
          ],
          variations: [
            { id: 'own-002', name: 'Palu Kambing Rata', image: '/images/own/Owner - Palu Kambing Gagang Fiber - Non-Gerigi.png' },
          ]
        },
        {
          id: 'own-002',
          name: 'Palu Kambing | Gagang Fiber',
          image: '/images/own/Owner - Palu Kambing Gagang Fiber - Non-Gerigi.png',
          description: 'Palu kambing serbaguna dengan kepala rata, cocok untuk berbagai keperluan pertukangan dan proyek DIY. Gagang fiber yang ringan dan kuat.',
          specifications: [
            { key: 'Ukuran Kepala', value: '8oz' },
            { key: 'Material Gagang', value: 'Fiberglass' },
            { key: 'Fitur', value: 'Kepala Rata' },
          ],
          features: [
            { text: 'Baja Tempa' },
            { text: 'Gagang Fiber' },
            { text: 'Serbaguna' },
          ],
          packagingDetails: [
            { size: '8 OZ', innerBox: 6, outerBox: 48 },
            { size: '12 OZ', innerBox: 6, outerBox: 36 },
          ],
          variations: [
            { id: 'own-001', name: 'Palu Kambing Gerigi', image: '/images/own/Owner - Palu Kambing Gagang Fiber - Gerigi.png' },
          ]
        },
        {
          id: 'own-003',
          name: 'Palu Bodam | Tanpa Gagang',
          image: '/images/own/Owner - Palu Bodem Tanpa Gagang A.png',
          description: 'Palu bodam (sledgehammer) dari baja tempa berkualitas tinggi, ideal untuk pekerjaan penghancuran berat seperti membongkar beton dan dinding.',
          specifications: [
            { key: 'Berat', value: '3 kg' },
            { key: 'Material Kepala', value: 'Baja Tempa (Forged Steel)' },
            { key: 'Gagang', value: 'Tidak Termasuk' },
          ],
          features: [
            { text: 'Daya Hancur' },
            { text: 'Heavy Duty' },
          ],
          packagingDetails: [
            { size: '3 KG', innerBox: 1, outerBox: 8 },
            { size: '5 KG', innerBox: 1, outerBox: 6 },
          ],
        },
        {
          id: 'own-004',
          name: 'Kabel Ties | Hitam & Putih',
          image: '/images/own/Owner - Kabel Ties B.png',
          description: 'Kabel ties serbaguna berbahan nilon kuat untuk mengikat dan merapikan kabel, selang, atau keperluan lainnya. Tahan lama dan tidak mudah putus.',
          specifications: [
            { key: 'Material', value: 'Nilon 66' },
            { key: 'Tersedia Warna', value: 'Hitam, Putih' },
          ],
          features: [
            { text: 'Kuat Mengunci' },
            { text: 'Fleksibel' },
          ],
          packagingDetails: [
            { size: '150mm', innerBox: 10, outerBox: 200 },
            { size: '200mm', innerBox: 10, outerBox: 150 },
          ],
        },
        {
          id: 'own-005',
          name: 'Diamond Wheel Dry',
          image: '/images/own/Owner - Diamond Wheel - Dry Yellow A.png',
          description: 'Mata gerinda potong keramik tipe kering (dry) yang dirancang untuk pemotongan presisi dan cepat pada berbagai jenis keramik, granit, dan marmer.',
          specifications: [
            { key: 'Tipe', value: 'Kering (Dry Cut)' },
            { key: 'Diameter', value: '4 inch (105mm)' },
          ],
          features: [
            { text: 'Potongan Presisi' },
            { text: 'Cepat & Bersih' },
          ],
          packagingDetails: [
            { size: '4"', innerBox: 1, outerBox: 100 },
          ],
          variations: [
            { id: 'own-006', name: 'Diamond Wheel Turbo', image: '/images/own/Owner - Diamond Wheel Turbo K Disc - Front.png' },
          ]
        },
        {
          id: 'own-006',
          name: 'Diamond Wheel Turbo',
          image: '/images/own/Owner - Diamond Wheel Turbo K Disc - Front.png',
          description: 'Mata gerinda potong serbaguna dengan desain turbo rim untuk pendinginan lebih baik dan pemotongan yang lebih agresif. Cocok untuk beton dan batu alam.',
          specifications: [
            { key: 'Tipe', value: 'Turbo Rim' },
            { key: 'Diameter', value: '4 inch (105mm)' },
          ],
          features: [
            { text: 'Potongan Agresif' },
            { text: 'Desain Pendingin' },
          ],
          packagingDetails: [
            { size: '4"', innerBox: 1, outerBox: 100 },
          ],
          variations: [
            { id: 'own-005', name: 'Diamond Wheel Dry', image: '/images/own/Owner - Diamond Wheel - Dry Yellow A.png' },
          ]
        },
        {
          id: 'own-007',
          name: 'Tali Rafia',
          image: '/images/own/Owner - Tali Rafia - Hitam.png',
          description: 'Tali rafia berkualitas tinggi, kuat, dan tidak mudah berserabut. Cocok untuk berbagai keperluan pengemasan, pengikatan, dan kerajinan tangan.',
          specifications: [
            { key: 'Warna', value: 'Hitam' },
            { key: 'Berat Gulungan', value: '1 kg' },
          ],
          features: [
            { text: 'Kuat & Tebal' },
            { text: 'Serbaguna' },
          ],
          packagingDetails: [
            { size: '1 KG', innerBox: 1, outerBox: 20 },
          ],
        },
        {
          id: 'own-008',
          name: 'Lakban | Adhesive Tapes',
          image: '/images/own/Owner - Lakban A.png', // Ganti dengan gambar lakban
          description: 'Lakban perekat serbaguna dengan daya rekat kuat, ideal untuk pengepakan kardus, penyegelan, dan berbagai keperluan rumah tangga maupun industri.',
          specifications: [
            { key: 'Warna', value: 'Coklat' },
            { key: 'Lebar', value: '2 inch (48mm)' },
          ],
          features: [
            { text: 'Daya Rekat Kuat' },
            { text: 'Serbaguna' },
          ],
          packagingDetails: [
            { size: '2" x 100y', innerBox: 6, outerBox: 72 },
          ],
        },
      ],
    },
    {
      id: 'painting-tools',
      name: 'Painting Tools | Peralatan Cat',
      image: '/images/Painting Tools.png', // Ganti dengan gambar Anda
      products: [
        {
          id: 'own-paint-001',
          name: 'Kuas Roll Copot 9 Inch',
          image: '/images/own/Owner - kuas roll .png', // Ganti dengan path gambar Anda
          description: 'Kuas roll set 9 inch dengan gagang yang bisa dilepas untuk kemudahan pembersihan dan penggantian bulu roll. Cocok untuk pengecatan area luas seperti dinding dan langit-langit.',
          specifications: [
            { key: 'Ukuran', value: '9 Inch' },
            { key: 'Jenis', value: 'Set dengan Gagang' },
            { key: 'Fitur', value: 'Gagang bisa dilepas' },
          ],
          features: [
            { text: 'Cakupan Luas' },
            { text: 'Mudah Dibersihkan' },
          ],
          packagingDetails: [
            { size: '9"', innerBox: 1, outerBox: 24 },
          ],
        },
        {
          id: 'own-paint-003',
          name: 'Bulu Kuas Roll 9 Inch',
          image: '/images/own/Owner - 9 Inch Bulu Roll Copot - Orange.png',
          description: 'Refill bulu kuas roll 9 inch berkualitas tinggi yang menyerap cat secara maksimal dan menghasilkan lapisan yang rata dan halus.',
          specifications: [
            { key: 'Ukuran', value: '9 Inch' },
            { key: 'Jenis', value: 'Refill Bulu Roll' },
            { key: 'Material', value: 'Serat Sintetis Premium' },
          ],
          features: [
            { text: 'Daya Serap Tinggi' },
            { text: 'Hasil Halus' },
          ],
          packagingDetails: [
            { size: '9"', innerBox: 1, outerBox: 50 },
          ],
        },
        {
          id: 'own-paint-004',
          name: 'Bulu Roll Domba 4 Inch',
          image: '/images/own/Owner - 4 Inch Bulu Roll Domba - Merah.png',
          description: 'Refill bulu roll mini 3 inch terbuat dari bulu domba asli, memberikan hasil akhir yang sangat halus dan bebas gelembung. Ideal untuk cat minyak dan pernis.',
          specifications: [
            { key: 'Ukuran', value: '3 Inch' },
            { key: 'Jenis', value: 'Refill Bulu Roll' },
            { key: 'Material', value: 'Bulu Domba Asli' },
          ],
          features: [
            { text: 'Sangat Halus' },
            { text: 'Untuk Cat Minyak' },
          ],
          packagingDetails: [
            { size: '3"', innerBox: 1, outerBox: 100 },
          ],
        },
        {
          id: 'own-paint-005',
          name: 'Bulu Roll Garis 4 Inch',
          image: '/images/own/Owner - 4 Inch Bulu Roll Kapal - Garis.png',
          description: 'Refill bulu roll 4 inch dengan motif garis untuk menciptakan efek tekstur dekoratif pada dinding. Mudah digunakan untuk proyek kreatif.',
          specifications: [
            { key: 'Ukuran', value: '4 Inch' },
            { key: 'Jenis', value: 'Refill Roll Tekstur' },
            { key: 'Motif', value: 'Garis (Stripe)' },
          ],
          features: [
            { text: 'Efek Dekoratif' },
            { text: 'Proyek Kreatif' },
          ],
          packagingDetails: [
            { size: '4"', innerBox: 1, outerBox: 80 },
          ],
        },
        {
          id: 'own-paint-006',
          name: 'Kuas Cat 633',
          image: '/images/own/Owner - Kuas Cat 633 - All-Sizes.png',
          description: 'Kuas cat seri 633 dengan bulu berkualitas yang tidak mudah rontok. Tersedia dalam berbagai ukuran untuk segala jenis pekerjaan pengecatan, dari detail hingga area sedang.',
          specifications: [
            { key: 'Seri', value: '633' },
            { key: 'Material Bulu', value: 'Sintetis' },
            { key: 'Gagang', value: 'Kayu' },
          ],
          features: [
            { text: 'Anti Rontok' },
            { text: 'Serbaguna' },
          ],
          packagingDetails: [
            { size: '1 Inch', innerBox: 12, outerBox: 240 },
            { size: '1.5 Inch', innerBox: 12, outerBox: 180 },
            { size: '2 Inch', innerBox: 12, outerBox: 120 },
          ],
        },
        {
          id: 'own-paint-007',
          name: 'Kuas Roll Copot 4 Inch Domba',
          image: '/images/own/Owner - Kuas Roll Copot 4 Inch - Bulu Domba Merah A.png', // Ganti dengan path gambar Anda
          description: 'Kuas roll set 4 inch dengan bulu domba asli untuk hasil akhir super halus. Gagang bisa dilepas, ideal untuk aplikasi cat minyak, pernis, dan finishing.',
          specifications: [
            { key: 'Ukuran', value: '4 Inch' },
            { key: 'Jenis', value: 'Set Mini Roll' },
            { key: 'Material Bulu', value: 'Bulu Domba Asli' },
          ],
          features: [
            { text: 'Hasil Super Halus' },
            { text: 'Untuk Cat Minyak' },
          ],
          packagingDetails: [
            { size: '4"', innerBox: 1, outerBox: 48 },
          ],
          variations: [
            { id: 'own-paint-008', name: 'Kuas Roll Copot 4 Inch Garis', image: '/images/own/Owner - Kuas Roll Copot 4 Inch - Garis A.png' },
          ]
        },
        {
          id: 'own-paint-008',
          name: 'Kuas Roll Copot 4 Inch Garis',
          image: '/images/own/Owner - Kuas Roll Copot 4 Inch - Garis A.png', // Ganti dengan path gambar Anda
          description: 'Ciptakan efek dinding bertekstur garis dengan mudah menggunakan kuas roll set 4 inch ini. Gagang yang bisa dilepas memudahkan penggantian dan pembersihan.',
          specifications: [
            { key: 'Ukuran', value: '4 Inch' },
            { key: 'Jenis', value: 'Set Roll Tekstur' },
            { key: 'Motif', value: 'Garis (Stripe)' },
          ],
          features: [
            { text: 'Efek Dinding Tekstur' },
            { text: 'Proyek Kreatif' },
          ],
          packagingDetails: [
            { size: '4"', innerBox: 1, outerBox: 48 },
          ],
          variations: [
            { id: 'own-paint-007', name: 'Kuas Roll Copot 4 Inch Domba', image: '/images/own/Owner - Kuas Roll Copot 4 Inch - Bulu Domba Merah A.png' },
          ]
        },
      ],
    },
    {
      id: 'layering-tools',
      name: 'Plastering & Layering Tools | Peralatan plester & Pelapis',
      image: '/images/layering owner.png', // Ganti dengan gambar Anda
      // Di dalam catalogueData -> owner -> kategori 'layering-tools'
      products: [
        {
          id: 'own-layer-001',
          name: 'Siku Rak',
          image: '/images/own/Yo-Zuri - Siku Rak - Putih.png', // Ganti dengan path gambar Anda
          description: 'Siku rak besi tebal untuk menopang ambalan dinding dengan kokoh. Ideal untuk kebutuhan rumah tangga, gudang, dan display toko.',
          specifications: [
            { key: 'Material', value: 'Besi' },
            { key: 'Ketebalan', value: '3mm' },
            { key: 'Warna', value: 'Putih / Hitam' },
          ],
          features: [
            { text: 'Beban Maksimal Kuat' },
            { text: 'Anti Karat' },
          ],
          packagingDetails: [
            { size: '8x10 Inch', innerBox: 12, outerBox: 144 },
            { size: '10x12 Inch', innerBox: 12, outerBox: 96 },
          ],
        },
        {
          id: 'own-layer-002',
          name: 'Siku Lubang Tebal',
          image: '/images/own/Owner - Siku Lubang 4 Warna A.png',
          description: 'Besi siku lubang serbaguna dengan ketebalan ekstra untuk merakit rak custom, meja kerja, atau kerangka lainnya. Kuat dan mudah dirakit.',
          specifications: [
            { key: 'Material', value: 'Besi' },
            { key: 'Panjang', value: '3 Meter' },
            { key: 'Ketebalan', value: '1.8mm' },
          ],
          features: [
            { text: 'Serbaguna & Customisable' },
            { text: 'Material Tebal & Kuat' },
          ],
          packagingDetails: [
            { size: '3M', innerBox: 10, outerBox: 100 },
          ],
        },
        // { 
        //   id: 'own-layer-003', 
        //   name: 'Pahat Topi Jumbo (Concrete Chisel)', 
        //   image: '/images/own/pahat-beton.png',
        //   description: 'Pahat beton model topi (jumbo) untuk pekerjaan pembongkaran beton dan batu yang efisien. Terbuat dari baja Chrome Vanadium yang sangat keras.',
        //   specifications: [
        //     { key: 'Material', value: 'Chrome Vanadium Steel' },
        //     { key: 'Model', value: 'Topi (Hexagonal)' },
        //     { key: 'Ukuran', value: '1 inch' },
        //   ],
        //   features: [
        //     { text: 'Ujung Sangat Keras' },
        //     { text: 'Efektif untuk Beton' },
        //   ],
        //   packagingDetails: [
        //     { size: '1"', innerBox: 6, outerBox: 60 },
        //   ],
        // },
        {
          id: 'own-layer-004',
          name: 'Sikat Kawat',
          image: '/images/own/Owner - Sikat Kawat.png',
          description: 'Sikat kawat dengan gagang kayu untuk membersihkan karat, cat, kerak, dan kotoran membandel dari permukaan logam atau beton.',
          specifications: [
            { key: 'Material Kawat', value: 'Baja' },
            { key: 'Material Gagang', value: 'Kayu' },
            { key: 'Jumlah Baris', value: '4 Baris' },
          ],
          features: [
            { text: 'Membersihkan Karat' },
            { text: 'Bulu Kawat Kuat' },
          ],
          packagingDetails: [
            { size: 'Standard', innerBox: 12, outerBox: 120 },
          ],
        },
        {
          id: 'own-layer-005',
          name: 'Fissher',
          image: '/images/own/Owner - Fissher A.png',
          description: 'Fissher (wall plug) berkualitas tinggi untuk pemasangan sekrup yang kuat dan aman pada dinding tembok atau beton.',
          specifications: [
            { key: 'Material', value: 'Plastik (Nylon)' },
            { key: 'Tipe', value: 'Standard' },
          ],
          features: [
            { text: 'Cengkeraman Kuat' },
            { text: 'Tidak Mudah Dol' },
          ],
          packagingDetails: [
            { size: 'S6', innerBox: 100, outerBox: 1000 },
            { size: 'S8', innerBox: 100, outerBox: 800 },
          ],
          variations: [
            { id: 'own-layer-006', name: 'Fissher + Sekrup Set', image: '/images/own/Owner - Fissher+Sekrup.png' },
          ]
        },
        {
          id: 'own-layer-006',
          name: 'Fissher + Sekrup Set',
          image: '/images/own/Owner - Fissher+Sekrup.png',
          description: 'Paket lengkap fissher dan sekrup yang sudah serasi ukurannya, memudahkan pemasangan gantungan atau rak di dinding.',
          specifications: [
            { key: 'Isi Paket', value: 'Fissher + Sekrup' },
            { key: 'Kepala Sekrup', value: 'Plus (+)' },
          ],
          features: [
            { text: 'Praktis & Lengkap' },
            { text: 'Ukuran Presisi' },
          ],
          packagingDetails: [
            { size: 'S6', innerBox: 50, outerBox: 500 },
            { size: 'S8', innerBox: 50, outerBox: 400 },
          ],
          variations: [
            { id: 'own-layer-005', name: 'Fissher', image: '/images/own/Owner - Fissher A.png' },
          ]
        },
        {
          id: 'own-layer-007',
          name: 'Gerobak Sorong - PVC (9kg)',
          image: '/images/own/Owner - Gerobak Sorong - Bak PVC Putih - Ban Hidup.png',
          description: 'Gerobak sorong heavy duty dengan bak PVC tebal yang anti pecah dan anti karat. Ringan (9kg) namun kokoh untuk mengangkut material proyek.',
          specifications: [
            { key: 'Material Bak', value: 'PVC Tebal' },
            { key: 'Berat', value: '9 kg' },
            { key: 'Rangka', value: 'Besi' },
          ],
          features: [
            { text: 'Anti Karat & Pecah' },
            { text: 'Ringan & Kokoh' },
          ],
          packagingDetails: [
            { size: 'Standard', innerBox: 1, outerBox: 1 },
          ],
        },
        {
          id: 'own-layer-008',
          name: 'Amplas Roll PREMIUM',
          image: '/images/own/Owner - Abrasive Roll PREMUM.png',
          description: 'Amplas roll serbaguna untuk menghaluskan permukaan kayu dan besi. Fleksibel dan mudah dipotong sesuai kebutuhan.',
          specifications: [
            { key: 'Tipe', value: 'Roll' },
            { key: 'Aplikasi', value: 'Kayu & Besi' },
          ],
          features: [
            { text: 'Fleksibel' },
            { text: 'Tahan Lama' },
          ],
          packagingDetails: [
            { size: 'Grit 80', innerBox: 1, outerBox: 10 },
            { size: 'Grit 120', innerBox: 1, outerBox: 10 },
          ],
          variations: [
            { id: 'own-layer-009', name: 'Amplas Roll 98', image: '/images/own/Owner - Abrasive Roll 98.png' },
          ]
        },
        {
          id: 'own-layer-009',
          name: 'Amplas Roll 98',
          image: '/images/own/Owner - Abrasive Roll 98.png',
          description: 'Amplas roll seri 98 dengan kualitas premium untuk hasil pengamplasan yang lebih halus dan cepat. Backing kain yang kuat.',
          specifications: [
            { key: 'Tipe', value: 'Roll Seri 98' },
            { key: 'Backing', value: 'Kain' },
          ],
          features: [
            { text: 'Kualitas Premium' },
            { text: 'Hasil Lebih Halus' },
          ],
          packagingDetails: [
            { size: 'Grit 100', innerBox: 1, outerBox: 10 },
            { size: 'Grit 240', innerBox: 1, outerBox: 10 },
          ],
          variations: [
            { id: 'own-layer-008', name: 'Amplas Roll PREMIUM', image: '/images/own/Owner - Abrasive Roll PREMUM.png' },
          ]
        },
        {
          id: 'own-layer-010',
          name: 'Sendok Semen (Gagang Kayu)',
          image: '/images/own/Owner - Sendok Semen Lancip - Gagang Kayu.png',
          description: 'Sendok semen (trowel) dengan gagang kayu yang nyaman. Terbuat dari plat baja yang kuat untuk mengaduk dan mengaplikasikan adukan semen.',
          specifications: [
            { key: 'Material', value: 'Plat Baja' },
            { key: 'Gagang', value: 'Kayu' },
          ],
          features: [
            { text: 'Gagang Ergonomis' },
            { text: 'Plat Baja Kuat' },
          ],
          packagingDetails: [
            { size: '6"', innerBox: 12, outerBox: 120 },
          ],
        },
        {
          id: 'own-layer-011',
          name: 'Kape (Gagang Kayu)',
          image: '/images/own/Owner - Kape - Gagang Kayu.png',
          description: 'Kape (scrapper) dengan gagang kayu, alat esensial untuk membersihkan permukaan, mengerok cat lama, atau meratakan dempul.',
          specifications: [
            { key: 'Material', value: 'Plat Baja Fleksibel' },
            { key: 'Gagang', value: 'Kayu' },
          ],
          features: [
            { text: 'Plat Fleksibel' },
            { text: 'Serbaguna' },
          ],
          packagingDetails: [
            { size: '1.5 Inch', innerBox: 12, outerBox: 240 },
            { size: '2 Inch', innerBox: 12, outerBox: 240 },
          ],
        },
      ],
    },
    {
      id: 'door-lock-equipments',
      name: 'door lock equipments | Peralatan Kunci Pintu',
      image: '/images/doorlock owner.png', // Ganti dengan gambar Anda
      products: [
        {
          id: 'own-door-001',
          name: 'Silinder Kunci Pintu (Besar)',
          image: '/images/own/Owner - Silinder Kunci Pintu - Besar A.png', // Ganti dengan path gambar Anda
          description: 'Silinder kunci pintu ukuran besar dengan material kuningan untuk keamanan dan daya tahan maksimal. Dilengkapi dengan 3-5 anak kunci.',
          specifications: [
            { key: 'Material', value: 'Kuningan (Brass)' },
            { key: 'Ukuran', value: 'Besar (60mm)' },
            { key: 'Anak Kunci', value: '3-5 buah' },
          ],
          features: [
            { text: 'Material Anti Karat' },
            { text: 'Keamanan Tinggi' },
          ],
          packagingDetails: [
            { size: '60mm', innerBox: 1, outerBox: 120 },
          ],
        },
        {
          id: 'own-door-002',
          name: 'Body Kunci Lidah',
          image: '/images/own/Owner - Body Kunci - Lidah A.png',
          description: 'Body kunci (lockcase) tipe lidah untuk pintu single swing. Mekanisme presisi yang menjamin penguncian yang mulus dan aman.',
          specifications: [
            { key: 'Tipe', value: 'Lidah (Latch Bolt)' },
            { key: 'Material', value: 'Stainless Steel' },
            { key: 'Aplikasi', value: 'Pintu Kayu / Besi' },
          ],
          features: [
            { text: 'Mekanisme Mulus' },
            { text: 'Tahan Lama' },
          ],
          packagingDetails: [
            { size: 'Standard', innerBox: 1, outerBox: 50 },
          ],
        },
        {
          id: 'own-door-003',
          name: 'Body Kunci Pelor',
          image: '/images/own/Owner - Body Kunci - Pelor A.png',
          description: 'Body kunci (lockcase) tipe pelor (roller) untuk pintu double swing (pintu koboi). Roller memastikan pintu bisa ditutup dengan mudah dari kedua arah.',
          specifications: [
            { key: 'Tipe', value: 'Pelor (Roller Latch)' },
            { key: 'Material', value: 'Stainless Steel' },
            { key: 'Aplikasi', value: 'Pintu Double Swing' },
          ],
          features: [
            { text: 'Untuk Pintu Double Swing' },
            { text: 'Instalasi Mudah' },
          ],
          packagingDetails: [
            { size: 'Standard', innerBox: 1, outerBox: 50 },
          ],
        },
        {
          id: 'own-door-004',
          name: 'Engsel Pintu PVC (Thickness 2mm)',
          image: '/images/own/Owner - Engsel PVC Putih+Coklat+Baut A.png',
          description: 'Engsel berkualitas untuk pintu PVC atau pintu ringan lainnya. Ketebalan 2mm memberikan kekuatan ekstra dan anti-macet.',
          specifications: [
            { key: 'Material', value: 'Stainless Steel' },
            { key: 'Ketebalan', value: '2.0 mm' },
            { key: 'Ukuran', value: '4 Inch' },
          ],
          features: [
            { text: 'Material Tebal' },
            { text: 'Anti Macet & Karat' },
          ],
          packagingDetails: [
            { size: '4"', innerBox: 24, outerBox: 240 },
          ],
        },
        {
          id: 'own-door-005',
          name: 'Gembok Nickel (Pendek & Panjang)',
          image: '/images/own/Owner - Gembok Leher Pendek+Panjang+Kunci 60mm A.png',
          description: 'Gembok dengan finishing nickel yang elegan dan tahan karat. Tersedia dalam varian leher pendek untuk keamanan maksimal dan leher panjang untuk fleksibilitas.',
          specifications: [
            { key: 'Material', value: 'Besi dengan finishing Nickel' },
            { key: 'Tipe Leher', value: 'Pendek & Panjang' },
          ],
          features: [
            { text: 'Tahan Karat' },
            { text: 'Keamanan Terpercaya' },
          ],
          packagingDetails: [
            { size: '30mm (Pendek/Panjang)', innerBox: 12, outerBox: 120 },
            { size: '40mm (Pendek/Panjang)', innerBox: 12, outerBox: 120 },
          ],
        },
        {
          id: 'own-door-006',
          name: 'Gembok Segi (Rectangular Padlock)',
          image: '/images/own/Owner - Gembok Segi+Kunci 94mm A.png',
          description: 'Gembok segi empat (rectangular) untuk keamanan ekstra pada pintu harmonika, pagar, dan gudang. Desain kokoh yang sulit dirusak.',
          specifications: [
            { key: 'Bentuk', value: 'Segi Empat' },
            { key: 'Material', value: 'Baja Keras' },
          ],
          features: [
            { text: 'Desain Anti Rusak' },
            { text: 'Keamanan Ekstra' },
          ],
          packagingDetails: [
            { size: '50mm', innerBox: 6, outerBox: 60 },
            { size: '60mm', innerBox: 6, outerBox: 48 },
          ],
        },
      ],
    },
    {
      id: 'sanitary-equipments',
      name: 'sanitary equipments | Peralatan Sanitasi',
      image: '/images/sanitary owner.png', // Ganti dengan gambar Anda
      products: [
        { id: 'own-003', name: 'Kuas Cat 3"', image: '/images/produk-kuas.jpg' },
      ],
    },
    {
      id: 'safety-equipments',
      name: 'safety equipments | Peralatan Keselamatan',
      image: '/images/Safety Owner.png', // Ganti dengan gambar Anda
      products: [
        { id: 'own-003', name: 'Kuas Cat 3"', image: '/images/produk-kuas.jpg' },
      ],
    },
  ],
  yozuri: [
    {
      id: 'power-plumbing-tools',
      name: 'Power & Plumbing Tools | Peralatan Listrik & Perpipaan',
      image: '/images/Power & Plumbing Tools.png', // Ganti dengan gambar Anda
      products: [], // Isi dengan produk-produk yang sesuai
    },
    {
      id: 'diamond-wheels',
      name: 'Diamond Wheels | Mata Gerinda',
      image: '/images/Diamond Wheel.png',
      products: [],
    },
    {
      id: 'painting-tools',
      name: 'Painting Tools | Peralatan Cat',
      image: '/images/painting yozuri.png',
      products: [],
    },
    {
      id: 'drilling-tools',
      name: 'Drilling Tools | Peralatan Bor',
      image: '/images/drlling yozuri.png',
      products: [],
    },
    {
      id: 'bricklayering-plastering-tools',
      name: 'Bricklayering & Plastering Tools | Peralatan Tukang Batu & Plester',
      image: '/images/layering yozuri.png ',
      products: [],
    },
    {
      id: 'door-lock-equipments',
      name: 'Door Lock Equipments | Peralatan Kunci Pintu',
      image: '/images/doorlock yozuri.png',
      products: [],
    },
    {
      id: 'cutting-tools',
      name: 'Cutting Tools | Peralatan Potong',
      image: '/images/cutting yozuri.png',
      products: [
        { id: 'yoz-001', name: 'Mata Gerinda Potong 4"', image: '/images/produk-matagerinda.jpg' },
      ],
    },
    {
      id: 'measuring-layout-tools',
      name: 'Measuring & Layout Tools | Peralatan Ukur & Tata Letak',
      image: '/images/measuring yozuri.png',
      products: [],
    },
    {
      id: 'sanitary-equipments',
      name: 'Sanitary Equipments | Peralatan Sanitasi',
      image: '/images/sanitary yozuri.png',
      products: [],
    },
    {
      id: 'safety-equipments',
      name: 'Safety Equipments | Peralatan Keselamatan',
      image: '/images/safety yozuri.png',
      products: [],
    },
  ],
  helios: [
    // Tambahkan data untuk HELIOS di sini
  ],
};