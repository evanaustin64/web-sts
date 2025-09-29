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
  packagingDetails?: { size?: string; type?: string; innerBox?: string; outerBox?: string }[];
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
          image: '/Images/own/Owner - Palu Kambing Gagang Fiber - Gerigi.png',
          description: 'Palu kambing OWNER PRO series dengan kepala gerigi dirancang untuk daya cengkeram paku maksimal. Gagang fiber anti-slip memberikan kenyamanan dan keamanan ekstra saat digunakan.',
          specifications: [{ key: 'Ukuran Kepala', value: '8oz' }, { key: 'Material Gagang', value: 'Fiberglass' }],
          features: [{ text: 'Baja Kuat' }, { text: 'Gagang Nyaman' }],
          packagingDetails: [
            { size: '8 OZ / 0,23 Lbs', innerBox: '6 Pcs/box', outerBox: '60/ctn' },
            { size: '12 OZ / 0,375 Lbs', innerBox: '6 Pcs/box', outerBox: '48/ctn' },
            { size: '16 OZ / 0,50 Lbs', innerBox: '6 Pcs/box', outerBox: '36/ctn' },
          ],
          variations: [{ id: 'own-002', name: 'Palu Kambing Rata', image: '/Images/own/Owner - Palu Kambing Gagang Fiber - Non-Gerigi.png' }]
        },
        {
          id: 'own-002',
          name: 'Palu Kambing - Gagang Fiber',
          image: '/Images/own/Owner - Palu Kambing Gagang Fiber - Non-Gerigi.png',
          description: 'Palu kambing serbaguna dengan kepala rata, cocok untuk berbagai keperluan pertukangan dan proyek DIY. Gagang fiber yang ringan dan kuat.',
          specifications: [{ key: 'Ukuran Kepala', value: '8oz' }, { key: 'Material Gagang', value: 'Fiberglass' }],
          features: [{ text: 'Baja Tempa' }, { text: 'Gagang Fiber' }],
          packagingDetails: [
            { size: '8 OZ / 0,23 Lbs', innerBox: '6 Pcs/box', outerBox: '60/ctn' },
            { size: '12 OZ / 0,375 Lbs', innerBox: '6 Pcs/box', outerBox: '48/ctn' },
            { size: '16 OZ / 0,50 Lbs', innerBox: '6 Pcs/box', outerBox: '36/ctn' },
          ],
          variations: [{ id: 'own-001', name: 'Palu Kambing Gerigi', image: '/Images/own/Owner - Palu Kambing Gagang Fiber - Gerigi.png' }]
        },
        {
          id: 'own-003',
          name: 'Palu Bodam - Tanpa Gagang',
          image: '/Images/own/Owner - Palu Bodem Tanpa Gagang A.png',
          description: 'Palu bodam (sledgehammer) dari baja tempa berkualitas tinggi, ideal untuk pekerjaan penghancuran berat seperti membongkar beton dan dinding.',
          specifications: [{ key: 'Berat', value: '3 kg' }, { key: 'Material Kepala', value: 'Baja Tempa' }],
          features: [{ text: 'Daya Hancur' }, { text: 'Heavy Duty' }],
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
          image: '/Images/own/Owner - Kabel Ties B.png',
          description: 'Kabel ties serbaguna berbahan nilon kuat untuk mengikat dan merapikan kabel, selang, atau keperluan lainnya. Tahan lama dan tidak mudah putus.',
          specifications: [{ key: 'Material', value: 'Nilon 66' }, { key: 'Warna', value: 'Hitam, Putih' }],
          features: [{ text: 'Kuat Mengunci' }, { text: 'Fleksibel' }],
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
          image: '/Images/own/Owner - Diamond Wheel - Dry Yellow A.png',
          description: 'Mata gerinda potong keramik tipe kering (dry) yang dirancang untuk pemotongan presisi dan cepat pada berbagai jenis keramik, granit, dan marmer.',
          specifications: [{ key: 'Tipe', value: 'Kering (Dry Cut)' }, { key: 'Diameter', value: '4 inch' }],
          features: [{ text: 'Potongan Presisi' }, { text: 'Cepat & Bersih' }],
          packagingDetails: [
            { size: '4 Inch', innerBox: '10 Pcs / box', outerBox: '200 Pcs / Ctn' },
          ],
          variations: [{ id: 'own-006', name: 'Diamond Wheel Turbo', image: '/Images/own/Owner - Diamond Wheel Turbo K Disc - Front.png' }]
        },
        {
          id: 'own-006',
          name: 'Diamond Wheel Turbo',
          image: '/Images/own/Owner - Diamond Wheel Turbo K Disc - Front.png',
          description: 'Mata gerinda potong serbaguna dengan desain turbo rim untuk pendinginan lebih baik dan pemotongan yang lebih agresif. Cocok untuk beton dan batu alam.',
          specifications: [{ key: 'Tipe', value: 'Turbo Rim' }, { key: 'Diameter', value: '4 inch' }],
          features: [{ text: 'Potongan Agresif' }, { text: 'Desain Pendingin' }],
          packagingDetails: [
            { size: '4 Inch', innerBox: '10 Pcs / box', outerBox: '200 Pcs / Ctn' },
          ],
          variations: [{ id: 'own-005', name: 'Diamond Wheel Dry', image: '/Images/own/Owner - Diamond Wheel - Dry Yellow A.png' }]
        },
        {
          id: 'own-007',
          name: 'Tali Rafia',
          image: '/Images/own/Owner - Tali Rafia - Hitam.png',
          description: 'Tali rafia berkualitas tinggi, kuat, dan tidak mudah berserabut. Cocok untuk berbagai keperluan pengemasan, pengikatan, dan kerajinan tangan.',
          specifications: [{ key: 'Warna', value: 'Hitam' }, { key: 'Berat Gulungan', value: '1 kg' }],
          features: [{ text: 'Kuat & Tebal' }, { text: 'Serbaguna' }],
          packagingDetails: [
            { size: '1 KG', innerBox: '-', outerBox: '15 Roll / ctn' },
          ],
        },
        {
          id: 'own-008',
          name: 'Lakban - Adhesive Tapes',
          image: '/Images/own/Owner - Lakban A.png',
          description: 'Lakban perekat serbaguna dengan daya rekat kuat, ideal untuk pengepakan kardus, penyegelan, dan berbagai keperluan rumah tangga maupun industri.',
          specifications: [{ key: 'Warna', value: 'Coklat' }, { key: 'Lebar', value: '2 inch (48mm)' }],
          features: [{ text: 'Daya Rekat Kuat' }, { text: 'Serbaguna' }],
          packagingDetails: [
            { size: '2" x 100y', innerBox: '6/slop', outerBox: '72/ctn' },
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
          image: '/Images/own/Owner - kuas roll .png', // TIDAK DIUBAH
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
          image: '/Images/own/Owner - 9 Inch Bulu Roll Copot - Orange.png', // TIDAK DIUBAH
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
          image: '/Images/own/Owner - 4 Inch Bulu Roll Domba - Merah.png', // TIDAK DIUBAH
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
          image: '/Images/own/Owner - 4 Inch Bulu Roll Kapal - Garis.png', // TIDAK DIUBAH
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
          ],
        },
        {
          id: 'own-paint-006',
          name: 'Kuas Cat 633',
          image: '/Images/own/Owner - Kuas Cat 633 - All-Sizes.png', // TIDAK DIUBAH
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
            { size: '1 Inch', innerBox: '12/box', outerBox: '240/ctn' }, // SUDAH DIUBAH
            { size: '1.5 Inch', innerBox: '12/box', outerBox: '180/ctn' }, // SUDAH DIUBAH
            { size: '2 Inch', innerBox: '12/box', outerBox: '120/ctn' }, // SUDAH DIUBAH
          ],
        },
        {
          id: 'own-paint-007',
          name: 'Kuas Roll Copot 4 Inch Domba',
          image: '/Images/own/Owner - Kuas Roll Copot 4 Inch - Bulu Domba Merah A.png', // TIDAK DIUBAH
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
            { type: 'Domba', innerBox: '12 Pcs / Pack', outerBox: '120 Pcs / Ctn' }, // SUDAH DIUBAH
          ],
          variations: [
            { id: 'own-paint-008', name: 'Kuas Roll Copot 4 Inch Garis', image: '/Images/own/Owner - Kuas Roll Copot 4 Inch - Garis A.png' },
          ]
        },
        {
          id: 'own-paint-008',
          name: 'Kuas Roll Copot 4 Inch Garis',
          image: '/Images/own/Owner - Kuas Roll Copot 4 Inch - Garis A.png', // TIDAK DIUBAH
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
            { type: 'Garis', innerBox: '12 Pcs / Pack', outerBox: '120 Pcs / Ctn' }, // SUDAH DIUBAH
          ],
          variations: [
            { id: 'own-paint-007', name: 'Kuas Roll Copot 4 Inch Domba', image: '/Images/own/Owner - Kuas Roll Copot 4 Inch - Bulu Domba Merah A.png' },
          ]
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
          image: '/Images/own/Yo-Zuri - Siku Rak - Putih.png',
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
          image: '/Images/own/Owner - Siku Lubang 4 Warna A.png',
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
            { size: '3M', innerBox: '10/pack', outerBox: '100/ctn' },
          ],
        },
        // { 
        //   id: 'own-layer-003', 
        //   name: 'Pahat Topi Jumbo (Concrete Chisel)', ...
        // },
        {
          id: 'own-layer-004',
          name: 'Sikat Kawat',
          image: '/Images/own/Owner - Sikat Kawat.png',
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
          image: '/Images/own/Owner - Fissher A.png',
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
            { type: 'S5', innerBox: '100 Pcs / Box', outerBox: '200 Pcs / Ctn' },
            { type: 'S6', innerBox: '100 Pcs / Box', outerBox: '200 Pcs / Ctn' },
            { type: 'S8', innerBox: '100 Pcs / Box', outerBox: '100 Pcs / Ctn' },
            { type: 'S10', innerBox: '50 PCs / Box', outerBox: '120 Pcs / Ctn' },
            { type: 'S12', innerBox: '50 PCs / Box', outerBox: '120 Pcs / Ctn' },
          ],
          variations: [
            { id: 'own-layer-006', name: 'Fissher + Sekrup Set', image: '/Images/own/Owner - Fissher+Sekrup.png' },
          ]
        },
        {
          id: 'own-layer-006',
          name: 'Fissher + Sekrup Set',
          image: '/Images/own/Owner - Fissher+Sekrup.png',
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
            { type: 'S5', innerBox: '25 Pcs / Pack', outerBox: '240 Pcs / Box' },
            { type: 'S6', innerBox: '25 Pcs / Pack', outerBox: '240 Pcs / Box' },
            { type: 'S8', innerBox: '25 Pcs / Pack', outerBox: '200 Pcs / Box' },
            { type: 'S10', innerBox: '10 PCs / Pack', outerBox: '200 Pcs / Box' },
            { type: 'S12', innerBox: '10 PCs / Pack', outerBox: '200 Pcs / Box' },
          ],
          variations: [
            { id: 'own-layer-005', name: 'Fissher', image: '/Images/own/Owner - Fissher A.png' },
          ]
        },
        {
          id: 'own-layer-007',
          name: 'Gerobak Sorong - PVC (9kg)',
          image: '/Images/own/Owner - Gerobak Sorong - Bak PVC Putih - Ban Hidup.png',
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
          ],
        },
        {
          id: 'own-layer-008',
          name: 'Amplas Roll PREMIUM',
          image: '/Images/own/Owner - Abrasive Roll PREMUM.png',
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
            { id: 'own-layer-009', name: 'Amplas Roll 98', image: '/Images/own/Owner - Abrasive Roll 98.png' },
          ]
        },
        {
          id: 'own-layer-009',
          name: 'Amplas Roll 98',
          image: '/Images/own/Owner - Abrasive Roll 98.png',
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
            { id: 'own-layer-008', name: 'Amplas Roll PREMIUM', image: '/Images/own/Owner - Abrasive Roll PREMUM.png' },
          ]
        },
        {
          id: 'own-layer-010',
          name: 'Sendok Semen Lancip - Gagang Kayu',
          image: '/Images/own/Owner - Sendok Semen Lancip - Gagang Kayu.png',
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
          image: '/Images/own/Owner - Kape - Gagang Kayu.png',
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
          image: '/Images/own/Owner - Silinder Kunci Pintu - Besar A.png',
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
          image: '/Images/own/Owner - Body Kunci - Lidah A.png',
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
          image: '/Images/own/Owner - Body Kunci - Pelor A.png',
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
          image: '/Images/own/Owner - Engsel PVC Putih+Coklat+Baut A.png',
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
            { type: '4 Inch', innerBox: '12 Sets / Box', outerBox: '480 Pcs / Ctn' },
          ],
        },
        {
          id: 'own-door-005',
          name: 'Gembok Nickel - Pendek & Panjang',
          image: '/Images/own/Owner - Gembok Leher Pendek+Panjang+Kunci 60mm A.png',
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
          image: '/Images/own/Owner - Gembok Segi+Kunci 94mm A.png',
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
            { text: 'Gagang Fiber Anti Getar' },
            { text: 'Kekuatan Maksimal' },
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
            { text: 'Desain Seimbang' },
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
            { text: 'Desain Tradisional' },
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
            { text: 'Gagang Isolasi' },
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
            { text: 'Ujung Presisi' },
            { text: 'Jangkauan Sempit' },
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
            { text: '3-in-1 Serbaguna' },
            { text: 'Gerigi Kuat' },
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
            { text: 'Baja Keras' },
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
            { text: 'Gagang Karet Anti-Slip' },
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
            { text: 'Gagang Kayu Klasik' },
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
            { text: 'Daya Ungkit Maksimal' },
            { text: 'Heavy Duty' },
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
            { text: 'Cengkeraman Pipa Kuat' },
            { text: 'Adjustable' },
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
            { text: 'Pemotongan Cepat' },
            { text: 'Serbaguna Basah & Kering' },
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
            { text: 'Hasil Potongan Super Halus' },
            { text: 'Anti Cuil (Chipping)' },
          ],
          packagingDetails: [
            { size: '4 Inch / 105 mm', innerBox: '10 Pcs / Box', outerBox: '200 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-diamond-003',
          name: 'Diamond Wheel Turbo Batik - Wet & Dry Cutting',
          image: '/Images/yozuri/diamond-batik.png',
          description: 'Mata gerinda potong dengan desain segmen "Batik" yang unik untuk pendinginan optimal dan pemotongan yang stabil pada berbagai material bangunan.',
          specifications: [
            { key: 'Tipe', value: 'Turbo Batik' },
            { key: 'Pemotongan', value: 'Basah & Kering (Wet & Dry)' },
            { key: 'Aplikasi', value: 'Beton, Tembok, Genteng' },
          ],
          features: [
            { text: 'Desain Segmen Unik' },
            { text: 'Pendinginan Optimal' },
          ],
          packagingDetails: [
            { size: '4 Inch / 105 mm', innerBox: '10 Pcs / Box', outerBox: '200 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-diamond-004',
          name: 'Diamond Wheel Turbo Super Thin - Dry Cutting',
          image: '/Images/yozuri/diamond-super-thin.png',
          description: 'Mata gerinda turbo super tipis untuk pemotongan kering yang sangat cepat dengan gesekan minimal. Ideal untuk pemotongan presisi.',
          specifications: [
            { key: 'Tipe', value: 'Turbo Super Thin' },
            { key: 'Pemotongan', value: 'Kering (Dry)' },
            { key: 'Ketebalan', value: '1.2mm' },
          ],
          features: [
            { text: 'Super Tipis & Cepat' },
            { text: 'Gesekan Minimal' },
          ],
          packagingDetails: [
            { size: '4 Inch / 105 mm', innerBox: '10 Pcs / Box', outerBox: '200 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-diamond-005',
          name: 'Diamond Wheel - Dry Cutting',
          image: '/Images/yozuri/diamond-dry.png',
          description: 'Mata gerinda potong tipe segmented untuk pemotongan kering material bangunan secara umum. Memberikan durabilitas dan performa yang andal.',
          specifications: [
            { key: 'Tipe', value: 'Segmented' },
            { key: 'Pemotongan', value: 'Kering (Dry)' },
            { key: 'Aplikasi', value: 'Beton, Batu Bata' },
          ],
          features: [
            { text: 'Tahan Lama' },
            { text: 'Performa Andal' },
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
            { text: 'Ujung Mata TCT Kuat' },
            { text: 'Untuk Potong Kayu' },
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
            { text: 'Pembersihan Agresif' },
            { text: 'Kawat Kepang Anti Rontok' },
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
            { text: 'Aplikasi Halus' },
            { text: 'Tahan Lama' },
          ],
          packagingDetails: [
            { size: '1"', innerBox: '12/pack', outerBox: '240/ctn' },
            { size: '2"', innerBox: '12/pack', outerBox: '120/ctn' },
            { size: '3"', innerBox: '6/pack', outerBox: '60/ctn' },
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
            { text: 'Hasil Akhir Superior' },
            { text: 'Cakupan Cepat' },
          ],
          packagingDetails: [
            { size: '9 Inch', innerBox: '6/pack', outerBox: '60/ctn' },
          ],
        },
        {
          id: 'yoz-paint-003',
          name: 'Bulu Kuas Roll - Polos dan Garis',
          image: '/Images/yozuri/bulu-kuas-roll.png',
          description: 'Refill bulu kuas roll tersedia dalam dua varian: polos untuk permukaan halus dan garis untuk permukaan kasar atau bertekstur.',
          specifications: [
            { key: 'Varian', value: 'Polos & Garis' },
            { key: 'Ukuran', value: '9 Inch' },
          ],
          features: [
            { text: 'Pilihan Sesuai Permukaan' },
            { text: 'Mudah Diganti' },
          ],
          packagingDetails: [
            { size: 'Polos 9"', innerBox: '12/pack', outerBox: '120/ctn' },
            { size: 'Garis 9"', innerBox: '12/pack', outerBox: '120/ctn' },
          ],
        },
        {
          id: 'yoz-paint-004',
          name: 'Bak Cat - PVC',
          image: '/Images/yozuri/bak-cat-pvc.png',
          description: 'Bak cat praktis berbahan PVC tahan lama, dilengkapi dengan area bertekstur untuk meratakan cat pada kuas roll dan kuas biasa.',
          specifications: [
            { key: 'Material', value: 'PVC' },
            { key: 'Fitur', value: 'Tekstur Perataan' },
          ],
          features: [
            { text: 'Tahan Lama' },
            { text: 'Mudah Dibersihkan' },
          ],
          packagingDetails: [
            { size: 'Standar', innerBox: '1/pack', outerBox: '20/ctn' },
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
            { text: 'Performa Pengeboran Cepat' },
            { text: 'Ujung Carbide Premium' },
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
            { text: 'Serbaguna' },
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
            { text: 'Pengeboran Presisi' },
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
            { text: 'Untuk Rotary Hammer' },
            { text: 'Transfer Tenaga Maksimal' },
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
            { text: 'Performa Tinggi' },
            { text: 'Lapisan Anti Panas' },
          ],
          packagingDetails: [
            { size: '3mm', innerBox: '10/pack', outerBox: '1000/ctn' },
            { size: '4mm', innerBox: '10/pack', outerBox: '1000/ctn' },
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
            { text: 'Untuk Stainless Steel' },
            { text: 'Sangat Tahan Panas' },
          ],
          packagingDetails: [
            { size: '3mm', innerBox: '10/pack', outerBox: '1000/ctn' },
            { size: '4mm', innerBox: '10/pack', outerBox: '1000/ctn' },
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
            { text: 'Lapisan Titanium' },
            { text: 'Mengurangi Gesekan' },
          ],
          packagingDetails: [
            { size: '3mm', innerBox: '10/pack', outerBox: '1000/ctn' },
            { size: '4mm', innerBox: '10/pack', outerBox: '1000/ctn' },
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
            { text: 'Ukuran Universal' },
            { text: 'Baja S2 Kuat' },
          ],
          packagingDetails: [
            { size: 'PH2 x 65mm', innerBox: '10/pack', outerBox: '500/ctn' },
          ],
          variations: [{ id: 'yoz-drill-009', name: 'Mata Obeng Super - PH2', image: '/Images/yozuri/Yo-Zuri - Mata Obeng - Super Merah.png' },
          { id: 'yoz-drill-010', name: 'Mata Obeng Tornado - PH2', image: '/Images/yozuri/Yo-Zuri - Mata Obeng - Tornado Gypsum.png' }]
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
            { text: 'Magnet Super Kuat' },
            { text: 'Anti-Slipping' },
          ],
          packagingDetails: [
            { size: 'PH2 x 65mm', innerBox: '10/pack', outerBox: '500/ctn' },
          ],
          variations: [{ id: 'yoz-drill-008', name: 'Mata Obeng - PH2', image: '/Images/yozuri/Yo-Zuri - Mata Obeng - Biru.png' },
          { id: 'yoz-drill-010', name: 'Mata Obeng Tornado - PH2', image: '/Images/yozuri/Yo-Zuri - Mata Obeng - Tornado Gypsum.png' }]
        },
        {
          id: 'yoz-drill-010',
          name: 'Mata Obeng Tornado - PH2',
          image: '/Images/yozuri/Yo-Zuri - Mata Obeng - Tornado Gypsum.png',
          description: 'Mata obeng PH2 dengan desain ulir "Tornado" untuk cengkeraman sekrup yang lebih baik dan torsi yang lebih tinggi.',
          specifications: [
            { key: 'Tipe', value: 'PH2' },
            { key: 'Desain', value: 'Tornado' },
          ],
          features: [
            { text: 'Desain Ulir Tornado' },
            { text: 'Torsi Tinggi' },
          ],
          packagingDetails: [
            { size: 'PH2 x 65mm', innerBox: '10/pack', outerBox: '500/ctn' },
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
            { text: 'Untuk Baut Baja Ringan' },
            { text: 'Magnet Kuat' },
          ],
          packagingDetails: [
            { size: '8mm', innerBox: '10/pack', outerBox: '500/ctn' },
            { size: '10mm', innerBox: '10/pack', outerBox: '500/ctn' },
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
            { text: 'Untuk Baut Baja Ringan' },
            { text: 'Magnet Kuat' },
          ],
          packagingDetails: [
            { size: '8mm', innerBox: '10/pack', outerBox: '500/ctn' },
            { size: '10mm', innerBox: '10/pack', outerBox: '500/ctn' },
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
            { text: 'Ujung Tajam & Cepat Masuk' },
            { text: 'Anti Karat' },
          ],
          packagingDetails: [
            { size: '6 x 1"', innerBox: '1/box (isi 1000)', outerBox: '20/ctn' },
            { size: '6 x 1.5"', innerBox: '1/box (isi 500)', outerBox: '20/ctn' },
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
            { text: 'Ujung Presisi' },
            { text: 'Gagang Fiber Anti-Slip' },
          ],
          packagingDetails: [
            { size: '6 Inch', innerBox: '12/box', outerBox: '120/ctn' },
            { size: '7 Inch', innerBox: '12/box', outerBox: '120/ctn' },
            { size: '8 Inch', innerBox: '12/box', outerBox: '120/ctn' },
          ],
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
            { text: 'Untuk Menghaluskan Plester' },
            { text: 'Gagang Fiber Nyaman' },
          ],
          packagingDetails: [
            { size: '6 Inch', innerBox: '12/box', outerBox: '120/ctn' },
            { size: '7 Inch', innerBox: '12/box', outerBox: '120/ctn' },
            { size: '8 Inch', innerBox: '12/box', outerBox: '120/ctn' },
          ],
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
            { text: 'Bilah Fleksibel' },
            { text: 'Tidak Menggores' },
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
            { text: 'Permukaan Rata Sempurna' },
            { text: 'Gagang Ergonomis' },
          ],
          packagingDetails: [
            { size: '280 x 110 mm', innerBox: '12 Pcs / Box', outerBox: '60 Pcs / Ctn' },
          ],
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
            { text: 'Super Tebal & Kuat' },
            { text: 'Ringan & Tahan Lama' },
          ],
          packagingDetails: [
            { size: '280 x 110 mm', innerBox: '12 Pcs / Box', outerBox: '60 Pcs / Ctn' },
          ],
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
            { text: 'Desain Modern' },
            { text: 'Finishing Halus' },
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
            { text: 'Ketebalan Premium' },
            { text: 'Untuk Beban Berat' },
          ],
          packagingDetails: [
            { size: '3M', innerBox: '10/pack', outerBox: '50/ctn' },
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
            { text: 'Daya Hancur Maksimal' },
            { text: 'Material Heavy Duty' },
          ],
          packagingDetails: [
            { size: '1"', innerBox: '6/box', outerBox: '48/ctn' },
          ],
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
            { text: 'Daya Hancur Maksimal' },
            { text: 'Material Heavy Duty' },
          ],
          packagingDetails: [
            { size: '1"', innerBox: '6/box', outerBox: '48/ctn' },
          ],
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
            { text: 'Kedap Air & Fleksibel' },
            { text: 'Untuk Caulking Gun' },
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
            { text: 'Ukuran Besar' },
            { text: 'Bening & Tidak Berbau' },
          ],
          packagingDetails: [
            { size: '600ml', innerBox: '1/box', outerBox: '12/ctn' },
          ],
        },
        {
          id: 'yoz-layer-011',
          name: 'Kabel Ties - Hitam & Putih',
          image: '/Images/yozuri/kabel-ties.png',
          description: 'Kabel ties Yo-Zuri dengan material nilon premium, memiliki daya kunci yang sangat kuat dan tidak mudah getas.',
          specifications: [
            { key: 'Material', value: 'Nilon Premium' },
            { key: 'Warna', value: 'Hitam & Putih' },
          ],
          features: [
            { text: 'Material Premium' },
            { text: 'Pengunci Kuat' },
          ],
          packagingDetails: [
            { type: 'Bening | 35gr', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
            { type: 'Bening | 85gr', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
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
            { text: 'Manuver Mudah' },
            { text: 'Rangka Kokoh' },
          ],
          packagingDetails: [
            { type: 'Ban Hidup', innerBox: '-', outerBox: '10 Sets' },
          ],
        },
        {
          id: 'yoz-layer-013',
          name: 'Lakban Bening - Adhesive Tapes',
          image: '/Images/yozuri/Yo-Zuri - Lakban Bening A.png',
          description: 'Lakban perekat Yo-Zuri dengan daya rekat superior, tidak mudah sobek, dan ideal untuk semua kebutuhan pengepakan.',
          specifications: [
            { key: 'Warna', value: 'Coklat / Bening' },
            { key: 'Lebar', value: '2 inch (48mm)' },
          ],
          features: [
            { text: 'Daya Rekat Superior' },
            { text: 'Tidak Mudah Sobek' },
          ],
          packagingDetails: [
            { size: '2 Inch x 40 Yard', innerBox: '6 Pcs / Ctn', outerBox: '72 Pcs / Ctn' },
            { size: '2 Inch x 85 Yard', innerBox: '6 Pcs / Ctn', outerBox: '72 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-layer-013',
          name: 'Lakban Coklat - Adhesive Tapes',
          image: '/Images/yozuri/Yo-Zuri - Lakban Coklat A.png',
          description: 'Lakban perekat Yo-Zuri dengan daya rekat superior, tidak mudah sobek, dan ideal untuk semua kebutuhan pengepakan.',
          specifications: [
            { key: 'Warna', value: 'Coklat / Bening' },
            { key: 'Lebar', value: '2 inch (48mm)' },
          ],
          features: [
            { text: 'Daya Rekat Superior' },
            { text: 'Tidak Mudah Sobek' },
          ],
          packagingDetails: [
            { size: '2 Inch x 85 Yard', innerBox: '6 Pcs / Ctn', outerBox: '72 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-layer-013',
          name: 'Lakban Hitam - Adhesive Tapes',
          image: '/Images/yozuri/Yo-Zuri - Lakban Hitam A.png',
          description: 'Lakban perekat Yo-Zuri dengan daya rekat superior, tidak mudah sobek, dan ideal untuk semua kebutuhan pengepakan.',
          specifications: [
            { key: 'Warna', value: 'Coklat / Bening' },
            { key: 'Lebar', value: '2 inch (48mm)' },
          ],
          features: [
            { text: 'Daya Rekat Superior' },
            { text: 'Tidak Mudah Sobek' },
          ],
          packagingDetails: [
            { size: '2 Inch x 4 mm', innerBox: '-', outerBox: '72 Pcs / Ctn' },
          ],
        },
      ],
    },
    {
      id: 'door-lock-equipments',
      name: 'Door Lock Equipments | Peralatan Kunci Pintu',
      image: '/Images/doorlock yozuri.png',
      products: [],
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
            { text: 'Mata Asah 3 Sisi' },
            { text: 'Potongan Cepat & Bersih' },
            { text: 'Gagang Karet Ergonomis' },
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
            { text: 'Menjangkau Area Sulit' },
            { text: 'Ideal untuk Drywall & Kayu' },
            { text: 'Kontrol Penuh' },
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
            { text: 'Desain Klasik & Kokoh' },
            { text: 'Penguncian Manual Andal' },
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
            { text: 'Fitur Autostop Praktis' },
            { text: 'Grip Karet Anti Slip' },
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
            { text: 'Desain Premium' },
            { text: 'Tahan Benturan' },
          ],
          packagingDetails: [
            { size: '3 Meter', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
            { size: '5 Meter', innerBox: '12 Pcs / Box', outerBox: '120 Pcs / Ctn' },
            { size: '7,5 Meter', innerBox: '6 Pcs / Box', outerBox: '60 Pcs / Ctn' },
            { size: '10 Meter', innerBox: '6 Pcs / Box', outerBox: '60 Pcs / Ctn' },
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
            { text: 'Pita Fiberglass Anti Melar' },
            { text: 'Aman untuk Area Listrik' },
          ],
          packagingDetails: [
            { size: '50 Meter', innerBox: '1/box', outerBox: '20/ctn' },
            { size: '100 Meter', innerBox: '1/box', outerBox: '10/ctn' },
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
            { text: '100% Anti Karat' },
            { text: 'Kekuatan Superior' },
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
            { text: 'Akurasi Vertikal Tinggi' },
            { text: 'Desain Seimbang' },
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
            { text: 'Ukuran Ringkas' },
            { text: 'Dasar Magnetik Kuat' },
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
            { text: 'Rangka Aluminium Tebal' },
            { text: 'Akurasi Terjamin' },
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
          id: 'yoz-sanitary-001',
          name: 'Seal Tape - 100% P.T.F.E.',
          image: '/Images/yozuri/Yo-Zuri - Seal Tape - PTFE A.png', // Ganti dengan path gambar Anda
          description: 'Seal tape premium dari 100% P.T.F.E murni, menjamin sambungan drat bebas bocor. Elastis, kuat, dan mudah diaplikasikan.',
          specifications: [
            { key: 'Material', value: '100% P.T.F.E' },
            { key: 'Kepadatan', value: 'Tinggi' },
          ],
          features: [
            { text: 'Kualitas P.T.F.E Murni' },
            { text: 'Anti Bocor' },
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
            { text: 'Ukuran Jumbo' },
            { text: 'Tahan Cuaca & UV' },
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
            { text: 'Desain Modern' },
            { text: 'Bahan PVC Tebal' },
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
            { text: 'Desain Transparan Estetik' },
            { text: 'Anti Korosi' },
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
            { text: 'Full Stainless Steel' },
            { text: 'Desain Elegan' },
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
            { text: 'Tidak Mudah Macet' },
            { text: 'Tahan Tekanan' },
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
            { text: 'Sambungan Lepas-Pasang' },
            { text: 'Instalasi Praktis' },
          ],
          packagingDetails: [
            { size: '1/2 Inch', innerBox: '24 Pcs / Box', outerBox: '240 Pcs / Ctn' },
            { size: '3/4 Inch', innerBox: '24 Pcs / Box', outerBox: '240 Pcs / Ctn' },
          ],
        },
        {
          id: 'yoz-sanitary-008',
          name: 'Saringan Kamar Mandi - Floor Drainer',
          image: '/Images/yozuri/Yo-Zuri - Saringan Kamar Mandi - Hitam+Packaging A.png',
          description: 'Saringan pembuangan lantai (floor drainer) dari stainless steel. Mencegah rambut dan kotoran masuk ke saluran pipa, serta anti-bau.',
          specifications: [
            { key: 'Material', value: 'Stainless Steel' },
            { key: 'Ukuran', value: '4 Inch' },
          ],
          features: [
            { text: 'Anti-Bau & Anti-Serangga' },
            { text: 'Material Stainless Steel' },
          ],
          packagingDetails: [
            { type: 'Oceanic', innerBox: '-', outerBox: '30 Pcs / Ctn' },
            { type: 'Atlantic', innerBox: '-', outerBox: '30 Pcs / Ctn' },
            { type: 'Hindia', innerBox: '-', outerBox: '30 Pcs / Ctn' },
            { type: 'Pacific', innerBox: '-', outerBox: '30 Pcs / Ctn' },
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
          { text: 'Rangka Aluminium Tebal' },
          { text: 'Akurasi Terjamin' },
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