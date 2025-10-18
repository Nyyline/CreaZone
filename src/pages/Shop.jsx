import { useState } from 'react'
import { HiMenu, HiSearch } from 'react-icons/hi'
import '../styles/Shop.css'

function Shop() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Sample products data based on the design
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

  const categories = ['All', 'Planners', 'Journals', 'Printables', 'Calendars', 'Templates', 'Notebooks', 'Workbooks', 'Banners', 'Stickers', 'Art', 'E-books']

  const addToCart = () => {
    // Add to cart functionality
    console.log('Added to cart')
  }

  return (
    <main className="shop-main">
      {/* Header Section */}
      <header className="shop-header">
        {/* Search Section */}
        <div className="search-section">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button">
              <HiSearch size={20} />
              Search
            </button>
          </div>
        </div>
        
        {/* Filters Section */}
        <div className="filters-section">
          <button className="menu-button">
            <HiMenu size={24} />
          </button>
          
          <div className="category-filters">
            {categories.map(category => (
              <button 
                key={category}
                className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <section className="products-section">
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-price-overlay">{product.price}</div>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
              </div>
              <button className="buy-now-button" onClick={addToCart}>
                  Buy Now
                </button>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <div className="pagination">
        <button className="pagination-button">
          ← Previous
        </button>
        <div className="pagination-numbers">
          <span className="page-number active">1</span>
          <span className="page-number">2</span>
          <span className="page-number">3</span>
          <span className="page-dots">...</span>
          <span className="page-number">8</span>
          <span className="page-number">9</span>
          <span className="page-number">10</span>
        </div>
        <button className="pagination-button">
          Next →
        </button>
      </div>
    </main>
  )
}

export default Shop
