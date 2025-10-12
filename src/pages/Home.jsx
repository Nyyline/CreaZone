import { HiShoppingCart } from 'react-icons/hi'
import { MdHeadphones } from 'react-icons/md'
import { FaDiamond } from 'react-icons/fa6'
import things from '../assets/home/things.svg'
import Group29 from '../assets/home/Group 29.svg'
import creazone from '../assets/LOGO 1.svg'
import features from '../assets/home/Features.svg'

function Home() {
  return (
    <main id='background'>
      
      
      <section className="main-content">
        <div className='hero-container'>
          <div className='hero-text-section'>
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
          </div>

          <div className='product-showcase'>
             <img src={things} alt="Product Showcase" className="mobile-showcase" />
             <img src={Group29} alt="Product Showcase" className="desktop-showcase" />
          </div>
        </div>

        
      </section>

    
      <div className='yellow-line'>
        <p>| Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books </p>
      </div>

      
      

      <section className="main-content2">
        <div className="flex w-full h-250 ">
          {/* Left Column - Why CreaZone */}
          <div className="flex-1 flex items-center justify-center p-8 lg:p-16 bottom-40 ">
            <div className="why-creazone-content">
              <div className="why-title">
                <span className="why-text">Why</span>
                <img src={creazone} alt="CreaZone" className=" w-65" />
                <span className="question-mark">?</span>
              </div>
              
              <div className="why-description">
                <p>
                  At CreaZone, we believe creativity should be accessible, secure, and fun. That's why we've built a marketplace designed for students, freelancers, and hobbyists who want to discover unique digital products without breaking the bank. Whether you're buying or selling, we make sure the experience is smooth, safe, and inspiring.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-16">
            <div className="features-container">
              <div>
                <img src={features} alt="Features" className="w-65" />
              </div>
              
              <div className="features-grid">
                <div className="feature-card safe-secure">
                  <div className="star-icon">✦</div>
                  <h3>Safe & Secure</h3>
                  <p>Smooth checkout and instant digital downloads.</p>
                  <div className="card-icon folder-icon">📁</div>
                </div>
                
                <div className="feature-card built-everyone">
                  <div className="star-icon">✦</div>
                  <h3>Built for Everyone</h3>
                  <p>From students and freelancers to busy professionals, Creazone makes planning, organizing, and creating easier with digital products designed to fit every lifestyle.</p>
                  <div className="card-icon people-icon">👥</div>
                </div>
                
                <div className="feature-card creative-variety">
                  <div className="star-icon">✦</div>
                  <h3>Creative Variety</h3>
                  <p>Planners, templates, e-books, and more — all in one place.</p>
                  <div className="card-icon palette-icon">🎨</div>
                </div>
                
                <div className="feature-card affordable-accessible">
                  <div className="star-icon">✦</div>
                  <h3>Affordable & Accessible</h3>
                  <p>High-quality digital products without breaking the bank.</p>
                  <div className="card-icon piggy-icon">🐷</div>
                </div>
              </div>
            </div>
          </div>
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
  )
}

export default Home
