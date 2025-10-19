import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { HiShoppingCart, HiFilter, HiChevronDown, HiDotsVertical, HiCheck } from 'react-icons/hi'
import '../styles/ProductP.css'
import '../styles/Shop.css'
import product1Image from '../assets/PRODUCTS/product 1.webp'
import product2Image from '../assets/PRODUCTS/Fall-Digital-Planner.jpg'
import product3Image from '../assets/PRODUCTS/medium_17_4c7a359734.png'
import product4Image from '../assets/PRODUCTS/UDPP-Mockup-2-1.webp'

const ProductPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedDesign, setSelectedDesign] = useState('Pink')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState('reviews')

  // Sample products data with additional details
  const products = [
    {
      id: 1,
      name: "Essential Digital Product Planner",
      price: "P179",
      rating: 4.5,
      images: [
        product1Image
        
      ],
      description: "Plan, organize, and launch your digital products with this comprehensive planner.",
      category: "Planners",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 2,
      name: "Fall Into Planning Digital Journal",
      price: "P149",
      rating: 4.2,
      images: [
        product2Image
        
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
        product3Image,
        
      ],
      description: "Clean, simple monthly templates for organized planning.",
      category: "Printables",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 4,
      name: "Digital Art Sticker Pack",
      price: "P89",
      rating: 4.3,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Vf2sgEq2OE0N1qAGCr8TIUZDv34G6NPErA&s",
        "https://m.media-amazon.com/images/I/61shpbQMQIL._AC_SL1080_.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcltspHpuUinfrYd6b4e0CZNY5PFWx3SgITA&s"
      ],
      description: "Cute digital stickers for planners, journals, and social media.",
      category: "Stickers",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 5,
      name: "2024 Aesthetic Calendar Pack",
      price: "P139",
      rating: 4.6,
      images: [
        product4Image,
        
      ],
      description: "Printable digital calendar with beautiful aesthetic design.",
      category: "Calendars",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 6,
      name: "Digital Product Mockup Templates",
      price: "P199",
      rating: 4.7,
      images: [
        "https://www.thecreativesdesk.com/wp-content/uploads/digital-mockup-pinterest-canva-templates.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUYTDqqCkcQseHjQDJCgJxaqGw-A2-Z9SD0Q&s"
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKB4_hgJN8orPeD3ZeJQrCGp2xim8ivXJV_g&s"
      ],
      description: "A fun and trendy digital notebook for girls.",
      category: "Notebooks",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 8,
      name: "Digital Watercolor Brush Set",
      price: "P199",
      rating: 4.9,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDuDY89LLj_RNWQlmi8Ajse4dnUdmBCP_ENg&s",
        "https://public-files.gumroad.com/0q41ifvweo328djs1ddj3gnxsb4y"
      ],
      description: "Professional watercolor brushes for digital art and design.",
      category: "Art",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 9,
      name: "Dreamy Pastel Stream Banner",
      price: "P350",
      rating: 4.9,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbtUqjuziDO87OGVwZ6eVSSSULk0AcNC1fA&s",
        "https://storage.ko-fi.com/cdn/useruploads/post/80691746-84ab-41da-9d1d-aa1f7cb0b472_freetwitchcloudthemedstreamprofiletemplate.jpg"
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUzqbB4nRJu5C0e0akeCdS5pTV4QeKu2yhw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUzqbB4nRJu5C0e0akeCdS5pTV4QeKu2yhw&s"
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSon4PcwpUz0tT_FMVM1MBV6h6YS6z0OwzT1A&s",
        "https://planable.io/wp-content/webp-express/webp-images/uploads/2024/05/interactive-Instagram-story-templates.png.webp",
        
      ],
      description: "Editable story templates for fresh and engaging content.",
      category: "Templates",
      designs: ['Blue', 'Red', 'Pink', 'Yellow']
    },
    {
      id: 12,
      name: "Digital Typography Font Bundle",
      price: "P150",
      rating: 4.7,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROv5wwbLufJJ6Ajm4vtoJ5j1EWZ-HCpksEQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1v2BFywUrtcFVP6qldSTja5diay638LVow&s"
      ],
      description: "Premium collection of modern fonts for digital design projects.",
      category: "Art",
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
    navigate('/cart')
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

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "Samantha D.",
      rating: 5,
      text: "The Essential Planner has been a lifesaver for me. It breaks down everything step by step, making it easy to stay organized and focused on my projects. I've never felt more in control of my schedule!",
      date: "August 14, 2023",
      verified: true
    },
    {
      id: 2,
      name: "Alex M.",
      rating: 5,
      text: "This planner exceeded my expectations. The layouts are clean and professional, and I love how it balances creativity with productivity. It's now my go-to tool for planning digital products.",
      date: "August 15, 2023",
      verified: true
    },
    {
      id: 3,
      name: "Ethan R.",
      rating: 5,
      text: "This planner is perfect for freelancers like me. It helps me structure my ideas, track deadlines, and keep all my projects in one place. I can see the designer's care in every detail.",
      date: "August 16, 2023",
      verified: true
    },
    {
      id: 4,
      name: "Olivia P.",
      rating: 5,
      text: "I'm a visual person, so I appreciate how well-designed the pages are. The Essential Planner doesn't just help me stay on track—it actually makes planning enjoyable. A must-have for creatives!",
      date: "August 17, 2023",
      verified: true
    },
    {
      id: 5,
      name: "Liam K.",
      rating: 5,
      text: "The Essential Digital Product Creation Planner makes a huge difference in how I organize my work. It's practical, beautifully designed, and easy to follow. I recommend it to anyone juggling multiple projects.",
      date: "August 18, 2023",
      verified: true
    },
    {
      id: 6,
      name: "Ava H.",
      rating: 5,
      text: "I've used other planners before, but this one stands out. It combines structure with creativity, which keeps me motivated. I especially love the sections for goal setting and tracking progress.",
      date: "August 19, 2023",
      verified: true
    }
  ]

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
                  className={`thumbnail-image ${selectedImage === index ? 'active' : ''} hover:scale-105 transition-transform duration-200 cursor-pointer`}
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


            {/* Design Selection */}
            <div className="design-selection my-6">
              <label className="design-label block text-lg font-semibold text-gray-800 mb-5">Choose Design</label>
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

            {/* Add to Cart Button */}
            <div className='flex flex-row gap-4 mb-4'>
              <button className="flex-1 bg-[#FF6F3C] text-white py-6 px-12 rounded-full text-2xl font-bold uppercase tracking-wide hover:bg-orange-600 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 focus:ring-4 focus:ring-orange-300" onClick={handleBuyNow}>
                Buy Now!
              </button>
              
              <button className="w-16 h-16 bg-[#1ABC9C] text-white rounded-full hover:bg-green-700 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center focus:ring-4 focus:ring-green-300" onClick={handleAddToCart}>
                <HiShoppingCart size={28} />
              </button>
            </div>
            

            
          </div>
        </div>

        {/* Rating & Reviews Section */}
        <section className="reviews-section mt-16">
          {/* Navigation Tabs */}
          <div className="tabs-container mb-8">
            <div className="flex border-b border-gray-300">
              <button 
                className={`tab-button px-6 py-3 text-lg font-medium transition-all duration-200 hover:bg-gray-50 ${activeTab === 'details' ? 'active' : ''}`}
                onClick={() => setActiveTab('details')}
              >
                Product Details
              </button>
              <button 
                className={`tab-button px-6 py-3 text-lg font-medium transition-all duration-200 hover:bg-gray-50 ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Rating & Reviews
              </button>
            </div>
          </div>

          {/* Reviews Content */}
          {activeTab === 'reviews' && (
            <div className="reviews-content">
              {/* Header */}
              <div className="reviews-header">
                <div>
                  <h2>All Reviews<span className="review-count">(451)</span></h2>
                  
                </div>
                <div className="header-controls">
                  <button className="filter-button hover:bg-gray-100 transition-colors duration-200">
                    <HiFilter size={16} />
                    <span>Filter</span>
                  </button>
                  <div className="sort-dropdown hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                    <span>Latest</span>
                    <HiChevronDown size={14} />
                  </div>
                  <button className="write-review-button hover:bg-orange-600 transition-colors duration-200">
                    Write a Review
                  </button>
                </div>
              </div>

              {/* Reviews Grid */}
              <div className="reviews-grid">
                {reviews.map((review) => (
                  <div key={review.id} className="review-card hover:shadow-lg transition-shadow duration-200">
                    <button className="options-button hover:bg-gray-100 transition-colors duration-200">
                      <HiDotsVertical size={16} />
                    </button>
                    
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    
                    <div className="reviewer-info">
                      <span className="reviewer-name">{review.name}</span>
                      {review.verified && (
                        <div className="verified-badge">
                          <HiCheck size={10} />
                        </div>
                      )}
                    </div>
                    
                    <p className="review-text">{review.text}</p>
                    
                    <div className="review-date">
                      Posted on {review.date}
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center">
                <button className="load-more-button hover:bg-gray-100 hover:text-gray-800 transition-all duration-200 transform hover:-translate-y-1">
                  Load More Reviews
                </button>
              </div>
            </div>
          )}

          {/* Product Details Tab */}
          {activeTab === 'details' && (
            <div className="product-details-content">
              <h3>Product Details</h3>
              
              <div className="detail-section">
                <h4>Description</h4>
                <p>{product.description}</p>
              </div>
              
              <div className="detail-section">
                <h4>Features</h4>
                <div className="features-grid">
                  <div className="feature-item">Comprehensive project planning templates</div>
                  <div className="feature-item">Goal setting and tracking worksheets</div>
                  <div className="feature-item">Progress monitoring sheets</div>
                  <div className="feature-item">Digital product launch checklist</div>
                  <div className="feature-item">Market research templates</div>
                  <div className="feature-item">Content planning calendars</div>
                </div>
              </div>
              
              <div className="detail-section">
                <h4>What's Included</h4>
                <div className="included-items">
                  <div className="included-item">35+ printable pages</div>
                  <div className="included-item">PDF format for easy use</div>
                  <div className="included-item">Compatible with all devices</div>
                  <div className="included-item">Instant download after purchase</div>
                  <div className="included-item">Lifetime access to updates</div>
                </div>
              </div>
              
              <div className="detail-section">
                <h4>Perfect For</h4>
                <div className="perfect-for-section">
                  <p>Digital product creators, entrepreneurs, freelancers, content creators, and anyone looking to organize and launch their digital products successfully.</p>
                </div>
              </div>
            </div>
          )}

        </section>
      
        {/* You Might Also Like Section */}
        <section className="you-might-also-like-section mt-16">
          <div className="section-container">
            <h2 className="section-title">You might also like</h2>
            <div className="related-products-grid">

            {products.slice(0, 4).map(product => (
            <div key={product.id} className="product-card hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="product-image">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                <div className="product-price-overlay">{product.price}</div>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
              </div>
              <button className="buy-now-button hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-200" >
                  Buy Now
                </button>
            </div>
          ))}


            </div>
          </div>
        </section>
        </section>
    </main>
  )
}

export default ProductPage
