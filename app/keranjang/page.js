// app/keranjang/page.js
"use client";

import { useCart } from '../context/CartContext';

export default function CartPage() {
  // Tidak perlu import Header dan Footer lagi
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    // Tidak perlu <Header /> dan <Footer /> lagi di sini
    <div className="container">
      <h1 className="page-title">Keranjang Belanja Anda</h1>
      {cart.length === 0 ? (
        <p>Keranjang Anda masih kosong.</p>
      ) : (
        <div className="cart-container">
          {/* ... (sisa kode cart-items dan cart-summary tidak berubah) ... */}
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Harga: {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <div className="item-total">
                  <p>Subtotal:</p>
                  <strong>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price * item.quantity)}</strong>
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">Hapus</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Ringkasana</h2>
            <p>Total Harga: <strong>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(totalPrice)}</strong></p>
            <button className="btn checkout-btn">Lanjut ke Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}