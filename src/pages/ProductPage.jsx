import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { HiShoppingCart } from 'react-icons/hi'
import '../styles/ProductP.css'

const ProductPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedDesign, setSelectedDesign] = useState('Pink')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  // Sample products data with additional details
  const products = [
    {
      id: 1,
      name: "Essential Digital Product Creation Planner",
      price: "P179",
      rating: 4.5,
      images: [
        "https://via.placeholder.com/400x500/FFB6C1/333333?text=Digital+Product+Planner",
        "https://via.placeholder.com/400x500/FFB6C1/333333?text=Planner+Pages",
        "https://via.placeholder.com/400x500/FFB6C1/333333?text=Planner+Design"
      ],
      description: "A cozy-themed digital journal for reflections, goal setting, and mindful planning.",
      category: "Planners",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 2,
      name: "Fall Into Planning Digital Journal",
      price: "P149",
      rating: 4.2,
      images: [
        "https://via.placeholder.com/400x500/FFB6C1/333333?text=Fall+Journal",
        "https://via.placeholder.com/400x500/FFB6C1/333333?text=Journal+Pages"
      ],
      description: "A cozy-themed digital journal perfect for autumn planning.",
      category: "Journals",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 3,
      name: "Minimalist Monthly Agenda Printables",
      price: "P129",
      rating: 4.8,
      images: [
        "https://via.placeholder.com/400x500/F0F0F0/333333?text=Monthly+Agenda",
        "https://via.placeholder.com/400x500/F0F0F0/333333?text=Agenda+Pages"
      ],
      description: "Clean, simple monthly templates for organized planning.",
      category: "Printables",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 4,
      name: "Minimalist Monthly Agenda Printables",
      price: "P129",
      rating: 4.8,
      images: [
        "https://via.placeholder.com/400x500/F0F0F0/333333?text=Monthly+Agenda",
        "https://via.placeholder.com/400x500/F0F0F0/333333?text=Agenda+Pages"
      ],
      description: "Clean, simple monthly templates for organized planning.",
      category: "Printables",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 5,
      name: "2024 Aesthetic Calendar Pack",
      price: "P139",
      rating: 4.6,
      images: [
        "https://via.placeholder.com/400x500/FFB6C1/333333?text=2024+Calendar",
        "https://via.placeholder.com/400x500/FFB6C1/333333?text=Calendar+Pages"
      ],
      description: "Printable digital calendar with beautiful aesthetic design.",
      category: "Calendars",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 6,
      name: "Content Creator's Social Media Kit",
      price: "P199",
      rating: 4.7,
      images: [
        "https://via.placeholder.com/400x500/E6E6FA/333333?text=Social+Media+Kit",
        "https://via.placeholder.com/400x500/E6E6FA/333333?text=Kit+Contents"
      ],
      description: "Templates and checklists designed for content creators.",
      category: "Templates",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 7,
      name: "Diario Girls Digital Notebook",
      price: "P149",
      rating: 4.3,
      images: [
        "https://via.placeholder.com/400x500/FFB6C1/333333?text=Diario+Girls",
        "https://via.placeholder.com/400x500/FFB6C1/333333?text=Notebook+Pages"
      ],
      description: "A fun and trendy digital notebook for girls.",
      category: "Notebooks",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 8,
      name: "Diario Girls Digital Notebook",
      price: "P149",
      rating: 4.3,
      images: [
        "https://via.placeholder.com/400x500/FFB6C1/333333?text=Diario+Girls",
        "https://via.placeholder.com/400x500/FFB6C1/333333?text=Notebook+Pages"
      ],
      description: "A fun and trendy digital notebook for girls.",
      category: "Notebooks",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 9,
      name: "Dreamy Pastel Stream Banner",
      price: "P350",
      rating: 4.9,
      images: [
        "https://via.placeholder.com/400x500/E6E6FA/333333?text=Stream+Banner",
        "https://via.placeholder.com/400x500/E6E6FA/333333?text=Banner+Design"
      ],
      description: "Cute pastel-themed planner to enhance your streams.",
      category: "Banners",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 10,
      name: "Business Brand Strategy Workbook",
      price: "P189",
      rating: 4.4,
      images: [
        "https://via.placeholder.com/400x500/8B5CF6/FFFFFF?text=Business+Workbook",
        "https://via.placeholder.com/400x500/8B5CF6/FFFFFF?text=Workbook+Pages"
      ],
      description: "Professional digital guide to help build your brand strategy.",
      category: "Workbooks",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 11,
      name: "Instagram Stories Template Pack",
      price: "P129",
      rating: 4.5,
      images: [
        "https://via.placeholder.com/400x500/FFB6C1/333333?text=Instagram+Templates",
        "https://via.placeholder.com/400x500/FFB6C1/333333?text=Template+Designs"
      ],
      description: "Editable story templates for fresh and engaging content.",
      category: "Templates",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 12,
      name: "Instagram Stories Template Pack",
      price: "P129",
      rating: 4.5,
      images: [
        "https://via.placeholder.com/400x500/FFB6C1/333333?text=Instagram+Templates",
        "https://via.placeholder.com/400x500/FFB6C1/333333?text=Template+Designs"
      ],
      description: "Editable story templates for fresh and engaging content.",
      category: "Templates",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    }
  ]

  // Find the product by ID
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <main className="product-page-main">
        <div className="product-not-found">
          <h2>Product not found</h2>
          <button onClick={() => navigate('/shop')}>Back to Shop</button>
        </div>
      </main>
    )
  }

  const handleBuyNow = () => {
    console.log('Buy now:', product.name, 'Design:', selectedDesign, 'Quantity:', quantity)
  }

  const handleAddToCart = () => {
    console.log('Added to cart:', product.name, 'Design:', selectedDesign, 'Quantity:', quantity)
  }

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>)
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>)
    }
    
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>)
    }
    
    return stars
  }

  return (
    <main className="product-page-main">
        <section className="product-page-section">
        <button className="back-to-shop-button w-full bg-transparent text-gray-600 border-2 border-gray-300 py-3 px-6 rounded-full text-lg font-medium hover:border-orange-500 hover:text-orange-500 transition-all duration-300 mb-4" onClick={() => navigate('/shop')}>
              Back to Shop
            </button>
        <div className="product-container">
          {/* Left Section - Product Images */}
          <div className="product-images-section">
            <div className="main-image-container">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="main-product-image" 
              />
            </div>
            <div className="thumbnail-images">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className={`thumbnail-image ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="product-details-section">
            <h1 className="product-title-prod text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            
            <div className="price-rating-container flex items-center gap-8 mb-3 justify-between">
              <div className="product-price text-4xl font-bold text-gray-800">{product.price}</div>
              <div className="product-rating flex items-center gap-3">
                <span className="rating-number text-lg font-semibold text-gray-700">{product.rating}/5</span>
                <div className="stars flex gap-1">
                  {renderStars(product.rating)}
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">{product.description}</p>

            {/* Design Selection */}
            <div className="design-selection my-6">
              <label className="design-label block text-lg font-semibold text-gray-800 mb-3">Choose Design</label>
              <div className="design-options flex gap-3 flex-wrap">
                {product.designs.map((design) => (
                  <button
                    key={design}
                    className={`design-option px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                      selectedDesign === design 
                        ? 'bg-orange-500 text-white border-2 border-orange-500' 
                        : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:border-orange-400 hover:bg-orange-50'
                    }`}
                    onClick={() => setSelectedDesign(design)}
                  >
                    {design}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="quantity-selector flex items-center gap-4 my-6">
              <button 
                className="quantity-btn minus w-10 h-10 bg-[#FF6F3C] text-white rounded-full flex items-center justify-center font-bold text-xl hover:bg-green-600 transition-all duration-200 hover:scale-110 active:scale-95"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className="quantity-display w-12 h-10 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center text-lg font-semibold text-gray-800">{quantity}</span>
              <button 
                className="quantity-btn plus w-10 h-10 bg-[#FF6F3C] text-white rounded-full flex items-center justify-center font-bold text-xl hover:bg-green-600 transition-all duration-200 hover:scale-110 active:scale-95"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <div className='flex flex-row gap-4 mb-4'>
              <button className="flex-1 bg-[#FF6F3C] text-white py-6 px-12 rounded-full text-2xl font-bold uppercase tracking-wide hover:bg-orange-600 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300" onClick={handleBuyNow}>
                Buy Now!
              </button>
              
              <button className="w-16 h-16 bg-[#1ABC9C] text-white rounded-full hover:bg-green-700 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center" onClick={handleAddToCart}>
                <HiShoppingCart size={28} />
              </button>
            </div>
            

            
          </div>
        </div>
        </section>
    </main>
  )
}

export default ProductPage
