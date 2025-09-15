// app/produk/page.js
"use client";

import { products } from '../data/products';
import Link from 'next/link';

// Komponen Sidebar tidak perlu diubah, jadi kita pisahkan agar rapi
function SidebarFilters() {
    return (
        <aside className="sidebar-filters">
            <div className="filter-group">
                <h3>Kategori</h3>
                <ul>
                    <li><label><input type="checkbox"/> Bor</label></li>
                    <li><label><input type="checkbox"/> Gerinda</label></li>
                    <li><label><input type="checkbox"/> Gergaji</label></li>
                    <li><label><input type="checkbox"/> Alat Ukur</label></li>
                </ul>
            </div>
            <div className="filter-group">
                <h3>Merek</h3>
                <ul>
                    <li><label><input type="checkbox"/> Owner</label></li>
                    <li><label><input type="checkbox"/> Yo-Zuri</label></li>
                </ul>
            </div>
        </aside>
    );
}

export default function ProdukPage() {
    return (
        <>
            {/* ELEMEN BARU: Page Header */}
            <header className="page-header-produk">
                <div className="container">
                    {/* ELEMEN BARU: Breadcrumbs */}
                    <div className="breadcrumbs">
                        <Link href="/">Home</Link> / <span>Produk</span>
                    </div>
                    <h1>Semua Produk</h1>
                </div>
            </header>

            <div className="container" style={{ marginTop: '40px' }}>
                <div className="product-listing-layout">
                    <SidebarFilters />
                    <main className="product-grid-main">
                        <p className="result-count">Menampilkan {products.length} produk</p>
                        <div className="product-grid">
                            {products.map(product => (
                                // KARTU PRODUK BARU: Seluruh kartu adalah link
                                <Link key={product.id} href={`/produk/${product.slug}`} className="product-card-v2">
                                    <div className="product-card-image-wrapper">
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <div className="product-card-info">
                                        <h3 className="product-card-name">{product.name}</h3>
                                        <p className="product-card-sku">SKU: {product.sku}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}