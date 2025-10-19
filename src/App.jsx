import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import logoImage from './assets/LOGO 1.svg'
import { HiMenuAlt3, HiShoppingCart } from 'react-icons/hi'
import { MdHeadphones } from 'react-icons/md'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import ProductPage from './pages/ProductPage'
import Cart from './pages/Cart'
import Footer from './pages/Footer'

// Navigation Component
function Navigation({ isMobileMenuOpen, setIsMobileMenuOpen, isLoginModalOpen, setIsLoginModalOpen }) {
  const location = useLocation()
  const navigate = useNavigate()
  
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
            <button 
              className="login-text cursor-pointer hover:text-orange-500 transition-colors duration-200"
              onClick={() => setIsLoginModalOpen(true)}
            >
              Login
            </button>
            <Link to="/" className="logo-mobile">
              <img src={logoImage} alt="logo" />
            </Link>
          </div>

          {/* Center - Logo */}
          <div className="header-center">
            <Link to="/" className="logo">
              <img src={logoImage} alt="logo" />
            </Link>
          </div>

          {/* Right Side - Shopping Cart and Mobile Menu Button */}
          <div className="header-right">
            <button className="cart-button" onClick={() => navigate('/cart')}>
              <HiShoppingCart className="cart-icon" />
            </button>
            
            <button 
              className="mobile-menu-btn"
              onClick={() => {
                
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Toggle mobile menu"
            >
              <HiMenuAlt3 className="hamburger-icon" />
            </button>
          </div>
        </div>
      </header>

      {/* Green line for mobile view */}
      <div className='green-line-mobile'>
        <div className='green-line-content'></div>
      </div>

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
                <button 
                  className="mobile-login-btn"
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 !p-4" onClick={() => setIsLoginModalOpen(false)}>
          <div className="bg-white rounded-2xl !p-8 max-w-md w-full text-center shadow-2xl transform animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            {/* Login Icon */}
            <div className="!mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center !mb-6">
              <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            
            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 !mb-6">Welcome Back!</h2>
            
            {/* Login Form */}
            <form className="space-y-4">
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 !mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full !px-4 !py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 !mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full !px-4 !py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 !mb-5"
                  placeholder="Enter your password"
                />
              </div>
              
              <div className="flex items-center justify-between text-sm !mb-5">
                <label className="flex items-center">
                  <input type="checkbox" className="!mr-2" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors duration-200">
                  Forgot password?
                </a>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-orange-500 text-white !py-3 rounded-xl font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Sign In
              </button>
            </form>
            
            {/* Divider */}
            <div className="flex items-center !my-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">or</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            
            {/* Sign Up Link */}
            <p className="text-gray-600">
              Don't have an account? 
              <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors duration-200 font-semibold !ml-1">
                Sign up here
              </a>
            </p>
            
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              onClick={() => setIsLoginModalOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <Router>
      <div className="app">
        <Navigation 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isLoginModalOpen={isLoginModalOpen}
          setIsLoginModalOpen={setIsLoginModalOpen}
        />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        
        <Footer />
             </div>
    </Router>
  )
}


export default App
