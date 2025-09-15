// Komponen Footer
export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>Produk</h4>
            <ul>
              <li><a href="#">Power Tools</a></li>
              <li><a href="#">Hand Tools</a></li>
              <li><a href="#">Aksesoris</a></li>
              <li><a href="#">Produk Baru</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Dukungan</h4>
            <ul>
              <li><a href="#">Hubungi Kami</a></li>
              <li><a href="#">Lokasi Service Center</a></li>
              <li><a href="#">Garansi</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Perusahaan</h4>
            <ul>
              <li><a href="#">Tentang PT. STS</a></li>
              <li><a href="#">Karir</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>PT. Samudra Teknik Sejahtera</h4>
            <p>Jl. Industri Utama No. 123, Jakarta, Indonesia.</p>
            <p>Email: info@samudrateknik.co.id</p>
            <p>Telp: (021) 1234-5678</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 PT. Samudra Teknik Sejahtera. Semua Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
