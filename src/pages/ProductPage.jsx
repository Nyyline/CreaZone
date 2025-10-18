import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../styles/ProductP.css'

const ProductPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Sample products data (same as in Shop.jsx - in a real app, this would be fetched from an API)
  const products = [
    {
      id: 1,
      name: "Essential Digital Product Planner",
      price: "P179",
      image: "https://via.placeholder.com/300x200/FFFFFF/333333?text=Digital+Product+Planner",
      description: "Plan, organize, and launch your digital products with this comprehensive planner.",
      category: "Planners"
    },
    {
      id: 2,
      name: "Fall Into Planning Digital Journal",
      price: "P149",
      image: "https://via.placeholder.com/300x200/FFB6C1/333333?text=Fall+Journal",
      description: "A cozy-themed digital journal perfect for autumn planning.",
      category: "Journals"
    },
    {
      id: 3,
      name: "Minimalist Monthly Agenda Printables",
      price: "P129",
      image: "https://via.placeholder.com/300x200/F0F0F0/333333?text=Monthly+Agenda",
      description: "Clean, simple monthly templates for organized planning.",
      category: "Printables"
    },
    {
      id: 4,
      name: "Minimalist Monthly Agenda Printables",
      price: "P129",
      image: "https://via.placeholder.com/300x200/F0F0F0/333333?text=Monthly+Agenda",
      description: "Clean, simple monthly templates for organized planning.",
      category: "Printables"
    },
    {
      id: 5,
      name: "2024 Aesthetic Calendar Pack",
      price: "P139",
      image: "https://via.placeholder.com/300x200/FFB6C1/333333?text=2024+Calendar",
      description: "Printable digital calendar with beautiful aesthetic design.",
      category: "Calendars"
    },
    {
      id: 6,
      name: "Content Creator's Social Media Kit",
      price: "P199",
      image: "https://via.placeholder.com/300x200/E6E6FA/333333?text=Social+Media+Kit",
      description: "Templates and checklists designed for content creators.",
      category: "Templates"
    },
    {
      id: 7,
      name: "Diario Girls Digital Notebook",
      price: "P149",
      image: "https://via.placeholder.com/300x200/FFB6C1/333333?text=Diario+Girls",
      description: "A fun and trendy digital notebook for girls.",
      category: "Notebooks"
    },
    {
      id: 8,
      name: "Diario Girls Digital Notebook",
      price: "P149",
      image: "https://via.placeholder.com/300x200/FFB6C1/333333?text=Diario+Girls",
      description: "A fun and trendy digital notebook for girls.",
      category: "Notebooks"
    },
    {
      id: 9,
      name: "Dreamy Pastel Stream Banner",
      price: "P350",
      image: "https://via.placeholder.com/300x200/E6E6FA/333333?text=Stream+Banner",
      description: "Cute pastel-themed planner to enhance your streams.",
      category: "Banners"
    },
    {
      id: 10,
      name: "Business Brand Strategy Workbook",
      price: "P189",
      image: "https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=Business+Workbook",
      description: "Professional digital guide to help build your brand strategy.",
      category: "Workbooks"
    },
    {
      id: 11,
      name: "Instagram Stories Template Pack",
      price: "P129",
      image: "https://via.placeholder.com/300x200/FFB6C1/333333?text=Instagram+Templates",
      description: "Editable story templates for fresh and engaging content.",
      category: "Templates"
    },
    {
      id: 12,
      name: "Instagram Stories Template Pack",
      price: "P129",
      image: "https://via.placeholder.com/300x200/FFB6C1/333333?text=Instagram+Templates",
      description: "Editable story templates for fresh and engaging content.",
      category: "Templates"
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

  const handleAddToCart = () => {
    // Add to cart functionality
    console.log('Added to cart:', product.name)
  }

  return (
    <main className="product-page-main">
      <section className="product-page-section">
        <div className="product-container">
          <div className="product-image-container">
            <img src={product.image} alt={product.name} className="product-main-image" />
          </div>
          <div className="product-details">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-category">{product.category}</p>
            <p className="product-description">{product.description}</p>
            <div className="product-price">{product.price}</div>
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="back-to-shop-button" onClick={() => navigate('/shop')}>
              Back to Shop
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductPage
