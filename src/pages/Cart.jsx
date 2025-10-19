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
  const [showThankYouModal, setShowThankYouModal] = useState(false)

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

  const handleCheckout = () => {
    setShowThankYouModal(true)
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
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="item-details">
                      <h3 className="item-name font-semibold">{item.name}</h3>
                      <p className="item-attribute text-gray-600">
                        {item.color ? `Color: ${item.color}` : `Pieces: ${item.pieces}`}
                      </p>
                      <div className="item-price font-bold text-lg">P{item.price}</div>
                    </div>
                    <div className="item-controls">
                      <button 
                        className="remove-btn hover:bg-red-100 hover:scale-110 transition-all duration-200"
                        onClick={() => removeItem(item.id)}
                      >
                        <HiTrash size={16} />
                      </button>
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn hover:bg-gray-100 hover:scale-105 transition-all duration-200"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <HiMinus size={12} />
                        </button>
                        <span className="quantity-display font-medium">{item.quantity}</span>
                        <button 
                          className="quantity-btn hover:bg-gray-100 hover:scale-105 transition-all duration-200"
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
                    <div className="promo-icon text-2xl">💎</div>
                    <input 
                      type="text" 
                      placeholder="Add promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="promo-input focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                    />
                    <button className="apply-btn hover:bg-orange-600 hover:scale-105 transition-all duration-200">
                      Apply
                    </button>
                  </div>
                </div>
                
                <button 
                  className="checkout-btn hover:bg-orange-600 hover:scale-105 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Modal */}
      {showThankYouModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowThankYouModal(false)}>
          <div className="bg-white rounded-2xl !p-10 max-w-md w-full text-center shadow-2xl transform animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            
            
            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 !mb-6">Thank You for Your Purchase!</h2>
            
            {/* Message */}
            <p className="text-gray-600 !mb-8 text-base leading-relaxed">
              Your order has been processed successfully. You will receive a confirmation email shortly.
            </p>
            
            {/* Order Summary */}
            <div className="bg-gray-50 rounded-xl !p-6 !mb-8">
              <h3 className="font-semibold text-gray-700 !mb-4 text-lg">Order Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Items:</span>
                  <span className="font-semibold text-gray-800">{cartItems.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="font-bold text-orange-500 text-lg">P{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200 flex-1 sm:flex-none"
                onClick={() => setShowThankYouModal(false)}
              >
                Continue Shopping
              </button>
              <button 
                className="bg-orange-500 text-white !px-6 !py-3 rounded-xl font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-200 shadow-lg flex-1 sm:flex-none"
                onClick={() => {
                  setShowThankYouModal(false)
                  navigate('/')
                }}
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Cart
