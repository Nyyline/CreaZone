import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import logoImage from './assets/LOGO 1.svg'
import { HiMenuAlt3, HiShoppingCart } from 'react-icons/hi'
import { MdHeadphones } from 'react-icons/md'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'

// Navigation Component
function Navigation({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <>
      {/* Main Header */}
      <header className="main-header">
        <div className="header-content">
          {/* Left Side - Login and Headphones */}
          <div className="header-left">
            <span className="login-text">Login</span>
            
          </div>

          {/* Center - Logo */}
          <div className="header-center">
            <Link to="/" className="logo">
              <img src={logoImage} alt="logo" />
            </Link>
          </div>

          {/* Right Side - Shopping Cart and Mobile Menu Button */}
          <div className="header-right">
            <HiShoppingCart className="cart-icon" />
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <HiMenuAlt3 className="hamburger-icon" />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="nav-content">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          <Link to="/shop" className={`nav-link ${isActive('/shop') ? 'active' : ''}`}>Shop</Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <h3>Menu</h3>
              <button 
                className="close-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <div className="mobile-menu-links">
              <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/shop" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Shop
              </Link>
              <div className="mobile-login-section">
                <button className="mobile-login-btn">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <Router>
      <div className="app">
        <Navigation 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
        />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
             </div>
    </Router>
  )
}


export default App
