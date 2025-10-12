import { useState } from 'react'
import logoImage from './assets/LOGO 1.svg'
import { HiMenuAlt3, HiShoppingCart } from 'react-icons/hi'
import { MdHeadphones } from 'react-icons/md'
import { FaDiamond } from 'react-icons/fa6'
import things from './assets/home/things.svg'
import './App.css'
import yellow from './assets/yellow line.svg'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="app">
     

      {/* Main Header */}
      <header className="main-header">
        <div className="header-content">
          {/* Left Side - Logo */}
          <div className="header-left">
            <div className="logo">
              <img src={logoImage} alt="logo" />
            </div>
          </div>

          {/* Right Side - Mobile Menu Button */}
          <div className="header-right">
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
          <a href="#home" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#shop" className="nav-link">Shop</a>
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
              <a href="#home" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </a>
              <a href="#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </a>
              <a href="#shop" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Shop
              </a>
              <div className="mobile-login-section">
                <button className="mobile-login-btn">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main id='background'>
      <div className="bar"/>
      <section className="main-content">
        <div className='flex flex-col items-center justify-center text-white  '>
          <div className='hero-text-container'>
            <div className='flex align-center justify-center flex-wrap'>
              <span className='baloo-text'>A </span>
              <span className='pacifico-text'>Creative </span>
              <span className='baloo-text'>Playground</span>
            </div>
            
            <div className='hero-line'>
              <span className='baloo-text'>for Digital </span>
              <span className='pacifico-text'> Products</span>
      </div>

            <div className='flex flex-col items-center justify-center text-white'>
             <p className='subtitle-text'>
               Discover, buy, and sell hand-crafted assets,<br />
               made by creators for creators
             </p>
             
             <div className='button-container'>
               <button className='cta-button explore-btn'>
                 Explore Products
               </button>
               <button className='cta-button sell-btn'>
                 Start Selling
        </button>
             </div>
           </div>
          </div>

            <div className='product-showcase'>
             <img src={things} alt="Product Showcase" />
            </div>
        </div>
      </section>

      <div className='yellow-line'>
        <p>| Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books </p>
      </div>
      

      <section className="main-content2">
        <div className="bg-amber-500">
          {/* <img src={mask} alt="main-content" className='' /> */}
        </div>
      </section>

      <section className="main-content3">
        <div className="bg-amber-500">
          {/* <img src={mask} alt="main-content" className='' /> */}
        </div>
      </section>

      <section className="main-content4">
        <div className="bg-amber-500">
          {/* <img src={mask} alt="main-content" className='' /> */}
        </div>
      </section>


      </main>
      
      </div>
  )
}


export default App
