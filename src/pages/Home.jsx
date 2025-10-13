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
              <div className='flex align-center justify-center flex-wrap gap-1.5'>
                <span className='baloo-text'>A </span>
                <span className='pacifico-text '> Creative </span>
                <span className='baloo-text'> Playground</span>
              </div>
              
              <div className='hero-line gap-1.5'>
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

              {/* Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Card 1 */}
          <div className="relative rounded-[26px] bg-[#F15A29] text-white p-6 
                          shadow-[0_18px_0_rgba(0,0,0,0.25),0_14px_28px_rgba(0,0,0,0.15)]
                          border-2 border-black/40">
            {/* <Star className="text-white -top-2 -left-2 rotate-[-12deg]" />
            <Star className="text-white -bottom-2 -right-1 rotate-[18deg]" /> */}
            <h3 className="pacifico-text font-extrabold text-[22px] mb-1 ">Safe &amp; Secure</h3>
            <p className="text-[14px] leading-snug opacity-95">
              Smooth checkout and instant digital downloads.
            </p>
            {/* faint emblem */}
            <div className="absolute right-4 bottom-3 opacity-20 pointer-events-none">
              <div className="w-16 h-16 rounded-xl bg-white/20" />
            </div>
          </div>

          {/* Card 2 (yellow) */}
          <div className="relative rounded-[26px] p-6 
                          bg-gradient-to-b from-[#FFD166] to-[#FFC54D] text-[#2C2C2C]
                          shadow-[0_18px_0_rgba(0,0,0,0.25),0_14px_28px_rgba(0,0,0,0.15)]
                          border-2 border-black/40">
            {/* <Star className="text-white -top-2 -right-2 rotate-[12deg]" /> */}
            <h3 className="font-['Pacifico'] text-black text-[22px] mb-1 ">Built for Everyone</h3>
            <p className="text-[14px] leading-tight font-semibold">
              From students and freelancers to busy professionals, Creazone makes
              planning, organizing, and creating easier with digital products designed
              to fit every lifestyle.
            </p>
            <div className="absolute right-4 bottom-3 opacity-20 pointer-events-none">
              <div className="w-16 h-16 rounded-xl bg-black/10" />
            </div>
          </div>

          {/* Card 3 (white) */}
          <div className="relative rounded-[26px] bg-white text-[#2C2C2C] p-6 
                          shadow-[0_18px_0_rgba(0,0,0,0.2),0_12px_24px_rgba(0,0,0,0.12)]
                          border-2 border-black/30">
            {/* <Star className="text-[#ff6533] -top-2 -right-2 rotate-[18deg]" />
            <Star className="text-[#ff6533] -bottom-2 -left-2 rotate-[-18deg]" /> */}
            <h3 className="pacifico-text-bl font-extrabold text-black text-[22px] mb-1">Creative Variety</h3>
            <p className="text-[14px] leading-snug">
              Planners, templates, e-books, and more — all in one place.
            </p>
            <div className="absolute right-4 bottom-3 opacity-20 pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-[#2C2C2C]/10" />
            </div>
          </div>

          {/* Card 4 (coral) */}
          <div className="relative rounded-[26px] bg-[#ff6a4f] text-white p-6 
                          shadow-[0_18px_0_rgba(0,0,0,0.25),0_14px_28px_rgba(0,0,0,0.15)]
                          border-2 border-black/40">
            {/* <Star className="text-white -top-2 -left-1 rotate-[10deg]" />
            <Star className="text-white -bottom-2 -right-2 rotate-[-8deg]" /> */}
            <h3 className="font-extrabold text-[22px] mb-1 pacifico-text">
              Affordable &amp; Accessible
            </h3>
            <p className="text-[14px] leading-snug">
              High-quality digital products without breaking the bank.
            </p>
            <div className="absolute right-4 bottom-3 opacity-20 pointer-events-none">
              <div className="w-16 h-16 rounded-xl bg-white/20" />
            </div>
          </div>
        </div>
              
              {/* <div className="features-grid">
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
              </div> */}
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
