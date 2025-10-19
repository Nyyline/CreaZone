import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiTrash, HiMinus, HiPlus } from 'react-icons/hi'
import '../styles/Cart.css'
import product1Image from '../assets/PRODUCTS/product 1.webp'
const Cart = () => {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Essential Digital Product Creation Planner",
      price: 179,
      color: "Pink",
      quantity: 1,
      image: product1Image
    },
    {
      id: 2,
      name: "Diario Girls Digital Notebook",
      price: 149,
      color: "Pink",
      quantity: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKB4_hgJN8orPeD3ZeJQrCGp2xim8ivXJV_g&s"
    },
    {
      id: 3,
      name: "Instagram Stories Template Pack",
      price: 129,
      pieces: "5 pcs",
      quantity: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSon4PcwpUz0tT_FMVM1MBV6h6YS6z0OwzT1A&s"
    }
  ])

  const [promoCode, setPromoCode] = useState('')

  const updateQuantity = (id, change) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const commissionFee = Math.round(subtotal * 0.05)
  const total = subtotal + commissionFee

  return (
    <main className="cart-main">
      <section className="cart-section">
        <div className="cart-container">
          <div className="cart-layout">
            {/* Left Side - Your Cart */}
            <div className="cart-items-section">
              <h1 className="cart-title">Your cart</h1>
              <div className="cart-items-container">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-attribute">
                        {item.color ? `Color: ${item.color}` : `Pieces: ${item.pieces}`}
                      </p>
                      <div className="item-price">P{item.price}</div>
                    </div>
                    <div className="item-controls">
                      <button 
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}
                      >
                        <HiTrash size={16} />
                      </button>
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <HiMinus size={12} />
                        </button>
                        <span className="quantity-display">{item.quantity}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <HiPlus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Order Summary */}
            <div className="order-summary-section">
              <h2 className="summary-title">Order Summary</h2>
              <div className="summary-card">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>P{subtotal}</span>
                </div>
                <div className="summary-row">
                  <span>Commission Fee (5%)</span>
                  <span>P{commissionFee}</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total-row">
                  <span>Total</span>
                  <span className="total-amount">P{total.toFixed(2)}</span>
                </div>
                
                <div className="promo-section">
                  <div className="promo-input-container">
                    <div className="promo-icon">💎</div>
                    <input 
                      type="text" 
                      placeholder="Add promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="promo-input"
                    />
                    <button className="apply-btn">Apply</button>
                  </div>
                </div>
                
                <button className="checkout-btn">
                  Go to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cart
