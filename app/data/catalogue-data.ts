// app/data/catalogue-data.ts

// Definisikan tipe data untuk konsistensi
export type Product = {
  id: string;
  name: string;
  image: string;
  galleryImages?: string[];
  description?: string; // Deskripsi produk (opsional)
  specifications?: { key: string; value: string }[]; // Spesifikasi produk (opsional)
  variations?: { id: string; name: string; image: string }[];  // Spesifikasi produk (opsional)
  features?: { text: string }[];
  packagingDetails?: { size?: string; type?: string; innerBox?: string; outerBox?: string; }[];
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
      image: '/Images/Hand tools.png', // Ganti dengan gambar Anda
      // Di dalam catalogueData -> owner -> 'hand-power-tools'
      products: [
        {
          id: 'own-001',
          name: 'Palu Kambing Gerigi - Gagang Fiber',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Palu Kambing Gerigi Gagang Fiber.png',
          description: 'Palu kambing OWNER PRO series dengan kepala gerigi dirancang untuk daya cengkeram paku maksimal. Gagang fiber anti-slip memberikan kenyamanan dan keamanan ekstra saat digunakan.',
          specifications: [{ key: 'Ukuran Kepala', value: '8oz' }, { key: 'Material Gagang', value: 'Fiberglass' }],
          features: [{ text: 'Kepala gerigi anti-slip' }, { text: 'Gagang fiber peredam getaran' }],
          packagingDetails: [
            { size: '8 OZ / 0,23 Lbs', innerBox: '6 Pcs/box', outerBox: '60/ctn' },
            { size: '12 OZ / 0,375 Lbs', innerBox: '6 Pcs/box', outerBox: '48/ctn' },
            { size: '16 OZ / 0,50 Lbs', innerBox: '6 Pcs/box', outerBox: '36/ctn' },
          ],
          variations: [{ id: 'own-002', name: 'Palu Kambing Rata', image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Palu Kambing Polos Gagang Fiber.png' }]
        },
        {
          id: 'own-002',
          name: 'Palu Kambing - Gagang Fiber',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Palu Kambing Polos Gagang Fiber.png',
          description: 'Palu kambing serbaguna dengan kepala rata, cocok untuk berbagai keperluan pertukangan dan proyek DIY. Gagang fiber yang ringan dan kuat.',
          specifications: [{ key: 'Ukuran Kepala', value: '8oz' }, { key: 'Material Gagang', value: 'Fiberglass' }],
          features: [{ text: 'Kepala polos anti-gores' }, { text: 'Gagang fiber pukulan bertenaga' }],
          packagingDetails: [
            { size: '8 OZ / 0,23 Lbs', innerBox: '6 Pcs/box', outerBox: '60/ctn' },
            { size: '12 OZ / 0,375 Lbs', innerBox: '6 Pcs/box', outerBox: '48/ctn' },
            { size: '16 OZ / 0,50 Lbs', innerBox: '6 Pcs/box', outerBox: '36/ctn' },
          ],
          variations: [{ id: 'own-001', name: 'Palu Kambing Gerigi', image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Palu Kambing Gerigi Gagang Fiber.png' }]
        },
        {
          id: 'own-003',
          name: 'Palu Bodam - Tanpa Gagang',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Palu Bodem Tanpa Gagang.png',
          description: 'Palu bodam (sledgehammer) dari baja tempa berkualitas tinggi, ideal untuk pekerjaan penghancuran berat seperti membongkar beton dan dinding.',
          specifications: [{ key: 'Berat', value: '3 kg' }, { key: 'Material Kepala', value: 'Baja Tempa' }],
          features: [{ text: 'Baja tempa super kuat' }, { text: 'Siap pasang gagang custom' }],
          packagingDetails: [
            { size: '2 Lbs', innerBox: '-', outerBox: '40/ctn' },
            { size: '3 Lbs', innerBox: '-', outerBox: '24/ctn' },
            { size: '6 Lbs', innerBox: '-', outerBox: '12/ctn' },
            { size: '8 Lbs', innerBox: '-', outerBox: '10/ctn' },
            { size: '10 Lbs', innerBox: '-', outerBox: '8/ctn' },
            { size: '12 Lbs', innerBox: '-', outerBox: '6/ctn' },
            { size: '14 Lbs', innerBox: '-', outerBox: '6/ctn' },
            { size: '16 Lbs', innerBox: '-', outerBox: '4/ctn' },
          ],
        },
        {
          id: 'own-004',
          name: 'Kabel Ties - Hitam & Putih',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Kabel Ties.png',
          description: 'Kabel ties serbaguna berbahan nilon kuat untuk mengikat dan merapikan kabel, selang, atau keperluan lainnya. Tahan lama dan tidak mudah putus.',
          specifications: [{ key: 'Material', value: 'Nilon 66' }, { key: 'Warna', value: 'Hitam, Putih' }],
          features: [{ text: 'Material nilon alot, anti-putus' }, { text: 'Pengunci presisi, anti-melorot' }],
          packagingDetails: [
            { size: '2,5x100 mm', innerBox: '10 Pax / Pouch', outerBox: '300 Pax / Pouch' },
            { size: '3,6x150 mm', innerBox: '10 Pax / Pouch', outerBox: '300 Pax / Pouch' },
            { size: '3,6x200 mm', innerBox: '10 Pax / Pouch', outerBox: '250 Pax / Pouch' },
            { size: '3,6x250 mm', innerBox: '10 Pax / Pouch', outerBox: '200 Pax / Pouch' },
            { size: '4,8x300 mm', innerBox: '10 Pax / Pouch', outerBox: '100 Pax / Pouch' },
            { size: '4,8x400 mm', innerBox: '10 Pax / Pouch', outerBox: '100 Pax / Pouch' },
          ],
        },
        {
          id: 'own-005',
          name: 'Diamond Wheel Dry',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Diamond Wheel Dry.png',
          description: 'Mata gerinda potong keramik tipe kering (dry) yang dirancang untuk pemotongan presisi dan cepat pada berbagai jenis keramik, granit, dan marmer.',
          specifications: [{ key: 'Tipe', value: 'Kering (Dry Cut)' }, { key: 'Diameter', value: '4 inch' }],
          features: [{ text: 'Potongan kering cepat & awet' }, { text: 'Untuk potong beton & bata' }],
          packagingDetails: [
            { size: '4 Inch', innerBox: '10 Pcs / box', outerBox: '200 Pcs / Ctn' },
          ],
          variations: [{ id: 'own-006', name: 'Diamond Wheel Turbo', image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Diamond Wheel Turbo Type X & K.png' }]
        },
        {
          id: 'own-006',
          name: 'Diamond Wheel Turbo',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Diamond Wheel Turbo Type X & K.png',
          description: 'Mata gerinda potong serbaguna dengan desain turbo rim untuk pendinginan lebih baik dan pemotongan yang lebih agresif. Cocok untuk beton dan batu alam.',
          specifications: [{ key: 'Tipe', value: 'Turbo Rim' }, { key: 'Diameter', value: '4 inch' }],
          features: [{ text: 'Desain Turbo, potong lebih cepat' }, { text: 'Mengurangi gompal (anti-chip)' }],
          packagingDetails: [
            { size: '4 Inch', innerBox: '10 Pcs / box', outerBox: '200 Pcs / Ctn' },
          ],
          variations: [{ id: 'own-005', name: 'Diamond Wheel Dry', image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Diamond Wheel Dry.png' }]
        },
        {
          id: 'own-007',
          name: 'Tali Rafia',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Tali Rafia 1 Kg.png',
          description: 'Tali rafia berkualitas tinggi, kuat, dan tidak mudah berserabut. Cocok untuk berbagai keperluan pengemasan, pengikatan, dan kerajinan tangan.',
          specifications: [{ key: 'Warna', value: 'Hitam' }, { key: 'Berat Gulungan', value: '1 kg' }],
          features: [{ text: 'Plastik super liat, anti-putus' }, { text: 'Gulungan panjang lebih hemat' }],
          packagingDetails: [
            { size: '1 KG', innerBox: '-', outerBox: '15 Roll / ctn' },
          ],
        },
        {
          id: 'own-008',
          name: 'Lakban - Adhesive Tapes',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Adhesive Tapes.png',
          description: 'Lakban perekat serbaguna dengan daya rekat kuat, ideal untuk pengepakan kardus, penyegelan, dan berbagai keperluan rumah tangga maupun industri.',
          specifications: [{ key: 'Warna', value: 'Coklat' }, { key: 'Lebar', value: '2 inch (48mm)' }],
          features: [{ text: 'Daya rekat super kuat' }, { text: 'Bahan tebal, anti-sobek' }],
          packagingDetails: [
            { type: 'BENING | 40 YD & 85 YD', innerBox: '6 Roll / Pack', outerBox: '72 Pcs / Ctn' },
            { type: 'COKLAT | 85 YD', innerBox: '6 Roll / Pack', outerBox: '72 Pcs / Ctn' },
            { type: 'HITAM | 4 M', innerBox: '-', outerBox: '72 Pcs / Ctn' },
            { type: 'KERTAS | 1"x10 M', innerBox: '-', outerBox: '72 Pcs / Ctn' },
            { type: 'KERTAS | 2"x10 M', innerBox: '-', outerBox: '72 Pcs / Ctn' },
            { type: 'HIJAU | 5 M DOUBLE TAPE', innerBox: '-', outerBox: '126 Pcs / Ctn' },
          ],
        },
      ],
    },
    {
      id: 'painting-tools',
      name: 'Painting Tools | Peralatan Cat',
      image: '/Images/Painting Tools.png', // Ganti dengan gambar Anda
      // Di dalam catalogueData -> owner -> kategori 'painting-tools'
      products: [
        {
          id: 'own-paint-001',
          name: 'Kuas Roll Copot 9 Inch',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Kuas Roll Copot 9 Inch.png', // TIDAK DIUBAH
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
            { size: '9 Inch', innerBox: '-', outerBox: '24 Pcs / Ctn' }, // SUDAH DIUBAH
          ],
        },
        {
          id: 'own-paint-003',
          name: 'Bulu Kuas Roll 9 Inch',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Bulu Roll Copot 9 Inch.png', // TIDAK DIUBAH
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
            { size: '9 Inch', innerBox: '-', outerBox: '24 Pcs / Ctn' }, // SUDAH DIUBAH
          ],
        },
        {
          id: 'own-paint-004',
          name: 'Bulu Roll Domba 4 Inch',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Bulu Roll Domba 4 Inch.png', // TIDAK DIUBAH
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
            { size: '4 Inch', innerBox: '12 Pcs / Box', outerBox: '1.200 Pcs / Ctn' }, // SUDAH DIUBAH
          ],
        },
        {
          id: 'own-paint-005',
          name: 'Bulu Roll Garis 4 Inch',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Bulu Roll Garis 4 Inch.png', // TIDAK DIUBAH
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
            { size: '4 Inch', innerBox: '12 Pcs / Box', outerBox: '1.200 Pcs / Ctn' }, // SUDAH DIUBAH
            { size: '4 Inch', innerBox: '10 Pcs / Box', outerBox: '1.200 Pcs / Ctn' },
          ],
        },
        {
          id: 'own-paint-006',
          name: 'Kuas Cat 633',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Kuas Cat 633.png', // TIDAK DIUBAH
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
            { size: '1 Inch', innerBox: '12 Pcs / Box', outerBox: '1.200 Pcs / Ctn' }, // SUDAH DIUBAH
            { size: '1.5 Inch', innerBox: '12 Pcs / Box', outerBox: '960 Pcs / Ctn' }, // SUDAH DIUBAH
            { size: '2 Inch', innerBox: '12 Pcs / Box', outerBox: '720 Pcs / Ctn' }, // SUDAH DIUBAH
            { size: '2,5 Inch', innerBox: '12 Pcs / Box', outerBox: '480 Pcs / Ctn' },
            { size: '3 Inch', innerBox: '12 Pcs / Box', outerBox: '360 Pcs / Ctn' },
            { size: '4 Inch', innerBox: '12 Pcs / Box', outerBox: '240 Pcs / Ctn' },
          ],
        },
        {
          id: 'own-paint-007',
          name: 'Kuas Roll Copot 4 Inch',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Kuas Roll Copot 4 Inch.png', // TIDAK DIUBAH
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
            { type: 'DOMBA', innerBox: '12 Pcs / Pack', outerBox: '120 Pcs / Ctn' }, // SUDAH DIUBAH
             { type: 'GARIS', innerBox: '12 Pcs / Pack', outerBox: '120 Pcs / Ctn' },
          ],
        },
      ],
    },
    {
      id: 'layering-tools',
      name: 'Plastering & Layering Tools | Peralatan plester & Pelapis',
      image: '/Images/layering owner.png', // Ganti dengan gambar Anda
      // Di dalam catalogueData -> owner -> kategori 'layering-tools'
      // Di dalam catalogueData -> owner -> kategori 'layering-tools'
      products: [
        {
          id: 'own-layer-001',
          name: 'Siku Rak',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Siku Rak.png',
          description: 'Siku rak besi tebal untuk menopang ambalan dinding dengan kokoh. Ideal untuk kebutuhan rumah tangga, gudang, dan display toko.',
          specifications: [
            { key: 'Material', value: 'Besi' },
            { key: 'Ketebalan', value: '3mm' },
            { key: 'Warna', value: 'Putih / Hitam' },
          ],
          features: [
            { text: 'Kuat Beban Maksimal ' },
            { text: 'Anti Karat' },
          ],
          packagingDetails: [
            { size: '5x6 Inch', innerBox: '24 Pcs / Box', outerBox: '144 Pcs / Ctn' },
            { size: '6x8 Inch', innerBox: '24 Pcs / Box', outerBox: '144 Pcs / Ctn' },
            { size: '8x10 Inch', innerBox: '24 Pcs / Box', outerBox: '72 Pcs / Ctn' },
            { size: '10x12 Inch', innerBox: '24 Pcs / Box', outerBox: '72 Pcs / Ctn' },
            { size: '12x14 Inch', innerBox: '24 Pcs / Box', outerBox: '72 Pcs / Ctn' },
          ],
        },
        {
          id: 'own-layer-002',
          name: 'Siku Lubang Tebal',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Siku Lubang Tebal.png',
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
            { size: '36mm x 36mm x 3m | PUTIH 16 kg', innerBox: '-', outerBox: '10 Bars / Box' },
            { size: '36mm x 36mm x 3m | ABU 16 kg', innerBox: '-', outerBox: '10 Bars / Box' },
            { size: '36mm x 36mm x 3m | MERAH 16 kg', innerBox: '-', outerBox: '10 Bars / Box' },
            { size: '36mm x 36mm x 3m | HAMMERTONE 16 kg', innerBox: '-', outerBox: '10 Bars / Box' },
          ],
        },
        {
          id: 'own-layer-004',
          name: 'Sikat Kawat',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Sikat Kawat.png',
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
            { type: '5 Row', innerBox: '12 Pcs / Ctn', outerBox: '180 Pcs / Ctn' },
            { type: '6 Row', innerBox: '12 Pcs / Ctn', outerBox: '180 Pcs / Ctn' },
          ],
        },
        {
          id: 'own-layer-005',
          name: 'Fissher',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Fissher.png',
          description: 'Fissher (wall plug) berkualitas tinggi untuk pemasangan sekrup yang kuat dan aman pada dinding tembok atau beton.',
          specifications: [
            { key: 'Material', value: 'Plastik (Nylon)' },
            { key: 'Tipe', value: 'Standard' },
          ],
          features: [
            { text: 'Cengkeraman Kuat' },
            { text: 'Tahan tekanan tinggi' },
            { text: 'Mudah dipasang dengan cepat' },
          ],
          packagingDetails: [
            { type: 'S5', innerBox: '100 Pcs / Box', outerBox: '200 Pcs / Ctn' },
            { type: 'S6', innerBox: '100 Pcs / Box', outerBox: '200 Pcs / Ctn' },
            { type: 'S8', innerBox: '100 Pcs / Box', outerBox: '100 Pcs / Ctn' },
            { type: 'S10', innerBox: '50 PCs / Box', outerBox: '120 Pcs / Ctn' },
            { type: 'S12', innerBox: '50 PCs / Box', outerBox: '120 Pcs / Ctn' },
          ],
          variations: [
            { id: 'own-layer-006', name: 'Fissher + Sekrup Set', image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Fissher+Sekrup.png' },
          ]
        },
        {
          id: 'own-layer-006',
          name: 'Fissher + Sekrup Set',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Fissher+Sekrup.png',
          description: 'Paket lengkap fissher dan sekrup yang sudah serasi ukurannya, memudahkan pemasangan gantungan atau rak di dinding.',
          specifications: [
            { key: 'Isi Paket', value: 'Fissher + Sekrup' },
            { key: 'Kepala Sekrup', value: 'Plus (+)' },
          ],
          features: [
            { text: 'Cengkeraman Kuat' },
            { text: 'Tahan tekanan tinggi' },
            { text: 'Mudah dipasang dengan cepat' },
          ],
          packagingDetails: [
            { type: 'S5', innerBox: '25 Pcs / Pack', outerBox: '240 Pcs / Box' },
            { type: 'S6', innerBox: '25 Pcs / Pack', outerBox: '240 Pcs / Box' },
            { type: 'S8', innerBox: '25 Pcs / Pack', outerBox: '200 Pcs / Box' },
            { type: 'S10', innerBox: '10 PCs / Pack', outerBox: '200 Pcs / Box' },
            { type: 'S12', innerBox: '10 PCs / Pack', outerBox: '200 Pcs / Box' },
          ],
          variations: [
            { id: 'own-layer-005', name: 'Fissher', image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Fissher.png' },
          ]
        },
        {
          id: 'own-layer-007',
          name: 'Gerobak Sorong - PVC (9kg)',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Gerobak Sorong Bak PVC 9 Kg.png',
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
            { type: 'Ban Hidup', innerBox: '-', outerBox: '10 Set' },
            { type: 'Ban Mati', innerBox: '-', outerBox: '10 Set' },
          ],
          variations: [
            { id: 'own-layer-012', name: 'Gerobak Sorong - BESI (9kg)', image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Gerobak Sorong Bak Besi 9 Kg.png' },
          ]
        },
        {
          id: 'own-layer-012',
          name: 'Gerobak Sorong - BESI (9kg)',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Gerobak Sorong Bak Besi 9 Kg.png',
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
            { type: 'Ban Hidup', innerBox: '-', outerBox: '10 Set' },
            { type: 'Ban Mati', innerBox: '-', outerBox: '10 Set' },
          ],
          variations: [
            { id: 'own-layer-007', name: 'Gerobak Sorong - PVC (9kg)', image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Gerobak Sorong Bak PVC 9 Kg.png' },
          ]
        },
        {
          id: 'own-layer-008',
          name: 'Amplas Roll PREMIUM',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Amplas Roll PREMIUM.png',
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
            { size: '60 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
            { size: '80 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
            { size: '100 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
            { size: '120 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
            { size: '150 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
            { size: '180 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
            { size: '240 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
            { size: '320 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
            { size: '400 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
          ],
          variations: [
            { id: 'own-layer-009', name: 'Amplas Roll 98', image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Amplas Roll 98.png' },
          ]
        },
        {
          id: 'own-layer-009',
          name: 'Amplas Roll 98',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Amplas Roll 98.png',
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
            { size: '60 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
            { size: '80 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
            { size: '100 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
            { size: '120 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
            { size: '150 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
            { size: '180 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
            { size: '240 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
            { size: '320 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
            { size: '400 Grit', innerBox: '-', outerBox: '5 Roll / Ctn' },
          ],
          variations: [
            { id: 'own-layer-008', name: 'Amplas Roll PREMIUM', image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Amplas Roll PREMIUM.png' },
          ]
        },
        {
          id: 'own-layer-010',
          name: 'Sendok Semen Lancip - Gagang Kayu',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Sendok Semen Lancip Gagang Kayu.png',
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
            { size: '6 Inch', innerBox: '12 Pcs / Ctn', outerBox: '120 Pcs / Ctn' },
            { size: '7 Inch', innerBox: '12 Pcs / Ctn', outerBox: '120 Pcs / Ctn' },
            { size: '8 Inch', innerBox: '12 Pcs / Ctn', outerBox: '120 Pcs / Ctn' },
          ],
        },
        {
          id: 'own-layer-011',
          name: 'Kape - Gagang Kayu',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Kape Gagang Kayu.png',
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
            { size: '1.5 Inch', innerBox: '12 Pcs / Box', outerBox: '240 Pcs / Ctn' },
            { size: '2 Inch', innerBox: '12 Pcs / Box', outerBox: '240 Pcs / Ctn' },
            { size: '2,5 Inch', innerBox: '12 Pcs / Box', outerBox: '240 Pcs / Ctn' },
            { size: '3 Inch', innerBox: '12 Pcs / Box', outerBox: '240 Pcs / Ctn' },
            { size: '4 Inch', innerBox: '12 Pcs / Box', outerBox: '240 Pcs / Ctn' },
          ],
        },
        {
          id: 'own-layer-013',
          name: 'PAHAT TOPI PLAT - CONCRETE CHISEL',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Pahat Topi Plat.png',
          description: 'Kape (scrapper) dengan gagang kayu, alat esensial untuk membersihkan permukaan, mengerok cat lama, atau meratakan dempul.',
          specifications: [
            { key: 'Material', value: 'Plat Baja Fleksibel' },
            { key: 'Gagang', value: 'Kayu' },
          ],
          features: [
            { text: 'Material Baja Kuat' },
            { text: 'Nyaman Digunakan' },
          ],
          packagingDetails: [
            { size: '8 Inch (-)', innerBox: '12 Pcs / Box', outerBox: '72 Pcs / Ctn' },
            { size: '10 Inch (-)', innerBox: '12 Pcs / Box', outerBox: '72 Pcs / Ctn' },
            { size: '12 Inch (-)', innerBox: '12 Pcs / Box', outerBox: '72 Pcs / Ctn' },
          ],
        },
        {
          id: 'own-layer-014',
          name: 'SIKAT KAWAT MANGKOK - WIRE BRUSH CUP',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Sikat Kawat Mangkok.png',
          description: 'Kape (scrapper) dengan gagang kayu, alat esensial untuk membersihkan permukaan, mengerok cat lama, atau meratakan dempul.',
          specifications: [
            { key: 'Material', value: 'Plat Baja Fleksibel' },
            { key: 'Gagang', value: 'Kayu' },
          ],
          features: [
            { text: 'Membersihkan karat & kerak super cepat' },
            { text: 'Kawat baja kuat' },
          ],
          packagingDetails: [
            { size: '3 Inch', innerBox: '1 Pcs / Box', outerBox: '100 Pcs / Ctn' },
          ],
        },
        {
          id: 'own-layer-015',
          name: 'BATU ASAH',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Batu Asah 6 Inch & 8 Inch.png',
          description: 'Kape (scrapper) dengan gagang kayu, alat esensial untuk membersihkan permukaan, mengerok cat lama, atau meratakan dempul.',
          specifications: [
            { key: 'Material', value: 'Plat Baja Fleksibel' },
            { key: 'Gagang', value: 'Kayu' },
          ],
          features: [
            { text: 'Pengasahan Cepat' },
            { text: 'Dua Sisi' },
          ],
          packagingDetails: [
            { size: '6 Inch', innerBox: '1 Pcs / Box', outerBox: '50 Pcs / Ctn' },
            { size: '8 Inch', innerBox: '1 Pcs / Box', outerBox: '50 Pcs / Ctn' },
          ],
        },
      ],
    },
    {
      id: 'door-lock-equipments',
      name: 'door lock equipments | Peralatan Kunci Pintu',
      image: '/Images/doorlock owner.png', // Ganti dengan gambar Anda
      // Di dalam catalogueData -> owner -> kategori 'door-lock-equipments'
      products: [
        {
          id: 'own-door-001',
          name: 'Silinder Kunci Pintu (Besar)',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Silinder Kunci Pintu Besar.png',
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
            { type: '4 Kunci', innerBox: '12 Sets / Box', outerBox: '120 Pcs / Ctn' },
          ],
        },
        {
          id: 'own-door-002',
          name: 'Body Kunci Lidah',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Bodi Kunci Lidah.png',
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
            { type: '-', innerBox: '1 Set / Box', outerBox: '30 Sets / Ctn' },
          ],
        },
        {
          id: 'own-door-003',
          name: 'Body Kunci Pelor',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Bodi Kunci Pelor.png',
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
            { type: '-', innerBox: '1 Set / Box', outerBox: '30 Sets / Ctn' },
          ],
        },
        {
          id: 'own-door-004',
          name: 'Engsel Pintu PVC - Thickness 2mm',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Engsel Pintu PVC.png',
          description: 'Engsel berkualitas untuk pintu PVC atau pintu ringan lainnya. Ketebalan 2mm memberikan kekuatan ekstra dan anti-macet.',
          specifications: [
            { key: 'Material', value: 'Stainless Steel' },
            { key: 'Ketebalan', value: '2.0 mm' },
            { key: 'Ukuran', value: '4 Inch' },
          ],
          features: [
            { text: 'Material Tebal' },
            { text: 'Anti Macet' },
          ],
          packagingDetails: [
            { type: '4 Inch', innerBox: '12 Sets / Box', outerBox: '480 Pcs / Ctn' },
          ],
        },
        {
          id: 'own-door-005',
          name: 'Gembok Nickel - Pendek & Panjang',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Gembok Nickel Leher Pendek & Panjang.png',
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
            { size: '30 mm', innerBox: '12 Pcs / Box', outerBox: '144 Pcs / Ctn' },
            { size: '40 mm', innerBox: '12 Pcs / Box', outerBox: '96 Pcs / Ctn' },
            { size: '50 mm', innerBox: '12 Pcs / Box', outerBox: '72 Pcs / Ctn' },
            { size: '60 mm', innerBox: '12 Pcs / Box', outerBox: '48 Pcs / Ctn' },
          ],
        },
        {
          id: 'own-door-006',
          name: 'Gembok Segi - Rectangular Padlock',
          image: '/Images/own/PT STS - OWNER - Web Design - Catalogue - Gembok Segi.png',
          description: 'Gembok segi empat (rectangular) untuk keamanan ekstra pada pintu harmonika, pagar, dan gudang. Desain kokoh yang sulit dirusak.',
          specifications: [
            { key: 'Bentuk', value: 'Segi Empat' },
            { key: 'Material', value: 'Baja Keras' },
          ],
          features: [
            { text: 'Bodi kokoh' },
            { text: 'Tingkat keamanan tinggi' },
            { text: 'Mekanisme kunci presisi' },
          ],
          packagingDetails: [
            { size: '74 mm', innerBox: '6 Pcs / Box', outerBox: '24 Pcs / Ctn' },
            { size: '84 mm', innerBox: '6 Pcs / Box', outerBox: '24 Pcs / Ctn' },
            { size: '94 mm', innerBox: '6 Pcs / Box', outerBox: '24 Pcs / Ctn' },
          ],
        },
      ],
    },
    {
      id: 'sanitary-equipments',
      name: 'sanitary equipments | Peralatan Sanitasi',
      image: '/Images/sanitary owner.png', // Ganti dengan gambar Anda
      // Di dalam catalogueData -> owner -> kategori 'sanitary-equipments'
      // Di dalam catalogueData -> owner -> kategori 'sanitary-equipments'
      products: [
        {
          id: 'own-sanitary-001',
          name: 'Kran Shower',
          image: '/Images/own/Owner - Kran Shower - Tipe F+Tipe T A.png',
          description: 'Kran shower minimalis dengan handle ergonomis untuk kontrol suhu dan aliran air yang mudah. Dilapisi chrome berkualitas tinggi yang anti karat.',
          specifications: [
            { key: 'Material', value: 'Kuningan Lapis Chrome' },
            { key: 'Instalasi', value: 'Dinding' },
          ],
          features: [
            { text: 'Desain Modern & Minimalis' },
            { text: 'Anti Karat & Tahan Lama' },
          ],
          packagingDetails: [
            { type: 'Tipe F | 1 Cabang', innerBox: '80 Pcs / Box', outerBox: '160 Pcs / Box' },
            { type: 'Tipe T | 2 Cabang', innerBox: '80 Pcs / Box', outerBox: '160 Pcs / Box' },
          ],
        },
        {
          id: 'own-sanitary-002',
          name: 'Kran Angsa Fleksibel - Terompet',
          image: '/Images/own/Owner - Kran - Angsa Fleksibel - Terompet.png',
          description: 'Kran wastafel model angsa dengan leher fleksibel yang bisa diputar 360 derajat. Kepala output model terompet untuk aliran air yang lebih menyebar.',
          specifications: [
            { key: 'Model Leher', value: 'Fleksibel' },
            { key: 'Model Kepala', value: 'Terompet' },
            { key: 'Material', value: 'Stainless Steel' },
          ],
          features: [
            { text: 'Leher Fleksibel 360°' },
            { text: 'Instalasi Mudah' },
          ],
          packagingDetails: [
            { type: 'Hitam | Dinding', innerBox: '6 Pcs / Box', outerBox: '54 Pcs / Ctn' },
            { type: 'Silver | Dinding', innerBox: '6 Pcs / Box', outerBox: '54 Pcs / Ctn' },
          ],
          variations: [
            { id: 'own-sanitary-003', name: 'Kran Angsa Fleksibel - Bulat', image: '/Images/own/Owner - Kran - Angsa Fleksibel - Bulat.png' },
          ]
        },
        {
          id: 'own-sanitary-003',
          name: 'Kran Angsa Fleksibel - Bulat',
          image: '/Images/own/Owner - Kran - Angsa Fleksibel - Bulat.png',
          description: 'Kran wastafel model angsa dengan leher fleksibel dan kepala output bulat yang menghasilkan aliran air terfokus. Cocok untuk bak cuci piring.',
          specifications: [
            { key: 'Model Leher', value: 'Fleksibel' },
            { key: 'Model Kepala', value: 'Bulat' },
            { key: 'Material', value: 'Stainless Steel' },
          ],
          features: [
            { text: 'Leher Fleksibel 360°' },
            { text: 'Aliran Air Terfokus' },
          ],
          packagingDetails: [
            { type: 'Hitam | Dinding', innerBox: '8 Pcs / Box', outerBox: '72 Pcs / Carbon' },
            { type: 'Silver | Dinding', innerBox: '8 Pcs / Box', outerBox: '72 Pcs / Carbon' },
          ],
          variations: [
            { id: 'own-sanitary-002', name: 'Kran Angsa Fleksibel - Terompet', image: '/Images/own/Owner - Kran - Angsa Fleksibel - Terompet.png' },
          ]
        },
        {
          id: 'own-sanitary-004',
          name: 'Kran Angsa PVC',
          image: '/Images/own/Owner - Kran Angsa - PVC A.png',
          description: 'Kran angsa ekonomis berbahan PVC tebal yang anti korosi dan ringan. Pilihan praktis untuk dapur atau area cuci.',
          specifications: [
            { key: 'Material', value: 'PVC' },
            { key: 'Model Leher', value: 'Statis' },
          ],
          features: [
            { text: 'Anti Korosi & Ringan' },
            { text: 'Harga Ekonomis' },
          ],
          packagingDetails: [
            { type: 'Engkol | 1/2 - 3/4 Inch', innerBox: '6 Pcs / Box', outerBox: '72 Pcs / Ctn' },
            { type: 'Bulat | 1/2 - 3/4 Inch', innerBox: '6 Pcs / Box', outerBox: '72 Pcs / Ctn' },
          ],
        },
        {
          id: 'own-sanitary-005',
          name: 'Kran Cabang',
          image: '/Images/own/Owner - Kran Cabang - Engkol.png',
          description: 'Kran cabang (double tap) untuk menghubungkan dua selang sekaligus, misalnya untuk shower dan keran biasa. Efisien dan praktis.',
          specifications: [
            { key: 'Material', value: 'Babet Lapis Chrome' },
            { key: 'Jumlah Output', value: '2' },
          ],
          features: [
            { text: 'Output Ganda' },
            { text: 'Hemat Ruang' },
          ],
          packagingDetails: [
            { type: 'Engkol | 1/2 - 3/4 Inch', innerBox: '10 Pcs / Box', outerBox: '80 Pcs / Ctn' },
          ],
        },
        {
          id: 'own-sanitary-006',
          name: 'Seal Tape 100% P.T.F.E',
          image: '/Images/own/Owner - Seal Tape PTFE - White A.png',
          description: 'Seal tape berkualitas tinggi terbuat dari 100% P.T.F.E murni untuk mencegah kebocoran pada sambungan pipa drat.',
          specifications: [
            { key: 'Material', value: '100% P.T.F.E' },
            { key: 'Panjang', value: '10 Meter' },
          ],
          features: [
            { text: 'Mencegah Kebocoran' },
            { text: 'Fleksibel & Kuat' },
          ],
          packagingDetails: [
            { type: '1/2 Inch x 10 Meter', innerBox: '60 Pcs / Box', outerBox: '1.200 Pcs / Ctn' },
          ],
        },
        {
          id: 'own-sanitary-007',
          name: 'Ball Valve PVC',
          image: '/Images/own/Owner - Ball Valve - Grey&Red.png',
          description: 'Ball valve (stop kran) PVC untuk membuka dan menutup aliran air dengan cepat. Awet, tahan tekanan, dan tidak mudah macet.',
          specifications: [
            { key: 'Material', value: 'PVC' },
            { key: 'Handle', value: 'Tuas' },
          ],
          features: [
            { text: 'Buka/Tutup Aliran Cepat' },
            { text: 'Anti Macet' },
          ],
          packagingDetails: [
            { size: '1/2 Inch', innerBox: '24 Pcs / Box', outerBox: '240 Pcs / Ctn' },
            { size: '3/4 Inch', innerBox: '24 Pcs / Box', outerBox: '192 Pcs / Ctn' },
            { size: '1 Inch', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
          ],
        },
        {
          id: 'own-sanitary-008',
          name: 'Lem Sealant Botol - Acetic',
          image: '/Images/own/Owner - Lem Sealant Botol C.png',
          description: 'Lem sealant silikon tipe acetic serbaguna dalam kemasan botol. Cocok untuk mengisi celah pada kaca, keramik, dan berbagai material lainnya. Cepat kering dan kedap air.',
          specifications: [
            { key: 'Tipe', value: 'Acetic Silicone Sealant' },
            { key: 'Warna', value: 'Bening (Clear)' },
            { key: 'Volume', value: '300ml' },
          ],
          features: [
            { text: 'Kedap Air' },
            { text: 'Cepat Kering' },
          ],
          packagingDetails: [
            { type: 'Bening', innerBox: '-', outerBox: '24 Bottles / Ctn' },
            { type: 'Hitam', innerBox: '-', outerBox: '24 Bottles / Ctn' },
            { type: 'Putih', innerBox: '-', outerBox: '24 Bottles / Ctn' },
          ],
        },
        {
          id: 'own-sanitary-009',
          name: 'Kran Taman - Bening PVC',
          image: '/Images/own/Owner - Kran - Transparan PVC Engkol+Topi A.png',
          description: 'Kran taman berbahan PVC transparan yang unik dan modern. Tahan cuaca dan tekanan, cocok untuk penggunaan luar ruangan.',
          specifications: [
            { key: 'Material', value: 'PVC Transparan' },
            { key: 'Aplikasi', value: 'Taman / Luar Ruangan' },
          ],
          features: [
            { text: 'Desain Transparan Unik' },
            { text: 'Tahan Cuaca' },
          ],
          packagingDetails: [
            { type: 'Engkol | 1/2 - 3/4 Inch', innerBox: '24 Pcs / Box', outerBox: '480 Pcs / Ctn' },
            { type: 'Topi | 1/2 - 3/4 Inch', innerBox: '24 Pcs / Box', outerBox: '480 Pcs / Ctn' },
          ],
        },
      ],
    },
    {
      id: 'safety-equipments',
      name: 'safety equipments | Peralatan Keselamatan',
      image: '/Images/Safety Owner.png', // Ganti dengan gambar Anda
      // Di dalam catalogueData -> owner -> kategori 'safety-equipments'
      // Di dalam catalogueData -> owner -> kategori 'safety-equipments'
      products: [
        {
          id: 'own-safety-001',
          name: 'Kacamata Proyek - Safety Glasses',
          image: '/Images/own/Owner - Kacamata Safety - Bening+Hitam A.png',
          description: 'Kacamata pengaman untuk melindungi mata dari debu, serpihan, dan partikel berbahaya saat bekerja. Lensa polikarbonat jernih dan anti gores.',
          specifications: [
            { key: 'Material Lensa', value: 'Polikarbonat' },
            { key: 'Warna', value: 'Bening (Clear)' },
            { key: 'Standar', value: 'ANSI Z87.1' },
          ],
          features: [
            { text: 'Perlindungan Maksimal' },
            { text: 'Anti Gores & Anti Kabut' },
            { text: 'Nyaman Digunakan' },
          ],
          packagingDetails: [
            { type: 'Bening', innerBox: '12 Pcs / Box', outerBox: '480 Pcs / Ctn' },
            { type: 'Hitam', innerBox: '12 Pcs / Box', outerBox: '480 Pcs / Ctn' },
          ],
        },
        {
          id: 'own-safety-002',
          name: 'Sepatu Boots Hitam - Safety Rubber Boots',
          image: '/Images/own/Owner - Safety Rubber Boots.png',
          description: 'Sepatu boots pengaman berbahan karet tebal yang tahan air dan anti slip. Memberikan perlindungan dari genangan air, lumpur, dan benda tajam.',
          specifications: [
            { key: 'Material', value: 'Karet (Rubber)' },
            { key: 'Warna', value: 'Hitam' },
            { key: 'Fitur', value: 'Anti Air & Anti Slip' },
          ],
          features: [
            { text: '100% Tahan Air' },
            { text: 'Sol Anti Slip' },
            { text: 'Bahan Karet Tebal' },
          ],
          packagingDetails: [
            { size: '39-43', innerBox: '-', outerBox: '12 Pairs / Ctn' },
          ],
        },
      ],
    },
  ],
  yozuri: [
    {
      id: 'power-plumbing-tools',
      name: 'Hand & Plumbing Tools | Peralatan Listrik & Perpipaan',
      image: '/Images/Power & Plumbing Tools.png', // Ganti dengan gambar Anda
      // Di dalam catalogueData -> yozuri -> kategori 'power-plumbing-tools'
        products: [
        {
          id: 'yoz-plumb-001',
          name: 'Kunci Inggris',
          image: '/Images/yozuri/Yo-Zuri - Kunci Inggris A.png', // Ganti dengan path gambar Anda
          description: 'Kunci inggris (adjustable wrench) presisi tinggi dari Yo-Zuri, terbuat dari Chrome Vanadium untuk kekuatan ekstra dan anti karat.',
          specifications: [
            { key: 'Material', value: 'Chrome Vanadium Steel' },
            { key: 'Finishing', value: 'Satin' },
          ],
          features: [
            { text: 'Rahang Presisi & Kuat' },
            { text: 'Anti Karat' },
            { text: 'Adjustable' },
          ],
          packagingDetails: [
            { size: '8 Inch', innerBox: '6 Pcs / Box', outerBox: '120 Pcs / Ctn' },
            { size: '10 Inch', innerBox: '6 Pcs / Box', outerBox: '60 Pcs / Ctn' },
            { size: '12 Inch', innerBox: '6 Pcs / Box', outerBox: '48 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-plumb-002',
          name: 'Palu Bodem - Gagang Fiber',
          image: '/Images/yozuri/Yo-Zuri - Palu Bodem - 6 Lbs B.png',
          description: 'Palu bodem Yo-Zuri dengan gagang fiberglass yang ringan namun sangat kuat, efektif meredam getaran saat digunakan untuk pekerjaan berat.',
          specifications: [
            { key: 'Material Kepala', value: 'Baja Karbon Tempa' },
            { key: 'Material Gagang', value: 'Fiberglass' },
          ],
          features: [
            { text: 'Gagang Fiber' },
            { text: 'Kekuatan Maksimal' },
            { text: 'Kuat, tahan getaran, dan awet' },
          ],
          packagingDetails: [
            { size: '32 0z / 2 Lbs', innerBox: '6 Pcs / Box', outerBox: '24 Pcs / Ctn' },
            { size: '48 0z / 3 Lbs', innerBox: '6 Pcs / Box', outerBox: '12 Pcs / Ctn' },
            { size: '64 0z / 4 Lbs', innerBox: '6 Pcs / Box', outerBox: '12 Pcs / Ctn' },
            { size: '96 0z / 6 Lbs', innerBox: '6 Pcs / Box', outerBox: '12 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-plumb-003',
          name: 'Palu Konde - Gagang Fiber',
          image: '/Images/yozuri/Yo-Zuri - Palu Konde - Gagang Fiber A.png',
          description: 'Palu konde (machinist hammer) dengan gagang fiberglass. Ujung bulat (konde) ideal untuk membentuk logam dan pekerjaan presisi lainnya.',
          specifications: [
            { key: 'Material Kepala', value: 'Baja Karbon' },
            { key: 'Material Gagang', value: 'Fiberglass' },
          ],
          features: [
            { text: 'Untuk Membentuk Logam' },
            { text: 'Gagang Fiber Nyaman' },
            { text: 'Ringan, ergonomis, dan tidak mudah retak' },
          ],
          packagingDetails: [
            { size: '8 0z / 0,50 Lbs', innerBox: '6 Pcs / Box', outerBox: '72 Pcs / Ctn' },
            { size: '12 0z / 0,75 Lbs', innerBox: '6 Pcs / Box', outerBox: '48 Pcs / Ctn' },
            { size: '16 0z / 1 Lbs', innerBox: '6 Pcs / Box', outerBox: '48 Pcs / Ctn' },
            { size: '24 0z / 1,5 Lbs', innerBox: '6 Pcs / Box', outerBox: '36 Pcs / Ctn' },
            { size: '32 0z / 2 Lbs', innerBox: '6 Pcs / Box', outerBox: '24 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-plumb-004',
          name: 'Palu Kambing - Gagang Fiber',
          image: '/Images/yozuri/Yo-Zuri - Palu Kambing Polos - Gagang Fiber A.png',
          description: 'Palu kambing (claw hammer) Yo-Zuri dengan gagang fiber. Desain seimbang untuk memaku dan mencabut paku dengan efisien.',
          specifications: [
            { key: 'Material Gagang', value: 'Fiberglass' },
            { key: 'Fitur', value: 'Kepala Rata & Pencabut Paku' },
          ],
          features: [
            { text: 'Pukulan stabil, presisi, dan tahan lama' },
            { text: 'Gagang Anti-Slip' },
          ],
          packagingDetails: [
            { size: '8 0z / 0,25 Lbs', innerBox: '6 Pcs / Box', outerBox: '72 Pcs / Ctn' },
            { size: '16 0z / 0,50 Lbs', innerBox: '6 Pcs / Box', outerBox: '36 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-plumb-005',
          name: 'Palu Kambing Gerigi & Magnet - Gagang Fiber',
          image: '/Images/yozuri/Yo-Zuri - Palu Kambing Gerigi - Gagang Fiber A.png',
          description: 'Palu kambing inovatif dengan kepala gerigi dan magnet untuk menahan paku, memungkinkan pemakuan dengan satu tangan.',
          specifications: [
            { key: 'Material Gagang', value: 'Fiberglass' },
            { key: 'Fitur', value: 'Kepala Gerigi, Magnet' },
          ],
          features: [
            { text: 'Fitur Magnetik' },
            { text: 'Pemakuan Satu Tangan' },
            { text: 'Cengkraman lebih mantap, multifungsi' },
          ],
          packagingDetails: [
            { size: '8 0z / 0,25 Lbs', innerBox: '6 Pcs / Box', outerBox: '72 Pcs / Ctn' },
            { size: '16 0z / 0,50 Lbs', innerBox: '6 Pcs / Box', outerBox: '36 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-plumb-006',
          name: 'Palu Bodem - Gagang Kayu',
          image: '/Images/yozuri/Yo-Zuri - Palu Bodem - Gagang Kayu.png',
          description: 'Palu bodem tradisional dengan gagang kayu hickory pilihan yang kuat dan klasik, untuk pekerjaan penghancuran.',
          specifications: [
            { key: 'Material Kepala', value: 'Baja Karbon' },
            { key: 'Material Gagang', value: 'Kayu Hickory' },
          ],
          features: [
            { text: 'Gagang Kayu Klasik' },
            { text: 'Daya Hantam Tinggi' },
            { text: 'Pukulan mantap, nyaman digenggam' },
          ],
          packagingDetails: [
            { size: '32 0z / 2 Lbs', innerBox: '6 Pcs / Box', outerBox: '24 Pcs / Ctn' },
            { size: '48 0z / 3 Lbs', innerBox: '6 Pcs / Box', outerBox: '12 Pcs / Ctn' },
            { size: '64 0z / 4 Lbs', innerBox: '6 Pcs / Box', outerBox: '12 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-plumb-007',
          name: 'Palu Konde - Gagang Kayu',
          image: '/Images/yozuri/Yo-Zuri - Palu Konde - Gagang Kayu.png',
          description: 'Palu konde dengan gagang kayu, memberikan feel tradisional dengan fungsionalitas modern untuk para pengrajin logam.',
          specifications: [
            { key: 'Material Kepala', value: 'Baja Karbon' },
            { key: 'Material Gagang', value: 'Kayu' },
          ],
          features: [
            { text: 'Kontrol Penuh' },
            { text: 'Gagang Kayu Nyaman' },
            { text: 'Seimbang, klasik, dan ekonomis' },
          ],
          packagingDetails: [
            { size: '8 0z / 0,50 Lbs', innerBox: '6 Pcs / Box', outerBox: '72 Pcs / Ctn' },
            { size: '12 0z / 0,75 Lbs', innerBox: '6 Pcs / Box', outerBox: '48 Pcs / Ctn' },
            { size: '16 0z / 1 Lbs', innerBox: '6 Pcs / Box', outerBox: '48 Pcs / Ctn' },
            { size: '24 0z / 1,5 Lbs', innerBox: '6 Pcs / Box', outerBox: '36 Pcs / Ctn' },
            { size: '32 0z / 2 Lbs', innerBox: '6 Pcs / Box', outerBox: '24 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-plumb-008',
          name: 'Palu Kambing - Gagang Kayu',
          image: '/Images/yozuri/Yo-Zuri - Palu Kambing - Gagang Kayu.png',
          description: 'Palu kambing klasik dengan gagang kayu yang dipernis untuk daya tahan ekstra. Pilihan favorit para tukang kayu.',
          specifications: [
            { key: 'Material Gagang', value: 'Kayu' },
            { key: 'Fitur', value: 'Kepala Rata & Pencabut Paku' },
          ],
          features: [
            { text: 'Kokoh, natural grip, daya tahan teruji' },
            { text: 'Kuat & Andal' },
          ],
          packagingDetails: [
            { size: '8 0z / 0,25 Lbs', innerBox: '6 Pcs / Box', outerBox: '72 Pcs / Ctn' },
            { size: '16 0z / 0,50 Lbs', innerBox: '6 Pcs / Box', outerBox: '36 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-plumb-009',
          name: 'Gunting Korea Serbaguna - 다용도 가위',
          image: '/Images/yozuri/Yo-Zuri - Gunting Korea Serbaguna.png',
          description: 'Gunting serbaguna model Korea (다용도 가위 - Dayongdo Gawi) yang sangat tajam, cocok untuk memotong seng, dahan, hingga bahan dapur.',
          specifications: [
            { key: 'Material', value: 'Stainless Steel' },
            { key: 'Model', value: 'Korea' },
          ],
          features: [
            { text: 'Sangat Tajam' },
            { text: 'Serbaguna (Multi-Purpose)' },
            { text: 'Mata pisau baja super tajam & presisi' },
          ],
          packagingDetails: [
            { size: '7,5 Inch', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-plumb-010',
          name: 'Tang Potong - Gagang Fiber',
          image: '/Images/yozuri/Yo-Zuri - Tang Potong.png',
          description: 'Tang potong (diagonal plier) dengan gagang fiber anti-slip. Didesain untuk memotong kawat dan kabel dengan mudah.',
          specifications: [
            { key: 'Material', value: 'Baja Karbon' },
            { key: 'Gagang', value: 'Fiberglass' },
          ],
          features: [
            { text: 'Mata Potong Tajam' },
            { text: 'Gagang fiber ringan, kuat, dan anti-slip' },
          ],
          packagingDetails: [
            { size: '6 Inch', innerBox: '6 Pcs / Box', outerBox: '60 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-plumb-011',
          name: 'Tang Lancip - Gagang Fiber',
          image: '/Images/yozuri/Yo-Zuri - Tang Lancip.png',
          description: 'Tang lancip (long nose plier) dengan gagang fiber untuk menjangkau area sempit, membengkokkan kawat, dan memegang komponen kecil.',
          specifications: [
            { key: 'Material', value: 'Baja Karbon' },
            { key: 'Gagang', value: 'Fiberglass' },
          ],
          features: [
            { text: 'Ujung presisi untuk menjangkau area sempit' },
            { text: 'Gagang fiber yang kokoh dan nyaman digenggam.' },
          ],
          packagingDetails: [
            { size: '6 Inch', innerBox: '6 Pcs / Box', outerBox: '60 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-plumb-012',
          name: 'Tang Kombinasi - Gagang Fiber',
          image: '/Images/yozuri/Yo-Zuri - Tang Kombinasi.png',
          description: 'Tang kombinasi serbaguna (combination plier) dengan gagang fiber, menggabungkan fungsi memegang, memotong, dan memutar dalam satu alat.',
          specifications: [
            { key: 'Material', value: 'Baja Karbon' },
            { key: 'Gagang', value: 'Fiberglass' },
          ],
          features: [
            { text: 'Multi-fungsi: menjepit, memotong, dan memutar' },
            { text: 'Gagang fiber memberikan kekuatan dan keringanan' },
          ],
          packagingDetails: [
            { size: '6 Inch', innerBox: '6 Pcs / Box', outerBox: '60 Pcs / Ctn' },
            { size: '7 Inch', innerBox: '6 Pcs / Box', outerBox: '60 Pcs / Ctn' },
            { size: '8 Inch', innerBox: '6 Pcs / Box', outerBox: '60 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-plumb-013',
          name: 'Kikir Segitiga - Tanpa Gagang',
          image: '/Images/yozuri/Yo-Zuri - Kikir Segitiga - Tanpa Gagang.png',
          description: 'Kikir segitiga (triangular file) berkualitas tinggi untuk menghaluskan sudut tajam dan celah pada material logam.',
          specifications: [
            { key: 'Bentuk', value: 'Segitiga' },
            { key: 'Material', value: 'Baja Karbon Tinggi' },
          ],
          features: [
            { text: 'Untuk Sudut Tajam' },
            { text: 'Bahan baja karbon tinggi, awet, dan mengikir lebih cepat.' },
          ],
          packagingDetails: [
            { size: '4 Inch', innerBox: '12 Pcs / Box', outerBox: '1.200 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-plumb-014',
          name: 'Kikir Segitiga - Gagang Karet',
          image: '/Images/yozuri/Yo-Zuri - Kikir Segitiga - Gagang Karet.png',
          description: 'Kikir segitiga dengan gagang karet ergonomis yang nyaman dan anti-slip, memberikan kontrol lebih saat bekerja.',
          specifications: [
            { key: 'Bentuk', value: 'Segitiga' },
            { key: 'Gagang', value: 'Karet (Rubber)' },
          ],
          features: [
            { text: 'Genggaman mantap, anti-slip, dan nyaman' },
            { text: 'Kontrol Penuh' },
          ],
          packagingDetails: [
            { size: '4 Inch', innerBox: '-', outerBox: '400 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-plumb-015',
          name: 'Kikir Segitiga - Gagang Kayu',
          image: '/Images/yozuri/Yo-Zuri - Kikir Segitiga - Gagang Kayu.png',
          description: 'Kikir segitiga dengan gagang kayu klasik untuk feel tradisional dan pegangan yang kokoh.',
          specifications: [
            { key: 'Bentuk', value: 'Segitiga' },
            { key: 'Gagang', value: 'Kayu' },
          ],
          features: [
            { text: 'Genggaman klasik yang kokoh dan kuat' },
            { text: 'Presisi Tinggi' },
          ],
          packagingDetails: [
            { size: '4 Inch', innerBox: '12 Pcs / Box', outerBox: '400 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-plumb-016',
          name: 'Gegep Heavy Duty - Gagang Karet',
          image: '/Images/yozuri/Yo-Zuri - Gegep Heavy Duty 9 Inch A.png',
          description: 'Gegep (tower pincer) heavy duty untuk mencabut paku dan memotong kawat tebal. Gagang karet memberikan daya ungkit maksimal.',
          specifications: [
            { key: 'Tipe', value: 'Tower Pincer' },
            { key: 'Gagang', value: 'Karet (Rubber)' },
          ],
          features: [
            { text: 'Konstruksi baja Heavy Duty untuk pekerjaan berat' },
            { text: ' Daya cengkram dan ungkit maksimal' },
          ],
          packagingDetails: [
            { size: '9 Inch', innerBox: '6 Pcs / Box', outerBox: '60 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-plumb-017',
          name: 'Kunci Pipa - Pipe Wrench',
          image: '/Images/yozuri/Yo-Zuri - Kunci Pipa.png',
          description: 'Kunci pipa heavy duty dengan rahang bergerigi yang dapat mencengkeram pipa dengan kuat. Alat wajib untuk pekerjaan perpipaan.',
          specifications: [
            { key: 'Tipe', value: 'Pipe Wrench' },
            { key: 'Material', value: 'Baja' },
          ],
          features: [
            { text: 'Rahang baja bergerigi untuk cengkraman pipa anti-slip' },
            { text: 'Handle kokoh untuk putaran (torsi) maksimal' },
          ],
          packagingDetails: [
            { size: '12 Inch', innerBox: '6 Pcs / Box', outerBox: '36 Pcs / Ctn' },
            { size: '14 Inch', innerBox: '6 Pcs / Box', outerBox: '24 Pcs / Ctn' },
            { size: '18 Inch', innerBox: '4 Pcs / Box', outerBox: '16 Pcs / Ctn' },
          ],
        },
      ], // Isi dengan produk-produk yang sesuai
    },
    {
      id: 'diamond-wheels',
      name: 'Diamond Wheels | Mata Gerinda',
      image: '/Images/Diamond Wheel.png',
      // Di dalam catalogueData -> yozuri -> kategori 'diamond-wheels'
      products: [
        {
          id: 'yoz-diamond-001',
          name: 'Diamond Wheel Turbo S - Wet & Dry Cutting',
          image: '/Images/yozuri/Yo-Zuri - Diamond Wheel Turbo S A.png', // Ganti dengan path gambar Anda
          description: 'Mata gerinda potong serbaguna tipe Turbo S, dirancang untuk pemotongan basah dan kering yang cepat dan agresif pada beton, batu, dan keramik.',
          specifications: [
            { key: 'Tipe', value: 'Turbo S' },
            { key: 'Pemotongan', value: 'Basah & Kering (Wet & Dry)' },
            { key: 'Diameter', value: '4 Inch' },
          ],
          features: [
            { text: 'Potongan cepat & minim gompel (chipping)' },
            { text: 'Serbaguna, kinerja optimal untuk potong basah maupun kering' },
          ],
          packagingDetails: [
            { size: '4 Inch / 105 mm', innerBox: '10 Pcs / Box', outerBox: '200 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-diamond-002',
          name: 'Porcelain Saw Blade - Hexagon - Wet & Dry Cutting',
          image: '/Images/yozuri/Yo-Zuri - Porcelain Saw Blade (Hexagon) A.png',
          description: 'Mata potong khusus porselen dan keramik super keras dengan desain segmen Hexagon. Memberikan hasil potongan yang sangat halus dan bebas cuil.',
          specifications: [
            { key: 'Tipe', value: 'Porcelain Blade (Hexagon)' },
            { key: 'Pemotongan', value: 'Basah & Kering (Wet & Dry)' },
            { key: 'Aplikasi', value: 'Porselen, Keramik Keras' },
          ],
          features: [
            { text: 'Spesialis potong porselen & keramik super keras' },
            { text: 'Hasil super halus & presisi tinggi (anti-gompal)' },
          ],
          packagingDetails: [
            { size: '4 Inch / 105 mm', innerBox: '10 Pcs / Box', outerBox: '200 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-diamond-003',
          name: 'Diamond Wheel Turbo Batik - Wet & Dry Cutting',
          image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Diamond Wheel Turbo Batik Type X & K.png',
          description: 'Mata gerinda potong dengan desain segmen "Batik" yang unik untuk pendinginan optimal dan pemotongan yang stabil pada berbagai material bangunan.',
          specifications: [
            { key: 'Tipe', value: 'Turbo Batik' },
            { key: 'Pemotongan', value: 'Basah & Kering (Wet & Dry)' },
            { key: 'Aplikasi', value: 'Beton, Tembok, Genteng' },
          ],
          features: [
            { text: 'Desain Batik unik untuk pemotongan stabil & pendinginan ekstra.' },
            { text: 'Sangat awet untuk memotong berbagai material bangunan' },
          ],
          packagingDetails: [
            { size: '4 Inch / 105 mm', innerBox: '10 Pcs / Box', outerBox: '200 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-diamond-004',
          name: 'Diamond Wheel Turbo Super Thin - Dry Cutting',
          image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Diamond Wheel Turbo Super Thin.png',
          description: 'Mata gerinda turbo super tipis untuk pemotongan kering yang sangat cepat dengan gesekan minimal. Ideal untuk pemotongan presisi.',
          specifications: [
            { key: 'Tipe', value: 'Turbo Super Thin' },
            { key: 'Pemotongan', value: 'Kering (Dry)' },
            { key: 'Ketebalan', value: '1.2mm' },
          ],
          features: [
            { text: 'Sangat tipis untuk potongan presisi, cepat, dan hemat material' },
            { text: 'Ideal untuk pekerjaan yang menuntut kecepatan (khusus kering)' },
          ],
          packagingDetails: [
            { size: '4 Inch / 105 mm', innerBox: '10 Pcs / Box', outerBox: '200 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-diamond-005',
          name: 'Diamond Wheel - Dry Cutting',
          image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Diamond Wheel A.png',
          description: 'Mata gerinda potong tipe segmented untuk pemotongan kering material bangunan secara umum. Memberikan durabilitas dan performa yang andal.',
          specifications: [
            { key: 'Tipe', value: 'Segmented' },
            { key: 'Pemotongan', value: 'Kering (Dry)' },
            { key: 'Aplikasi', value: 'Beton, Batu Bata' },
          ],
          features: [
            { text: 'Mata potong diamond standar yang andal dan ekonomis' },
            { text: 'Tahan lama untuk penggunaan potong kering pada umumnya' },
          ],
          packagingDetails: [
            { size: 'Biru | 4 Inch', innerBox: '10 Pcs / Box', outerBox: '200 Pcs / Ctn' },
            { size: 'Kering | 4 Inch', innerBox: '10 Pcs / Box', outerBox: '200 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-diamond-006',
          name: 'Circular Saw Blade "TCT Blade" - Wet & Dry Cutting',
          image: '/Images/yozuri/Yo-Zuri - Circular Saw Blade - TCT Blade.png',
          description: 'Mata gergaji sirkular dengan ujung mata Tungsten Carbide Tipped (TCT) untuk pemotongan kayu, triplek, dan material non-besi lainnya. Bisa untuk pemotongan basah dan kering.',
          specifications: [
            { key: 'Tipe', value: 'TCT Blade' },
            { key: 'Ukuran', value: '7 Inch' },
            { key: 'Jumlah Mata', value: '24T / 40T' },
          ],
          features: [
            { text: 'Mata pisau TCT (Tungsten Carbide) super tajam' },
            { text: 'Spesialis potong kayu dengan hasil yang sangat halus dan presisi' },
          ],
          packagingDetails: [
            { size: '4 Inch / 105 mm', innerBox: '10 Pcs / Box', outerBox: '200 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-diamond-007',
          name: 'Sikat Kawat Mangkok Kepang',
          image: '/Images/yozuri/Yo-Zuri - Sikat Kawat Mangkok - Kepang copy.png',
          description: 'Sikat kawat model mangkok dengan kawat kepang (twisted) untuk pembersihan paling agresif. Efektif menghilangkan karat tebal, kerak las, dan cat dari permukaan logam.',
          specifications: [
            { key: 'Model', value: 'Mangkok Kepang (Twisted Cup)' },
            { key: 'Material Kawat', value: 'Baja' },
            { key: 'Ukuran Drat', value: 'M10 x 1.5' },
          ],
          features: [
            { text: 'Kawat baja kepang (twisted) untuk pembersihan agresif' },
            { text: 'Sangat kuat dan awet untuk buang karat berat & kerak cat' },
          ],
          packagingDetails: [
            { size: '3 Inch', innerBox: '-', outerBox: '100 Pcs / Ctn' },
          ],
        },
      ],
    },
    {
      id: 'painting-tools',
      name: 'Painting Tools | Peralatan Cat',
      image: '/Images/painting yozuri.png',
      // Di dalam catalogueData -> yozuri -> kategori 'painting-tools'
      products: [
        {
          id: 'yoz-paint-001',
          name: 'Paint Brush - Kuas Cat',
          image: '/Images/yozuri/Yo-Zuri - Kuas Cat Produk-produk A.png', // Ganti dengan path gambar Anda
          description: 'Kuas cat serbaguna dengan bulu sintetis berkualitas tinggi untuk aplikasi cat yang halus dan merata pada berbagai permukaan.',
          specifications: [
            { key: 'Tipe Bulu', value: 'Sintetis' },
            { key: 'Gagang', value: 'Kayu Ergonomis' },
          ],
          features: [
            { text: 'Bulu kuas sintetis halus, tidak mudah rontok' },
            { text: 'Menjamin hasil pengecatan lebih rata dan presisi' },
          ],
          packagingDetails: [
            { size: '1 Inch', innerBox: '12 Pcs / Box', outerBox: '960 Pcs / Ctn' },
            { size: '1,5 Inch', innerBox: '12 Pcs / Box', outerBox: '720 Pcs / Ctn' },
            { size: '2 Inch', innerBox: '12/pack', outerBox: ' 600 Pcs / Ctn' },
            { size: '2,5 Inch', innerBox: '12 Pcs / Box', outerBox: ' 480 Pcs / Ctn' },
            { size: '3 Inch', innerBox: '12 Pcs / Box', outerBox: '432 Pcs / Ctn' },
            { size: '4 Inch', innerBox: '12 Pcs / Box', outerBox: '288 Pcs / Ctn' },
            { size: '5 Inch', innerBox: '12 Pcs / Box', outerBox: '192 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-paint-002',
          name: 'Kuas Roll - Premium',
          image: '/Images/yozuri/Yo-Zuri - Kuas Roll Copot - 9 Inch - Biru A.png',
          description: 'Kuas roll premium untuk hasil akhir yang superior. Cocok untuk semua jenis cat dan permukaan, memberikan cakupan yang cepat dan merata.',
          specifications: [
            { key: 'Material Rol', value: 'Microfiber Premium' },
            { key: 'Gagang', value: 'Plastik Ergonomis' },
          ],
          features: [
            { text: 'Daya serap cat maksimal untuk pengecatan lebih cepat' },
            { text: 'hasil akhir super halus tanpa gelembung' },
          ],
          packagingDetails: [
            { size: '4 Inch', innerBox: '-', outerBox: '60 Pcs/ Ctn' },
            { size: '9 Inch | BR', innerBox: '-', outerBox: '24 Pcs/ Ctn' },
            { size: '9 Inch | OR', innerBox: '-', outerBox: '24 Pcs/ Ctn' },
          ],
        },
        {
          id: 'yoz-paint-003',
          name: 'Bulu Kuas Roll - Copot 9 Inch',
          image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Bulu Roll Copot 9 Inch.png',
          description: 'Refill bulu kuas roll tersedia dalam dua varian: polos untuk permukaan halus dan garis untuk permukaan kasar atau bertekstur.',
          specifications: [
            { key: 'Varian', value: 'Polos & Garis' },
            { key: 'Ukuran', value: '9 Inch' },
          ],
          features: [
            { text: 'Bulu tebal dan padat untuk cakupan luas' },
            { text: 'tidak meninggalkan serat sisa pada dinding' },
          ],
          packagingDetails: [
            { size: 'OR/BR | 9 Inch', innerBox: '24 Pcs / Box', outerBox: '200 Pcs / Ctn' },
          ], 
        },
        {
          id: 'yoz-paint-004',
          name: 'Bak Cat - PVC',
          image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Bak Cat.png',
          description: 'Bak cat praktis berbahan PVC tahan lama, dilengkapi dengan area bertekstur untuk meratakan cat pada kuas roll dan kuas biasa.',
          specifications: [
            { key: 'Material', value: 'PVC' },
            { key: 'Fitur', value: 'Tekstur Perataan' },
          ],
          features: [
            { text: 'Bahan PVC tebal, kokoh, tidak mudah pecah' },
            { text: 'sangat mudah dibersihkan setelah penggunaan' },
          ],
          packagingDetails: [
            { type: 'HITAM', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-paint-005',
          name: 'Bulu Kuas Roll - Domba 4 Inch',
          image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Bulu Roll Domba 4 Inch.png',
          description: 'Refill bulu kuas roll tersedia dalam dua varian: polos untuk permukaan halus dan garis untuk permukaan kasar atau bertekstur.',
          specifications: [
            { key: 'Varian', value: 'Polos & Garis' },
            { key: 'Ukuran', value: '9 Inch' },
          ],
          features: [
            { text: 'Bahan wol domba asli untuk daya serap superior' },
            { text: 'hasil akhir paling halus, ideal untuk cat minyak' },
          ],
          packagingDetails: [
            { size: 'Bulu domba 4 Inch', innerBox: '12 Pcs / Box', outerBox: '240 Pcs / Ctn' },
            { size: 'Polyester 4 Inch', innerBox: '12 Pcs / Box', outerBox: '240 Pcs / Ctn' },
          ],
        },
      ],
    },
    {
      id: 'drilling-tools',
      name: 'Drilling Tools | Peralatan Bor',
      image: '/Images/drlling yozuri.png',
      // Di dalam catalogueData -> yozuri -> kategori 'drilling-tools'
      products: [
        {
          id: 'yoz-drill-001',
          name: 'Mata Bor - Beton Super Merah',
          image: '/Images/yozuri/Yo-Zuri - Mata Bor Beton - Super Merah.png', // Ganti dengan path gambar Anda
          description: 'Mata bor beton seri Super Merah dengan ujung carbide premium untuk pengeboran yang sangat cepat dan efisien pada beton keras.',
          specifications: [
            { key: 'Aplikasi', value: 'Beton, Tembok' },
            { key: 'Material Ujung', value: 'Tungsten Carbide' },
          ],
          features: [
            { text: 'melubangi beton bertulang lebih cepat dan sangat awet' },
            { text: 'Ujung mata carbide super keras' },
          ],
          packagingDetails: [
            { size: '4mm', innerBox: '10/pack - 40/Inner', outerBox: '400/Outer' },
            { size: '5mm', innerBox: '10/pack - 40/Inner', outerBox: '400/Outer' },
            { size: '6mm', innerBox: '10/pack - 40/Inner', outerBox: '400/Outer' },
            { size: '8mm', innerBox: '10/pack - 40/Inner', outerBox: '400/Outer' },
            { size: '10mm', innerBox: '10/pack - 40/Inner', outerBox: '400/Outer' },
            { size: '12mm', innerBox: '10/pack - 10/Inner', outerBox: '250/Outer' },
            { size: '14mm', innerBox: '10/pack - 30/Inner', outerBox: '180/Outer' },
          ],
        },
        {
          id: 'yoz-drill-002',
          name: 'Mata Bor - Beton Putih',
          image: '/Images/yozuri/Yo-Zuri - Mata Bor Beton - Putih Biru.png',
          description: 'Mata bor beton standar berkualitas untuk berbagai keperluan pengeboran pada dinding bata dan beton ringan. Pilihan ekonomis dan andal.',
          specifications: [
            { key: 'Aplikasi', value: 'Beton Ringan, Bata' },
            { key: 'Shank', value: 'Silinder' },
          ],
          features: [
            { text: 'Ekonomis & Andal' },
            { text: 'Kualitas andal untuk pengeboran presisi pada beton, tembok, dan batu bata standar' },
          ],
          packagingDetails: [
            { size: '4mm', innerBox: '10/pack - 40/Inner', outerBox: '400/Outer' },
            { size: '5mm', innerBox: '10/pack - 40/Inner', outerBox: '400/Outer' },
            { size: '6mm', innerBox: '10/pack - 40/Inner', outerBox: '400/Outer' },
            { size: '8mm', innerBox: '10/pack - 40/Inner', outerBox: '400/Outer' },
            { size: '10mm', innerBox: '10/pack - 40/Inner', outerBox: '400/Outer' },
            { size: '12mm', innerBox: '10/pack - 10/Inner', outerBox: '240/Outer' },
          ],
        },
        {
          id: 'yoz-drill-003',
          name: 'Mata Bor - Beton Multifungsi',
          image: '/Images/yozuri/Yo-Zuri - Mata Bor Beton - Multifungsi.png',
          description: 'Satu mata bor untuk semua! Mata bor multifungsi yang dapat digunakan pada beton, keramik, kayu, dan logam tipis.',
          specifications: [
            { key: 'Aplikasi', value: 'Multi-Material (Beton, Kayu, Logam Tipis)' },
            { key: 'Fitur', value: 'Ujung Tombak (Spear Head)' },
          ],
          features: [
            { text: 'Satu Untuk Semua' },
            { text: 'Satu mata bor serbaguna untuk menembus berbagai material: beton, keramik, kayu, dan bata' },
          ],
          packagingDetails: [
            { size: '5mm', innerBox: '10/pack - 50/Inner', outerBox: '500/Outer' },
            { size: '6mm', innerBox: '10/pack - 50/Inner', outerBox: '500/Outer' },
            { size: '8mm', innerBox: '10/pack - 50/Inner', outerBox: '500/Outer' },
            { size: '10mm', innerBox: '10/pack - 50/Inner', outerBox: '500/Outer' },
            { size: '12mm', innerBox: '10/pack - 25/Inner', outerBox: '250/Outer' },
          ],
        },
        {
          id: 'yoz-drill-004',
          name: 'Mata Bor - Beton SDS Plus',
          image: '/Images/yozuri/Yo-Zuri - Mata Bor Beton - SDS Plus.png',
          description: 'Mata bor khusus untuk mesin bor rotary hammer dengan sistem chuck SDS Plus. Mentransfer tenaga pukulan secara maksimal.',
          specifications: [
            { key: 'Shank', value: 'SDS Plus' },
            { key: 'Aplikasi', value: 'Beton, Batu Alam' },
          ],
          features: [
            { text: 'pengeboran beton lebih bertenaga dan efisien' },
            { text: 'Shank SDS Plus untuk transfer tenaga maksimal' },
          ],
          packagingDetails: [
            { size: '6x160mm', innerBox: '10/pack - 20/Inner', outerBox: '320/Outer' },
            { size: '8x160mm', innerBox: '10/pack - 20/Inner', outerBox: '320/Outer' },
            { size: '10x160mm', innerBox: '10/pack - 20/Inner', outerBox: '320/Outer' },
            { size: '12x160mm', innerBox: '10/pack - 20/Inner', outerBox: '320/Outer' },
            { size: '14x160mm', innerBox: '10/pack - 2/Inner', outerBox: '320/Outer' },
          ],
        },
        {
          id: 'yoz-drill-005',
          name: 'Mata Bor - Besi Super Merah',
          image: '/Images/yozuri/Yo-Zuri - Mata Bor Besi - Super Merah 2.png',
          description: 'Mata bor besi HSS (High-Speed Steel) seri Super Merah, dilapisi untuk daya tahan ekstra dan performa tinggi pada pengeboran logam.',
          specifications: [
            { key: 'Material', value: 'HSS Coated' },
            { key: 'Aplikasi', value: 'Besi, Baja, Aluminium' },
          ],
          features: [
            { text: 'Bahan HSS (High-Speed Steel) tajam dan tahan lama untuk melubangi plat besi tebal' },
            { text: 'Lapisan Anti Panas' },
          ],
          packagingDetails: [
            { size: '1 mm', innerBox: '10/pack - 200/Inner', outerBox: '4.000/ctn' },
            { size: '1,5 mm', innerBox: '10/pack - 200/Inner', outerBox: '4.000/ctn' },
            { size: '2 mm', innerBox: '10/pack - 200/Inner', outerBox: '4.000/ctn' },
            { size: '2,5 mm', innerBox: '10/pack - 200/Inner', outerBox: '4.000/ctn' },
            { size: '3 mm', innerBox: '10/pack - 200/Inner', outerBox: '4.000/ctn' },
            { size: '3,5 mm', innerBox: '10/pack - 200/Inner', outerBox: '4.000/ctn' },
            { size: '4 mm', innerBox: '10/pack - 200/Inner', outerBox: '4.000/ctn' },
            { size: '4,5 mm', innerBox: '10/pack - 250/Inner', outerBox: '1.000/ctn' },
            { size: '5 mm', innerBox: '10/pack - 100/Inner', outerBox: '1.200/ctn' },
            { size: '5,5 mm', innerBox: '10/pack - 250/Inner', outerBox: '1000/ctn' },
            { size: '6 mm', innerBox: '10/pack - 100/Inner', outerBox: '1.200/ctn' },
            { size: '6,5 mm', innerBox: '10/pack - 200/Inner', outerBox: '800/ctn' },
            { size: '7 mm', innerBox: '10/pack - 200/Inner', outerBox: '800/ctn' },
            { size: '7,5 mm', innerBox: '5/pack - 50/Inner', outerBox: '600/ctn' },
            { size: '8 mm', innerBox: '10/pack - 80/Inner', outerBox: '480/ctn' },
            { size: '8,5 mm', innerBox: '10/pack - 100/Inner', outerBox: '400/ctn' },
            { size: '9 mm', innerBox: '5/pack - 40/Inner', outerBox: '240/ctn' },
            { size: '9,5 mm', innerBox: '5/pack - 40/Inner', outerBox: '240/ctn' },
            { size: '10 mm', innerBox: '5/pack - 40/Inner', outerBox: '240/ctn' },
            { size: '10,5 mm', innerBox: '5/pack - 40/Inner', outerBox: '240/ctn' },
            { size: '11 mm', innerBox: '5/pack - -', outerBox: '200/ctn' },
            { size: '11,5 mm', innerBox: '5/pack - -', outerBox: '200/ctn' },
            { size: '12 mm', innerBox: '5/pack - 40/Inner', outerBox: '240/ctn' },
            { size: '12,5mm', innerBox: '5/pack - 40/Inner', outerBox: '240/ctn' },
            { size: '13 mm', innerBox: '5/pack - 40/Inner', outerBox: '240/ctn' },
            { size: '13,5 mm', innerBox: '5/pack - 25/Inner', outerBox: '100/ctn' },
            { size: '14 mm', innerBox: '- - -', outerBox: '40/ctn' },
          ],
        },
        {
          id: 'yoz-drill-006',
          name: 'Mata Bor - Besi Cobalt',
          image: '/Images/yozuri/Yo-Zuri - Mata Bor Besi - Cobalt.png',
          description: 'Mata bor besi dengan kandungan Cobalt 5% (HSS-Co M35), sangat keras dan tahan panas. Pilihan terbaik untuk mengebor stainless steel.',
          specifications: [
            { key: 'Material', value: 'HSS-Co M35 (5% Cobalt)' },
            { key: 'Aplikasi', value: 'Stainless Steel, Logam Keras' },
          ],
          features: [
            { text: 'Campuran Cobalt (HSS-Co) tahan panas' },
            { text: 'solusi terbaik untuk material keras seperti stainless steel' },
          ],
          packagingDetails: [
            { size: '1 mm', innerBox: '2/Pack - 250/Inner', outerBox: '1.000/ctn' },
            { size: '1,5 mm', innerBox: '2/Pack - 250/Inner', outerBox: '1.000/ctn' },
            { size: '2 mm', innerBox: '2/Pack - 250/Inner', outerBox: '1.000/ctn' },
            { size: '2,5 mm', innerBox: '2/Pack - 250/Inner', outerBox: '1.000/ctn' },
            { size: '3 mm', innerBox: '2/Pack - 250/Inner', outerBox: '1.000/ctn' },
            { size: '3,5 mm', innerBox: '2/pack - 150/Inner', outerBox: '600/ctn' },
            { size: '4 mm', innerBox: '2/pack - 150/Inner', outerBox: '600/ctn' },
            { size: '4,5 mm', innerBox: '2/pack - 150/Inner', outerBox: '600/ctn' },
            { size: '5 mm', innerBox: '2/pack - 150/Inner', outerBox: '600/ctn' },
            { size: '5,5 mm', innerBox: '2/pack - 100/Inner', outerBox: '500/ctn' },
            { size: '6 mm', innerBox: '2/pack - 150/Inner', outerBox: '600/ctn' },
            { size: '6,5 mm', innerBox: '1/pack - 25/Inner', outerBox: '200/ctn' },
            { size: '7 mm', innerBox: '1/pack - 50/Inner', outerBox: '800/ctn' },
            { size: '7,5 mm', innerBox: '1/pack - 25/Inner', outerBox: '600/ctn' },
            { size: '8 mm', innerBox: '1/pack - 50/Inner', outerBox: '480/ctn' },
            { size: '8,5 mm', innerBox: '1/pack - 25/Inner', outerBox: '400/ctn' },
            { size: '9 mm', innerBox: '1/pack - 25/Inner', outerBox: '100/ctn' },
            { size: '9,5 mm', innerBox: '1/pack - 25/Inner', outerBox: '100/ctn' },
            { size: '10 mm', innerBox: '1/pack - 25/Inner', outerBox: '100/ctn' },
            { size: '10,5 mm', innerBox: '1/pack - 25/Inner', outerBox: '100/ctn' },
            { size: '11 mm', innerBox: '1/pack - 25/Inner', outerBox: '100/ctn' },
            { size: '11,5 mm', innerBox: '1/pack - 25/Inner', outerBox: '100/ctn' },
            { size: '12 mm', innerBox: '1/pack - 25/Inner', outerBox: '100/ctn' },
            { size: '12,5mm', innerBox: '1/pack - 425/Inner', outerBox: '100/ctn' },
            { size: '13 mm', innerBox: '1/pack - 25/Inner', outerBox: '100/ctn' },
            { size: '13,5 mm', innerBox: '1/pack - 25/Inner', outerBox: '100/ctn' },
          ],
        },
        {
          id: 'yoz-drill-007',
          name: 'Mata Bor - Besi Kuning',
          image: '/Images/yozuri/Yo-Zuri - Mata Bor Besi - Kuning.png',
          description: 'Mata bor besi HSS standar dengan lapisan Titanium Nitride (TiN) berwarna kuning untuk meningkatkan umur pakai dan mengurangi gesekan.',
          specifications: [
            { key: 'Material', value: 'HSS Tin Coated' },
            { key: 'Aplikasi', value: 'Besi, Baja Ringan' },
          ],
          features: [
            { text: 'Lapisan Titanium mengurangi gesekan' },
            { text: 'membuat pengeboran lebih licin dan 3x lebih awet' },
          ],
          packagingDetails: [
            { size: '3 mm', innerBox: '10/Pack - 100/Inner', outerBox: '3.000/ctn' },
            { size: '3,5 mm', innerBox: '10/pack - 100/Inner', outerBox: '3.000/ctn' },
            { size: '4 mm', innerBox: '10/pack - 100/Inner', outerBox: '2.000/ctn' },
            { size: '4,5 mm', innerBox: '10/pack - 100/Inner', outerBox: '1.500/ctn' },
            { size: '5 mm', innerBox: '10/pack - 100/Inner', outerBox: '1.500/ctn' },
            { size: '5,5 mm', innerBox: '10/pack - 100/Inner', outerBox: '1.500/ctn' },
            { size: '6 mm', innerBox: '10/pack - 100/Inner', outerBox: '1.500/ctn' },
            { size: '6,5 mm', innerBox: '10/pack - 100/Inner', outerBox: '800/ctn' },
            { size: '7 mm', innerBox: '10/pack - 50/Inner', outerBox: '600/ctn' },
            { size: '8 mm', innerBox: '10/pack - 50/Inner', outerBox: '600/ctn' },
            { size: '9 mm', innerBox: '5/pack - 25/Inner', outerBox: '450/ctn' },
            { size: '10 mm', innerBox: '5/pack - 25/Inner', outerBox: '450/ctn' },
            { size: '11 mm', innerBox: '5/pack - 25/Inner', outerBox: '450/ctn' },
            { size: '12 mm', innerBox: '5/pack - 25/Inner', outerBox: '450/ctn' },
            { size: '13 mm', innerBox: '5/pack - 25/Inner', outerBox: '450/ctn' },
          ],
        },
        {
          id: 'yoz-drill-008',
          name: 'Mata Obeng - PH2',
          image: '/Images/yozuri/Yo-Zuri - Mata Obeng - Biru.png',
          description: 'Mata obeng standar tipe PH2 (plus) yang paling umum digunakan untuk berbagai jenis sekrup.',
          specifications: [
            { key: 'Tipe', value: 'PH2' },
            { key: 'Panjang', value: '65mm' },
          ],
          features: [
            { text: 'Ujung presisi dan pas' },
            { text: 'mencegah kerusakan kepala sekrup (anti-slek) saat penyekrupan' },
          ],
          packagingDetails: [
            { size: '2x45 mm', innerBox: '10 Pcs / Pack', outerBox: '150 Pcs / Ctn' },
          ],
          variations: [{ id: 'yoz-drill-009', name: 'Mata Obeng Super - PH2', image: '/Images/yozuri/Yo-Zuri - Mata Obeng - Super Merah.png' },
          { id: 'yoz-drill-010', name: 'Mata Obeng Tornado - PH2', image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Mata Obeng Tornado.png' }]
        },
        {
          id: 'yoz-drill-009',
          name: 'Mata Obeng Super - PH2',
          image: '/Images/yozuri/Yo-Zuri - Mata Obeng - Super Merah.png',
          description: 'Mata obeng PH2 seri Super dengan daya magnet yang lebih kuat dan presisi ujung yang ditingkatkan untuk mencegah kerusakan kepala sekrup.',
          specifications: [
            { key: 'Tipe', value: 'PH2' },
            { key: 'Fitur', value: 'Daya Magnet Kuat' },
          ],
          features: [
            { text: 'Bahan Baja S2 super kuat dilengkapi magnet agar sekrup menempel sempurna' },
            { text: 'Anti-Slipping' },
          ],
          packagingDetails: [
            { size: '2x45 mm', innerBox: '10 Pcs / Pack', outerBox: '150 Pcs / Ctn' },
          ],
          variations: [{ id: 'yoz-drill-008', name: 'Mata Obeng - PH2', image: '/Images/yozuri/Yo-Zuri - Mata Obeng - Biru.png' },
          { id: 'yoz-drill-010', name: 'Mata Obeng Tornado - PH2', image: '/Images/PT STS - YO-ZURI - Web Design - Catalogue - Mata Obeng Tornado.png' }]
        },
        {
          id: 'yoz-drill-010',
          name: 'Mata Obeng Tornado - PH2',
          image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Mata Obeng Tornado.png',
          description: 'Mata obeng PH2 dengan desain ulir "Tornado" untuk cengkeraman sekrup yang lebih baik dan torsi yang lebih tinggi.',
          specifications: [
            { key: 'Tipe', value: 'PH2' },
            { key: 'Desain', value: 'Tornado' },
          ],
          features: [
            { text: 'Desain Tornado dengan zona torsi' },
            { text: 'lebih tahan hentakan mesin impact dan tidak mudah patah' },
          ],
          packagingDetails: [
            { size: '2x45 mm', innerBox: '10 Pcs / Pack', outerBox: '150 Pcs / Ctn' },
          ],
          variations: [{ id: 'yoz-drill-008', name: 'Mata Obeng - PH2', image: '/Images/yozuri/Yo-Zuri - Mata Obeng - Biru.png' },
          { id: 'yoz-drill-009', name: 'Mata Obeng Super - PH2', image: '/Images/yozuri/Yo-Zuri - Mata Obeng - Super Merah.png' }]
        },
        {
          id: 'yoz-drill-011',
          name: 'Magnetic Hex Nut - Mata Shock Roofing - 8x45mm',
          image: '/Images/yozuri/Yo-Zuri - Mata Shock Roofing - 8x45mm B.png',
          description: 'Mata shock (nut setter) heksagonal dengan magnet untuk memasang sekrup roofing (baut baja ringan) dengan cepat dan aman.',
          specifications: [
            { key: 'Tipe', value: 'Hex Nut Setter' },
            { key: 'Fitur', value: 'Magnet' },
          ],
          features: [
            { text: 'Magnet super kuat menahan baut roofing' },
            { text: 'pemasangan baja ringan lebih cepat dan aman' },
          ],
          packagingDetails: [
            { size: '8x45 mm', innerBox: '10 Pcs / Pack', outerBox: '120 Pcs / Ctn' },
          ],
          variations: [{ id: 'yoz-drill-013', name: 'Magnetic Hex Nut - Mata Shock Roofing - 8x65mm', image: '/Images/yozuri/Yo-Zuri - Mata Shock Roofing - 8x65mm B.png' }]
        },
        {
          id: 'yoz-drill-013',
          name: 'Magnetic Hex Nut - Mata Shock Roofing - 8x65mm',
          image: '/Images/yozuri/Yo-Zuri - Mata Shock Roofing - 8x65mm B.png',
          description: 'Mata shock (nut setter) heksagonal dengan magnet untuk memasang sekrup roofing (baut baja ringan) dengan cepat dan aman.',
          specifications: [
            { key: 'Tipe', value: 'Hex Nut Setter' },
            { key: 'Fitur', value: 'Magnet' },
          ],
          features: [
            { text: 'Magnet super kuat menahan baut roofing' },
            { text: 'pemasangan baja ringan lebih cepat dan aman' },
          ],
          packagingDetails: [
          { size: '8x65 mm', innerBox: '5 Pcs / Pack', outerBox: '200 Pcs / Ctn' },
          ],
          variations: [{ id: 'yoz-drill-011', name: 'Magnetic Hex Nut - Mata Shock Roofing - 8x45mm', image: '/Images/yozuri/Yo-Zuri - Mata Shock Roofing - 8x45mm B.png' }]
        },
        {
          id: 'yoz-drill-012',
          name: 'Sekrup Gypsum',
          image: '/Images/yozuri/Yo-Zuri - Sekrup Gypsum.png',
          description: 'Sekrup khusus gypsum dengan ujung yang tajam dan ulir yang kasar untuk pemasangan papan gypsum ke rangka metal atau kayu.',
          specifications: [
            { key: 'Aplikasi', value: 'Gypsum, Drywall' },
            { key: 'Warna', value: 'Hitam (Black Phosphate)' },
          ],
          features: [
            { text: 'Ujung super tajam dan ulir kasar, menembus gypsum' },
            { text: 'rangka metal dengan cepat tanpa bor' },
          ],
          packagingDetails: [
            { size: '1 Inch', innerBox: '7,5 Ons / Box', outerBox: '200 Box / Ctn' },
            { size: '1 1/4 Inch', innerBox: '7,5 Ons / Box', outerBox: '200 Box / Ctn' },
            { size: '1 1/2 Inch', innerBox: '7,5 Ons / Box', outerBox: '200 Box / Ctn' },
            { size: '2 Inch', innerBox: '7,5 Ons / Box', outerBox: '200 Box / Ctn' },
          ],
        },
      ],
    },
    {
      id: 'bricklayering-plastering-tools',
      name: 'Bricklayering & Plastering Tools | Peralatan Tukang Batu & Plester',
      image: '/Images/layering yozuri.png',
      // Di dalam catalogueData -> yozuri -> kategori 'layering-tools'
      products: [
        {
          id: 'yoz-layer-001',
          name: 'Sendok Semen Lancip - Gagang Fiber',
          image: '/Images/yozuri/Yo-Zuri - Sendok Semen - Gagang Fiber Lancip.png', // Ganti dengan path gambar Anda
          description: 'Sendok semen model lancip dengan gagang fiberglass anti-slip. Dirancang untuk presisi saat mengaplikasikan adukan di sudut dan area sempit.',
          specifications: [
            { key: 'Model', value: 'Lancip (Pointing Trowel)' },
            { key: 'Material Gagang', value: 'Fiberglass' },
          ],
          features: [
            { text: 'Plat baja tebal anti-karat untuk adukan yang presisi' },
            { text: 'Gagang fiber ringan, anti-slip, dan sangat nyaman digenggam' },
          ],
          packagingDetails: [
            { size: '6 Inch', innerBox: '12 Pcs/ Box', outerBox: '120 Pcs / Ctn' },
            { size: '7 Inch', innerBox: '12 Pcs/ Box', outerBox: '120 Pcs / Ctn' },
            { size: '8 Inch', innerBox: '12 Pcs/ Box', outerBox: '120 Pcs / Ctn' },
          ],
          variations: [{  id: 'yoz-layer-002',
          name: 'Sendok Semen Bulat - Gagang Fiber',
          image: '/Images/yozuri/Yo-Zuri - Sendok Semen - Gagang Fiber Bulat.png' }]
        },
        {
          id: 'yoz-layer-002',
          name: 'Sendok Semen Bulat - Gagang Fiber',
          image: '/Images/yozuri/Yo-Zuri - Sendok Semen - Gagang Fiber Bulat.png',
          description: 'Sendok semen model bulat (finishing trowel) dengan gagang fiberglass. Ideal untuk mengambil, menyebar, dan menghaluskan plesteran.',
          specifications: [
            { key: 'Model', value: 'Bulat (Finishing Trowel)' },
            { key: 'Material Gagang', value: 'Fiberglass' },
          ],
          features: [
            { text: 'Plat baja tebal anti-karat untuk adukan yang presisi' },
            { text: 'Gagang fiber ringan, anti-slip, dan sangat nyaman digenggam' },
          ],
          packagingDetails: [
            { size: '6 Inch', innerBox: '12 Pcs/ Box', outerBox: '120 Pcs / Ctn' },
            { size: '7 Inch', innerBox: '12 Pcs/ Box', outerBox: '120 Pcs / Ctn' },
            { size: '8 Inch', innerBox: '12 Pcs/ Box', outerBox: '120 Pcs / Ctn' },
          ],
          variations: [{ id: 'yoz-layer-001',
          name: 'Sendok Semen Lancip - Gagang Fiber',
          image: '/Images/yozuri/Yo-Zuri - Sendok Semen - Gagang Fiber Lancip.png' }]
        },
        {
          id: 'yoz-layer-003',
          name: 'Kape Karet - Gagang Fiber',
          image: '/Images/yozuri/Yo-Zuri - Kape Karet - Gagang Fiber.png',
          description: 'Kape dengan bilah karet fleksibel dan gagang fiber, cocok untuk aplikasi kompon atau nat pada drywall tanpa menggores permukaan.',
          specifications: [
            { key: 'Material Bilah', value: 'Karet (Rubber)' },
            { key: 'Material Gagang', value: 'Fiberglass' },
          ],
          features: [
            { text: 'Karet fleksibel untuk meratakan kompon tanpa menggores permukaan' },
            { text: 'Gagang fiber yang kokoh memberikan kontrol dan tekanan maksimal' },
          ],
          packagingDetails: [
            { size: '1.5 Inch', innerBox: '12 Pcs / Box', outerBox: '240 Pcs / Ctn' },
            { size: '2 Inch', innerBox: '12 Pcs / Box', outerBox: '240 Pcs / Ctn' },
            { size: '2,5 Inch', innerBox: '12 Pcs / Box', outerBox: '240 Pcs / Ctn' },
            { size: '3 Inch', innerBox: '12 Pcs / Box', outerBox: '240 Pcs / Ctn' },
            { size: '4 Inch', innerBox: '12 Pcs / Box', outerBox: '240 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-layer-004',
          name: 'Raskam Besi - Gagang Kayu',
          image: '/Images/yozuri/Yo-Zuri - Raskam Besi - Gagang Kayu.png',
          description: 'Raskam besi (steel float) dengan gagang fiber untuk meratakan dan menghaluskan plesteran acian pada dinding atau lantai.',
          specifications: [
            { key: 'Material', value: 'Plat Besi' },
            { key: 'Gagang', value: 'Fiberglass' },
          ],
          features: [
            { text: 'Permukaan plat baja rata sempurna untuk hasil acian super halus' },
            { text: 'Gagang kayu solid yang kokoh dan menyerap getaran' },
          ],
          packagingDetails: [
            { size: '280 x 110 mm', innerBox: '12 Pcs / Box', outerBox: '60 Pcs / Ctn' },
          ],
          variations: [{ id: 'yoz-layer-005',
          name: 'Raskam PVC Tebal - Thickness 5mm',
          image: '/Images/yozuri/Yo-Zuri - Raskam PVC - Hitam.png' }]
        },
        {
          id: 'yoz-layer-005',
          name: 'Raskam PVC Tebal - Thickness 5mm',
          image: '/Images/yozuri/Yo-Zuri - Raskam PVC - Hitam.png',
          description: 'Raskam PVC dengan ketebalan 5mm yang sangat kuat dan tidak mudah melengkung. Ringan dan nyaman digunakan untuk waktu yang lama.',
          specifications: [
            { key: 'Material', value: 'PVC' },
            { key: 'Ketebalan', value: '5 mm' },
          ],
          features: [
            { text: 'Bahan PVC tebal 5mm, sangat kuat, anti-pecah, dan anti-karat' },
            { text: 'Lebih ringan dari raskam besi, membuat pekerjaan tidak cepat lelah' },
          ],
          packagingDetails: [
            { size: '280 x 110 mm', innerBox: '12 Pcs / Box', outerBox: '60 Pcs / Ctn' },
          ],
          variations: [{ id: 'yoz-layer-004',
          name: 'Raskam Besi - Gagang Kayu',
          image: '/Images/yozuri/Yo-Zuri - Raskam Besi - Gagang Kayu.png' }]
        },
        {
          id: 'yoz-layer-006',
          name: 'Siku Rak - Segi',
          image: '/Images/yozuri/Yo-Zuri - Siku Rak - Putih.png',
          description: 'Siku rak model segi dengan desain modern dan minimalis. Memberikan topangan yang kuat untuk ambalan dengan sentuhan gaya.',
          specifications: [
            { key: 'Material', value: 'Besi' },
            { key: 'Model', value: 'Segi (Geometric)' },
          ],
          features: [
            { text: 'Bahan plat besi tebal, sangat kokoh untuk menahan beban berat' },
            { text: 'Finishing powder coating yang rapi, anti gores, dan tahan karat' },
          ],
          packagingDetails: [
            { size: '120x170 Inch', innerBox: '24 Pcs / Box', outerBox: '200 Pcs / Ctn' },
            { size: '155x220 Inch', innerBox: '24 Pcs / Box', outerBox: '144 Pcs / Ctn' },
            { size: '190x270 Inch', innerBox: '24 Pcs / Box', outerBox: '144 Pcs / Ctn' },
            { size: '220x320 Inch', innerBox: '24 Pcs / Box', outerBox: '120 Pcs / Ctn' },
            { size: '270x370 Inch', innerBox: '24 Pcs / Box', outerBox: '96 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-layer-007',
          name: 'Siku Lubang - Tebal',
          image: '/Images/yozuri/Owner - Siku Lubang 4 Warna A.png',
          description: 'Besi siku lubang serbaguna Yo-Zuri dengan ketebalan premium untuk proyek rak heavy duty. Kuat, presisi, dan mudah dipasang.',
          specifications: [
            { key: 'Material', value: 'Besi' },
            { key: 'Ketebalan', value: '2.0 mm' },
          ],
          features: [
            { text: 'Plat besi super tebal, tidak mudah bengkok untuk rak heavy duty' },
            { text: 'Lubang presisi untuk perakitan yang mudah dan kencang' },
          ],
          packagingDetails: [
            { size: '36mm x 36mm x 3m PUTIH | 21 kg', innerBox: '10 Pcs / Box', outerBox: '-' },
            { size: '36mm x 36mm x 3m ABU | 21 kg', innerBox: '10 Pcs / Box', outerBox: '-' },
            { size: '36mm x 36mm x 3m MERAH | 21 kg', innerBox: '10 Pcs / Box', outerBox: '-' },
            { size: '36mm x 36mm x 3m HITAM | 21 kg', innerBox: '10 Pcs / Box', outerBox: '-' },
          ],
        },
        {
          id: 'yoz-layer-008',
          name: 'Pahat Topi Jumbo - Concrete Chisel Rata',
          image: '/Images/yozuri/Yo-Zuri - Pahat Topi Jumbo (-).png',
          description: 'Pahat beton (concrete chisel) model topi heavy duty. Ditempa dari baja pilihan untuk kekuatan maksimal dalam menghancurkan beton.',
          specifications: [
            { key: 'Material', value: 'Baja Tempa' },
            { key: 'Model', value: 'Topi (Jumbo)' },
          ],
          features: [
            { text: 'Bahan baja CR-V (Chrome Vanadium) super keras, tidak mudah tumpul' },
            { text: 'Dilengkapi pelindung tangan (topi) untuk keamanan ekstra dari pukulan' },
          ],
          packagingDetails: [
            { size: '6 Inch (-)', innerBox: '6 Pcs / Box', outerBox: '48 Pcs / Ctn' },
            { size: '10 Inch (-)', innerBox: '6 Pcs / Box', outerBox: '48 Pcs / Ctn' },
            { size: '12 Inch (-)', innerBox: '6 Pcs / Box', outerBox: '48 Pcs / Ctn' },
          ],
          variations: [{ id: 'yoz-layer-014',
          name: 'Pahat Topi Jumbo - Concrete Chisel Lancip ',
          image: '/Images/yozuri/Yo-Zuri - Pahat Topi Jumbo (+).png' }]
        },
        {
          id: 'yoz-layer-014',
          name: 'Pahat Topi Jumbo - Concrete Chisel Lancip ',
          image: '/Images/yozuri/Yo-Zuri - Pahat Topi Jumbo (+).png',
          description: 'Pahat beton (concrete chisel) model topi heavy duty. Ditempa dari baja pilihan untuk kekuatan maksimal dalam menghancurkan beton.',
          specifications: [
            { key: 'Material', value: 'Baja Tempa' },
            { key: 'Model', value: 'Topi (Jumbo)' },
          ],
          features: [
            { text: 'Bahan baja CR-V (Chrome Vanadium) super keras, tidak mudah tumpul' },
            { text: 'Dilengkapi pelindung tangan (topi) untuk keamanan ekstra dari pukulan' },
          ],
          packagingDetails: [
            { size: '6 Inch (^)', innerBox: '6 Pcs / Box', outerBox: '48 Pcs / Ctn' },
            { size: '10 Inch (^)', innerBox: '6 Pcs / Box', outerBox: '48 Pcs / Ctn' },
            { size: '12 Inch (^)', innerBox: '6 Pcs / Box', outerBox: '48 Pcs / Ctn' },
          ],
          variations: [{ id: 'yoz-layer-008',
          name: 'Pahat Topi Jumbo - Concrete Chisel Rata',
          image: '/Images/yozuri/Yo-Zuri - Pahat Topi Jumbo (-).png' }]
        },
        {
          id: 'yoz-layer-009',
          name: 'Lem Sealant Botol - Acetic Silicone Sealant',
          image: '/Images/yozuri/Yo-Zuri - Lem Sealant Botol.png',
          description: 'Lem sealant silikon dalam kemasan botol (cartridge) untuk penggunaan dengan caulking gun. Kedap air dan fleksibel setelah kering.',
          specifications: [
            { key: 'Tipe', value: 'Acetic Silicone' },
            { key: 'Volume', value: '300ml' },
          ],
          features: [
            { text: 'Daya rekat super kuat pada kaca, keramik, dan aluminium' },
            { text: 'Cepat kering, 100% tahan air, dan sangat elastis setelah kering' },
          ],
          packagingDetails: [
            { type: 'Bening', innerBox: '-', outerBox: '24 Bottles / Ctn' },
            { type: 'Hitam', innerBox: '-', outerBox: '24 Bottles / Ctn' },
            { type: 'Putih', innerBox: '-', outerBox: '24 Bottles / Ctn' },
          ],
        },
        {
          id: 'yoz-layer-010',
          name: 'Lem Sealant Besar - Clear - Silicone Sealant',
          image: '/Images/yozuri/Yo-Zuri - Clear Silicone Sealant Tube - 85gr A.png',
          description: 'Lem sealant silikon bening (clear) ukuran besar untuk berbagai aplikasi, mulai dari akuarium hingga pengisian celah kaca.',
          specifications: [
            { key: 'Tipe', value: 'Neutral Silicone' },
            { key: 'Warna', value: 'Bening (Clear)' },
            { key: 'Volume', value: '600ml' },
          ],
          features: [
            { text: 'Daya rekat super kuat pada kaca, keramik, dan aluminium' },
            { text: 'Cepat kering, 100% tahan air, dan sangat elastis setelah kering' },
          ],
          packagingDetails: [
            { type: 'BENING | 35 gr', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
            { type: 'BENING | 85 gr', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-layer-011',
          name: 'Kabel Ties - Hitam & Putih',
          image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kabel Ties.png',
          description: 'Kabel ties Yo-Zuri dengan material nilon premium, memiliki daya kunci yang sangat kuat dan tidak mudah getas.',
          specifications: [
            { key: 'Material', value: 'Nilon Premium' },
            { key: 'Warna', value: 'Hitam & Putih' },
          ],
          features: [
            { text: 'Material nilon kualitas tinggi, tidak mudah putus atau getas' },
            { text: 'Gigi pengunci presisi, mengikat sangat kencang dan tidak melorot' },
          ],
          packagingDetails: [
            { size: '2,5x100 mm', innerBox: '10 Pax / Pouch', outerBox: '300 Pcs / Ctn' },
            { size: '3,6x150 mm', innerBox: '10 Pax / Pouch', outerBox: '300 Pcs / Ctn' },
            { size: '3,6x200 mm', innerBox: '10 Pax / Pouch', outerBox: '250 Pcs / Ctn' },
            { size: '3,6x250 mm', innerBox: '10 Pax / Pouch', outerBox: '200 Pcs / Ctn' },
            { size: '4,8x300 mm', innerBox: '10 Pax / Pouch', outerBox: '100 Pcs / Ctn' },
            { size: '4,8x400 mm', innerBox: '10 Pax / Pouch', outerBox: '100 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-layer-012',
          name: 'Gerobak Sorong - Bak PVC - 10kg',
          image: '/Images/yozuri/Yo-Zuri - Gerobak Sorong - Ban Hidup.png',
          description: 'Gerobak sorong Yo-Zuri dengan bak PVC 10kg, dirancang seimbang untuk kemudahan manuver dan daya tahan di lingkungan proyek.',
          specifications: [
            { key: 'Material Bak', value: 'PVC' },
            { key: 'Berat', value: '10 kg' },
          ],
          features: [
            { text: 'Bak PVC tebal 10kg, anti-pecah, anti-karat, dan lebih ringan' },
            { text: 'Rangka besi kokoh menopang beban berat dengan stabil' },
          ],
          packagingDetails: [
            { type: 'Ban Hidup', innerBox: '-', outerBox: '10 Sets' },
          ],
        },
        {
          id: 'yoz-layer-013',
          name: 'Lakban - Adhesive Tapes',
          image: '/Images/yozuri/Yo-Zuri - Lakban.png',
          description: 'Lakban perekat Yo-Zuri dengan daya rekat superior, tidak mudah sobek, dan ideal untuk semua kebutuhan pengepakan.',
          specifications: [
            { key: 'Warna', value: 'Coklat / Bening' },
            { key: 'Lebar', value: '2 inch (48mm)' },
          ],
          features: [
            { text: 'Daya rekat lem super lengket, menempel erat di segala permukaan' },
            { text: 'Bahan lakban tebal dan kuat, tidak mudah sobek saat ditarik' },
          ],
          packagingDetails: [
            { size: 'BENING | 2 Inch x 40 Yard', innerBox: '6 Pcs / Ctn', outerBox: '72 Pcs / Ctn' },
            { size: 'BENING | 2 Inch x 85 Yard', innerBox: '6 Pcs / Ctn', outerBox: '72 Pcs / Ctn' },
            { size: 'COKLAT | 2 Inch x 85 Yard', innerBox: '6 Pcs / Ctn', outerBox: '72 Pcs / Ctn' },
            { size: 'HITAM | 2 Inch x 4m', innerBox: '-', outerBox: '72 Pcs / Ctn' },
            { size: 'KERTAS | 1 Inch x 10m', innerBox: '6 Pcs / Ctn', outerBox: '72 Pcs / Ctn' },
            { size: 'KERTAS | 2 Inch x 10m', innerBox: '6 Pcs / Ctn', outerBox: '72 Pcs / Ctn' },
            { size: 'HIJAU | DOUBLE TAPE', innerBox: '-', outerBox: '126 Pcs / Ctn' },
            { size: 'TEXTILE LEM | 3cm x 30m', innerBox: '-', outerBox: '200 Pcs / Ctn' },
          ],
        },       
      ],
    },
    {
      id: 'door-lock-equipments',
      name: 'Door Lock Equipments | Peralatan Kunci Pintu',
      image: '/Images/doorlock yozuri.png',
      // Di dalam catalogueData -> yozuri -> kategori 'door-lock-equipments'
products: [
  { 
    id: 'yoz-lock-001', 
    name: 'Kunci Pintu Besar', 
    image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu BESAR Cover.png', // Ganti dengan path gambar Anda
    galleryImages: [
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu Besar ARSENAL.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu Besar CHELSEA.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu Besar LIVERPOOL.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu Besar MANCHESTER.png',
    ],
    description: 'Handle pintu premium seri "Arsenal" dengan desain modern dan kokoh, memberikan sentuhan elegan dan keamanan pada pintu utama Anda.',
    specifications: [
      { key: 'Model', value: 'Arsenal' },
      { key: 'Ukuran', value: 'Besar' },
      { key: 'Material', value: 'Zinc Alloy' },
    ],
    features: [
      { text: 'Desain Handle Modern & Kokoh' },
      { text: 'Finishing Tahan Lama' },
      { text: 'Mekanisme kunci presisi, pengoperasian halus dan anti-macetr' },
    ],
    packagingDetails: [
      { type: 'ARSENAL', innerBox: '1 Set / Box', outerBox: '-' },
      { type: 'CHELSEA', innerBox: '1 Set / Box', outerBox: '-' },
      { type: 'LIVERPOOL', innerBox: '1 Set / Box', outerBox: '-' },
      { type: 'MANCHESTER', innerBox: '1 Set / Box', outerBox: '-' },
    ],
  },
  { 
    id: 'yoz-lock-002', 
    name: 'Kunci Pintu Kecil', 
    image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu KECIL Cover.png', // Ganti dengan path gambar Anda
    galleryImages: [
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu Kecil ROMA.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu Kecil JUVENTUS.png',
    ],
    description: 'Handle pintu premium seri "Arsenal" dengan desain modern dan kokoh, memberikan sentuhan elegan dan keamanan pada pintu utama Anda.',
    specifications: [
      { key: 'Model', value: 'Arsenal' },
      { key: 'Ukuran', value: 'Besar' },
      { key: 'Material', value: 'Zinc Alloy' },
    ],
    features: [
      { text: 'Desain Handle Modern & Kokoh' },
      { text: 'Finishing Tahan Lama' },
      { text: 'Mekanisme kunci presisi, pengoperasian halus dan anti-macet' },
    ],
    packagingDetails: [
      { type: 'ROMA', innerBox: '1 Set / Box', outerBox: '-' },
      { type: 'JUVENTUS', innerBox: '1 Set / Box', outerBox: '-' }
    ],
  },
  { 
    id: 'yoz-lock-003', 
    name: 'Kunci Pintu Sedang', 
    image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu SEDANG Cover.png', // Ganti dengan path gambar Anda
    galleryImages: [
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu Sedang MILAN.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu Sedang MADRID.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu Sedang BARCELONA.png',
    ],
    description: 'Handle pintu premium seri "Arsenal" dengan desain modern dan kokoh, memberikan sentuhan elegan dan keamanan pada pintu utama Anda.',
    specifications: [
      { key: 'Model', value: 'Arsenal' },
      { key: 'Ukuran', value: 'Besar' },
      { key: 'Material', value: 'Zinc Alloy' },
    ],
    features: [
      { text: 'Desain handle Modern & Kokoh' },
      { text: 'Finishing Tahan Lama' },
      { text: 'Mekanisme kunci presisi, pengoperasian halus dan anti-macet' },
    ],
    packagingDetails: [
      { type: 'MILAN', innerBox: '1 Set / Box', outerBox: '-' },
      { type: 'MADRID', innerBox: '1 Set / Box', outerBox: '-' },
      { type: 'BARCELONA', innerBox: '1 Set / Box', outerBox: '-' }
    ],
  },
  { 
    id: 'yoz-lock-004', 
    name: 'Kunci Pintu BESAR PREMIUM', 
    image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu PREMIUM Besar Cover.png',
    galleryImages: [
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu PREMIUM Besar PLUTO.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu PREMIUM Besar HERMES.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu PREMIUM Besar HADES.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu PREMIUM Besar APOLLO.png',
    ],
    description: 'Seri "Chelsea" menawarkan desain handle yang minimalis dan mewah, cocok untuk pintu dengan gaya kontemporer.',
    specifications: [
      { key: 'Model', value: 'Chelsea' },
      { key: 'Ukuran', value: 'Besar' },
      { key: 'Material', value: 'Zinc Alloy' },
    ],
    features: [
      { text: 'finishing premium anti-gores' },
      { text: 'Pegangan Nyaman' },
    ],
    packagingDetails: [
      { type: 'PLUTO', innerBox: '1 Set / Box', outerBox: '12 Pcs / Ctn' },
      { type: 'HERMES', innerBox: '1 Set / Box', outerBox: '12 Pcs / Ctn' },
      { type: 'HADES', innerBox: '1 Set / Box', outerBox: '12 Pcs / Ctn' },
      { type: 'APOLLO', innerBox: '1 Set / Box', outerBox: '12 Pcs / Ctn' }
    ],
  },
   { 
    id: 'yoz-lock-006', 
    name: 'Kunci Pintu SEDANG PREMIUM', 
    image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu PREMIUM Sedang Cover.png',
    galleryImages: [
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu PREMIUM Sedang ARES.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu PREMIUM Sedang POSEISON.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu PREMIUM Sedang HERCULES.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu PREMIUM Sedang ATHENA.png',
    ],
    description: 'Seri "Chelsea" menawarkan desain handle yang minimalis dan mewah, cocok untuk pintu dengan gaya kontemporer.',
    specifications: [
      { key: 'Model', value: 'Chelsea' },
      { key: 'Ukuran', value: 'Besar' },
      { key: 'Material', value: 'Zinc Alloy' },
    ],
    features: [
      { text: 'finishing premium anti-gores' },
      { text: 'Pegangan Nyaman' },
    ],
    packagingDetails: [
      { type: 'ARES', innerBox: '1 Set / Box', outerBox: '24 Pcs / Ctn' },
      { type: 'POSEISON', innerBox: '1 Set / Box', outerBox: '24 Pcs / Ctn' },
      { type: 'HERCULES', innerBox: '1 Set / Box', outerBox: '24 Pcs / Ctn' },
      { type: 'ATHENA', innerBox: '1 Set / Box', outerBox: '24 Pcs / Ctn' }
    ],
  },
  {
    id: 'yoz-lock-007',
    name: 'Kunci Pintu Bulat - Stainless Steel',
    image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Kunci Pintu Kamar Mandi.png',
    description: 'Handle pintu berbentuk bulan sabit dengan material full stainless steel, memberikan tampilan modern, minimalis, dan tahan karat untuk pintu interior Anda.',
    specifications: [
      { key: 'Model', value: 'Bulan Sabit (Crescent)' },
      { key: 'Material', value: 'Stainless Steel SUS 304' },
      { key: 'Finishing', value: 'Brushed Nickel' }
    ],
    features: [
      { text: 'Bahan 100% Stainless Steel, sangat kuat, anti-karat, dan tahan lama' },
      { text: 'Desain simpel dan praktis, cocok untuk pintu kamar tidur atau kamar mandi' },
      { text: 'Tahan Karat & Tahan Lama' }
    ],
    packagingDetails: [
      { type: 'STANDAR', innerBox: '-', outerBox: '24 Pcs / Ctn' }
    ]
  },
  {
    id: 'yoz-lock-008',
    name: 'Body Kunci Pintu',
    image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Bodi Kunci Pintu.png',
    description: 'Body kunci (lockcase) tipe lidah untuk pintu single swing. Mekanisme presisi yang menjamin penguncian yang mulus dan aman.',
    specifications: [
      { key: 'Tipe', value: 'Lidah (Latch Bolt)' },
      { key: 'Material', value: 'Stainless Steel' },
      { key: 'Aplikasi', value: 'Pintu Kayu / Besi' }
    ],
    features: [
      { text: 'Komponen dalam dari baja berkualitas, menjamin mekanisme yang awet' },
      { text: 'Lidah kunci bekerja mulus dan senyap saat pintu ditutup' },
    ],
    packagingDetails: [
      { type: 'STANDAR', innerBox: '-', outerBox: '20 Pcs / Ctn' }
    ]
  },
  {
    id: 'yoz-lock-009',
    name: 'Body Kunci Pelor',
    image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Bodi Kunci Pelor.png',
    description: 'Body kunci (lockcase) tipe pelor (roller) untuk pintu double swing (pintu koboi). Roller memastikan pintu bisa ditutup dengan mudah dari kedua arah.',
    specifications: [
      { key: 'Tipe', value: 'Pelor (Roller Latch)' },
      { key: 'Material', value: 'Stainless Steel' },
      { key: 'Aplikasi', value: 'Pintu Double Swing' }
    ],
    features: [
      { text: 'Mekanisme roller ball (pelor) membuat pintu lebih ringan saat didorong' },
      { text: 'Ideal untuk pintu swing dua arah, pengoperasian sangat halus' },
      { text: 'Instalasi Mudah' }
    ],
    packagingDetails: [
      { type: 'STANDAR', innerBox: '-', outerBox: '20 Pcs / Ctn' }
    ]
  },
  {
    id: 'yoz-lock-010',
    name: 'Silinder Kunci Pintu',
    image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Silinder Kunci Pintu.png',
    description: 'Silinder kunci pintu dengan material kuningan untuk keamanan dan daya tahan maksimal. Dilengkapi dengan 3-5 anak kunci komputer yang sulit diduplikasi.',
    specifications: [
      { key: 'Material', value: 'Kuningan (Brass)' },
      { key: 'Ukuran', value: '60mm - 70mm' },
      { key: 'Anak Kunci', value: '3-5 Kunci Komputer' }
    ],
    features: [
      { text: 'Material Anti Karat' },
      { text: 'Keamanan Tinggi' },
      { text: 'Dilengkapi anak kunci komputer yang sulit diduplikasi' }
    ],
    packagingDetails: [
      { size: '60mm', innerBox: ' 12 Pcs / Box', outerBox: '240 Pcs / Ctn' }
    ]
  },
  {
    id: 'yoz-lock-011',
    name: 'Hak Angin Segi - Stainless Steel',
    image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Hak Angin Segi.png',
    description: 'Hak angin model segi dari bahan stainless steel tebal, berfungsi untuk menahan jendela agar tetap terbuka dengan aman dan stabil.',
    specifications: [
      { key: 'Model', value: 'Segi' },
      { key: 'Material', value: 'Stainless Steel' },
      { key: 'Panjang', value: '8 Inch / 10 Inch' }
    ],
    features: [
      { text: 'Desain Modern & Kuat' },
      { text: 'Bahan Full Stainless Steel tebal, anti-karat dan tahan cuaca' },
      { text: 'Sangat kokoh menahan jendela agar tidak terbanting oleh angin' }
    ],
    packagingDetails: [
      { type: 'JUMBO | 8 Inch', innerBox: '12 Set / Box', outerBox: '240 Pcs / Ctn' },
      { type: 'SUPER | 8 Inch', innerBox: '12 Set / Box', outerBox: '240 Pcs / Ctn' },
    ]
  },
  {
    id: 'yoz-lock-012',
    name: 'Door Closer',
    image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Door Closer.png',
    description: 'Penutup pintu otomatis (door closer) hidrolik yang dapat diatur kecepatan menutupnya. Membuat pintu selalu tertutup rapat secara perlahan dan senyap.',
    specifications: [
      { key: 'Tipe', value: 'Hidrolik' },
      { key: 'Kapasitas Beban', value: '40kg - 60kg' },
      { key: 'Fitur', value: 'Adjustable Speed' }
    ],
    features: [
      { text: 'Sistem hidrolik (hydraulic) yang bisa diatur kecepatan tutupnya' },
      { text: 'Menutup pintu secara otomatis, halus, dan tanpa suara benturan' },
      { text: 'Kecepatan Dapat Diatur' }
    ],
    packagingDetails: [
      { type: 'KECIl', innerBox: '1 Set / Box', outerBox: '20 Pcs / Ctn' },
      { type: 'BESAR', innerBox: '1 Set / Box', outerBox: '20 Pcs / Ctn' }
    ]
  },
  {
    id: 'yoz-lock-013',
    name: 'Engsel Pintu Besi - Thickness 4mm',
    image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Engsel Pintu Besi Tebal.png',
    description: 'Engsel pintu heavy duty dengan material besi setebal 4mm. Sangat kokoh untuk menopang pintu berat seperti pintu utama atau pintu garasi.',
    specifications: [
      { key: 'Material', value: 'Besi' },
      { key: 'Ketebalan', value: '4 mm' },
      { key: 'Ukuran', value: '5 Inch' }
    ],
    features: [
      { text: 'Plat besi super tebal 4mm, anti-bengkok untuk menopang pintu berat' },
      { text: 'Dilengkapi ball bearing agar bukaan pintu sangat ringan dan halus' },
    ],
    packagingDetails: [
      { size: '3 Inch', innerBox: '12 Sets / Box', outerBox: '60 Pcs / Ctn' },
      { size: '4 Inch', innerBox: '12 Sets / Box', outerBox: '60 Pcs / Ctn' },
      { size: '5 Inch', innerBox: '12 Sets / Box', outerBox: '48 Pcs / Ctn' }
    ]
  },
  {
    id: 'yoz-lock-014',
    name: 'Engsel Pintu - Stainless Steel',
    image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Engsel Stainless Steel.png',
    description: 'Engsel pintu serbaguna dari material stainless steel yang tahan karat, cocok untuk segala jenis pintu interior maupun eksterior.',
    specifications: [
      { key: 'Material', value: 'Stainless Steel' },
      { key: 'Ketebalan', value: '2.5 mm' },
      { key: 'Ukuran', value: '4 Inch / 5 Inch' }
    ],
    features: [
      { text: 'Bahan Full Stainless Steel, anti-karat permanen, cocok untuk outdoor' },
      { text: 'Menggunakan ball bearing untuk putaran engsel yang senyap dan lancar' },
    ],
    packagingDetails: [
      { size: '3 Inch', innerBox: '36 Sets / Box', outerBox: '72 Pcs / Ctn' },
      { size: '4 Inch', innerBox: '24 Sets / Box', outerBox: '48 Pcs / Ctn' },
      { size: '5 Inch', innerBox: '24 Sets / Box', outerBox: '48 Pcs / Ctn' }
    ]
  },
  {
    id: 'yoz-lock-015',
    name: 'Rel Pintu Geser - Sliding Door Track',
    image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Rel Pintu Geser.png',
    description: 'Set rel dan roda untuk pintu geser. Terbuat dari material baja berkualitas yang menjamin pergerakan pintu yang lancar dan tidak berisik.',
    specifications: [
      { key: 'Material Rel', value: 'Baja' },
      { key: 'Material Roda', value: 'Nylon' },
      { key: 'Panjang Rel', value: '1.5 Meter / 2 Meter' }
    ],
    features: [
      { text: 'Track dari bahan tebal, lurus presisi dan tidak mudah melengkung' },
      { text: 'Roda nilon dengan laher (bearing), menggeser pintu sangat ringan & senyap' },
    ],
    packagingDetails: [
      { size: '1,8 Meter', innerBox: '-', outerBox: '12 Pcs / Ctn' },
      { size: '2,1 Meter', innerBox: '-', outerBox: '12 Pcs / Ctn' },
      { size: '2,4 Meter', innerBox: '-', outerBox: '12 Pcs / Ctn' },
    ]
  },
  {
    id: 'yoz-lock-016',
    name: 'Gembok Kuningan Panjang & Pendek',
    image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Gembok Kuningan Leher Pendek & Panjang.png',
    description: 'Gembok dengan bodi full kuningan yang sangat tahan karat dan cuaca. Tersedia dalam varian leher pendek untuk keamanan maksimal dan leher panjang untuk fleksibilitas.',
    specifications: [
      { key: 'Material Bodi', value: 'Kuningan (Brass)' },
      { key: 'Material Leher', value: 'Baja Keras' },
      { key: 'Varian', value: 'Leher Pendek & Leher Panjang' }
    ],
    features: [
      { text: 'Body dari kuningan asli, sangat tahan cuaca dan anti-karat' },
      { text: 'Keamanan Terpercaya' },
      { text: 'Leher (shackle) dari baja keras (hardened steel), anti-potong dan gergaji' }
    ],
    packagingDetails: [
      { size: '30 mm', innerBox: '12 Pcs / Box', outerBox: '144 Pcs / Ctn' },
      { size: '40 mm', innerBox: '12 Pcs / Box', outerBox: '96 Pcs / Ctn' },
      { size: '50 mm', innerBox: '12 Pcs / Box', outerBox: '72 Pcs / Ctn' },
      { size: '60 mm', innerBox: '12 Pcs / Box', outerBox: '48 Pcs / Ctn' },
    ]
  },
  {
    id: 'yoz-lock-017',
    name: 'Grendel Pintu - Stainless Steel',
    image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Grendel Stainless Steel.png',
    description: 'Grendel pintu (door bolt) dari material stainless steel tebal, memberikan lapisan keamanan tambahan untuk pintu Anda. Mudah dipasang dan anti karat.',
    specifications: [
      { key: 'Material', value: 'Stainless Steel' },
      { key: 'Ukuran', value: '3 Inch / 4 Inch / 5 Inch' },
      { key: 'Finishing', value: 'Brushed' }
    ],
    features: [
      { text: 'Bahan Full Stainless Steel tebal, sangat kokoh, dan anti-karat' },
      { text: 'Slot grendel bergerak mulus, mengunci dengan pas dan aman' },
      { text: 'Pemasangan Mudah' }
    ],
    packagingDetails: [
      { size: '2 Inch', innerBox: '24 Pcs / Box', outerBox: '480 Pcs / Ctn' },
      { size: '3 Inch', innerBox: '12 Pcs / Box', outerBox: '360 Pcs / Ctn' },
      { size: '4 Inch', innerBox: '12 Pcs / Box', outerBox: '288 Pcs / Ctn' },
      { size: '6 Inch', innerBox: '12 Pcs / Box', outerBox: '192 Pcs / Ctn' },
      { size: '8 Inch', innerBox: '12 Pcs / Box', outerBox: '144 Pcs / Ctn' },
      { size: '10 Inch', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
      { size: '12 Inch', innerBox: '12 Pcs / Box', outerBox: '96 Pcs / Ctn' },
    ]
  }
],
    },
    {
      id: 'cutting-tools',
      name: 'Cutting Tools | Peralatan Potong',
      image: '/Images/cutting yozuri.png',
      // Di dalam catalogueData -> yozuri -> kategori 'cutting-tools'
      products: [
        {
          id: 'yoz-cut-001',
          name: 'Gergaji Kayu - Gagang Karet',
          image: '/Images/yozuri/Yo-Zuri - Gergaji Kayu - Gagang Karet.png', // Ganti dengan path gambar Anda
          description: 'Gergaji tangan serbaguna dengan mata pisau baja yang diasah tiga sisi untuk pemotongan yang cepat dan bersih. Gagang karet ergonomis memberikan pegangan yang nyaman dan kuat.',
          specifications: [
            { key: 'Panjang Pisau', value: '18 Inch (450mm)' },
            { key: 'Material Pisau', value: 'Baja SK-5' },
            { key: 'Material Gagang', value: 'Karet (Rubber Grip)' },
          ],
          features: [
            { text: 'Mata gergaji 3 sisi (Tri-Cut) sangat tajam, memotong kayu lebih cepat' },
            { text: 'Gagang karet anti-slip, memberikan genggaman mantap dan nyaman' },
          ],
          packagingDetails: [
            { size: '18 Inch', innerBox: '6 Pcs / Box', outerBox: '60 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-cut-002',
          name: 'Gergaji Kayu Lancip - Gagang Karet',
          image: '/Images/yozuri/Yo-Zuri - Gergaji Kayu Lancip - Gagang Karet.png',
          description: 'Gergaji dahan dengan ujung lancip (jab saw) untuk menjangkau area sulit dan memulai pemotongan dari tengah permukaan. Gagang karet memberikan kontrol penuh.',
          specifications: [
            { key: 'Panjang Pisau', value: '12 Inch (300mm)' },
            { key: 'Material Pisau', value: 'Baja SK-5' },
            { key: 'Fitur', value: 'Ujung Lancip' },
          ],
          features: [
            { text: 'Ujung lancip dirancang khusus untuk membuat lubang dan potongan melengkung' },
            { text: 'Gagang karet ergonomis untuk kontrol maksimal saat memotong detail' },
          ],
          packagingDetails: [
            { size: '14 Inch', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
          ],
        },
      ],
    },
    {
      id: 'measuring-layout-tools',
      name: 'Measuring & Layout Tools | Peralatan Ukur & Tata Letak',
      image: '/Images/measuring yozuri.png',
      // Di dalam catalogueData -> yozuri -> kategori 'measuring-layout-tools'
      products: [
        {
          id: 'yoz-measure-001',
          name: 'Meteran New - Non Autostop',
          image: '/Images/yozuri/Yo-Zuri - Meteran - New 10m A.png', // Ganti dengan path gambar Anda
          description: 'Meteran seri "New" dari Yo-Zuri dengan desain klasik dan bodi yang kokoh. Sistem penguncian manual yang andal untuk pengukuran akurat.',
          specifications: [
            { key: 'Fitur', value: 'Non-Autostop, Manual Lock' },
            { key: 'Material Bodi', value: 'ABS Plastik' },
          ],
          features: [
            { text: 'Plat meteran tebal dengan angka yang dicetak jelas dan anti-gores' },
            { text: 'Body ABS kokoh, tahan banting dan benturan di lokasi proyek' },
          ],
          packagingDetails: [
            { size: '3 Meter', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
            { size: '5 Meter', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
            { size: '7,5 Meter', innerBox: '6 Pcs / Box', outerBox: '60 Pcs / Ctn' },
            { size: '10 Meter', innerBox: '6 Pcs / Box', outerBox: '60 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-measure-002',
          name: 'Meteran Mars - Autostop',
          image: '/Images/yozuri/Yo-Zuri - Meteran - Mars 10m A.png',
          description: 'Meteran seri "Mars" dilengkapi fitur Autostop yang menahan plat meteran secara otomatis saat ditarik, memudahkan pengukuran seorang diri.',
          specifications: [
            { key: 'Fitur', value: 'Autostop' },
            { key: 'Material Bodi', value: 'ABS Lapis Karet' },
          ],
          features: [
            { text: 'Fitur Auto Stop otomatis menahan plat, membuat pengukuran lebih praktis' },
            { text: 'Body dilapisi karet (rubberized), nyaman digenggam dan lebih tahan banting' },
          ],
          packagingDetails: [
            { size: '3 Meter', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
            { size: '5 Meter', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
            { size: '7,5 Meter', innerBox: '6 Pcs / Box', outerBox: '60 Pcs / Ctn' },
            { size: '10 Meter', innerBox: '6 Pcs / Box', outerBox: '60 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-measure-003',
          name: 'Meteran Neptune - Autostop',
          image: '/Images/yozuri/Yo-Zuri - Meteran - Neptune 7,5m A.png',
          description: 'Meteran premium seri "Neptune" dengan fitur Autostop dan desain futuristik. Bodi full-rubber untuk daya tahan benturan maksimal.',
          specifications: [
            { key: 'Fitur', value: 'Autostop' },
            { key: 'Material Bodi', value: 'Full Rubber Body' },
          ],
          features: [
            { text: 'Fitur auto stop otomatis' },
            { text: 'Body dilapisi karet (rubberized)' },
          ],
          packagingDetails: [
            { size: '3 Meter', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
            { size: '5 Meter', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
            { size: '7,5 Meter', innerBox: '6 Pcs / Box', outerBox: '60 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-measure-004',
          name: 'Meteran Tancap - Fiberglass',
          image: '/Images/yozuri/Yo-Zuri - Meteran Tancap - Fiberglass A.png',
          description: 'Meteran roll (meteran tancap) dengan pita fiberglass yang tidak menghantarkan listrik, anti melar, dan tahan lama. Cocok untuk mengukur jarak jauh di area proyek.',
          specifications: [
            { key: 'Material Pita', value: 'Fiberglass' },
            { key: 'Fitur', value: 'Gagang Putar, Ujung Tancap' },
          ],
          features: [
            { text: 'Pita Fiberglass anti-mulur, anti-karat, dan tahan air untuk akurasi maksimal' },
            { text: 'Ujung tancap runcing & tuas putar ringan untuk pengukuran jarak jauh' },
          ],
          packagingDetails: [
            { size: '30 Meter', innerBox: '-', outerBox: '24 Pcs / Ctn' },
            { size: '50 Meter', innerBox: '-', outerBox: '24 Pcs / Ctn' },
            { size: '100 Meter', innerBox: '-', outerBox: '12 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-measure-005',
          name: 'Siku Tukang - Stainless Steel',
          image: '/Images/yozuri/Yo-Zuri - Siku Tukang.png',
          description: 'Besi siku lubang serbaguna yang terbuat dari Stainless Steel murni, menjamin kekuatan dan ketahanan karat terbaik untuk jangka panjang.',
          specifications: [
            { key: 'Material', value: 'Stainless Steel' },
            { key: 'Panjang', value: '3 Meter' },
          ],
          features: [
            { text: 'Bahan Full Stainless Steel tebal, anti-karat, dan tidak mudah bengkok' },
            { text: 'Angka pengukuran digrafir (ukir), sangat jelas dan tidak akan pudar' },
          ],
          packagingDetails: [
            { size: '12 Inch', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-measure-006',
          name: 'Lot Tukang - Plumb Bob',
          image: '/Images/yozuri/Yo-Zuri - Lot Tukang - Merah+Biru A.png',
          description: 'Lot tukang (plumb bob) presisi untuk menentukan titik vertikal lurus dengan akurasi tinggi. Dilengkapi benang kuat dan ujung yang runcing.',
          specifications: [
            { key: 'Material', value: 'Besi' },
            { key: 'Berat', value: '300g / 500g' },
          ],
          features: [
            { text: 'Bahan besi padat dengan ujung presisi untuk titik vertikal yang akurat' },
            { text: 'Dilengkapi benang kuat dan tutup penyimpan benang yang praktis' },
          ],
          packagingDetails: [
            { size: '200 Gr', innerBox: '6 Pcs / Box', outerBox: '120 Pcs / Ctn' },
            { size: '300 Gr', innerBox: '6 Pcs / Box', outerBox: '120 Pcs / Ctn' },
            { size: '400 Gr', innerBox: '6 Pcs / Box', outerBox: '60 Pcs / Ctn' },
            { size: '500 Gr', innerBox: '6 Pcs / Box', outerBox: '60 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-measure-007',
          name: 'Waterpass - Torpedo',
          image: '/Images/yozuri/Yo-Zuri - Waterpass Torpedo.png',
          description: 'Waterpass mini model torpedo yang ringkas dan mudah dibawa. Dilengkapi magnet kuat di bagian bawah untuk menempel pada permukaan besi.',
          specifications: [
            { key: 'Model', value: 'Torpedo' },
            { key: 'Fitur', value: 'Magnet' },
            { key: 'Panjang', value: '9 Inch' },
          ],
          features: [
            { text: 'Tabung vial akrilik anti-pecah dengan gelembung yang sangat jelas' },
            { text: 'Frame aluminium yang tebal namun ringan, presisi dan tidak melengkung' },
          ],
          packagingDetails: [
            { size: '9 Inch', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-measure-008',
          name: 'Waterpass Magnet - Heavy Duty',
          image: '/Images/yozuri/Yo-Zuri - Waterpass Magnet - 450mm A.png',
          description: 'Waterpass heavy duty dengan rangka aluminium tebal dan magnet super kuat. Dirancang untuk akurasi dan daya tahan di lingkungan kerja yang ekstrem.',
          specifications: [
            { key: 'Material', value: 'Aluminium' },
            { key: 'Fitur', value: 'Magnet Super Kuat' },
          ],
          features: [
            { text: 'Magnet super kuat di bagian bawah, menempel erat pada permukaan besi' },
            { text: 'Konstruksi Heavy Duty dengan ujung karet, sangat tahan benturan keras' },
          ],
          packagingDetails: [
            { size: '450 mm / 18 Inch', innerBox: '10 Pcs / Box', outerBox: '60 Pcs / Ctn' },
            { size: '650 mm / 24 Inch', innerBox: '10 Pcs / Box', outerBox: '60 Pcs / Ctn' },
            { size: '1.000 mm / 40 Inch', innerBox: '8 Pcs / Box', outerBox: '40 Pcs / Ctn' },
          ],
        },
      ],
    },
    {
      id: 'sanitary-equipments',
      name: 'Sanitary Equipments | Peralatan Sanitasi',
      image: '/Images/sanitary yozuri.png',
      // Di dalam catalogueData -> yozuri -> kategori 'sanitary-equipments'
      products: [
        {
          id: 'yoz-sanitary-009',
          name: 'Rainshower Set',
          image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Rainshower Set A.png', // Ganti dengan path gambar Anda
          galleryImages: [
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Rainshower Set B.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Rainshower Set C.png',
    ],
          description: 'Seal tape premium dari 100% P.T.F.E murni, menjamin sambungan drat bebas bocor. Elastis, kuat, dan mudah diaplikasikan.',
          specifications: [
            { key: 'Material', value: '100% P.T.F.E' },
            { key: 'Kepadatan', value: 'Tinggi' },
          ],
          features: [
            { text: 'Desain head shower lebar, modern, dan mewah' },
            { text: 'Semburan air deras dan merata, memberikan efek relaksasi' },
          ],
          packagingDetails: [
            { type: 'DIGITAL', innerBox: '1 Set', outerBox: '10 Sets' },
            { type: 'NON-DIGITAL', innerBox: '1 Set', outerBox: '10 Sets' },
          ],
        },
        {
          id: 'yoz-sanitary-010',
          name: 'Saringan Kamar Mandi - Hitam',
          image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Saringan Kamar Mandi Hitam A.png', // Ganti dengan path gambar Anda
          galleryImages: [
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Saringan Kamar Mandi Hitam B.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Saringan Kamar Mandi Hitam C.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Saringan Kamar Mandi Hitam D.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Saringan Kamar Mandi Hitam E.png',
    ],
          description: 'Seal tape premium dari 100% P.T.F.E murni, menjamin sambungan drat bebas bocor. Elastis, kuat, dan mudah diaplikasikan.',
          specifications: [
            { key: 'Material', value: '100% P.T.F.E' },
            { key: 'Kepadatan', value: 'Tinggi' },
          ],
          features: [
            { text: 'Bahan stainless steel tebal, anti-karat dan kuat diinjak' },
            { text: 'Menyaring kotoran secara efektif dan mencegah serangga masuk' },
          ],
          packagingDetails: [
            { type: 'ATLANTIC', innerBox: '-', outerBox: '100 Pcs / Ctn' },
            { type: 'OCEANIC', innerBox: '-', outerBox: '100 Pcs / Ctn' },
            { type: 'PACIFIC', innerBox: '-', outerBox: '100 Pcs / Ctn' },
            { type: 'HINDIA', innerBox: '-', outerBox: '100 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-sanitary-011',
          name: 'Saringan Kamar Mandi - Silver',
          image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Saringan Kamar Mandi Silver A.png', // Ganti dengan path gambar Anda
          galleryImages: [
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Saringan Kamar Mandi Silver B.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Saringan Kamar Mandi Silver C.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Saringan Kamar Mandi Silver D.png',
      '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Saringan Kamar Mandi Silver E.png',
    ],
          description: 'Seal tape premium dari 100% P.T.F.E murni, menjamin sambungan drat bebas bocor. Elastis, kuat, dan mudah diaplikasikan.',
          specifications: [
            { key: 'Material', value: '100% P.T.F.E' },
            { key: 'Kepadatan', value: 'Tinggi' },
          ],
          features: [
            { text: 'Bahan stainless steel tebal, anti-karat dan kuat diinjak' },
            { text: 'Menyaring kotoran secara efektif dan mencegah serangga masuk' },
          ],
          packagingDetails: [
            { type: 'ATLANTIC', innerBox: '-', outerBox: '100 Pcs / Ctn' },
            { type: 'OCEANIC', innerBox: '-', outerBox: '100 Pcs / Ctn' },
            { type: 'PACIFIC', innerBox: '-', outerBox: '100 Pcs / Ctn' },
            { type: 'HINDIA', innerBox: '-', outerBox: '100 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-sanitary-001',
          name: 'Seal Tape Putih - 100% P.T.F.E.',
          image: '/Images/yozuri/Yo-Zuri - Seal Tape - PTFE A.png', // Ganti dengan path gambar Anda
          description: 'Seal tape premium dari 100% P.T.F.E murni, menjamin sambungan drat bebas bocor. Elastis, kuat, dan mudah diaplikasikan.',
          specifications: [
            { key: 'Material', value: '100% P.T.F.E' },
            { key: 'Kepadatan', value: 'Tinggi' },
          ],
          features: [
            { text: 'Kualitas P.T.F.E Murni' },
            { text: 'Efektif mencegah kebocoran pada sambungan drat pipa standar.' },
          ],
          packagingDetails: [
            { size: '12 | 1/2 x 10 Meter', innerBox: '200 Pcs / Box', outerBox: '1.200 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-sanitary-008',
          name: 'Seal Tape Biru - 100% P.T.F.E.',
          image: '/Images/yozuri/PT STS - YO-ZURI - Web Design - Catalogue - Seal Tape Biru.png',
          description: 'Saringan pembuangan lantai (floor drainer) dari stainless steel. Mencegah rambut dan kotoran masuk ke saluran pipa, serta anti-bau.',
          specifications: [
            { key: 'Material', value: 'Stainless Steel' },
            { key: 'Ukuran', value: '4 Inch' },
          ],
          features: [
            { text: 'Kepadatan (density) lebih tinggi, anti-bocor maksimal untuk tekanan tinggi' },
            { text: 'Lebih tebal sehingga pemakaian lebih hemat dan efisien' },
          ],
          packagingDetails: [
            { size: '12 | 1/2 x 10 Meter', innerBox: '200 Pcs / Box', outerBox: '1.200 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-sanitary-002',
          name: 'Kran Taman Jumbo - PVC',
          image: '/Images/yozuri/Yo-Zuri - Kran Taman Jumbo - PVC.png',
          description: 'Kran taman ukuran jumbo berbahan PVC tebal dan tahan cuaca. Ukuran drat 3/4 inch untuk aliran air yang lebih deras.',
          specifications: [
            { key: 'Material', value: 'PVC' },
            { key: 'Ukuran Drat', value: '3/4 Inch' },
          ],
          features: [
            { text: 'Bahan PVC tebal kualitas terbaik, anti-pecah dan tahan cuaca' },
            { text: 'Ukuran jumbo menghasilkan aliran air yang sangat deras dan kencang' },
          ],
          packagingDetails: [
            { type: 'Engkol | 1/2 - 3/4 Inch', innerBox: '12 Pcs / Box', outerBox: '240 Pcs / Ctn' },
            { type: 'Bulat | 1/2 - 3/4 Inch', innerBox: '12 Pcs / Box', outerBox: '240 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-sanitary-003',
          name: 'Kran Tembok Jumbo - PVC',
          image: '/Images/yozuri/Yo-Zuri - Kran Tembok Jumbo - PVC.png',
          description: 'Kran tembok PVC ukuran jumbo dengan desain modern. Cocok untuk area cuci atau garasi yang membutuhkan daya tahan ekstra.',
          specifications: [
            { key: 'Material', value: 'PVC' },
            { key: 'Ukuran Drat', value: '1/2 Inch' },
          ],
          features: [
            { text: 'Desain Modern Ukuran jumbo' },
            { text: 'Bahan PVC Tebal Kualitas terbaik, anti pecah dan tahan cuaca' },
          ],
          packagingDetails: [
            { type: 'Engkol | 1/2 - 3/4 Inch', innerBox: '12 Pcs / Box', outerBox: '240 Pcs / Ctn' },
            { type: 'Bulat | 1/2 - 3/4 Inch', innerBox: '12 Pcs / Box', outerBox: '240 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-sanitary-004',
          name: 'Kran Bening - PVC',
          image: '/Images/yozuri/Yo-Zuri - Kran - Transparan PVC Engkol+Bulat+Topi A.png',
          description: 'Kran dinding dengan bodi PVC transparan yang unik, memberikan sentuhan estetika modern pada kamar mandi atau dapur Anda.',
          specifications: [
            { key: 'Material', value: 'PVC Transparan' },
            { key: 'Ukuran Drat', value: '1/2 Inch' },
          ],
          features: [
            { text: 'Desain transparan yang unik dan modern, dapat melihat aliran air' },
            { text: 'Mekanisme tuas putar yang ringan dan tidak mudah dol' },
          ],
          packagingDetails: [
            { type: 'Engkol | 1/2 - 3/4 Inch', innerBox: '24 Pcs / Box', outerBox: '360 Pcs / Ctn' },
            { type: 'Bulat | 1/2 - 3/4 Inch', innerBox: '24 Pcs / Box', outerBox: '360 Pcs / Ctn' },
            { type: 'Topi | 1/2 - 3/4 Inch', innerBox: '24 Pcs / Box', outerBox: '360 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-sanitary-005',
          name: 'Kran Angsa Kepala Kecil - Stainless Steel',
          image: '/Images/yozuri/Yo-Zuri - Kran - Angsa Kepala Kecil - Stainless Steel.png',
          description: 'Kran wastafel model angsa dengan material full stainless steel. Kepala kecil menghasilkan aliran air lurus dan presisi.',
          specifications: [
            { key: 'Material', value: 'Stainless Steel' },
            { key: 'Model Kepala', value: 'Kecil / Lurus' },
          ],
          features: [
            { text: 'Bahan Full Stainless Steel SUS 304, anti-karat, aman dan elegan' },
            { text: 'Leher angsa fleksibel, mudah diarahkan untuk mencuci piring' },
          ],
          packagingDetails: [
            { type: 'Dinding', innerBox: '12 Pcs / Box', outerBox: '96 Pcs / Carton' },
          ],
        },
        {
          id: 'yoz-sanitary-006',
          name: 'Ball Valve - PVC',
          image: '/Images/yozuri/Yo-Zuri - Ball Valve Putih+Biru - PVC.png',
          description: 'Stop kran (ball valve) Yo-Zuri dengan material PVC tebal dan mekanisme bola yang presisi, memastikan aliran tertutup sempurna tanpa bocor.',
          specifications: [
            { key: 'Material', value: 'PVC' },
            { key: 'Tipe', value: 'Ball Valve' },
          ],
          features: [
            { text: 'Sistem bola (ball) menutup aliran air dengan sangat rapat dan anti-bocor' },
            { text: 'Bahan PVC tebal, tidak mudah retak oleh tekanan air tinggi' },
          ],
          packagingDetails: [
            { size: '1/2 Inch', innerBox: '24 Pcs / Box', outerBox: '240 Pcs / Ctn' },
            { size: '3/4 Inch', innerBox: '24 Pcs / Box', outerBox: '192 Pcs / Ctn' },
            { size: '1 Inch', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-sanitary-007',
          name: 'Water Mur - PVC',
          image: '/Images/yozuri/Yo-Zuri - Water Mur - Putih A.png',
          description: 'Water mur (union socket) PVC untuk membuat sambungan pipa yang bisa dilepas-pasang dengan mudah tanpa perlu memotong pipa.',
          specifications: [
            { key: 'Material', value: 'PVC' },
            { key: 'Tipe', value: 'Union Socket' },
          ],
          features: [
            { text: 'Memudahkan bongkar-pasang sambungan pipa tanpa perlu memotong' },
            { text: 'Dilengkapi seal karet tebal untuk sambungan yang 100% anti-bocor' },
          ],
          packagingDetails: [
            { size: '1/2 Inch', innerBox: '24 Pcs / Box', outerBox: '240 Pcs / Ctn' },
            { size: '3/4 Inch', innerBox: '24 Pcs / Box', outerBox: '240 Pcs / Ctn' },
          ],
        },
      ],
    },
    {
      id: 'safety-equipments',
      name: 'Safety Equipments | Peralatan Keselamatan',
      image: '/Images/safety yozuri.png',
      products: [{
        id: 'yoz-safety-001',
        name: 'Sepatu Karet Keselamatan',
        image: '/Images/yozuri/Yo-Zuri - Safety Rubber Boots.png',
        description: 'Waterpass heavy duty dengan rangka aluminium tebal dan magnet super kuat. Dirancang untuk akurasi dan daya tahan di lingkungan kerja yang ekstrem.',
        specifications: [
          { key: 'Material', value: 'Aluminium' },
          { key: 'Fitur', value: 'Magnet Super Kuat' },
        ],
        features: [
          { text: 'Dilengkapi pelindung ujung baja, tahan benturan dan tekanan berat' },
          { text: 'Bahan karet tebal anti-air dengan sol anti-slip untuk keamanan di area basah' },
        ],
        packagingDetails: [
          { size: '39-43', innerBox: '-', outerBox: '12 Pairs / Ctn' },
        ],
      },
      ],
    },
  ],
  helios: [
    {
      id: 'safety-equipments',
      name: 'Safety Equipments | Peralatan Keselamatan',
      image: '/Images/safety yozuri.png',
      products: [],
    },
  ],
};