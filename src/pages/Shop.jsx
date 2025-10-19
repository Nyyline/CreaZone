import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiMenu, HiSearch } from 'react-icons/hi'
import '../styles/Shop.css'
import product1Image from '../assets/PRODUCTS/product 1.webp'
import product2Image from '../assets/PRODUCTS/Fall-Digital-Planner.jpg'
import product3Image from '../assets/PRODUCTS/images.jfif'
import product4Image from '../assets/PRODUCTS/medium_17_4c7a359734.png'
// import product5Image from '../assets/PRODUCTS/product 5.webp'


function Shop() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const navigate = useNavigate()

  // Sample products data based on the design
  const products = [
    {
      id: 1,
      name: "Essential Digital Product Planner",
      price: "P179",
      image: product1Image,
      description: "Plan, organize, and launch your digital products with this comprehensive planner.",
      category: "Planners"
    },
    {
      id: 2,
      name: "Fall Into Planning Digital Journal",
      price: "P149",
      image: product2Image,
      description: "A cozy-themed digital journal perfect for autumn planning.",
      category: "Journals"
    },
    {
      id: 3,
      name: "Minimalist Monthly Agenda Printables",
      price: "P129",
      image: product3Image,
      description: "Clean, simple monthly templates for organized planning.",
      category: "Printables"
    },
    {
      id: 4,
      name: "Digital Art Sticker Pack",
      price: "P89",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Vf2sgEq2OE0N1qAGCr8TIUZDv34G6NPErA&s",
      description: "Cute digital stickers for planners, journals, and social media.",
      category: "Stickers"
    },
    {
      id: 5,
      name: "2024 Aesthetic Calendar Pack",
      price: "P139",
      image: product4Image,
      description: "Printable digital calendar with beautiful aesthetic design.",
      category: "Calendars"
    },
    {
      id: 6,
      name: "Digital Product Mockup Templates",
      price: "P199",
      image: "https://www.thecreativesdesk.com/wp-content/uploads/digital-mockup-pinterest-canva-templates.jpg",
      description: "Templates and checklists designed for content creators.",
      category: "Templates"
    },
    {
      id: 7,
      name: "Diario Girls Digital Notebook",
      price: "P149",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKB4_hgJN8orPeD3ZeJQrCGp2xim8ivXJV_g&s",
      description: "A fun and trendy digital notebook for girls.",
      category: "Notebooks"
    },
    {
      id: 8,
      name: "Digital Watercolor Brush Set",
      price: "P199",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDuDY89LLj_RNWQlmi8Ajse4dnUdmBCP_ENg&s",
      description: "Professional watercolor brushes for digital art and design.",
      category: "Art"
    },
    {
      id: 9,
      name: "Dreamy Pastel Stream Banner",
      price: "P350",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbtUqjuziDO87OGVwZ6eVSSSULk0AcNC1fA&s",
      description: "Cute pastel-themed planner to enhance your streams.",
      category: "Banners"
    },
    {
      id: 10,
      name: "Business Brand Strategy Workbook",
      price: "P189",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUzqbB4nRJu5C0e0akeCdS5pTV4QeKu2yhw&s",
      description: "Professional digital guide to help build your brand strategy.",
      category: "Workbooks"
    },
    {
      id: 11,
      name: "Instagram Stories Template Pack",
      price: "P129",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSon4PcwpUz0tT_FMVM1MBV6h6YS6z0OwzT1A&s",
      description: "Editable story templates for fresh and engaging content.",
      category: "Templates"
    },
    {
      id: 12,
      name: "Digital Typography Font Bundle",
      price: "P150",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROv5wwbLufJJ6Ajm4vtoJ5j1EWZ-HCpksEQ&s",
      description: "Premium collection of modern fonts for digital design projects.",
      category: "Art"
    }
  ]

  const categories = ['All', 'Planners', 'Journals', 'Printables', 'Calendars', 'Templates', 'Notebooks', 'Workbooks', 'Banners', 'Stickers', 'Art', 'E-books']

  const handleFilterSelect = (category) => {
    setSelectedCategory(category)
    setIsFilterModalOpen(false)
  }

  const addToCart = () => {
    // Add to cart functionality
    console.log('Added to cart')
  }

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`)
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
              className="search-input focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-200">
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
          
          {/* Desktop Filters */}
          <div className="desktop-filters category-filters">
            {categories.map(category => (
              <button 
                key={category}
                className={`category-filter ${selectedCategory === category ? 'active' : ''} hover:bg-teal-600 hover:text-white transition-all duration-200 transform hover:-translate-y-1`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
        </div>

          {/* Mobile Filter Button */}
          <button 
            className="mobile-filter-button hover:bg-teal-700 transform hover:-translate-y-1 transition-all duration-200"
            onClick={() => setIsFilterModalOpen(true)}
          >
            <HiMenu size={16} />
            Filter
          </button>
        </div>
      </header>

      {/* Product Grid */}
      <section className="products-section">
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300" onClick={() => handleProductClick(product.id)}>
              <div className="product-image">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <div className="product-price-overlay">{product.price}</div>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
              </div>
              <button className="buy-now-button hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-200" onClick={(e) => {
                e.stopPropagation()
                addToCart()
              }}>
                  Buy Now
                </button>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <div className="pagination">
        <button className="pagination-button hover:bg-orange-600 hover:text-white transition-all duration-200 transform hover:-translate-y-1">
          ← Previous
        </button>
        <div className="pagination-numbers">
          <span className="page-number active">1</span>
          <span className="page-number hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer">2</span>
          <span className="page-number hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer">3</span>
          <span className="page-dots">...</span>
          <span className="page-number hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer">8</span>
          <span className="page-number hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer">9</span>
          <span className="page-number hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer">10</span>
        </div>
        <button className="pagination-button hover:bg-orange-600 hover:text-white transition-all duration-200 transform hover:-translate-y-1">
          Next →
        </button>
      </div>

      {/* Filter Modal */}
      {isFilterModalOpen && (
        <div className="filter-modal-overlay" onClick={() => setIsFilterModalOpen(false)}>
          <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
            <div className="filter-modal-header">
              <h3>Filter by Category</h3>
              <button 
                className="close-modal-btn"
                onClick={() => setIsFilterModalOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="filter-modal-content">
              {categories.map(category => (
                <button
                  key={category}
                  className={`modal-filter-option ${selectedCategory === category ? 'active' : ''} hover:bg-teal-600 hover:text-white transition-all duration-200 transform hover:-translate-y-1`}
                  onClick={() => handleFilterSelect(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Shop
